<template>
    <div>
        <div ref="myChart" :style="{width: '100%', height: '390px'}"></div>
    </div>
</template>

<script>
    export default {
      props:{
        item:Object,
        dataSource: {
          type: Array,
          default() {
            return []
          }
        },
        chartType: {
          type: String,
          default: ''
        }
      },
      data(){
        return{
          myChart:null,
          chartData: [],
          xDatas: []
        }
      },
      watch: {
        dataSource(val) {
          if (this.myChart) {
            this.myChart.clear()
          }
          this.chartData = []
          this.xDatas = []
          if (this.item && this.item.xDatas) {
            this.xDatas = this.item.xDatas
          }
          val.forEach((item,index) => {
            if (item && (item.value || item.value == 0) && item.createdAt) {
              this.chartData.push(item.value)
              let str = item.createdAt.substr(5, 11)
              this.xDatas.push(str)
            } else {
              this.chartData.push(item)
              // let str
              // if (this.item.name === '小时') {
              //   str = index + this.item.name
              // } else {
              //   str = index + 1 + this.item.name
              // }
              // this.xDatas.push(str)
            }
          })
        },
        chartData(val) {
          this.drawLine()
        }
      },
      methods:{
        drawLine(){
          this.myChart = this.$echarts.init(this.$refs.myChart)
          let unit = this.chartType ? this.chartType.substr(3) : this.item.unit
          window.addEventListener("resize", () => {
            this.myChart.resize()
          })
          this.myChart.setOption({
            backgroundColor:'rgba(128, 128, 128, 0.1)',
            xAxis: {
              name: this.chartType ? this.item.name : '时间',
              type: 'category',
              data: this.xDatas,
              axisLine: {
                lineStyle: {
                  color: '#107650',
                }
              },
              nameTextStyle:{
                color:"white",
              },
              axisLabel: {
                color:"white"
              }
            },
            yAxis: {
              name: this.chartType ? this.chartType : this.item.name + this.item.unit,
              nameTextStyle:{
                color:"white",
              },
              type: 'value',
              splitLine:{
                show:false
              },
              axisLine: {
                lineStyle: {
                  color: '#107650', // 颜色
                }
              },
              axisLabel: {
                color:"white"
              }
            },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                if (!params[0].value && params[0].value != 0) {
                  // params[0].name + '<br>' + params[0].marker + params[0].seriesName + '：' + 0 + unit
                  return
                }
                var str = params[0].name + '<br>' + params[0].marker + params[0].seriesName + '：' + params[0].value + unit
                return str
              }
            },
            series: [{
              name: this.chartType ? this.chartType.substr(0, 3): this.item.name.substr(0, 2),
              data: this.chartData,
              type: 'line',
              showSymbol: false,
              itemStyle : {
                normal : {
                  color: "#124440",
                  borderColor: 'white',
                  borderWidth: 1,
                  lineStyle:{
                    color:'#AD9A21' //改变折线颜色
                  }
                }
              },
            }]
          }, true);
        }
      }
    }
</script>

<style scoped>

</style>
