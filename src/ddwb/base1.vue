<template>
  <div class="base2">
<headers></headers>
<div style="position: relative;top:-15px;left:30px;width:70px;margin-top:30px;height:30px;border-radius:5px;background:#7EFAFC;line-height:30px;text-align:center;color:#17375A;cursor:pointer;" @click="backhome">返回</div>
    <a-row :gutter="16" style="padding:0 20px 40px 20px;margin:0;">

  <a-col :span="6">
          <div class="left1" style="width:100%;height:270px;margin-bottom:19px;">
              <div style="width:100%;height:60px;padding:10px 0;margin:2% 0 0 5%;">
                <span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span><span style="display:inline-block;vertical-align:middle;margin-left:10px;color:#6ddae0;font-size:14px;font-weight: bold;">基础信息</span>
                <span style="display:block;color:#6ddae0;font-weight: bold;">Basic information</span>
              </div>
              <div style="width:100%;height:80%;padding:0 20px 20px 20px;">
                <table style="width:100%;height:100%;background-color:#102E4F">
                       <tr style="color:#fff;font-size:16px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span>所在地区：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{baseinformation.baseAddress}}</td>
                       </tr>
                        <tr style="color:#fff;font-size:16px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span>基地：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{baseinformation.name}}</td>
                       </tr>
                        <tr style="color:#fff;font-size:16px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span>基地范畴：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{baseinformation.baseCategory}}</td>
                       </tr>
                        <tr style="color:#fff;font-size:16px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span>基地类型：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{baseinformation.baseType}}</td>
                       </tr>
                       <tr style="color:#fff;font-size:16px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span>面积(亩)：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{baseinformation.area}}</td>
                       </tr>
                   </table>
                   </div>
        </div>
        <div class="left2" style="width:100%;height:180px;margin-bottom:19px;">
          <div style="width:100%;height:60px;padding:10px 0;margin:2% 0 0 5%;">
                <span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span><span style="display:inline-block;vertical-align:middle;margin-left:10px;color:#6ddae0;font-size:14px;font-weight: bold;">基地相关人员信息</span>
                <span style="display:block;color:#6ddae0;font-weight: bold;">Service</span>
              </div>
              <div style="width:100%;height:67%;overflow:hidden;padding:0 20px 10px 20px;">
                <table style="width:100%;height:80%;margin:5px auto;background-color:#102E4F;">
                      <template v-for="(v,k) in basemannager">
                      <tr :key="k" style="text-align:center;font-size:14px;">
                        <td style="width:28%;color:	#FCE700;">{{v.realName}}</td>
                        <td style="width:72%;color:	#FCE700;text-align:left;"><span v-for="(v1,k) in v.roleList" :key="k">{{v1.name}}<span v-if="k!=v.roleList.length-1">、</span></span></td>
                      </tr>
                  </template>
                </table>
              </div>
        </div>
        <div class="left3" style="width:100%;height:392px;position:relative;">
          <div v-if="!isshow" style="width:96%;height:300px;position:absolute;background:rgba(255,255,255,0.2);left:2%;bottom:2%;z-index:999;text-align:center;padding-top:75px;"><div style="width:100%;height:150px;background:rgba(0,0,0,1);"><span style="line-height:150px;color:#fff;">暂无监控视频</span></div></div>
          <div style="width:100%;height:60px;padding:10px 0;">
             <a-row>
              <a-col :span="12">
                <div style="margin:2% 0 0 5%;">
                  <span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span><span style="display:inline-block;vertical-align:middle;margin-left:10px;color:#6ddae0;font-size:14px;font-weight: bold;">视频监控</span>
                  <span style="display:block;color:#6ddae0;font-weight: bold;">Video Surveillance</span>
                </div>
              </a-col>
              <a-col :span="12">
                 <Cascader @on-change="selectAddress" class="select" :data="addresss" style="margin:40px 10px 0 0;"></Cascader>
              </a-col>
            </a-row>
              </div>
              <div style="width:100%;height:338px;border-radius:15px;padding:10px 15px 35px 15px;overflow: hidden;">
                <video id="myVideo"  style="width:100%;height:100%" ref="myPlayer" controls :src="address"></video>
              </div>
        </div>
      </a-col>

