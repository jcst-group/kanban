<template>
  <div class="base1">
    <headers></headers>
    <div class="base-wrapper">
      <div class="company-info">
        <div class="left1">
          <div class="desc">
            <div style="padding:18px 0 0 10px;">
              <div class="title"><span class="icon" style="background-color:#6ddae0"></span><span style="vertical-align:middle;">公司简介</span></div>
              <div class="descs">Company profile</div>
            </div>
          </div>
          <div class="company">
            <img :src="companypic" alt="">
            <!-- <img src="../assets/ddwb.png" alt=""> -->
            <p class="company-desc" id="media-company">{{companyinfo}}...<span @click="() => {this.$router.push({path: '/company'})}" style="color:#289CF4; cursor:pointer; margin-left:10px">详情 ></span></p>
          </div>
        </div>
        <div class="left_25" @click="toM">
          <span style="display:inline-block;line-height:60px;vertical-align:middle;width:12px;height:12px;background:rgba(126,250,252,1);border-radius:50%;margin-left:20px;"></span>
          <span style="display:inline-block;line-height:60px;vertical-align:middle;font-size:22px;color:rgba(126,250,252,1);margin:0 10px;">金融数据</span>
          <span style="display:inline-block;line-height:60px;vertical-align:middle;font-size:14px;color:rgba(126,250,252,1);">Financial data</span>
        </div>
        <div class="left2">
          <div class="desc pos">
            <div style="padding:18px 0 0 10px;">
              <div class="title"><span class="icon" style="background-color:#6ddae0"></span><span style="vertical-align:middle;">基地监控</span></div>
              <div class="descs">Base monitor</div>
            </div>
            <Cascader @on-change="selectAddress" class="select" :data="address"></Cascader>
          </div>
          <div class="monitor" id="monitor">
            <video id="myVideo" width="100%" height="100%" ref="myPlayer" controls :src="addressSrc"></video>
          </div>
        </div>
      </div>
      <div class="map-message">
        <div class="map-wrapper">
          <div class="center1">
            <div class="desc" style="text-align:center;">
              <div style="padding-top:8px">
                <div class="title"><span class="icon" style="background-color:#6ddae0"></span><span style="vertical-align:middle;">数据地图<span style="margin-left:10px;font-size:10px;">The data map</span></span></div>
                <!-- <div class="descs"></div> -->
              </div>
            </div>
            <div class="map" ref="mapChart">
              <div class="allarea" v-if="allbasearea">
                <div class="basearea" >{{allbasearea.toFixed(2)}}</div>
                <div class="work">已服务面积(亩)</div>
              </div>
              <div class="twotip">
                <div class="base-point">
                <span class="icon2" style="background-color:#00499E"></span>
                <span class="text">麦冬核心区</span>
              </div><div class="base-point">
                <span class="icon2" style="background-color:#7EFAFC"></span>
                <span class="text">麦冬适种区</span>
              </div>
              </div>
              <div class="tip">{{tip}}</div>
              <div class="changebut" style="background-color:#11A81B;" @click="changemap">切换卫星地图</div>
              <div class="point">
                <div class="base-point pointtip" style="cursor:pointer;" @click="all">
                <span class="icon1" style="background-color:red;margin:0 12px 0 3px;" ref="all"></span>
                <span class="text">全部</span>
                <span class="count" style="display:inline-block;margin-right:5px;float:right;color:#fff;">{{hezuosheL+baseLength+jiatingnongchangL+jinmihezuoL+ziyingL}}</span>
              </div>
              <div class="base-point pointtip" style="margin-top:5px;cursor:pointer;" @click="ziying1">
                <img class="icon3"  src="../assets/ziying.png">
                <span class="text">自营基地</span>
                <span class="count" style="display:inline-block;margin-right:5px;float:right;color:#fff;">{{ziyingL}}</span>
              </div>
              <div class="base-point pointtip" style="margin-top:5px;cursor:pointer;" @click="hezuo1">
                <img class="icon3"  src="../assets/hezuojd.png">
                <span class="text">合作基地</span>
                <span class="count" style="display:inline-block;margin-right:5px;float:right;color:#fff;">{{baseLength}}</span>
              </div>
              <div class="earth-point pointtip" style="margin-top:5px;cursor:pointer;" @click="hezuoshe1">
                <img class="icon3" src="../assets/hezuoshe.png">
                <span class="text">合作社</span>
                <span class="count" style="display:inline-block;margin-right:5px;float:right;color:#fff;">{{hezuosheL}}</span>
              </div>
              <div class="area-point pointtip" style="margin-top:5px;cursor:pointer;" @click="jiatin1">
                <img class="icon3" src="../assets/jiatinnongchang.png">
                <span class="text">家庭农场</span>
                <span class="count" style="display:inline-block;margin-right:5px;float:right;color:#fff;">{{jiatingnongchangL}}</span>
              </div>
              <div class="farmar-point pointtip" style="margin-top:5px;cursor:pointer;" @click="jinmi1">
                <img class="icon3" src="../assets/jingmihezuo.png">
                <span class="text">紧密合作基地</span>
                <span class="count" style="display:inline-block;margin-right:5px;float:right;color:#fff;">{{jinmihezuoL}}</span>
              </div>
              </div>
            </div>
            <div class="movepoint1"></div>
          </div>

        </div>
        <div class="base-message">
          <div class="center2">
            <div class="movepoint2"></div>
            <div class="desc" style="text-align:center;">
              <div style="padding-top:13px;">
                <div class="title"><span class="icon" style="background-color:#6ddae0"></span><span style="vertical-align:middle;">基础信息<span style="margin-left:10px;font-size:10px;">Base information</span></span></div>
              </div>
            </div>
            <div class="base">
              <baseMap></baseMap>
              <div class="base-info" id="base-info">
                  <ul id="base-ul1" style="position:relative; top:0;list-style-type:none">
                    <li class="base-item" v-for="(item,index) in this.baseDatas"
                    :key="index">
                      <i class='icon' :style="{backgroundColor: item.itemStyle.color}"></i>
                      <span style="text-align: left;display:inline-block; width: 300px;color: #fff">{{item.name}}</span>
                      <span style="color: #fff;display:inline-block; width: 80px;">{{item.value}}亩</span>
                    </li>
                  </ul>
                  <ul id="base-ul2" style="position:relative; top:0;list-style-type:none">
                    <li class="base-item" v-for="(item,index) in this.baseDatas"
                    :key="index">
                      <i class='icon' :style="{backgroundColor: item.itemStyle.color}"></i>
                      <span style="text-align: left;display:inline-block; width: 300px;color: #fff">{{item.name}}</span>
                      <span style="color: #fff;display:inline-block; width: 80px;">{{item.value}}亩</span>
                    </li>
                  </ul>
              </div>
            </div>
        </div>
        </div>
      </div>
      <div class="temperature-rain">
        <div class="right1" style="margin-bottom:10px;">
          <div class="airs air-temperature">
            <div class="desc" style="text-align:right;">
              <div style="padding:10px 20px 0 0;">
                <div class="title"><span style="vertical-align:middle;">有机肥</span><span class="icon1" style="background-color:#6ddae0"></span></div>
                <div class="descs">Organic fertilizer</div>
              </div>
            </div>
            <polygonal></polygonal>
          </div>
        </div>
        <div class="right2">
          <div class="airs air-humidity">
            <div class="desc" style="text-align:right;">
              <div style="padding:10px 20px 0 0;">
                <div class="title"><span style="vertical-align:middle;">基地土壤检测平均值</span><span class="icon1" style="background-color:#6ddae0"></span></div>
                <div class="descs">Base soil test average</div>
              </div>
            </div>
            <div class="rain-map" ref="rainMap"></div>
          </div>
        </div>
        <div class="airs air-pressure">
          <div class="right3">
          <div class="desc pos" style="text-align:right;">
            <div style="padding:10px 20px 0 0;">
              <div class="title"><span style="vertical-align:middle;">监测数据</span><span class="icon1" style="background-color:#6ddae0"></span></div>
              <div class="descs">Monitoring data</div>
            </div>
          </div>
          <div class="monitor-data">
            <Carousel class="lunbo-wrapper" radius-dot>
              <CarouselItem v-for="(v,k) in monitor" :key="k">
                  <div class="monitor-base">
                    <span :title="v.equipment?v.equipment.baseName:null">{{v.equipment?v.equipment.baseName:null}}</span>
                    <div class="update-time">
                      <span>{{v.monitorTime.split(' ')[0]}}</span>
                      <span>{{v.monitorTime.split(' ')[1]}}</span>
                    </div>
                  </div>
                  <div style="width:102%;height:100%;margin:auto;padding:10px 20px;">
                    <div style="background-color:#102E4F;padding:13px 0">
                      <a-row :gutter="16">
                        <a-col :span="7" style="text-align:center">
                          <img style="margin-right:5px;" src="../assets/daqi.png">
                          <span style="color:#7EFAFC;font-size:13px">大气温度:</span>
                          <span style="display:block;color:#FFFFFF;font-size:21px">{{v.airTemperature}}℃</span>
                        </a-col>
                        <a-col :span="1" style="text-align:center"><img src="../assets/line.png"></a-col>
                        <a-col :span="7" style="text-align:center">
                          <img style="margin-right:5px;" src="../assets/shidu.png">
                          <span style="color:#7EFAFC;font-size:13px">大气湿度:</span>
                          <span style="display:block;color:#FFFFFF;font-size:21px">{{v.airHumidity}}%</span>
                        </a-col>
                        <a-col :span="1" style="text-align:center"><img src="../assets/line.png"></a-col>
                        <a-col :span="8" style="text-align:center">
                          <span style="display:block;color:#7EFAFC;font-size:13px">二氧化碳浓度:</span>
                          <span style="display:block;color:#FFFFFF;font-size:21px">{{v.co2Value}}ppm</span>
                        </a-col>
                      </a-row>
                      <a-row :gutter="16" style="margin-top:13px;">
                        <a-col :span="7" style="text-align:center">
                          <img style="margin-right:5px;" src="../assets/daqi.png">
                          <span style="color:#7EFAFC;font-size:13px">土壤温度:</span>
                          <span style="display:block;color:#FFFFFF;font-size:21px">{{v.soilTemperature}}℃</span>
                        </a-col>
                        <a-col :span="1" style="text-align:center"><img src="../assets/line.png"></a-col>
                        <a-col :span="7" style="text-align:center">
                          <img style="margin-right:5px;" src="../assets/shidu.png">
                          <span style="color:#7EFAFC;font-size:13px">土壤湿度:</span>
                          <span style="display:block;color:#FFFFFF;font-size:21px">{{v.soilHumidity}}%</span>
                        </a-col>
                        <a-col :span="1" style="text-align:center"><img src="../assets/line.png"></a-col>
                        <a-col :span="8" style="text-align:center">
                          <span style="color:#7EFAFC;font-size:13px">土壤EC值:</span>
                          <span style="display:block;color:#FFFFFF;font-size:21px">{{v.soilEc}}uS/cm</span>
                        </a-col>
                      </a-row>
                      <a-row :gutter="16" style="margin-top:13px;">
                        <a-col :span="7" style="text-align:center">
                          <img style="margin-right:5px;" src="../assets/guangzao.png">
                          <span style="color:#7EFAFC;font-size:13px">光照强度:</span>
                          <span style="display:block;color:#FFFFFF;font-size:21px">{{v.illIntensity}}Lux</span>
                        </a-col>
                        <a-col :span="1" style="text-align:center"><img src="../assets/line.png"></a-col>
                        <a-col :span="7" style="text-align:center">
                          <img style="margin-right:5px;" src="../assets/jiangyu.png">
                          <span style="color:#7EFAFC;font-size:13px">降雨量:</span>
                          <span style="display:block;color:#FFFFFF;font-size:21px">{{v.rainfall}}mm</span>
                        </a-col>
                        <a-col :span="1" style="text-align:center"><img src="../assets/line.png"></a-col>
                        <a-col :span="8" style="text-align:center">
                          <span style="color:#7EFAFC;font-size:13px">土壤PH值:</span>
                          <span style="display:block;color:#FFFFFF;font-size:21px">{{v.soilPh}}</span>
                        </a-col>
                      </a-row>
                    </div>
                  </div>

              </CarouselItem>
            </Carousel>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Foot style="margin:0;"/>
  </div>
