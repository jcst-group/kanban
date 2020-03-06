<template>
  <div class="trade">
    <div class="title-wrapper">
      <h1 class="title">中国麦冬商城</h1>
      <div class="desc">Zhongguo maidong shangcheng</div>
    </div>
    <div class="content-wrapper">
      <div class="shop-trade">
        <div class="header">
          <img src="../assets/trades.png" width="25px" style="margin-right: 20px">
          <span>商城交易信息</span>
          <span class="line"></span>
          <span style="font-size: 14px">Trade Information</span>
          <span style="float:right">{{time}}</span>
        </div>
        <div class="flex-wrapper">
          <div class="table-wrapper">
            <div class="table-header">
              <span style="flex: 2">客户名称</span>
              <span>合同签订时间</span>
              <span style="flex: 2">合同编号</span>
              <span>发货时间</span>
              <span>规格</span>
              <span>销售数量(kg)</span>
              <span>销售单价(元/公斤)</span>
              <span>销售金额(元)</span>
              <!-- <span>备注</span> -->
            </div>
            <div class="swiper-wrapper">
                  <div id="scrollbox">
                    <div id="scroll" style="position:relative; top:0;">
                      <div class="table-body" v-for="item in tableData" :key="item.id">
                        <span style="flex: 2">{{item.customerName}}</span>
                        <span>{{item.contractDate}}</span>
                        <span style="flex: 2">{{item.contractCode}}</span>
                        <span>{{item.sendDate}}</span>
                        <span>{{item.specis}}</span>
                        <span>{{item.saleAmount}}</span>
                        <span>{{gettofix(item.salePrice)}}</span>
                        <span>{{gettofix(item.saleSum)}}</span>
                        <!-- <span>9</span> -->
                      </div>
                    </div>
                    <div id="scroll1" style="position:relative; top: 0;">
                      <div class="table-body" v-for="item in tableData" :key="item.id">
                        <span style="flex: 2">{{item.customerName}}</span>
                        <span>{{item.contractDate}}</span>
                        <span style="flex: 2">{{item.contractCode}}</span>
                        <span>{{item.sendDate}}</span>
                        <span>{{item.specis}}</span>
                        <span>{{item.saleAmount}}</span>
                        <span>{{gettofix(item.salePrice)}}</span>
                        <span>{{gettofix(item.saleSum)}}</span>
                        <!-- <span>9</span> -->
                      </div>
                    </div>
                  </div>
            </div>
          </div>
          <div class="total-mount">
            <div class="tonghuo">
              <div class="mount-title">麦冬交易总额(单位：万元)</div>
              <div class="mount">
                <span v-for="(item,index) in tongNum" :key="index">{{item}}</span>
              </div>
            </div>
            <div class="yansheng">
              <div class="mount-title">衍生品交易总额(单位：万元)</div>
              <div class="mount">
                <span v-for="(item,index) in yanNum" :key="index">{{item}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="anthor-content">
        <div class="medicine-trade">
          <div class="header">
            <img src="../assets/markets.png" width="40px" style="margin-right: 20px">
            <span>价格走势</span>
            <span class="line"></span>
            <span style="font-size: 14px">Price Trend</span>
          </div>
          <div class="line-chart">
            <div class="line-chartTitle main-color">
              <div class="line-titlebox">
                <div class="line-circle"></div>
                四大药市麦冬行情走势
              </div>
            </div>
            <div class="rain-line" ref="rainline"></div>
          </div>
          <div class="pie-chart">
            <div class="pie-chartTitle main-color">
              <div class="pie-titlebox">
                <div class="pie-circle" style="left: 13px;"></div>
                三台麦冬行情走势
              </div>
            </div>
            <div class="rain-line" ref="rainline01"></div>
          </div>
        </div>
        <div class="shop-video">
          <div class="shop-wrapper">
            <div class="header">
              <img src="../assets/goods.png" width="30px" style="margin-right: 20px">
              <span>商城产品</span>
              <span class="line"></span>
              <span style="font-size: 14px">Product</span>
            </div>
            <div class="goods-wrapper" id="goods-wrappers">
              <div ref="goodsMarwidth">
                <marqueeLeft :send-val='send' v-if="ismar"></marqueeLeft>
              </div>
            </div>
          </div>
          <div class="video-wrapper">
            <div class="header">
              <img src="../assets/videos.png" height="40px" style="margin-right: 20px">
              <span>生产监控</span>
              <span class="line"></span>
              <span style="font-size: 14px">Video Surveillance</span>
            </div>
            <div class="videos">
              <div class="item-wrapper">
                <div class="video-title">初加工分选区域</div>
                <video id="transportVideo" controls muted autoplay :src="gradeAddress"></video>
              </div>
              <div class="item-wrapper">
                <div class="video-title" style="padding: 35px 0">库房区域</div>
                <video id="publicVideo" controls muted autoplay :src="publicAddress"></video>
              </div>
              <div class="item-wrapper">
                <div class="video-title" style="padding: 35px 0px;">装车区域</div>
                <video id="gradeVideo" controls muted autoplay :src="transportAddress"></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-wrapper">
      Copyright © All Rights Reserved 四川代代为本农业科技有限公司 蜀ICP备15033742号
    </div>
  </div>
</template>

<script>
  import chartsType from '../assets/js/chartsType.js';
  import marqueeLeft from '../components/marquee'
  import axios from 'axios'
  import {queryGoods} from '@/api/allapi'
  import roll from '../assets/js/roll.js'

  export default {
    components: {marqueeLeft},
    data() {
      return {
        send: [],
        metalname: [],
        metalname01: [],
        metalDatas01: [],
        metalDatas02: [],
        metalDatas03: [],
        metalDatas04: [],
        metalDatas05: [],
        isechat: ['false', 'false', 'false', 'false'],
        time: '',
        transportAddress: '',
        publicAddress: '',
        gradeAddress: '',
        ismar: false,
        screenWidth: document.body.clientWidth,
        yanNum: '0',
        tongNum: '0',
        tableData: []
      }
    },
    computed: {
      optionLeft() {
        return {
          direction: 2,
          limitMoveNum: 2
        }
      }
    },
    created() {
      setInterval(() => {
        var date = new Date().toString().split(' ')
        var month = new Date().getMonth() + 1
        var str = ''
        this.time = str + date[3] + '年' + month + '月' + date[2] + '日 ' + date[4]
      }, 1000)
      axios.get('/api/market/queryOrders').then(res => {
        if (res.data.success) {
          this.tableData = res.data.result
        }
      })
      axios.get('/api/common/getMarketTokenSum').then(res => {
        if (res.data.success) {
          let num = res.data.result ? parseInt(res.data.result.constant/10000).toString() : '0'
          this.yanNum = num
        }
      })
      axios.get('/api/common/getMarketSum').then(res => {
        if (res.data.success) {
          let num = res.data.result ? parseInt(res.data.result.constant/10000).toString() : '0'
          this.tongNum = num
        }
      })
    },
    mounted() {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
      this.transportAddress = "http://hls01open.ys7.com/openlive/8cf6d7f4ce4b4e41b2860feea808c0a9.m3u8"
      this.publicAddress = 'http://hls01open.ys7.com/openlive/effa6150dfa64eb68235171d830d2d8c.m3u8'
      this.gradeAddress = 'http://hls01open.ys7.com/openlive/c5f01bb9126f4c92aab0dc9c9faf564f.m3u8'
      this.$nextTick(() => {
        let transportPlayer = new EZUIPlayer('transportVideo');
        transportVideo.addEventListener('play', () => {
          transportPlayer.on()
        })
        let publicPlayer = new EZUIPlayer('publicVideo');
        transportVideo.addEventListener('play', () => {
          publicPlayer.on()
        })
        let gradePlayer = new EZUIPlayer('gradeVideo');
        transportVideo.addEventListener('play', () => {
          gradePlayer.on()
        })
      })
      axios.get('/api/market/queryMaidong?areaId=4&breedId=1&fromType=1&specId=1&dateType=1', {}).then(res => {
        if (res.data.success) {
          for (let index in res.data.result) {
            this.metalDatas04.push(res.data.result[index].priceValue)
          }
          this.isechat.splice(0, 1, 'true')
        }
      })
      axios.get('/api/market/queryMaidong?areaId=3&breedId=1&fromType=1&specId=1&dateType=1', {}).then(res => {
        if (res.data.success) {
          for (let index in res.data.result) {
            this.metalDatas03.push(res.data.result[index].priceValue)
          }
          this.isechat.splice(1, 1, 'true')
        }
      })
      axios.get('/api/market/queryMaidong?areaId=2&breedId=1&fromType=1&specId=1&dateType=1', {}).then(res => {
        if (res.data.success) {
          for (let index in res.data.result) {
            this.metalDatas02.push(res.data.result[index].priceValue)
          }
          this.isechat.splice(2, 1, 'true')
        }
      })
      axios.get('/api/market/queryMaidong?areaId=1&breedId=1&fromType=1&specId=1&dateType=1', {}).then(res => {
        if (res.data.success) {
          for (let index in res.data.result) {
            var str = res.data.result[index].priceDate.split(' ')[0]
            this.metalname.push(str)
            this.metalDatas01.push(res.data.result[index].priceValue)
          }
          this.isechat.splice(3, 1, 'true')
        }
      })
      axios.get('/api/market/queryMaidong?areaId=5&breedId=1&fromType=2&specId=1&dateType=1', {}).then(res => {
        if (res.data.success) {
          for (let index in res.data.result) {
            var str = res.data.result[index].priceDate.split(' ')[0]
            this.metalname01.push(str)
            this.metalDatas05.push(res.data.result[index].priceValue)
            this._drawRainMap01()
          }
        }
      })

      queryGoods().then(res=>{
        if(res.success){
          this.send = res.result
          this.$refs.goodsMarwidth.style.width = document.getElementById('goods-wrappers').offsetWidth + 'px'
          this.ismar = true;
        }
      })
    },
    watch: {
      isechat: {
        handler(newValue, oldValue) {
          if (!this.isechat.some(item => item !== 'true')) {
            this._drawRainMap()
          }
        },
        deep: true
      },
      tableData(val) {
        if (val && val.length) {
          this.$nextTick(() => {
            if (this.baseScroll) {
              clearInterval(this.baseScroll.timer)
            }
            let height=document.getElementById('scroll').offsetHeight;
            this.baseScroll = new roll.Roll('scrollbox', 'scroll', 'scroll1', -height+3)
          })
        }
      },
      screenWidth(val) {
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if (!this.timer) {
          // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function () {
            // 打印screenWidth变化的值
            that.$refs.goodsMarwidth.style.width = document.getElementById('goods-wrappers').offsetWidth + 'px'
            that.timer = false
          }, 400)
        }
      }
    },
    methods: {
      _drawRainMap() {
        let rainChart = this.$echarts.init(this.$refs.rainline);
        rainChart.showLoading();
        window.addEventListener("resize", function () {
          rainChart.resize();
        })
        var option = chartsType.charts(this.metalname, this.metalDatas01, null, 'line', '安国', '#00ece6', 'x');
        option.legend = {
          textStyle: {
            color: '#fff'
          },
          y: 'bottom',
          x: 'right',
          icon: "rect"
        }
        option.series.push({
          name: '毫州',
          type: 'line',
          data: this.metalDatas02,
          symbol: 'none',
          smooth: true,
          itemStyle: {
            normal: {
              color: '#00EE76',
              lineStyle:{
                width:1//设置线条粗细
              },
              'margin-left': 20
            }
          },
        }, {
          name: '成都',
          type: 'line',
          data: this.metalDatas03,
          symbol: 'none',
          smooth: true,
          itemStyle: {
            normal: {
              color: '#7B68EE',
              lineStyle:{
                width:1//设置线条粗细
              },
              'margin-left': 20
            }
          },
        }, {
          name: '玉林',
          type: 'line',
          data: this.metalDatas04,
          symbol: 'none',
          smooth: true,
          itemStyle: {
            normal: {
              color: '#FFCD21',
              lineStyle:{
                width:1//设置线条粗细
              },
              'margin-left': 20
            }
          },
        })
        rainChart.setOption(option);
        rainChart.hideLoading();
      },
      _drawRainMap01() {
        let rainChart01 = this.$echarts.init(this.$refs.rainline01)
        rainChart01.showLoading()
        window.addEventListener("resize", function () {
          rainChart01.resize()
        })
        var option01 = chartsType.charts(this.metalname01, this.metalDatas05, null, 'line', '三台', '#00ece6', 'x')
        rainChart01.setOption(option01)
        rainChart01.hideLoading()
      },
      gettofix(str){
        return str.toFixed(2)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .trade
    background-color #04566d
    background-image url("../assets/trade.jpg")
    background-size 100% 100%
    background-repeat no-repeat
    color rgba(255, 255, 255, 0.5)
    padding-bottom 30px
    min-width 1400px
    .footer-wrapper
      color #ffffff
      text-align center
      position relative
      bottom -20px
    .main-color
      color: #00ece6
    .title
      height 80px
      line-height 92px
      font-size 45px
      letter-spacing 30px
      width 80%
      margin 0 auto
      transform translateX(15px)
      text-align center
      color #f4bc2c
      font-weight 600
    .desc
      text-align center
      letter-spacing 5px
      margin 20px 0 11px
    .content-wrapper
      width 95%
      margin 0 auto
      .header
        padding 0 20px
        height 50px
        color #fff
        font-size 18px
        background-color #012d3a
        line-height 52px
        letter-spacing 2px
        margin-bottom 9px
        .line
          display inline-block
          border-right 1px solid #fff
          height 22px
          transform translateY(5px)
          margin 0 10px
      .shop-trade
        margin-bottom 30px
        .flex-wrapper
          display flex
          height 283px
          .total-mount
            width 340px
            height 100%
            background-color #012d3a
            margin-left 9px
            display flex
            flex-direction column
            .tonghuo, .yansheng
              flex 1
              padding 15px 10px
              .mount-title
                color #F4BC2C
                font-size 18px
                letter-spacing 2px
                text-align center
                font-weight 600
              .mount
                margin-top 10px
                text-align center
                span
                  display inline-block
                  width 44px
                  margin-right 5px
                  height 55px
                  line-height 52px
                  font-size 30px
                  color #00C3C9
                  font-weight 600
                  border 2px solid #0DFDFE
          .table-wrapper
            flex 1
            height 100%
            background-color #012d3a
            overflow hidden
            padding 13px 15px;
            .swiper-wrapper
              height: 250px
              overflow hidden
            .table-header, .table-body
              display flex
              span
                flex 1
                border 1px solid #00C3C9
                color #00ECE6
                text-align center
                height 40px
                line-height 40px
                overflow hidden
                text-overflow ellipsis
            .table-body
              span
                color #ffffff
      .anthor-content
        display flex
        margin-bottom 10px
        overflow hidden
        .medicine-trade
          width 450px
          margin-right 27px
          display flex
          flex-direction column
          .line-chart, .pie-chart
            height 245px
            background-color #012d3a
          .line-chart, .pie-chart
            background-color #00202f

          .pie-chart
            padding-top 9px

          .line-chartTitle, .pie-chartTitle
            height 44px
            font-size 15px
            line-height 44px
            padding 0 20px
            text-align center
          .pie-titlebox, .line-titlebox
            position relative
            height 44px
            width 200px
            margin auto
            .line-circle, .pie-circle
              position absolute
              width 10px
              height 10px
              background-color #00ece6
              top 17.5px
              border-radius 50%
          .rain-line
            height 197px
        .shop-video
          width calc(100% - 477px)
          display flex
          flex-direction column
          .shop-wrapper, .video-wrapper
            display flex
            flex-direction column
            .videos, .goods-wrapper
              height 211px
              background-color #012d3a
            .goods-wrapper
              margin-bottom 9px

              .seamless-warp2
                overflow hidden
                height 200px
                width 680px

                ul.item
                  width 1080px

                  li
                    float: left;
                    margin-right: 10px;

            .videos
              display flex
              padding 18px 10px
              justify-content space-between
              .item-wrapper
                width 32%
                display flex
                border 1px solid #0DFDFE
                padding 10px 5px
                .video-title
                  width 30px
                  text-align center
                  border 1px solid #0DFDFE
                  font-size 16px
                  color #F4BC2C
                  padding-top 5px
                  line-height 20px
                video
                  min-width 210px
                  width 90%
                  margin-left 10px
                  object-fit fill
</style>