<a-col :span="10">
       <div class="center1" style="width:100%;height:530px;margin-bottom:20px;">
         <div class="movepoint1"></div>
         <div class='map-wrapper' style="width:170px;height:30px;padding:10px 0;margin:auto;">
                 <span style="display:inline-block;vertical-align:middle;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span>
                 <span style="display:inline-block;vertical-align:middle;margin:0 10px 0 8px;color:#6ddae0;font-size:15px;font-weight: bold;">地图数据</span>
                  <span style="display:inline-block;vertical-align:middle;color:#6ddae0;font-weight: bold;">The data map</span>
              </div>
              <div style="width:100%;height:500px;padding:15px;">
              <div id="container" style="width:100%;height:100%;position:relative">
               <div class="tip" style="position:absolute;width:40%;height:30px;z-index:99;top:5px;left:30%;color:#fff;text-align:center;line-height:30px;">
                 {{tip}}
               </div>
              </div>
              </div>
       </div>
       <div class="center2" style="width:100%;height:340px;">
         <div class="movepoint2"></div>
         <div style="width:190px;height:60px;padding:10px 0;margin:auto;">
                <span style="display:inline-block;vertical-align:middle;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span>
                 <span style="display:inline-block;vertical-align:middle;margin:0 10px 0 8px;color:#6ddae0;font-size:15px;font-weight: bold;">种植工单</span>
                  <span style="display:inline-block;vertical-align:middle;color:#6ddae0;font-weight: bold;">Planting scheme</span>
              </div>
              <div id="srollbox" style="width:100%;height:80%;overflow:hidden;">
                   <table id="sroll" style="width:100%;height:100%;position:relative; top:0">
                     <template v-for="(v,k) in workrecord">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:16px;">
                         <td style="width:20%;color:#EFDD04">{{v.solarTerm?v.solarTerm.displayName:null}}</td>
                         <td style="width:20%">{{v.executionTime}}</td>
                         <td style="width:25%;color:#EFDD04">{{v.farmingItem?v.farmingItem.farmingName:null}}</td>
                         <td style="width:35%">{{v.name}}</td>
                       </tr>
                     </template>
                   </table>
                    <table id="sroll1" style="width:100%;height:100%;position:relative; top:0">
                     <template v-for="(v,k) in workrecord">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:16px;">
                         <td style="width:20%;color:#EFDD04">{{v.solarTerm?v.solarTerm.displayName:null}}</td>
                         <td style="width:20%">{{v.executionTime}}</td>
                         <td style="width:25%;color:#EFDD04">{{v.farmingItem?v.farmingItem.farmingName:null}}</td>
                         <td style="width:35%">{{v.name}}</td>
                       </tr>
                     </template>
                   </table>
                </div>
       </div>
      </a-col>

      <a-col :span="8">
        <div class="right1" style="width:100%;height:290px;margin-bottom:10px;">
          <div style="width:100%;height:60px;padding:10px 0;">
            <a-row>
              <a-col :span="12" style="padding:0 40px 0 0;">
                 <div class="but1" @click="showbaogao(1)" style="font-size:16px;height:33px;margin-top:-10px;border-radius:3px;min-width:70px;color:#7EFAFC;text-align:center;line-height:33px;cursor:pointer;">查看报告</div>
              </a-col>
              <a-col :span="12">
                <a-row :gutter="16">
                  <a-col :span="8">
                   
                  </a-col>
                  <a-col :span="16">
                    <div style="margin:2% 15% 0 0;text-align:right;">
                  <span style="display:inline-block;vertical-align:middle;margin-right:10px;color:#6ddae0;font-size:14px;font-weight: bold;">土壤检测</span><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span>
                  <span style="display:block;color:#6ddae0;font-weight: bold;">Soil monitoring</span>
                </div>
                  </a-col>
                </a-row>
                
              </a-col>
            </a-row>
              </div>

              <div id="graph1" style=" width: 100%;height: 82%;"></div>
        </div>
         <div class="right2" style="width:100%;height:290px;margin-bottom:10px;">
          <div style="width:100%;height:60px;padding:10px 0;">
                 <a-row>
              <a-col :span="12" style="padding:0 40px 0 0;">
                <div class="but1" @click="showbaogao(2)" style="font-size:16px;height:33px;margin-top:-10px;border-radius:3px;min-width:70px;color:#7EFAFC;text-align:center;line-height:33px;cursor:pointer;">查看报告</div>
              </a-col>
              <a-col :span="12" >
                <a-row :gutter="16">
                  <a-col :span="8">
                   
                  </a-col>
                  <a-col :span="16">
                    <div style="margin:2% 15% 0 0;text-align:right;">
                  <span style="display:inline-block;vertical-align:middle;margin-right:10px;color:#6ddae0;font-size:14px;font-weight: bold;">大气检测</span><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span>
                  <span style="display:block;color:#6ddae0;font-weight: bold;">Atmospheric monitoring</span>
                </div>
                  </a-col>
                </a-row>
              </a-col>
            </a-row>
              </div>
              <div id="graph3" style=" width: 100%;height: 81%;"></div>
               <!-- <div style="width:100%;height:67%;">
                   <table style="width:100%;height:100%;">
                     <template v-for="v in airtest">
                       <tr :key="v.id" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:33%">{{v.testName}}</td>
                         <td style="width:33%">{{v.amount}}mg/L</td>
                         <td style="width:33%;color:#66F8AF;">{{v.status}}</td>
                       </tr>
                     </template>
                   </table>
                </div> -->
        </div>
        <div class="right3" style="width:100%;height:290px;">
          <div  style="width:100%;height:60px;padding:10px 0;">
                 <a-row>
                <a-col :span="12" style="padding:0 40px 0 0;">
                <div class="but1" @click="showbaogao(3)" style="font-size:16px;height:33px;margin-top:-10px;border-radius:3px;min-width:70px;color:#7EFAFC;text-align:center;line-height:33px;cursor:pointer;">查看报告</div>
              </a-col>
              <a-col :span="12">
                 <a-col :span="8">
                    <!-- <div @click="showbaogao(3)" style="float:right;margin-right:20px;border-radius:3px;min-width:70px;background-color:#2899EF;color:#fff;text-align:center;line-height:30px;cursor:pointer;">查看报告</div> -->
                  </a-col>
                  <a-col :span="16">
                    <div style="margin:2% 15% 0 0;text-align:right;">
                  <span style="display:inline-block;vertical-align:middle;margin-right:10px;color:#6ddae0;font-size:14px;font-weight: bold;">水源检测</span><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span>
                  <span style="display:block;color:#6ddae0;font-weight: bold;">Water monitoring</span>
                </div>
                  </a-col>
              </a-col>
            </a-row>
              </div>

              <div id="graph2" style=" width: 100%;height: 81%;"></div>

              <!-- <div style="width:100%;height:86%;">
                   <table style="width:100%;height:100%;">
                     <template v-for="v in watertest">
                       <tr :key="v.id" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:33%">{{v.testName}}</td>
                         <td style="width:33%">{{v.amount}}mg/m²</td>
                         <td style="width:33%;color:#66F8AF;">{{v.status}}</td>
                       </tr>
                     </template>
                   </table>
                </div> -->
        </div>
      </a-col>

    </a-row>
    <Foot style="margin:0px;"/>
    <a-modal
      class="tubaogao"
      title="土壤检测报告"
      v-model="visible1"
      @ok="handleOk"
      :footer="null" 
    >
      <img style="width:100%;height:100%;" :src="getbaogao(1)">
    </a-modal>
    <a-modal
      title="大气检测报告"
      v-model="visible2"
      @ok="handleOk"
      :footer="null"
    >
      <img style="width:100%;height:100%;" :src="getbaogao(2)">
    </a-modal>
    <a-modal
      title="水源检测报告"
      v-model="visible3"
      @ok="handleOk"
      :footer="null"
    >
      <img style="width:100%;height:100%;" :src="getbaogao(3)">
    </a-modal>
  </div>