</template>
<script>
import headers from '@/components/header/header1'
import baseMap from '@/components/baseMap/baseMap'
import MapLoader from '@/utils/loadMap.js'
import polygonal from '@/components/polygonal/polygonal'
import Foot from '@/components/layouts/GlobalFooter.vue'
import chartsType from '../assets/js/chartsType.js';
import roll from '../assets/js/roll.js';
import axios from 'axios'
import {getCompany,getAllBase,getFatByCompanyId,getAllTesting,getLastMonitor,getBaseIdVideo,getVideoList,getChannelList} from '@/api/allapi'

const dataAxis = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default {
  name: 'home',
  components: {
      headers,
      baseMap,
      polygonal,
      Foot
    },
  data(){
    return{
      allbase:[],
      allpoint:[],
      companyinfo:'',
      companypic:'',
      mapDatas: [],
      weixin:false,
      mapChart: '',
      baseLength: 0,
      totalArea: 0,
      option: {},
      address: [],
      baseinfo:[],
      addressSrc: '',
      curLock: false,
      metalDatas: [],
      metalMaxDatas: [],
      metalname:[],
      color:['#975FE5','#FE8463','#36CBCB','#E55F76','#3AA1FF','#5FE583','#5F95E5','#E5AF5F','#36CBCB','#4ECB73'],
      baseDatas: [],
      tip:'',
      markers:[],
      hezuoshe:[],
      jiatingnongchang:[],
      jinmihezuo:[],
      hezuosheL:'',
      ziying: [],
      jiatingnongchangL:'',
      jinmihezuoL:'',
      ziyingL: '',
      hezuoshe2:[],
      jiatingnongchang2:[],
      jinmihezuo2:[],
      ziying2: [],
      infoWindow:null,
      allbasearea: 0,
      allinfo:[],
      monitor:[],
      videolist:[],
      channellist:[],
      geo:null,
      lsz:['中太镇','光辉镇','高堰乡','金鼓乡','百顷镇'],
      ssz:['芦溪镇','永明镇','老马镇','争胜镇','花园镇','刘营镇','里程镇','灵兴镇','永新镇'],
    }
  },
  created () {
    axios.get('json/santai.json').then((res)=>{
      this.geo=res.data;
    })
    getVideoList().then(res=>{
      if(res.success){
        this.videolist = res.result;
        if (res.result) {
          res.result.forEach((item,index) => {
            this.address.push({
              label: item.videoName,
              value: item.serialNumber,
              children: []
            })
            item.videoChannel.forEach(ele => {
              let name = ele.channelName.replace(/\d/g, '')
              this.address[index].children.push({
                label: name + ele.channelNo,
                value: ele.channelNo
              })
            })
          })
        }
      }
    })
    this.getcompanyinfo();
    // let params = 'appKey=c949347ff85947d39f0749143b0a76f6&appSecret=83a5afbe9249c08698e53a92e97edc53'
    // axios.post('https://open.ys7.com/api/lapp/token/get', params, {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // }).then(res => {
    //   if (res.data.code == 200) {
    //     let token = 'accessToken=' + res.data.data.accessToken + '&pageStart=0&pageSize=50'
    //     window.localStorage.setItem('videoToken', token)
    //   }
    // })
    if(this.$route.query.time){
      let that=this;
      window.addEventListener('done1', function(){
        that.all();
      })
    }
  },
mounted () {

  getLastMonitor().then(res=>{
    if(res.success){
      this.monitor=res.result;
    }
  })
  if (this.baseScroll) {
    clearInterval(this.baseScroll.timer)
  }

  getAllTesting().then(res=>{
    if(res.success){
      this.metalMaxDatas=[];
      this.metalDatas=[];
      this.metalname=[];
      for(let i=0;i<res.result.length;i++){
        this.metalMaxDatas.push(res.result[i].max_value.toFixed(2));
        this.metalDatas.push(res.result[i].value.toFixed(2));
        this.metalname.push(res.result[i].item);
      }
      this._drawRainMap()
    }
  })

  let that=this;
  getAllBase().then(res=>{
    if(res.success){
      that.allinfo=res.result;
      var j=0;
      var typeid=[2,3,4,7,8];
      // 计算服务面积
      for(let i=0;i<that.allinfo.length;i++){
        // 饼状图颜色循环
        if(j==9){
          j=0;
        }
        if(typeid.indexOf(that.allinfo[i].baseType.value)>-1){
          that.allbasearea += that.allinfo[i].acreage;
          // 饼状图数据来源
          that.baseDatas.push({name:that.allinfo[i].baseName,value:that.allinfo[i].acreage,itemStyle:{color: that.color[j]}})
          j++;
        }
      }
      if (that.baseScroll) {
        clearInterval(that.baseScroll.timer)
      }
      that.$nextTick(() => {
        if (that.baseScroll) {
          clearInterval(that.baseScroll.timer)
        }
        let height=document.getElementById('base-ul1').offsetHeight;
        that.baseScroll = new roll.Roll('base-info', 'base-ul1', 'base-ul2', -height)
      })
      this._drawCityMap()
    }
  })
  window.addEventListener('done1', function(){
    // 设置图层
    // 获取图块取图地址
    let googleLayer = new AMap.TileLayer({
      getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile'
    });
    // 道路网络图层地址
    let roadNetLayer = new AMap.TileLayer.RoadNet({
      opacity:0
    });
    that.map.setLayers([googleLayer,roadNetLayer]);
    // 覆盖物颜色设置
    let aaa= new AMap.GeoJSON({
      geoJSON: that.geo,
      getPolygon: function(geojson, lnglats) {
        if(that.lsz.indexOf(geojson.properties.name)>-1){
            return new AMap.Polygon({
                path: lnglats,
                fillOpacity: 0.5,// 面积越大透明度越高
                strokeColor: '#70E0E7',
                strokeWeight: 2,
                fillColor: '#7EFAFC'
            });
        }else if(that.ssz.indexOf(geojson.properties.name)>-1){
            return new AMap.Polygon({
                path: lnglats,
                fillOpacity: 0.5,// 面积越大透明度越高
                strokeColor: '#70E0E7',
                strokeWeight: 2,
                fillColor: '#00499E'
            });
        }else{
            return new AMap.Polygon({
                path: lnglats,
                fillOpacity: 0,// 面积越大透明度越高
                strokeColor: '#70E0E7',
                strokeWeight: 2
            });
        }
      }
    })
    aaa.setMap(that.map);

    that.baseinfo=[];
    that.jinmihezuo2=[];
    that.ziying2 = []
    that.hezuoshe2=[];
    that.jiatingnongchang2=[];
    that.baseLength=0;
    that.jinmihezuoL=0;
    that.ziyingL = 0
    that.hezuosheL=0;
    that.jiatingnongchangL=0;

    for(let i=0;i<that.allinfo.length;i++){
      if(that.allinfo[i].baseType.value==2){
        that.totalArea += that.allinfo[i].acreage
        that.mapDatas.push({
          name: that.allinfo[i].baseName,
          value: [that.allinfo[i].longitude, that.allinfo[i].latitude],
          id: that.allinfo[i].id
        })
        that.baseLength++;
        that.allbase.push(that.allinfo[i]);
        that.baseinfo.push(that.allinfo[i]);
        let lng=that.allinfo[i].longitude;
        let lat=that.allinfo[i].latitude;
        var jicon = new AMap.Icon({
          size: new AMap.Size(25, 30),    // 图标尺寸
          image: require('../assets/hezuojd1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var jicon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/hezuojd.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:jicon
        });
        that.markers.push(marker);
        that.allpoint.push(marker);
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.allinfo[i].id),baseName:that.allinfo[i].baseName}})});
        marker.on("mousemove",function(e) {
          //marker.setAnimation("AMAP_ANIMATION_BOUNCE" );
          marker.setIcon(jicon1);
          that.tip=that.allinfo[i].baseName
        });
        marker.on("mouseout",function(e) {
          //marker.setAnimation("AMAP_ANIMATION_NONE" );
          marker.setIcon(jicon);
          that.tip=''
        });
      }
      if(that.allinfo[i].baseType.value==7){
        that.hezuosheL++;
        that.allbase.push(that.allinfo[i]);
        that.hezuoshe2.push(that.allinfo[i]);
        let lng=that.allinfo[i].longitude;
        let lat=that.allinfo[i].latitude;
        var hicon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/hezuoshe1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var hicon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/hezuoshe.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker1= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:hicon
        });
        that.hezuoshe.push(marker1);
        that.allpoint.push(marker1);
        that.map.add(marker1);
        marker1.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.allinfo[i].id),baseName:that.allinfo[i].baseName}})});
        marker1.on("mousemove",function(e) {marker1.setIcon(hicon1);that.tip=that.allinfo[i].baseName;});
        marker1.on("mouseout",function(e) {marker1.setIcon(hicon);that.tip=''});
      }
      if(that.allinfo[i].baseType.value==8){
        that.jiatingnongchangL++;
        that.jiatingnongchang2.push(that.allinfo[i]);
        let lng=that.allinfo[i].longitude;
        let lat=that.allinfo[i].latitude;
        var nicon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/jiatinnongchang1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var nicon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/jiatinnongchang.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker2= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:nicon
        });
        that.jiatingnongchang.push(marker2);
        that.map.add(marker2);
        marker2.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.allinfo[i].id),baseName:that.allinfo[i].baseName}})});
        marker2.on("mousemove",function(e) {marker2.setIcon(nicon1);that.tip=that.allinfo[i].baseName});
        marker2.on("mouseout",function(e) {marker2.setIcon(nicon);that.tip=''});
      }
      if(that.allinfo[i].baseType.value==4){
        that.jinmihezuoL++;
        that.allbase.push(that.allinfo[i]);
        that.jinmihezuo2.push(that.allinfo[i]);
        let lng=that.allinfo[i].longitude;
        let lat=that.allinfo[i].latitude;
        var micon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/jingmihezuo1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var micon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/jingmihezuo.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker3= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:micon
        });
        that.jinmihezuo.push(marker3);
        that.allpoint.push(marker3);
        that.map.add(marker3);
        marker3.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.allinfo[i].id),baseName:that.allinfo[i].baseName}})});
        marker3.on("mousemove",function(e) {marker3.setIcon(micon1);that.tip=that.allinfo[i].baseName});
        marker3.on("mouseout",function(e) {marker3.setIcon(micon);that.tip=''});
      }
      if(that.allinfo[i].baseType.value==3){
        that.ziyingL++;
        that.allbase.push(that.allinfo[i]);
        that.ziying2.push(that.allinfo[i]);
        let lng=that.allinfo[i].longitude;
        let lat=that.allinfo[i].latitude;
        var zicon = new AMap.Icon({
          size: new AMap.Size(25, 30),    // 图标尺寸
          image: require('../assets/ziying1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var zicon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/ziying.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:zicon
        });
        that.ziying.push(marker);
        that.allpoint.push(marker);
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.allinfo[i].id),baseName:that.allinfo[i].baseName}})});
        marker.on("mousemove",function(e) {
          //marker.setAnimation("AMAP_ANIMATION_BOUNCE" );
          marker.setIcon(zicon1);
          that.tip=that.allinfo[i].baseName
        });
        marker.on("mouseout",function(e) {
          //marker.setAnimation("AMAP_ANIMATION_NONE" );
          marker.setIcon(zicon);
          that.tip=''
        });
      }
    }
  });
},
methods: {
    toM(){
      this.$router.push({ name: 'financial'});
    },
    getcompanyinfo(){
      getCompany({id:1}).then(res=>{
        console.log(res)
        if(res.success){
          if(res.result.companyPicture.length>0){
            this.companypic='/api/pictureInfo/show/'+res.result.companyPicture[0].pictureUrl
          }
          let a=res.result.companyProfile.split('');
          let b=[];
          if(a.length>135){
            for(let i=0;i<135;i++){
              b.push(a[i]);
            }
            let c=b.join('');
            this.companyinfo=c;
          }else{
            this.companyinfo=res.result.companyProfile;
          }
        }
      })
    },
    removepoint(){
      if (this.map) {
        this.map.remove(this.markers);
        this.map.remove(this.hezuoshe);
        this.map.remove(this.jiatingnongchang);
        this.map.remove(this.jinmihezuo);
        this.map.remove(this.ziying)
      }
    },
    all(){
      if(this.infoWindow!=null){
        this.infoWindow.close();
      }
      this.removepoint();
      let that=this;
      that.markers=[];
      that.hezuoshe=[];
      that.jiatingnongchang=[];
      that.jinmihezuo=[];
      that.ziying = []
      for(let i=0;i<that.baseinfo.length;i++){
        let lng=that.baseinfo[i].longitude;
        let lat=that.baseinfo[i].latitude;
        var jicon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/hezuojd1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var jicon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/hezuojd.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:jicon
        });
        that.markers.push(marker);
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.baseinfo[i].id),baseName:that.baseinfo[i].baseName}})});
        marker.on("mousemove",function(e) {marker.setIcon(jicon1);that.tip=that.baseinfo[i].baseName});
        marker.on("mouseout",function(e) {marker.setIcon(jicon);that.tip=''});
      }
      for(let i=0;i<that.hezuoshe2.length;i++){
        let lng=that.hezuoshe2[i].longitude;
        let lat=that.hezuoshe2[i].latitude;
        var hicon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/hezuoshe1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var hicon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/hezuoshe.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:hicon
        });
        that.hezuoshe.push(marker);
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.hezuoshe2[i].id),baseName:that.hezuoshe2[i].baseName}})});
        marker.on("mousemove",function(e) {marker.setIcon(hicon1);that.tip=that.hezuoshe2[i].baseName});
        marker.on("mouseout",function(e) {marker.setIcon(hicon);that.tip=''});
      }
      for(let i=0;i<that.jiatingnongchang2.length;i++){
        let lng=that.jiatingnongchang2[i].longitude;
        let lat=that.jiatingnongchang2[i].latitude;
        var nicon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/jiatinnongchang1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var nicon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/jiatinnongchang.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:nicon
        });
        that.jiatingnongchang.push(marker);
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.jiatingnongchang2[i].id),baseName:that.jiatingnongchang2[i].baseName}})});
        marker.on("mousemove",function(e) {marker.setIcon(nicon1);that.tip=that.jiatingnongchang2[i].baseName});
        marker.on("mouseout",function(e) {marker.setIcon(nicon);that.tip=''});
      }
      for(let i=0;i<that.jinmihezuo2.length;i++){
        let lng=that.jinmihezuo2[i].longitude;
        let lat=that.jinmihezuo2[i].latitude;
        var micon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/jingmihezuo1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var micon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/jingmihezuo.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:micon
        });
        that.jinmihezuo.push(marker);
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.jinmihezuo2[i].id),baseName:that.jinmihezuo2[i].baseName}})});
        marker.on("mousemove",function(e) {
          marker.setIcon(micon1);
          that.tip=that.jinmihezuo2[i].baseName;
        });
        marker.on("mouseout",function(e) {marker.setIcon(micon);that.tip=''});
      }
      for(let i=0;i<that.ziying2.length;i++){
        let lng=that.ziying2[i].longitude;
        let lat=that.ziying2[i].latitude;
        var zicon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/ziying1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var zicon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/ziying.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:zicon
        });
        that.ziying.push(marker);
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.ziying2[i].id),baseName:that.ziying2[i].baseName}})});
        marker.on("mousemove",function(e) {
          marker.setIcon(zicon1);
          that.tip=that.ziying2[i].baseName;
        });
        marker.on("mouseout",function(e) {marker.setIcon(zicon);that.tip=''});
      }
    },
    hezuoshe1(){
      if(this.infoWindow!=null){
        this.infoWindow.close();
      }
      this.removepoint();
      let that=this;
      that.hezuoshe=[];
      for(let i=0;i<that.hezuoshe2.length;i++){
        let lng=that.hezuoshe2[i].longitude;
        let lat=that.hezuoshe2[i].latitude;
        var hicon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/hezuoshe1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var hicon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/hezuoshe.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:hicon
        });

        that.hezuoshe.push(marker);
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.hezuoshe2[i].id),baseName:that.hezuoshe2[i].baseName}})});
        marker.on("mousemove",function(e) {marker.setIcon(hicon1);that.tip=that.hezuoshe2[i].baseName});
        marker.on("mouseout",function(e) {marker.setIcon(hicon);that.tip=''});
      }
    },
    jiatin1(){
      if(this.infoWindow!=null){
        this.infoWindow.close();
      }
      this.removepoint();
      let that=this;
      that.jiatingnongchang=[];
      for(let i=0;i<that.jiatingnongchang2.length;i++){
        let lng=that.jiatingnongchang2[i].longitude;
        let lat=that.jiatingnongchang2[i].latitude;
        var nicon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/jiatinnongchang1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var nicon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/jiatinnongchang.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:nicon
        });
        that.jiatingnongchang.push(marker);
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.jiatingnongchang2[i].id),baseName:that.jiatingnongchang2[i].baseName}})});
        marker.on("mousemove",function(e) {marker.setIcon(nicon1);that.tip=that.jiatingnongchang2[i].baseName});
        marker.on("mouseout",function(e) {marker.setIcon(nicon);that.tip=''});
      }
    },
    jinmi1(){
      if(this.infoWindow!=null){
        this.infoWindow.close();
      }
      this.removepoint();
      let that=this;
      that.jinmihezuo=[];
      for(let i=0;i<that.jinmihezuo2.length;i++){
        let lng=that.jinmihezuo2[i].longitude;
        let lat=that.jinmihezuo2[i].latitude;
        var micon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/jingmihezuo1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var micon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/jingmihezuo.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:micon
        });
        that.jinmihezuo.push(marker);
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.jinmihezuo2[i].id),baseName:that.jinmihezuo2[i].baseName}})});
        marker.on("mousemove",function(e) {marker.setIcon(micon1);that.tip=that.jinmihezuo2[i].baseName});
        marker.on("mouseout",function(e) {marker.setIcon(micon);that.tip=''});
      }
    },
    ziying1(){
      if(this.infoWindow!=null){
        this.infoWindow.close();
      }
      this.removepoint();
      let that=this;
      this.ziying = []
      for(let i=0;i<that.ziying2.length;i++){
        let lng=that.ziying2[i].longitude;
        let lat=that.ziying2[i].latitude;
        var micon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/ziying1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var micon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/ziying.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:micon
        });
        that.ziying.push(marker)
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.ziying2[i].id),baseName:that.ziying2[i].baseName}})});
        marker.on("mousemove",function(e) {marker.setIcon(micon1);that.tip=that.ziying2[i].baseName});
        marker.on("mouseout",function(e) {marker.setIcon(micon);that.tip=''});
      }
    },
    hezuo1(){
      if(this.infoWindow!=null){
        this.infoWindow.close();
      }
      this.removepoint();
      let that=this;
      that.markers=[];
      for(let i=0;i<that.baseinfo.length;i++){
        let lng=that.baseinfo[i].longitude;
        let lat=that.baseinfo[i].latitude;
        var jicon = new AMap.Icon({
          size: new AMap.Size(30, 30),    // 图标尺寸
          image: require('../assets/hezuojd1.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(25, 30)   // 根据所设置的大小拉伸或压缩图片
        });
        var jicon1 = new AMap.Icon({
          size: new AMap.Size(35, 40),    // 图标尺寸
          image: require('../assets/hezuojd.png'),  // Icon的图像
          imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(35, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        let marker= new AMap.Marker({
          position: new AMap.LngLat(lng, lat),
          icon:jicon
        });
        that.markers.push(marker);
        that.map.add(marker);
        marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.baseinfo[i].id),baseName:that.baseinfo[i].baseName}})});
        marker.on("mousemove",function(e) {marker.setIcon(jicon1);that.tip=that.baseinfo[i].baseName});
        marker.on("mouseout",function(e) {marker.setIcon(jicon);that.tip=''});
      }
    },
    changemap(){
      if(this.weixin){
        this.map.remove(this.map.getLayers());
        let googleLayer = new AMap.TileLayer({
          getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile'
        })
        let roadNetLayer = new AMap.TileLayer.RoadNet({
          opacity:0
        })
        // var layer = new AMap.TileLayer();
        this.map.setLayers([googleLayer,roadNetLayer]);
        this.weixin=false;
      }else{
        this.map.remove(this.map.getLayers());
        let roadNetLayer = new AMap.TileLayer.RoadNet({
          opacity:0
        })
        let layer = new AMap.TileLayer();
        this.map.setLayers([roadNetLayer,layer]);
        this.weixin=true;
      }
    },
    // 获取直播地址
    _getAddress (token, deviceNum, channelNo) {
        console.log(this.player)
        let params = 'appKey=c949347ff85947d39f0749143b0a76f6&appSecret=83a5afbe9249c08698e53a92e97edc53'
        let curToken = token ? token : window.localStorage.videoToken
        axios.post('https://open.ys7.com/api/lapp/live/video/list', curToken, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
          if (res.data.code == 200) {
            if (res.data.data && res.data.data.length) {
              for (let i = 0; i < res.data.data.length; i++) {
                if (deviceNum === res.data.data[i].deviceSerial && channelNo == res.data.data[i].channelNo) {
                  this.addressSrc = res.data.data[i].liveAddress
                  this.$nextTick(() => {
                    new EZUIPlayer('myVideo');
                  })
                  return
                }
              }
            }
          } else if (res.data.code == 10002 || res.data.code == 10001) {
              axios.post('https://open.ys7.com/api/lapp/token/get', params, {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              }).then(res => {
                if (res.data.code == 200) {
                  token = 'accessToken=' + res.data.data.accessToken + '&pageStart=0&pageSize=50'
                  window.localStorage.setItem('videoToken', token)
                  this._getAddress(token, deviceNum)
                }
              })
          }
        })
    },
    _drawRainMap () {
      let rainChart = this.$echarts.init(this.$refs.rainMap);
      window.addEventListener("resize", function() {
        rainChart.resize();
	    })
      var option = chartsType.charts(this.metalname, this.metalDatas,null,'bar','实际值','#7EFAFC','x');
      option.legend = {
          left: 'left',
          textStyle: {
              color: '#fff'
          }
      }
      option.yAxis= [
          {
              name: '检测量(mg/kg)',
              nameLocation:'center',
              nameGap: 33,
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
      ]
      option.grid = {
        left:'15%',
        right:'10%',
        top:'20%',
        bottom:'15%'
      }
      option.series.push({
        name:'国家标准允许最大值',
        barWidth: 10,
        barGap: document.body.clientWidth > 2000 ? '80%' : '30%',
        type: 'bar',
        data: this.metalMaxDatas,
        itemStyle: {
          normal:{
            color: '#FFCD21',
            'margin-left': 20
          }
        },
      })
      rainChart.setOption(option);
    },
    _drawCityMap() {
      this.$refs.mapChart.style.height = '555px'
      let that = this
      MapLoader().then(AMap => {
        that.map = new AMap.Map(this.$refs.mapChart, {
          center: [105.013664,31.206397],
          zooms: [10,18],
        });
        // 行政区查询服务，提供行政区相关信息
        AMap.plugin('AMap.DistrictSearch',function(){
          var district = new AMap.DistrictSearch({
            // 是否返回行政区边界坐标点
            extensions:'all',
            // 显示下级行政区级数
            subdistrict:0
          })
          district.search('三台县',function(status,result){
            // 边界经纬度
            var bounds = result.districtList[0].boundaries
            var outer = [
                new AMap.LngLat(-360,90,true),
                new AMap.LngLat(-360,-90,true),
                new AMap.LngLat(360,-90,true),
                new AMap.LngLat(360,90,true),
            ];
            var pathArray = [
                outer
            ];
            pathArray.push.apply(pathArray, bounds)
            // 地图边界周围的颜色设置
            var polygon = new AMap.Polygon({
                path:pathArray,
                // 地图边界颜色
                strokeColor: '#000000',
                strokeWeight: 1,
                // 地图外围颜色
                fillColor: '#00224a',
                fillOpacity: 1
            });
            // polygon.setPath(pathArray);
            that.map.add(polygon)
            var polygons=[];
            if (bounds) {
              for (var i = 0, l = bounds.length; i < l; i++) {
                //生成行政区划polygon
                var polygon1 = new AMap.Polygon({
                  map: that.map,
                  strokeWeight: 0,
                  path: bounds[i],
                  fillOpacity: 0,
                  fillColor: '#CCF3FF',
                  strokeColor: '#CC66CC',
                  strokeOpacity: 0
                })
                polygons.push(polygon1)
              }
              // 地图自适应
              that.map.setFitView(polygons)
            }
          })
          that.map.on("complete", function(){
            // 创建自定义事件
            var myEvent = new CustomEvent('done1',{});
            if(window.dispatchEvent) {
              window.dispatchEvent(myEvent);
            } else {
              window.fireEvent(myEvent);
            }
          });
        })
      })
    },
    // 创建信息窗体
    infowindow(a,b){
      this.getinfo(b);
      this.infoWindow = new AMap.InfoWindow({
        content: this.info.join(""),
      });
      this.infoWindow.open(this.map, a);
    },
    // 信息窗体的标签和样式
    getinfo(b){
      this.info = [];
      this.info.push("<div style=\"color:#fff;overflow:hidden;text-align:center\"><span>"+this.allbase[b].baseName+"</span></div>");
    },
    selectAddress(datas, selectedData) {
      this.all();
      if (datas.length != 0) {
        let no = selectedData[1].label.replace(/\D/g, '')
        getBaseIdVideo({serialNumber:datas[0], channelNo:no}).then(res => {
          if(res.success){
            for(let i=0;i<this.allbase.length;i++){
              if(this.allbase[i].id==res.result.baseId){
                this.infowindow(this.allpoint[i].getPosition(),i);
              }
            }
          }else{
            this.$message.warning(res.message);
          }
        })
        this._getAddress(window.localStorage.videoToken, datas[0], datas[1])
      }
    }
  }
}
</script>
<style>
.ivu-input{
  background:#1e3f65 !important;
  border: 1px solid #7efafc !important;
  color: #7efafc !important;
}
.ivu-select-dropdown{
  background:#1e3f65 !important;
}
.ivu-cascader-menu{
  background:#1e3f65 !important;
  border: 1px solid #6ddae0 !important;
}
.ivu-cascader-menu::-webkit-scrollbar{
  width: 5px;
  height: 5px;
}
.ivu-cascader-menu::-webkit-scrollbar-thumb{
  border-radius: 10px;
  -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,1);
  background: #535353;
}

