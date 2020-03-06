<template>
  <div class="my-outbox" ref="myoutbox">
    <div class="my-inbox" ref='box'>
      <div class="my-list" v-for="(item,index) in sendVal" :key='index' ref='list'>
        <div class="my-listimg">
          <img :src="item.picSrc" style="width: 100%;height: 100%"/>
        </div>
        <div style="display: flex;width: 100%;height: 65px;">
          <div style="flex: 2;display: flex;flex-direction:column;width: 122px;">
            <div style="height: 20px;color: #FF7742;font-size: 16px;padding-left: 5px;font-weight: 800">￥&nbsp;&nbsp;{{item.goodPrice}}</div>
            <div style="height: 20px;color: #002E3B;padding-left: 5px;font-weight: 800">
              <span style="position: relative; top: -3px">等级:&nbsp;&nbsp;</span>
              <span style="display: inline-block;width: 55px;height:25px;line-height:35px;overflow: hidden;text-overflow:ellipsis" :title="item.goodLevel">{{item.goodLevel}}</span>
            </div>
            <div style="height: 22px;color: #002E3B;padding-left:5px;font-weight: 800;margin-top: 3px;vertical-align: top">
              <span style="position: relative; top: -3px">产地:&nbsp;&nbsp;</span>
              <span style="display: inline-block;width: 55px;height:25px;line-height:35px;overflow: hidden;text-overflow:ellipsis" :title="item.fromSource">{{item.fromSource}}</span>
            </div>
          </div>
          <div style="flex: 1;display: flex;flex-direction:column">
            <div style="flex: 1.6;text-align: center;padding-top: 6px;">
              <a-icon type="shopping-cart" style="color:#002E3B;font-size: 28px"/>
            </div>
            <a :href="item.charOne" target="_blank" style="text-decoration:none;color: white">
              <div style="flex: 1;color: white;text-align: center;background-color: #FF7742;line-height: 25px;font-size: 11px;cursor:pointer;">
                在线购买
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'my-marquee-left',
    props:{
      sendVal:Array
    },
    data() {
      return {
        nowTime:null,//定时器标识
        disArr:[],//每一个内容的宽度
        startDis:0,
      }
    },
    mounted:function(){
      var that = this;
      var item = this.$refs.list;
      var len = this.sendVal.length;
      var arr = [];
      var margin = this.getMargin(item[0]) //因为设置的margin值一样，所以取第一个就行。
      for(var i = 0;i < len;i++){
        arr.push(item[i].clientWidth + margin)//把宽度和 margin 加起来就是每一个元素需要移动的距离
      }
      this.disArr = arr;
      this.moveLeft();
      this.$nextTick(()=>{
        this.$refs.myoutbox.onmouseenter = () => {
          clearInterval(this.nowTime);//页面关闭清除定时器
        }
        this.$refs.myoutbox.onmouseleave =() => {
          this.moveLeft(this.startDis);
        }
      })
    },
    beforeDestroy:function(){
      clearInterval(this.nowTime);//页面关闭清除定时器
      this.nowTime = null;//清除定时器标识
    },
    methods:{
      //获取margin属性
      getMargin:function(obj){
        var marg = window.getComputedStyle(obj,null)['margin-right'];
        marg = marg.replace('px','')
        return Number(marg) //强制转化成数字
      },
      //移动的方法
      moveLeft:function(startDis){
        var outbox = this.$refs.box;
        var that=this;
        var startDis = startDis?startDis:0;//初始位置
        this.nowTime = setInterval(() =>　{
          startDis -= 0.5;
          if(Math.abs(startDis) > Math.abs(that.disArr[0])){
            that.disArr.push(that.disArr.shift())//每次移动完一个元素的距离，就把这个元素的宽度
            that.sendVal.push(that.sendVal.shift())//每次移动完一个元素的距离，就把列表数据的第一项放到最后一项
            startDis = 0;
          }
          outbox.style = 'transform: translateX('+ startDis +'px)'; //每次都让盒子移动指定的距离
          this.startDis = startDis;
        },1000/60)
      },
    }
  }
</script>

<style lang="less" scoped>
  .my-outbox{
    color: #D7BC8D;
    overflow: hidden;
    height: 211px;
    .my-inbox{
      white-space: nowrap;
      .my-list{
        margin-right: 25px;
        display: inline-block;
        font-size: 13px;
        height: 35px;
        line-height: 35px;
        height: 185px;
        width: 185px;
        background-color: white;
        padding: 9px 14px 3px 13px;
        margin-top: 15px;
        .my-uname{
          color: #FF8900;
        }
        .my-listimg{
          height: 100px;
          width: 158px;
        }
      }
    }
  }
</style>
