<template>
  <div class="base3">
    <headers></headers>
    <div style="position: relative;top:-15px;left:30px;width:70px;margin-top:30px;height:30px;border-radius:5px;background:#7EFAFC;line-height:30px;text-align:center;color:#17375A;cursor:pointer;" @click="backhome">返回</div>
    <a-row :gutter="16" style="padding:0 20px 20px 20px;margin:0;">
      <a-col :span="7">
            <div class="left1" style="width:100%;height:320px;margin:0 0 20px 0;">
           <div style="width:100%;height:60px;padding:10px 0;margin:2% 0 0 5%;">
                <span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span><span style="display:inline-block;vertical-align:middle;margin-left:10px;color:#6ddae0;font-size:14px;font-weight: bold;">基础信息</span>
                <span style="display:block;color:#6ddae0;font-weight: bold;">Basic information</span>
            </div>
            <div style="width:100%;height:80%;padding:10px 20px 15px 20px;">
                   <table style="width:100%;height:100%;background-color:#102E4F">
                       <tr style="color:#fff;font-size:15px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span>地块名称：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{plot.plotName}}</td>
                       </tr>
                       <tr style="color:#fff;font-size:15px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span>地理位置：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{base.baseAddress}}</td>
                       </tr>
                       <tr style="color:#fff;font-size:15px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span>所属基地：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{base.name}}</td>
                       </tr>
                       <tr style="color:#fff;font-size:15px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span>基地类型：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{base.baseType}}</td>
                       </tr>
                       <tr style="color:#fff;font-size:15px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span>种植面积(亩)：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{plot.plotArea}}</td>
                       </tr>
                   </table>
                </div>
        </div>
         <div class="left2" style="width:100%;height:200px;">
                <div style="width:100%;height:60px;padding:10px 0;margin:2% 0 0 5%;">
                <span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span><span style="display:inline-block;vertical-align:middle;margin-left:10px;color:#6ddae0;font-size:14px;font-weight: bold;">地块相关人员信息</span>
                <span style="display:block;color:#6ddae0;font-weight: bold;">Service</span>
                </div>
               <div style="width:100%;height:70%;padding:0 20px 20px 20px;">
                   <table style="width:100%;height:100%;background-color:#102E4F">
                     <template v-for="(v,k) in people">
                       <tr :key="k" style="font-size:17px;">
                         <td style="text-align:center;width:30%;color:#FCE700;">{{v.realName}}</td>
                         <td style="text-align:left;width:70%;color:#FCE700;">农户</td>
                       </tr>
                     </template>
                   </table>
                </div>
              </div>
              <div class="left3" style="margin-top:20px;width:100%;height:268px;margin-bottom:19px;">
              <div style="width:100%;height:30px;padding:10px 0;margin:2% 0 0 5%;">
                <span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span><span style="display:inline-block;vertical-align:middle;margin-left:10px;color:#6ddae0;font-size:14px;font-weight: bold;">采收产量数据</span>
                <span style="display:block;color:#6ddae0;font-weight: bold;">Data comparison</span>
              </div>
              <div id="graphjiangyu" style=" width: 100%;height: 82%;"></div>
        </div>
           </a-col>
           <a-col :span="10">
            <div class="center1" style="width:100%;height:540px;margin:0 0 20px 0;">
              <div class="movepoint1"></div>
           <div class="map-wrapper" style="width:300px;height:40px;padding:10px 0;margin:auto;">
                 <span style="display:inline-block;vertical-align:middle;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span>
                 <span style="display:inline-block;vertical-align:middle;margin:0 10px 0 8px;color:#6ddae0;font-size:15px;font-weight: bold;">地块信息</span>
                  <span style="display:inline-block;vertical-align:middle;color:#6ddae0;font-weight: bold;">Plot related personnel information</span>
            </div>
            <div style="width:100%;height:500px;padding:10px;">
              <div id="container" style="width:100%;height:100%;"></div>
            </div>
        </div>
              <div class="center2" style="width:100%;height:280px;">
                <div class="movepoint2"></div>
                <div style="width:200px;height:60px;padding:10px 0;margin:auto;">
                <span style="display:inline-block;vertical-align:middle;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span>
                 <span style="display:inline-block;vertical-align:middle;margin:0 10px 0 8px;color:#6ddae0;font-size:15px;font-weight: bold;">地块工单</span>
                  <span style="display:inline-block;vertical-align:middle;color:#6ddae0;font-weight: bold;">Land work order</span>
              </div>
               <div id="srollbox" style="width:100%;height:77%;overflow:hidden;">
                   <table id="sroll" style="width:100%;height:100%;position:relative; top:0">
                     <template v-for="(v,k) in work">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:16px;">
                        <td style="width:33%;color:#FCE700">{{v.solarTerm?v.solarTerm.displayName:null}}</td>
                         <td style="width:33%">{{v.executionTime}}</td>
                         <td style="width:34%;color:#FCE700">{{v.farmingItem?v.farmingItem.farmingName:null}}</td>
                       </tr>
                     </template>
                   </table>
                    <table id="sroll1" style="width:100%;height:100%;position:relative; top:0">
                     <template v-for="(v,k) in work">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:16px;">
                         <td style="width:33%;color:#FCE700">{{v.solarTerm?v.solarTerm.displayName:null}}</td>
                         <td style="width:33%">{{v.executionTime}}</td>
                         <td style="width:34%;color:#FCE700">{{v.farmingItem?v.farmingItem.farmingName:null}}</td>
                       </tr>
                     </template>
                   </table>
                </div>
              </div>
             </a-col>
      <a-col :span="7">
        <div class="right1" style="width:100%;height:450px;margin-bottom:20px;">
          <div v-if="isthree&&batchpic" class="yganniu" @click="showbaogao">查看报告</div>
          <div style="width:100%;height:60px;padding:10px 25px 0 0;text-align:right;">
                 <span style="display:inline-block;vertical-align:middle;margin-right:10px;color:#6ddae0;font-size:14px;font-weight: bold;">检测数据</span><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span>
                <span style="display:block;color:#6ddae0;font-weight: bold;">Quality Comparison</span>
              </div>

              <div class="tag" style="width:100%;height:80%;padding:20px;">
                <a-tabs @change="callback" type="card">
                  <a-tab-pane tab="种苗检测" key="1">
                    <div style="width:100%;height:100%;background-color:#102E4F">
                      <div id="graph1" style=" width: 100%;height: 300px;margin-top:-18px"></div>
                    </div>  
                  </a-tab-pane>
                  <a-tab-pane tab="采收检测" key="2">
                      <div style="width:100%;height:100%;background-color:#102E4F">
                        <div id="graph2" style=" width: 100%;height: 300px;margin-top:-18px"></div>
                      </div>  
                  </a-tab-pane>
                  <a-tab-pane tab="初加工检测" key="3">
                      <div style="width:100%;height:100%;background-color:#102E4F">
                        <div id="graph3" style=" width: 100%;height: 300px;margin-top:-18px"></div>
                      </div>  
                  </a-tab-pane>
                  <a-select style="width:150px" slot="tabBarExtraContent" v-model="piciId" @change="changepici">
                    <a-select-option v-for="(v,k) in picilist" :key="k" :value="v.id">{{v.batchName}}</a-select-option>
                  </a-select>
                </a-tabs>
              </div>
        </div>
        <div class="right2" style="width:100%;height:370px;">
          <div style="width:100%;height:60px;padding:10px 25px 0 0;text-align:right;">
                <span style="display:inline-block;vertical-align:middle;margin-right:10px;color:#6ddae0;font-size:14px;font-weight: bold;">地块实景</span><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span>
                <span style="display:block;color:#6ddae0;font-weight: bold;">Pictures</span>
              </div>
              <div class="tupian" style="width:96%;height:92%;margin:2% 2% 2% 2%;">
                   <a-carousel autoplay>
                    <div v-for="(v,k) in plotpic" :key="k">
                      <img style="width:100%;height:100%" :src="v.picUrl">
                    </div>
                  </a-carousel>
                </div>
        </div>
      </a-col>
    </a-row>
    <Foot style="margin:0;"/>
    <a-modal
      title="初加工检测报告"
      v-model="visible"
      @ok="handleOk"
      :footer="null" 
    >
      <img style="width:100%;height:100%;" :src="getbaogao(batchpic)">
    </a-modal>
  </div>