.ivu-cascader-menu::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 10px;
  background: #1e3f65;
}

.ivu-cascader-menu-item{
  color:#6ddae0 !important;
}
.ivu-cascader-menu-item:hover{
  background-color:#00224a!important;
}
.ivu-cascader-menu-item-active{
  background-color:#00224a!important;
}
</style>
<style scoped>
.map >>> .amap-info-content {
  background-color:rgba(35, 35, 35, 0.6);
  border-radius:10px 10px;
  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px;
  }
.map >>> .amap-info-sharp{
  border-top: 8px solid rgba(35, 35, 35, 0.6);
}
.map >>> .amap-info-outer {
  overflow-x: hidden
}
.pointtip{
  width:140px;
  padding:5px;
  background-image:url("../../src/assets/tip.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
</style>
<style lang="stylus">
@media screen and (min-width: 1550px)
  .base-item
    span:nth-of-type(1)
      width 275px !important
      white-space nowrap
  .monitor-message
    width 97px !important
  .special
    width 93px !important
@media screen and (max-width: 1550px)
  .base-item
    span:nth-of-type(1)
      width 275px !important
  .monitor-message
    width 97px !important
  .special
    width 93px !important
@media screen and (min-width: 2000px)
  .pointtip
    width: 250px !important
  .changebut
    width 180px !important
  #media-company
    line-height 26px !important
    margin-top 0 !important
  .base-item
    line-height 20px !important
    span:nth-of-type(1)
      width 535px !important
      white-space nowrap
    span:nth-of-type(2)
      width 100px !important
  .monitor-message
    width 200px !important
  .special
    width 190px !important
  .update-time
    span
      transform scale(0.9)
  .base-message
    margin-top 10px !important
  .map-footer
    height 38px !important
    line-height 1.5 !important
.base1
  min-width 1600px
  background-image url("../../src/assets/background.png")
  background-repeat no-repeat
  background-size 100% 100%
.base-wrapper
  margin 20px 15px 40px 15px
  display flex
  .desc
    height 45px
    color #6ddae0
    font-size 16px
    padding-left 10px
    box-sizing border-box
    .icon
      display inline-block
      width 10px
      height 10px
      border-radius 50%
      margin-right 10px
      vertical-align middle
    .icon1
      display inline-block
      width 10px
      height 10px
      border-radius 50%
      margin-left 10px
      vertical-align middle
    .title
      height 20px
      color #6ddae0
      line-height 20px
    .descs
      font-size 6px
  .pos
    position relative
    .select
      width 200px
      position absolute
      right 26px
      top 50px
    .monitor-title
      color: #fff;
      text-align: center;
      padding-top: 5px;
      font-size: 18px;
      position absolute
      right 10px
      top 5px
  .company-info
    flex 1
    height 850px
    border-radius 6px
    min-width 310px
    .left1
      background-image url("../../src/assets/left1_1.png")
      background-repeat no-repeat
      background-size 100% 100%
    .left_25
      cursor pointer
      width 100%
      height 60px
      margin 10px 0
      background-image url("../../src/assets/move_m.png")
      background-repeat no-repeat
      background-size 100% 100%
    .left2
      background-image url("../../src/assets/left1_2.png")
      background-repeat no-repeat
      background-size 100% 100%
    .company
      height 345px
      width 100%
      padding 0 10px
      box-sizing border-box
      overflow hidden
      img
        margin-top 15px
        width 100%
        height 175px
      .company-desc
        margin-top 15px
        font-size 14px
        color #6ddae0
        line-height 22px
    .monitor
      height 335px
      padding 12% 5% 2% 5%
      .lunbo-wrapper
        height 100%
        .demo
            height 335px
            line-height 335px
            text-align center
            color #fff
            font-size 30px
            background #26374C
        .ivu-carousel-arrow
          background-color rgba(0, 0, 0, 0.2)
        .ivu-carousel-arrow:hover
          background-color rgba(0, 0, 0, 0.5)

  .map-message
    flex 2.2
    height 850px
    margin-left 30px
    min-width 400px
    .map-wrapper
      width 100%
      border-radius 6px
      .center1
        position relative
        padding 10px
        background-image url("../../src/assets/center1_1.png")
        background-repeat no-repeat
        background-size 100% 100%
        .movepoint1
          position absolute
          width 5%
          height 5px
          bottom -2px
          background-image url("../../src/assets/movepoint.png")
          background-repeat no-repeat
          background-size 100% 100%
          animation mymove 10s infinite
          -webkit-animation mymove 10s infinite
        @keyframes mymove
            from {left:0%;}
            to {left:95%;}
        @-webkit-keyframes mymove
            from {left:0%;}
            to {left:95%;}
      .map
        width 100%
        margin 0 auto
        position relative
        height 555px
        .allarea
          position absolute
          padding 0 20px
          background-image url("../../src/assets/tip.png")
          background-repeat no-repeat
          background-size 100% 100%
          right 2%
          bottom 10%
          z-index 99
          .basearea
            text-align center
            font-weight bold
            font-size 40px
            line-height 80px
            color yellow
          .work
            text-align center
            color #fff
            font-size 16px
        .twotip
          position absolute
          left 2%
          bottom 10%
          z-index 99
          .text
            color #fff
          .icon2
            display inline-block
            width 25px
            height 15px
            border-radius 5px
            margin-right 10px
            vertical-align middle
        .tip
          position absolute
          width 54%
          height 30px
          background-image url("../../src/assets/tip.png")
          background-repeat no-repeat
          background-size 100% 100%
          z-index 9999
          top 5px
          left 23%
          color #fff
          text-align center
          line-height 30px
        .changebut
          position absolute
          width 80px
          height 25px
          text-align center
          line-height 25px
          border-radius 5px 5px
          top 10%
          right 2%
          color #fff
          z-index 99999
          cursor pointer
        .point
          position absolute
          left 2%
          top 10%
          z-index 99999
          .text
            color #fff
          .icon1
            display inline-block
            cursor pointer
            width 15px
            height 15px
            border-radius 50%
            margin-right 10px
            vertical-align middle
          .icon3
            display inline-block
            cursor pointer
            width 20px
            height 23px
            margin-right 10px
            vertical-align middle
      .map-footer
        display flex
        height 25px
        color #ffffff
        font-size 16px
        background-color #2E4562
        .earth-count
          border-left 1px solid rgba(255,255,255,0.08)
          border-right 1px solid rgba(255,255,255,0.08)
        .area-count
          border-right 1px solid rgba(255,255,255,0.08)
        div
          flex 1
          text-align center
          span
            font-size 12px
            vertical-align middle
          .count
            color #6DD230
          span:nth-of-type(1)
            display inline-block
            width 12px
            height 12px
            border-radius 50%
          span:nth-of-type(2)
            margin-left 5px
          span:nth-of-type(3)
            margin-left 10px
    .base-message
      margin-top 20px
      height 210px
      .center2
        position relative
        background-image url("../../src/assets/center1_2.png")
        background-repeat no-repeat
        background-size 100% 100%
        .movepoint2
          position absolute
          width 5%
          height 5px
          bottom -2px
          right 0
          background-image url("../../src/assets/movepoint1.png")
          background-repeat no-repeat
          background-size 100% 100%
          animation mymovee 10s infinite
          -webkit-animation mymovee 10s infinite
        @keyframes mymovee
            from {left:95%;}
            to {left:0%;}
        @-webkit-keyframes mymovee
            from {left:95%;}
            to {left:0%;}
      .base
        height 165px
        .base-map
          height 165px
          width 30%
          display inline-block
        .base-info
          width 70%
          height 165px
          display inline-block
          overflow hidden
          text-align: center
          .base-item
            height 26px
            padding 3px 0
            box-sizing border-box
            font-size 12px
            letter-spacing 1px
            .icon
              display inline-block
              width 5px
              height 5px
              border-radius 50%
              margin-right 10px
              vertical-align middle

  .temperature-rain
    flex 1
    margin-left 30px
    height 850px
    display flex
    flex-direction column
    padding-bottom 20px
    min-width 400px
    .right1
      background-image url("../../src/assets/right1_1.png")
      background-repeat no-repeat
      background-size 100% 100%
    .right2
      background-image url("../../src/assets/right1_2.png")
      background-repeat no-repeat
      background-size 100% 100%
    .right3
      background-image url("../../src/assets/right1_3.png")
      background-repeat no-repeat
      background-size 100% 100%
    .airs
      position relative
      flex 1
      margin-top 10px
      .monitor-data
        height 285px
        .lunbo-wrapper
          height: 285px;
          padding-top: 6px;
          box-sizing: border-box;
          .ivu-carousel-arrow
              background-color rgba(0, 0, 0, 0.2)
          .ivu-carousel-arrow:hover
              background-color rgba(0, 0, 0, 0.5)
        .monitor-base
          height: 40px;
          margin-left 10px
          color: #fff;
          font-size: 20px;
          line-height: 20px;
          span
            display inline-block
            height 40px
            line-height 40px
            text-align center
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width:55%;
          .update-time
            width:45%;
            float:right;
            font-size: 16px
            span
              width 100%
              height 20px
              line-height 20px
        .monitor-item:nth-of-type(1)
          margin-top 12px
        .monitor-item
          padding 0 10px
          text-align left
          display flex
          height 40px
          color: #43cfe0
          .monitor-message
            display:inline-block;
            width:97px;
            text-align:right
          div
            flex 1
            line-height 40px
            height 40px
            img
              margin-right 5px
          div:nth-of-type(1)
            margin-right 10px
      .temperature-map, .rain-map
        height 205px
      .rain
        margin-top 46px
      .message-wrapper
        display flex
        height 45px
        color #ffffff
        font-size 16px
        padding-left 10px
        box-sizing border-box
        border-bottom 1px solid rgba(255,255,255,0.08235294117647057)
        div
          padding-left 10px
          box-sizing border-box
    .airs:nth-of-type(1)
      margin-top 0px

</style>