</template>
<script>
import roll from '../assets/js/roll.js';
import MapLoader from '@/utils/loadMap.js'
import headers from '@/components/header/header1'
import Foot from '@/components/layouts/GlobalFooter.vue'
import axios from 'axios'
import { getBaseInfoById } from '@/api/allapi'

export default {
  components: {
      headers,
      Foot
    },
  data(){
    return{
       workrecord:[],
        soiltest:[],
        watertest:[],
        airtest:[],
        baseinformation:{},
        basemannager:[],
        map:null,
        basemarker:null,
        info:[],
        infoWindow:null,
        basenum:0,
        nowTimed:'',
        nowTimem:'',
        baseinfo:{},
        plotinfo:[],
        temperature:[],
        time:[],
        amount1:[],
        item1:[],
        amount2:[],
        item2:[],
        amount3:[],
        item3:[],
        tianqi:[],
        visible1:false,
        visible2:false,
        visible3:false,
        addresss: [],
        address: '',
        curLock: false,
        tip:'',
        plot5:[],
        polygonss:[],
        baseName:'',
        isshow:'',
    }
  },
  created(){
    this.basenum=Number(this.$route.query.baseId);
    this.baseName=this.$route.query.baseName;
    this.getAddress();
  },
  mounted(){
    let that=this;
    that.baseinformation={};
    that.basemannager=[];
    getBaseInfoById({baseId:this.basenum}).then(res=>{
      if(res.success){
        that.isshow=res.result.videoEquipmentList.length;
        that.baseinfo=res.result;
        that.baseinformation.baseAddress=that.baseinfo.address.street;
        that.baseinformation.name=that.baseinfo.baseName;
        that.baseinformation.baseCategory=that.baseinfo.category?that.baseinfo.category.displayName:'暂无';
        that.baseinformation.baseType=that.baseinfo.baseType?that.baseinfo.baseType.displayName:'暂无';
        that.baseinformation.area=that.baseinfo.acreage;
        that.baseinformation.yield=(that.baseinformation.area*0.24).toFixed(2);
        that.basemannager=that.baseinfo.baseUser;
        that.workrecord=[];
        for(let i=0;i<that.baseinfo.cropBatchList.length;i++){
          for(let j=0;j<that.baseinfo.cropBatchList[i].workOrderList.length;j++){
            that.baseinfo.cropBatchList[i].workOrderList[j].name=that.baseinfo.cropBatchList[i].batchName;
            that.baseinfo.cropBatchList[i].workOrderList[j].executionTime=that.baseinfo.cropBatchList[i].workOrderList[j].executionTime.split(' ')[0];
          }
          that.workrecord=that.workrecord.concat(that.baseinfo.cropBatchList[i].workOrderList);
        }
        that.$nextTick(() => {
          if (that.baseScroll) {
            clearInterval(that.baseScroll.timer)
          }
          let height=document.getElementById('sroll').offsetHeight;
          that.baseScroll = new roll.Roll('srollbox', 'sroll', 'sroll1', -height+5)
        })
        let test=that.baseinfo.baseTestingVoList;
        that.amount1=[];
        that.item1=[];
        that.amount2=[];
        that.item2=[];
        that.amount3=[];
        that.item3=[];
        for(let i=0;i<test.length;i++){
          if(test[i].itemName.value===3){
            that.amount1.push(test[i].value);
            that.item1.push(test[i].item);
          }
          if(test[i].itemName.value===1){
            that.amount2.push(test[i].value);
            that.item2.push(test[i].item);
          }
          if(test[i].itemName.value===2){
            that.amount3.push(test[i].value);
            that.item3.push(test[i].item);
          }
          this.drawLine1();
          this.drawLine2();
          this.drawLine3();
        }     
        that.iniMap();
        window.addEventListener('done2', function(){
          let lng=that.baseinfo.longitude;
          let lat=that.baseinfo.latitude;
          var icon = new AMap.Icon({
            size: new AMap.Size(30, 30),    // 图标尺寸
            image: require('../assets/base.png'),  // Icon的图像
            imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
            imageSize: new AMap.Size(30, 30)   // 根据所设置的大小拉伸或压缩图片
          });
          that.basemarker= new AMap.Marker({
            position: new AMap.LngLat(lng, lat),
            icon:icon
          });
          that.map.add(that.basemarker);
          that.map.setFitView( );
          that.basemarker.on("click",function(e) {that.infowindow(e);});
          that.basemarker.on("mousemove",function(e) {that.tip=that.baseinfo.baseName});
          that.basemarker.on("mouseout",function(e) {that.tip=''});  

          that.plot5=that.baseinfo.lotList;
          let a=[];
          for(let i=0;i<that.plot5.length;i++){
            a.push(that.plot5[i].id);
          }
          that.addBlockOnMap(a);         
        });
      }
    })
},

  methods:{
    backhome(){
      this.$router.push({ name: 'home'});
    },
    addBlockOnMap(value){
      this.polygonss=[];
      for(let j=0; j<value.length;j++){
        let a=value[j];
        for(let i=0;i<this.plot5.length;i++){
          let item = this.plot5[i];
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
              this.polygonss.push(polygon2);
              this.map.add(polygon2);
              this.map.setFitView( );
            }
          }
        }
      }
      let that=this;
      for(let i=0;i<that.polygonss.length;i++){
        that.polygonss[i].on("click",function(e) {that.$router.push({ name: 'plot',query:{baseId:Number(that.basenum),plotId:that.plot5[i].id}})});
        that.polygonss[i].on("mousemove",function(e) {that.tip=that.plot5[i].lotName});
        that.polygonss[i].on("mouseout",function(e) {that.tip=''});
      }
    },
    selectAddress(datas) {
      if (datas.length != 0) {
        this.address = datas[1]
        this.$nextTick(() => {
          this.player = new EZUIPlayer('myVideo');
        })
      }
    },
    getAddress (token) {
      var date = new Date().toString().split(' ')
      var month = new Date().getMonth() + 1
      var str = ''
      this.date = str + date[3] + '-' + month + '-' + date[2]
      this.hours = date[4]
      let params = 'appKey=c949347ff85947d39f0749143b0a76f6&appSecret=83a5afbe9249c08698e53a92e97edc53'
      let curToken = token ? token : window.localStorage.token
      axios.post('https://open.ys7.com/api/lapp/live/video/list', curToken, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        if (res.data.code == 200) {
          if (res.data.data && res.data.data.length && this.baseinfo.videoEquipmentList.length>0) {
              this.addresss.push({
                label: this.baseinfo.baseName,
                children: []
              })
              var aa=1;
              res.data.data.forEach((item,i) => {
                for(let j=0; j<this.baseinfo.videoEquipmentList.length;j++){
                  if (item.liveAddress&&(item.deviceSerial==this.baseinfo.videoEquipmentList[j].serialNumber)) {
                  this.addresss[0].children.push({
                    label: '通道' + aa,
                    value: res.data.data[i].liveAddress
                  })
                  aa++;
                }
                }
              })
          }
        }else if (res.data.code == 10002) {
            axios.post('https://open.ys7.com/api/lapp/token/get', params, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }).then(res => {
              if (res.data.code == 200) {
                token = 'accessToken=' + res.data.data.accessToken + '&pageStart=0&pageSize=50'
                window.localStorage.setItem('token', token)
                this.getAddress(token)
              }
            })
        }
        this.$nextTick(() => {
          myVideo.addEventListener('play', () => {
          this.player.on()
          })
        })
      })
    },

    getbaogao(a){
      var url='';
      if(a==1){
        if(this.baseinfo.soilPic){
          url='/api/pictureInfo/show/'+this.baseinfo.soilPic.pictureUrl;
        }else{
          url=null;
        }
        return url
      }
      if(a==2){
        if(this.baseinfo.airPic){
          url='/api/pictureInfo/show/'+this.baseinfo.airPic.pictureUrl;
        }else{
          url=null;
        }
        return url
      }
      if(a==3){
       if(this.baseinfo.waterPic){
          url='/api/pictureInfo/show/'+this.baseinfo.waterPic.pictureUrl;
        }else{
          url=null;
        }
        return url
      }
    },
    showbaogao(a){
      switch (a) {
        case 1:
          this.visible1=true;
          break;
        case 2:
          this.visible2=true;
          break;
        case 3:
          this.visible3=true;
          break;
        default:
          break;
      }
      
    },

    handleOk(){
      this.visible=false;
    },

    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      this.nowTimed = year + "/" + month + "/" + date +"/";
      this.nowTimem = hh+":"+mm ;
    },

    nowTimes(){
      this.timeFormate(new Date());
    },

    drawLine(){
      let that=this;
      var myChart = that.$echarts.init(document.getElementById('graphwendu'))
      window.addEventListener("resize", function() {
        myChart.resize();
	    })
      myChart.setOption({
        tooltip : {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '5%',
          bottom: '3%',
          top: '15%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : that.time,
            axisLine:{
              lineStyle:{
                color:'#fff',
              }
            }
          }
        ],
        yAxis : [
          {
            name:'℃',
            type : 'value',
            splitLine:{
              show:false
            },
            axisLine:{
              lineStyle:{
                color:'#fff',
              }
            }
          }
        ],
        series : [
          {
            name:'气温',
            type:'line',
            stack: '总量',
            data:that.temperature,
            smooth: true,
            symbol: "none",
            itemStyle: {
              color: '#0154C8'
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(0, 0, 255,0.7)'
              }, {
                offset: 1,
                color: 'rgb(255, 255, 255,0.1)'
              }])
            },
          },
        ]
      });
    },

  drawLine1(){
    let that=this;
    var myChart1 = that.$echarts.init(document.getElementById('graph1'))
    window.addEventListener("resize", function() {
      myChart1.resize();
	  })
    myChart1.setOption({
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {
        type : 'shadow'
        },
        formatter(params) {
            return  params[0].axisValue+'<br/>'+params[0].seriesName+' : '+params[0].data+' mg'
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '20%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : that.item1,
          axisLine:{
            lineStyle:{
              color:'#fff',
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            rotate: 0,
            margin: 20,
            formatter: function(params) {
              var newParamsName = '';
              var paramsNameNumber = params.length;
              var provideNumber = 3;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = '';
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                      tempStr = params.substring(start, end) + '\n';
                  }
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName
            }
          },
        }
      ],
      yAxis : [
        {
          name:'mg/kg',
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
          name:'每千克中含量',
          type:'bar',
          barWidth: '60%',
          data:that.amount1,
          itemStyle: {
            normal: {
              color: new that.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {offset: 0,color: "#7EFAFC"},
                {offset: 1,color: "#7EFAFC"}
              ]),
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

  drawLine2(){
    let that=this;
    var myChart1 = that.$echarts.init(document.getElementById('graph2'))
    window.addEventListener("resize", function() {
      myChart1.resize();
	  })
    myChart1.setOption({
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        },
        formatter(params) {
            return  params[0].axisValue+'<br/>'+params[0].seriesName+' : '+params[0].data+' mg'
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '15%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : that.item2,
          axisLine:{
            lineStyle:{
              color:'#fff',
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            rotate: 0,
            margin: 20,
            formatter: function(params) {
                var newParamsName = '';// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 3;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = '';// 表示每一次截取的字符串
                        var start = p * provideNumber;// 开始截取的位置
                        var end = start + provideNumber;// 结束截取的位置
                        // 此处特殊处理最后一行的索引值
                        if (p == rowNumber - 1) {
                            // 最后一次不换行
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            // 每一次拼接字符串并换行
                            tempStr = params.substring(start, end) + '\n';
                        }
                        newParamsName += tempStr;// 最终拼成的字符串
                    }
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }
          },
        }
      ],
      yAxis : [
        {
          name:'mg/L',
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
          name:'每升中的含量',
          type:'bar',
          barWidth: '60%',
          data:that.amount2,
          itemStyle: {
            normal: {
              color: new that.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {offset: 0,color: "#7EFAFC"},
                {offset: 1,color: "#7EFAFC"}
              ]),
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
  drawLine3(){
    let that=this;
    var myChart1 = that.$echarts.init(document.getElementById('graph3'))
    window.addEventListener("resize", function() {
      myChart1.resize();
	  })
    myChart1.setOption({
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        },
        formatter(params) {
          if(params[0].axisValue=='二氧化硫'){
            return params[0].axisValue+'<br/>'+params[0].seriesName+' : '+params[0].data+' μm'
          }
          if(params[0].axisValue=='二氧化氮'){
            return params[0].axisValue+'<br/>'+params[0].seriesName+' : '+params[0].data+' ppm'
          }
          if(params[0].axisValue=='总悬浮颗粒物'){
            return params[0].axisValue+'<br/>'+params[0].seriesName+' : '+params[0].data+' mg'
          }
        }
      },
      grid: {
        left: '6%',
        right: '5%',
        bottom: '10%',
        top: '15%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : that.item3,
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
          name:'mg/m³',
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
          name:'每平方米中的含量',
          type:'bar',
          areaStyle: {
             normal: {
            color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0,color: "rgba(126,250,252,0.5)"},
                {offset: 0.5,color: "rgba(126,250,252,0.2)"},
                {offset: 1,color: "rgba(126,250,252,0.1)"}])
             }
          },
          smooth: true,
          data:that.amount3,
          itemStyle: {
            normal: {
              color:"#7EFAFC",
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: '#fff',
                  fontSize: 10
                }
              },
            }
          },
        }
      ]
    });
  },

     //地块弹窗
        infowindow(e){
          this.info=[];
          this.getinfo();
          this.infoWindow = new AMap.InfoWindow({
            content: this.info.join(""),
          });
          this.infoWindow.open(this.map,[e.lnglat.lng,e.lnglat.lat]);
        },

        getinfo(){
          this.info = [];
          var a=this.baseinfo.address.province+this.baseinfo.address.city+this.baseinfo.address.area+this.baseinfo.address.street;
          var b=this.baseinfo.category?this.baseinfo.category.displayName:'暂无';
          var c=this.baseinfo.baseType?this.baseinfo.baseType.displayName:'暂无';
          var d=this.baseinfo.baseName;
          var e=this.baseinfo.acreage;
          var f=this.plot5.length;
          this.info.push("<div style=\"width:175px;margin:20px 25px;\"><table>");
          this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">基地名称：</td><td>"+d+"</td></tr>");
          this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">基地面积：</td><td>"+e+"亩</td></tr>");
          this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">基地地址：</td><td>"+a+"</td></tr>");
          this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">基地范畴：</td><td>"+b+"</td></tr>");
          this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">基地类型：</td><td>"+c+"</td></tr>");
          this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">地块数量：</td><td>"+f+"个</td></tr>");
          this.info.push("</table></div>");
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
              zoom: 15,
              layers:[googleLayer,roadNetLayer], //设置图层
            });
            that.map.on("complete", function(){
            var myEvent = new CustomEvent('done2',{});
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
.ant-modal-header{
  background:#17375a !important;
  border-bottom: 1px solid #7efafc !important;
}
.ant-modal-content{
  border: 1px solid #7efafc !important;
}
.ant-modal-body{
  background:#17375a !important;
}
.ant-modal-title,.ant-modal-close-x{
  color:#7efafc !important;
}
</style>
<style scoped>

.left3 >>> .ivu-cascader-menu{
  background:#fff;
}
.left1{
  background-image:url("../../src/assets/left2_1.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.left2{
  background-image:url("../../src/assets/left2_2.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.left3{
  background-image:url("../../src/assets/left2_3.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.base2{
  min-width: 1500px;
  background-image: url("../../src/assets/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
.tip{
  background-image:url("../../src/assets/tip.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
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
  background-image:url("../../src/assets/right2_1.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.right2{
  background-image:url("../../src/assets/right2_2.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.right3{
  background-image:url("../../src/assets/right2_2.png");
  background-repeat:no-repeat;
  background-size:100% 100%; 
}
.but1{
  background-image:url("../../src/assets/anniu.png");
  background-repeat:no-repeat;
  background-size:100% 100%; 
}
#container >>> .amap-info-content {
background-color:rgba(35, 35, 35, 0.6);
 border-radius:10px 10px;
box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px;
}
#container >>> .amap-info-sharp{
border-top: 8px solid rgba(35, 35, 35, 0.6);
}
</style>
<style lang='stylus'>
@media screen and (min-width: 2000px)
  body
    line-height 28px !important
    .base2
      .map-wrapper
        width 300px !important
      #graph1
        top -12px !important
      #graph2
        top -10px !important
      #graph3
        top -30px !important
.headleft
{
position: relative;
top:32px;
left: -8px;
width:56px;
height:2px;
/* Rotate div */
transform:rotate(-37deg);
-moz-transform:rotate(-37deg); /* Firefox */
-webkit-transform:rotate(-37deg); /* Safari 和 Chrome */
-o-transform:rotate(-37deg); /* Opera */
}
.headright
{
position: relative;
top:34px;
right: 8px;
width:56px;
height:2px;
/* Rotate div */
transform:rotate(37deg);
-moz-transform:rotate(37deg); /* Firefox */
-webkit-transform:rotate(37deg); /* Safari 和 Chrome */
-o-transform:rotate(37deg); /* Opera */
}

</style>