</template>
<script>
import roll from '../assets/js/roll.js';
import MapLoader from '@/utils/loadMap.js'
import headers from '@/components/header/header1'
import Foot from '@/components/layouts/GlobalFooter.vue'
import axios from 'axios'
import { getLotInfoById,getDetectionData,getRecoveryData,getCropBatch,getInitDetectionPic } from '@/api/allapi'

export default {
  components: {
      headers,
      Foot
    },
  data(){
    return{
      visible:false,
      piciId:'',
      picilist:[],
      time:[],
      temperature:[],
      people:[],
      work:[],
      plot:{},
      tubiao:[],
      plotpic:[
        {picUrl:require('../assets/plot_1.jpg')},
        {picUrl:require('../assets/plot_2.jpg')},
        {picUrl:require('../assets/plot_3.jpg')},
        {picUrl:require('../assets/plot_4.jpg')},
        {picUrl:require('../assets/plot_5.jpg')},
      ],
      baseId:1,
      plotId:1,
      nowTimed:'',
      nowTimem:'',
      blockinfo:[],
      block:[],
      polygonss:[],
      map:null,
      info:[],
      base:{},
      baseName:'',
      seed:[],
      seed1:[],
      seed2:[],
      seed3:[],
      changenum:-1,
      changeint:null,
      aaa:-1,
      isthree:false,
      batchpic:'',
      tname:[
        {name:'种苗检测'},
        {name:'采收检测'},
        {name:'初加工检测'},
      ],
      a:{},
    }
  },
  created(){
    this.baseId=this.$route.query.baseId;
    this.plotId=this.$route.query.plotId;
    getCropBatch({lotId:this.plotId}).then(res=>{
      if(res.success){
        this.picilist=res.result;
        if(this.picilist.length>0){
          this.piciId=this.picilist[0].id;
          getInitDetectionPic({batchId:this.piciId}).then(res=>{
        if(res.success){
          this.batchpic=res.result;
        }
      })
          this.getjianceshuju(this.piciId,false);
        }
      }
    })
  },
  mounted(){
    
    getLotInfoById({lotId:this.plotId}).then(res=>{
      if(res.success){
        if(res.result.lotPic.length>0){
          this.plotpic=[];
          for(let i=0;i<res.result.lotPic.length;i++){
            let par={picUrl:'/api/pictureInfo/show/' + res.result.lotPic[i].pictureUrl};
            this.plotpic.push(par);
          }
          //this.plotpic=res.result;
        }
        this.blockinfo=[];
        this.blockinfo.push(res.result);
        this.plot.plotName=res.result.lotName;
        this.base.baseAddress=res.result.baseInfo.street;
        this.base.name=res.result.baseInfo.baseName;
        this.base.baseType=res.result.baseInfo.baseType?res.result.baseInfo.baseType.displayName:null;
        this.plot.plotArea=res.result.lotAcreage;
        this.people=res.result.user;
        this.work=res.result.baseInfo.cropBatchList;       
        let workrecord=[];
        for(let i=0;i<this.work.length;i++){
          for(let j=0;j<this.work[i].workOrderList.length;j++){
            this.work[i].workOrderList[j].name=this.work[i].batchName;
            this.work[i].workOrderList[j].executionTime=this.work[i].workOrderList[j].executionTime.split(' ')[0];
          }
          workrecord=workrecord.concat(this.work[i].workOrderList);
        }
        this.work=workrecord;
        this.$nextTick(() => {
          if (this.baseScroll) {
            clearInterval(this.baseScroll.timer)
          }
          let height=document.getElementById('sroll').offsetHeight;
          this.baseScroll = new roll.Roll('srollbox', 'sroll', 'sroll1', -height+5)
        })
        this.iniMap();
       }
    })
    let that=this;
    window.addEventListener('done3', function(){
      let a=[];
      a.push(that.plotId);
      that.addBlockOnMap(a);
    })
    this.week=[];
    this.jiangshui=[];
    getRecoveryData({lotId:this.plotId}).then(res=>{
      if(res.success){
        for(let i=0;i<res.result.length;i++){
          this.week.push(res.result[i].level);
          this.jiangshui.push(res.result[i].value);
        }
        this.drawLine1();
      }
    })
     
  },
  methods:{
    getbaogao(pic){
      var url='';
        if(pic){
          url='/api/pictureInfo/show/'+pic;
        }else{
          url=null;
        }
        return url
    },
    handleOk(){
      this.visible=false;
    },
    showbaogao(){
      this.visible=true;
    },
     backhome(){
       let a=Number(this.baseId);
     this.$router.push({ name: 'base',query:{baseId:a}});
    },
    getjianceshuju(value,isf){
      getDetectionData({batchId:value,typeId:1}).then(res=>{
        if(res.success){
          this.seed1={};
          this.seed1.min=[];
          this.seed1.max=[];
          this.seed1.value=[];
          this.seed1.name=[];
          for(let i=0;i<res.result.length;i++){
            this.seed1.min.push(res.result[i].min_value)
            this.seed1.max.push(res.result[i].max_value)
            this.seed1.value.push(res.result[i].value)
            this.seed1.name.push(res.result[i].item+'('+res.result[i].unit.displayName+')')
          }
          // if(isf){
          this.drawLine(this.seed1,'graph1',20,true);
          // }
        }
      })
      getDetectionData({batchId:value,typeId:2}).then(res=>{
        if(res.success){
          this.seed2={};
          this.seed2.min=[];
          this.seed2.max=[];
          this.seed2.value=[];
          this.seed2.name=[];
          for(let i=0;i<res.result.length;i++){
            this.seed2.min.push(res.result[i].min_value)
            this.seed2.max.push(res.result[i].max_value)
            this.seed2.value.push(res.result[i].value)
            this.seed2.name.push(res.result[i].item+'('+res.result[i].unit.displayName+')')
          } 
          // this.$nextTick(() => {
           if(isf){
          this.drawLine(this.seed2,'graph2',20,true);
          }
          // })
        }
      })
      getDetectionData({batchId:value,typeId:3}).then(res=>{
        if(res.success){
          this.seed3={};
          this.seed3.min=[];
          this.seed3.max=[];
          this.seed3.value=[];
          this.seed3.name=[];
          for(let i=0;i<res.result.length;i++){
            this.seed3.min.push(res.result[i].min_value)
            this.seed3.max.push(res.result[i].max_value)
            this.seed3.value.push(res.result[i].value)
            this.seed3.name.push(res.result[i].item+'('+res.result[i].unit.displayName+')')
          }
          // this.$nextTick(() => {
            if(isf){
          this.drawLine(this.seed3,'graph3',8,false);
          }
          // })
        }
      })
    },
    changepici(value){
      getInitDetectionPic({batchId:value}).then(res=>{
        if(res.success){
          this.batchpic=res.result;
        }
      })
      this.getjianceshuju(value,true);
    },
    callback(key){
      this.isthree=false;
      if(key==1){
        this.$nextTick(() => {
          this.drawLine(this.seed1,'graph1',20,true);
        })
      }
      if(key==2){
        this.isthree=false;
        this.$nextTick(() => {
          this.drawLine(this.seed2,'graph2',20,true);
        })
      }
      if(key==3){
        this.isthree=true;
        this.$nextTick(() => {
          this.drawLine(this.seed3,'graph3',8,false);
        })
      }
    },
    //画地块函数
        addBlockOnMap(value){
        if(this.block.length>0){
            for(let b=0;b<this.block.length;b++){
                this.map.remove(this.block[b]);
            }
        }
        for(let j=0; j<value.length;j++){
        let a=value[j];
        for(let i=0;i<this.blockinfo.length;i++){
        let item = this.blockinfo[i];
        if(item.id==a){
        if(item.remark!=undefined && item.remark!=null && item.remark.trim()!=""){
            let remarkJson2 = eval('(' + item.remark + ')');
            let newPath = [];
            for(let i=0;i<remarkJson2.path.length;i++){
            let point=remarkJson2.path[i];
            newPath.push(new AMap.LngLat(point.lng,point.lat));
            }
            remarkJson2.path = newPath;
            let polygon2 = new AMap.Polygon(remarkJson2);
            this.polygonss=[];
            this.polygonss.push(polygon2);
            this.block.push(polygon2);
            this.map.add(polygon2);
            this.map.setFitView([ polygon2 ]);

        }
        }
        }
            }
            let that=this;
            for(let i=0;i<this.polygonss.length;i++){
            this.polygonss[i].on("click",function(e) {that.infowindow(e);});
            }
        },
         infowindow(e){
        this.info=[];
        this.getinfo();
          this.infoWindow = new AMap.InfoWindow({
          content: this.info.join(""),
          });
            this.infoWindow.open(this.map,[e.lnglat.lng,e.lnglat.lat]);
        },
        getinfo(){
            var a=this.plot.plotName;
            var b=this.plot.plotArea;
            var c='使用中';
            var d=this.base.name;
        this.info = [];
        this.info.push("<div style=\"width:275px;margin:20px 25px;\"><table>");
        this.info.push("<tr style=\"color:#fff;line-height:30px;\"><td style=\"width:120px;\">地块名称：</td><td>"+a+"</td></tr>");
        this.info.push("<tr style=\"color:#fff;line-height:30px;\"><td style=\"width:120px;\">地块面积：</td><td>"+b+"亩</td></tr>");
        this.info.push("<tr style=\"color:#fff;line-height:30px;\"><td style=\"width:120px;\">地块状态：</td><td>"+c+"</td></tr>");
        this.info.push("<tr style=\"color:#fff;line-height:30px;\"><td style=\"width:120px;\">所属基地：</td><td>"+d+"</td></tr>");
        this.info.push("</table></div>");

    },
  drawLine(data,item,a,b){
    let that=this;
    // 基于准备好的dom，初始化echarts实例
    var myChart = that.$echarts.init(document.getElementById(item))
    window.addEventListener("resize", function() {
      myChart.resize();
    })
        // 绘制图表
        myChart.setOption({
    tooltip : {
        formatter: "{b}<br/>{a0}:{c0}<br/>{a1}:{c1}<br/>{a2}:{c2}",
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    grid: {
        top: '3%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        splitLine:{show:false},
        axisLine:{
            lineStyle:{
              color:'#fff',
            }
          },
    },
    yAxis: {
        type: 'category',
         axisLine:{
            lineStyle:{
              color:'#fff',
            }
          },
        data: data.name
    },
    series: [
        {
            name: '最小值',
            type: 'bar',
            stack: '总量',
            barWidth : a,
            itemStyle: {
            normal: {
              color:"#2588DF"
            }
            },
            label: {
              textStyle: { //数值样式
                  color: '#fff',
                  fontSize: 10
                },
                normal: {
                    show: b,
                    position: 'insideLeft'
                }
            },
            data: data.min
        },
        {
            name: '实际值',
            type: 'bar',
            stack: '总量',
            barWidth : a,
            itemStyle: {
            normal: {
              color:"#ADDF25"
            }
            },
            label: {
              textStyle: { //数值样式
                  color: '#fff',
                  fontSize: 10
                },
                normal: {
                    show: b,
                    position: 'insideLeft'
                }
            },
            data: data.value
        },
        {
            name: '最大值',
            type: 'bar',
            stack: '总量',
            barWidth : a,
            itemStyle: {
            normal: {
              color:"#DFBA25"
            }
            },
            label: {
              textStyle: { //数值样式
                  color: '#fff',
                  fontSize: 10
                },
                normal: {
                    show: b,
                    position: 'insideLeft'
                }
            },
            data: data.max
        },

    ]
        });

  },
  drawLine1(){
        let that=this;
         var myChart1 = that.$echarts.init(document.getElementById('graphjiangyu'))
        window.addEventListener("resize", function() {
	     myChart1.resize();
	})
        // 绘制图表
        myChart1.setOption({
           color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        }
    },
     grid: {
        left: '5%',
        right: '5%',
        bottom: '2%',
        top: '30%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : that.week,
             axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
            },
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            name:'单位(kg)',
             splitLine:{
              show:false
            },
             axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
            },
            type : 'value'
        }
    ],
    series : [
        {
            name:'总重',
            type:'line',
            areaStyle: {
             normal: {
            color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0,color: "rgba(126,250,252,0.5)"},
                {offset: 0.5,color: "rgba(126,250,252,0.2)"},
                {offset: 1,color: "rgba(126,250,252,0.1)"}])
             }
          },
          smooth: true,
            barWidth: '60%',
            data:that.jiangshui,
            itemStyle: {
							normal: {
                color: "#7EFAFC",
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: '#fff',
										fontSize: 10
									}
								}
							}
						},
        }
    ]
        });
  },
  iniMap(){
     let that = this
      MapLoader().then(AMap => {
        let googleLayer = new AMap.TileLayer({
              getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile'
           });//定义谷歌卫星切片图层

        let roadNetLayer = new AMap.TileLayer.RoadNet({
          opacity:0
        }); //定义一个路网图层

        that.map = new AMap.Map('container', {
          // center: that.center,
          zoom: 15,
          layers:[googleLayer,roadNetLayer], //设置图层
        });
        that.map.on("complete", function(){
          var myEvent = new CustomEvent('done3',{});
          if(window.dispatchEvent) {
            window.dispatchEvent(myEvent);
          } else {
            window.fireEvent(myEvent);
          }
        });
      })
    }

  }

}
</script>
<style>
.ant-select-selection{
  background:#1e3f65 !important;
  border: 1px solid #7efafc !important;
  color: #7efafc !important;
}
.ant-select-arrow{
  color: #7efafc !important;
}
.ant-select-dropdown-menu-item{
  color: #7efafc !important;
}
.ant-select-dropdown-menu-item-active{
  background: #00224A !important;
}
.ant-select-dropdown-menu-item-selected{
  background: #00224A !important;
}
.ant-select-dropdown-content{
  background:#1e3f65 !important;
}
</style>
<style scoped>
@media screen and (min-width: 1550px ) {
    .testname {
      width: 100px !important;
    }
    .tupian img {
      height: 280px !important
    }
}
@media screen and (max-width: 1550px) {
    .testname {
      width:65px !important;
    }
    .tupian img {
      height: 100% !important
    }
}
@media screen and (min-width: 2000px) {
  .testname {
    width: 150px !important;
  }
  .map-wrapper {
    width: 428px !important
  }
}
.base3{
  min-width: 1400px;
  background-image:url("../../src/assets/background.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.left1{
  background-image:url("../../src/assets/left3_1.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.left2{
  background-image:url("../../src/assets/left3_2.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.left3{
  background-image:url("../../src/assets/left3_3.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.center1{
  position: relative;
  background-image:url("../../src/assets/center1_1.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.movepoint1{
  position:absolute;
  width:5%;
  height:5px;
  bottom:-2px;
  background-image:url("../../src/assets/movepoint.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
  animation:mymove 10s infinite;
  -webkit-animation:mymove 10s infinite;
}      
@keyframes mymove{
    from {left:0%;}
    to {left:95%;}
}
@-webkit-keyframes mymove{
    from {left:0%;}
    to {left:95%;}
}
.center2{
  position: relative;
  background-image:url("../../src/assets/center1_2.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.movepoint2{
  position:absolute;
  width:5%;
  height:5px;
  bottom:-2px;
  background-image:url("../../src/assets/movepoint1.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
  animation:mymovee 10s infinite;
  -webkit-animation:mymovee 10s infinite;
}      
@keyframes mymovee{
    from {left:95%;}
    to {left:0%;}
}
@-webkit-keyframes mymovee{
    from {left:95%;}
    to {left:0%;}
}
.right1{
  background-image:url("../../src/assets/right4_1.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
  position: relative;
}
.right2{
  background-image:url("../../src/assets/right4_2.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.yganniu{
  position: absolute;
  width: 40%;
  height:35px;
  text-align: center;
  line-height: 35px;
  font-size:16px;
  color:#7EFAFC;
  cursor: pointer;
  background-image:url("../../src/assets/anniu.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.tag /deep/ .ant-tabs-tab{
  background-color:#1E3F65 !important;
  border: none !important;
  color:rgba(255,255,255,0.6) !important;
}
.tag /deep/ .ant-tabs-tab-active{
  background-color:#102E4F !important;
  color:rgba(255,255,255,1) !important;
}
.tag /deep/ .ant-tabs-tab:hover{
  background-color:#102E4F !important;
  color:rgba(255,255,255,1) !important;
}
#container >>> .amap-info-content {
background-color:rgba(35, 35, 35, 0.6);
 border-radius:10px 10px;
box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px;
}
#container >>> .amap-info-sharp{
border-top: 8px solid rgba(35, 35, 35, 0.6);
}
.tubiao >>> .slick-slide {
  height: 400px;
  background:rgba(150, 150, 150, 0);
  overflow: hidden;
}
.tupian >>> .slick-slide {
  height: 280px;
  background:rgba(150, 150, 150, 0.1);
  overflow: hidden;
}
</style>
