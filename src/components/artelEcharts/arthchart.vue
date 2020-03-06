<template>
  <div class="hchart-wrapper">
    <div :id="itemObj.id + 1"></div>
    <div :id="itemObj.id + 2"></div>
  </div>
</template>
<script>
  import Highcharts from 'highcharts/highstock';
  import HighchartsMore from 'highcharts/highcharts-more';

  HighchartsMore(Highcharts)
  export default {
    // 验证类型
    props: {
      itemObj: {
        type: Object,
        default() {
          return {}
        }
      },
      dataSource: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        fsLevelObj: {},
        fxLevelObj: {}
      }
    },
    watch: {
      dataSource(val) {
        this.fxLevelObj = {}
        this.fsLevelObj = {}
        if (this.itemObj.id === 'null') {
          return
        }
        val.forEach(item => {
          item.grade.forEach((ele,index) => {
            let str = 'level'
            let num = index + 1
            if (this.fsLevelObj[str + num]) {
              this.fxLevelObj[str + num].push(Number(ele.wdd_fqy))
              this.fsLevelObj[str + num].push(Number(ele.wds_fqy))
            } else {
              this.fxLevelObj[str + num] = [Number(ele.wdd_fqy)]
              this.fsLevelObj[str + num] = [Number(ele.wds_fqy)]
            }
          })
        })
        var chart1 = new Highcharts.chart(this.itemObj.id + 1, {
          chart: {
            polar: true,
            type: 'column',
            backgroundColor: 'rgba(0,0,0,0)'
          },
          credits: {
            enabled:false
          },
          title: {
            text: '风速玫瑰图',
            style: {
              color: 'white',      //字体颜色
            }
          },
          xAxis: {
            tickmarkPlacement: 'on',
            tickColor:'white',
            categories: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'],
            labels:{
              style:{
                color:'white'
              }
            }
          },
          yAxis: {
            title: {
              text: '频率 (%)',
              style: { color: 'white' }
            },
            min: 0,
            reversedStacks: false,
            labels: {
              formatter: function () {
                return this.value + '%';
              }
            }
          },
          legend: {
            align: 'center', //水平方向位置
            verticalAlign: 'top', //垂直方向位置
            x: 0, //距离x轴的距离
            y: 20, //距离Y轴的距离
            itemStyle: {
              color: '#ccc'
            },
            itemHoverStyle: {
              color: '#fff'
            },
            itemDistance: 10,
            // rtl: true
          },
          pane: {
            size: '80%'
          },
          plotOptions: {
            series: {
              groupPadding: 0,
              pointPlacement: 'on',
              stacking: 'normal'
            }
          },
          series: [
            {
              name: '1级',
              data: this.fsLevelObj.level1
            },
            {
              name: '2级',
              data: this.fsLevelObj.level2
            },
            {
              name: '3级',
              data: this.fsLevelObj.level3
            },
            {
              name: '4级',
              data: this.fsLevelObj.level4
            },
          ]
        })
        var chart2 = new Highcharts.chart(this.itemObj.id + 2, {
          chart: {
            polar: true,
            type: 'column',
            backgroundColor: 'rgba(0,0,0,0)'
          },
          credits: {
            enabled:false
          },
          pane: {
            size: '80%'
          },
          title: {
            text: '风向玫瑰图',
            style: {
              color: 'white',      //字体颜色
            }
          },
          xAxis: {
            tickmarkPlacement: 'on',
            tickColor:'white',
            categories: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'],
            labels:{
              style:{
                color:'white'
              }
            }
          },
          yAxis: {
            title: {
              text: '频率 (%)',
              style: { color: 'white' }
            },
            min: 0,
            reversedStacks: false,
            labels: {
              formatter: function () {
                return this.value + '%';
              }
            }
          },
          legend: {
            align: 'center', //水平方向位置
            verticalAlign: 'top', //垂直方向位置
            x: 0, //距离x轴的距离
            y: 20, //距离Y轴的距离
            itemStyle: {
              color: '#ccc'
            },
            itemHoverStyle: {
              color: '#fff'
            },
            itemDistance: 10,
            // rtl: true
          },
          plotOptions: {
            series: {
              groupPadding: 0, pointPlacement: 'on', stacking: 'normal'
            }
          },
          series: [
            {
              name: '1级',
              data: this.fxLevelObj.level1
            },{
              name: '2级',
              data: this.fxLevelObj.level2
            },{
              name: '3级',
              data: this.fxLevelObj.level3
            },{
              name: '4级',
              data: this.fxLevelObj.level4
            },
          ]
        })
      }
    },
  }
</script>
<style lang="stylus" scoped>
  .hchart-wrapper
    display flex
    justify-content space-around
    div
      flex 1
</style>