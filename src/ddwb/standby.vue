<template>
    <div class="standby">
      <div class="standby-top"></div>
      <div class="content-echart">
        <div class="content-echarts">
          <div class="ech-box">
            <div class="rain-line" ref="rainline"></div>
          </div>
          <div class="ech-box">
            <div class="rain-line" ref="rainline01"></div>
          </div>
        </div>
        <div class="content-echarts">
          <div class="ech-box">
            <div class="rain-line" ref="rainline02"></div>
          </div>
          <div class="ech-box">
            <div class="rain-line" ref="rainline03"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import chartsType from '../assets/js/chartsType.js';
    export default {
        data(){
          return{
            metalname:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            metalname01:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            metalDatas:[820, 932, 901, 934, 1290, 1330, 1320],
            metalDatas01:[120, 200, 150, 180, 170, 110, 130],
            metalDatas02:[120, 200, 150, 180, 170, 110, 130],
          }
        },
       mounted() {
         this._drawRainMap();
         this._drawRainMap01();
         this._drawRainMap02();
         this._drawRainMap03();
       },
      methods:{
        _drawRainMap(){
          let rainChart = this.$echarts.init(this.$refs.rainline)
          window.addEventListener("resize", function () {
            rainChart.resize()
          })
          var option = chartsType.charts(this.metalname, this.metalDatas, null, 'staline', '三台', '#00ece6', 'x')
          rainChart.setOption(option)
        },
        _drawRainMap01(){
          let rainChart = this.$echarts.init(this.$refs.rainline01)
          window.addEventListener("resize", function () {
            rainChart.resize()
          })
          var option = chartsType.charts(this.metalname, this.metalDatas, null, 'staline', '三台', '#00ece6', 'x')
          rainChart.setOption(option)
        },
        _drawRainMap02(){
          let rainChart = this.$echarts.init(this.$refs.rainline02)
          window.addEventListener("resize", function () {
            rainChart.resize()
          })
          var option = chartsType.charts(this.metalname01, this.metalDatas01, null, 'stabar')
          option.series.push(
            {
              data: this.metalDatas02,
              type: 'bar'
            }
          )
          rainChart.setOption(option)
        },
        _drawRainMap03(){
          let rainChart = this.$echarts.init(this.$refs.rainline03)
          window.addEventListener("resize", function () {
            rainChart.resize()
          })
          var option = chartsType.charts(this.metalname01, this.metalDatas01, null, 'stabar')
          option.series.push(
            {
              data: this.metalDatas02,
              type: 'bar'
            }
          )
          rainChart.setOption(option)
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .standby
    background-color #04566d
    background-image url("../assets/trade.jpg")
    background-size 100% 100%
    background-repeat no-repeat
    color rgba(255, 255, 255, 0.5)
    padding-bottom 30px
    height 800px
    min-width 1400px
    .standby-top
      width 100%
      height 400px
    .content-echart
      width 100%
      height 400px
      .content-echarts
        height 200px
        width 100%
        .ech-box
          height 100%
          width 50%
          float left
          .rain-line
            height 200px
</style>
