<template>
    <div class="main">
        <headers></headers>
        <div class="back" @click="backhome">返回</div>
        <div style="padding:0px 20px 40px 20px;">
            <a-row :gutter="16" style="margin:0;">
                <a-col :span="6">
                    <div class="left">
                        <div class="left_main">
                            <div class="left_main_1">
                                <div class="title">
                                    <span class="point"></span>
                                    <span class="work">订单基地采购合同</span>
                                </div>
                                <div class="left_main_1_data">
                                    <div style="margin-bottom:30px;">
                                        <span class="one"></span>
                                        <span class="two">统货预估价格：</span>
                                        <span class="three">{{basepurchase?basepurchase.estimatedPrice:0}}元/公斤</span>
                                    </div>
                                    <a-row :gutter="16">
                                        <a-col :span="8">
                                            <div class="one_data" style="font-size:13px;">{{basepurchase?basepurchase.acreage:0}}亩</div>
                                            <div class="one_pic">
                                                <img src="../assets/m_1.png">
                                            </div>
                                            <div v-if="!status1" class="one_title">总订单采购面积</div>
                                            <div v-else class="one_title">订单采购面积</div>
                                        </a-col>
                                        <a-col :span="8">
                                            <div class="one_data" style="font-size:13px;">{{basepurchase?basepurchase.estimatedOutput:0}}公斤</div>
                                            <div class="one_pic">
                                                <img src="../assets/m_2.png">
                                            </div>
                                            <div class="one_title">预估产量</div>
                                        </a-col>
                                        <a-col :span="8">
                                            <div class="one_data" style="font-size:13px;">{{basepurchase?basepurchase.estimatedValue:0}}万元</div>
                                            <div class="one_pic">
                                                <img src="../assets/m_3.png">
                                            </div>
                                            <div class="one_title">预估总产值</div>
                                        </a-col>
                                    </a-row>
                                </div>
                            </div>
                            <div class="left_main_2">
                                <div class="title">
                                    <span class="point"></span>
                                    <span class="work">规范种植协议</span>
                                </div>
                                <div class="left_main_2_data">
                                    <a-row :gutter="16">
                                        <a-col :span="8">
                                            <div class="one_data">{{boardstandardplan?boardstandardplan.baseCount:0}}个</div>
                                            <div class="one_pic">
                                                <img src="../assets/m_4.png">
                                            </div>
                                            <div class="one_title">托管土地数量</div>
                                        </a-col>
                                        <a-col :span="8">
                                            <div class="one_data">{{boardstandardplan?boardstandardplan.acreage:0}}亩</div>
                                            <div class="one_pic">
                                                <img src="../assets/m_5.png">
                                            </div>
                                            <div class="one_title">托管总土地面积</div>
                                        </a-col>
                                        <a-col :span="8">
                                            <div class="one_data">{{boardstandardplan?boardstandardplan.investment:0}}万元</div>
                                            <div class="one_pic">
                                                <img src="../assets/m_6.png">
                                            </div>
                                            <div class="one_title">预计农资投入</div>
                                        </a-col>
                                    </a-row>
                                </div>
                            </div>
                            <div class="left_main_3">
                                <div class="title">
                                    <span class="point"></span>
                                    <span class="work">质押物权计划</span>
                                </div>
                                <div class="left_main_3_data">
                                    <a-row :gutter="16">
                                        <a-col :span="12">
                                            <div class="left_main_3_data_data" style="margin-top:10px">{{boardpledgegoods?boardpledgegoods.pledgeNum:0}}吨</div>
                                            <Tuxi ref="tuxi1"></Tuxi>
                                            <div class="left_main_3_data_title">预计质押数量</div>
                                        </a-col>
                                        <a-col :span="12">
                                            <div class="left_main_3_data_data" style="margin-top:40px">{{boardpledgegoods?boardpledgegoods.income:0}}元</div>
                                            <Tuxi ref="tuxi2"></Tuxi>
                                            <div class="left_main_3_data_title">预计质押收入</div>
                                        </a-col>
                                    </a-row>
                                </div>
                            </div>
                        </div>
                    </div>
                </a-col>
                <a-col :span="13">
                    <div class="center">
                        <div class="map">
                            <div class="map_title">
                                <span class="map_point"></span>
                                <span class="map_work">数据地图&nbsp;The data map</span>
                                <span class="map_point"></span>
                            </div>
                            <div class="mapmap" ref="mapChart">
                                <div class="allarea">
                                    <a-row :gutter="16">
                                        <a-col :span="6">
                                            <div class="all_1_data">{{boardstandardplan?boardstandardplan.acreage:0}}</div>
                                            <div class="all_1_title">规范化种植面积（亩）</div>
                                        </a-col>
                                        <a-col :span="6">
                                            <div class="all_1_data">{{boardstandardplan?boardstandardplan.investment:0}}</div>
                                            <div class="all_1_title">托管预计投入（万元）</div>
                                        </a-col>
                                        <a-col :span="6">
                                            <div class="all_1_data">{{basepurchase?basepurchase.acreage:0}}</div>
                                            <div v-if="!status1" class="all_1_title">总采购面积（亩）</div>
                                            <div v-else class="all_1_title">采购面积（亩）</div>
                                        </a-col>
                                        <a-col :span="6">
                                            <div class="all_1_data">{{basepurchase?basepurchase.estimatedValue:0}}</div>
                                            <div class="all_1_title">采购面积预估总产值（万元）</div>
                                        </a-col>
                                    </a-row>
                                </div>
                                <div class="twotip">
                                    <div>
                                        <span class="icon2" style="background-color:#00499E"></span>
                                        <span class="text">麦冬核心区</span>
                                    </div>
                                    <div>
                                        <span class="icon2" style="background-color:#7EFAFC"></span>
                                        <span class="text">麦冬适种区</span>
                                    </div>
                                </div>
                                <div class="tip">{{tip}}</div>
                                <div class="changebut" style="background-color:#11A81B;" @click="changemap">切换卫星地图</div>
                                <div class="mappoint">
                                    <div class="pointtip" style="cursor:pointer;" @click="all">
                                        <span class="icon1" style="background-color:red;margin:0 12px 0 3px;" ref="all"></span>
                                        <span class="text">全部</span>
                                        <span class="count" style="display:inline-block;margin-right:5px;float:right;color:#fff;">{{hezuosheL+baseLength+jiatingnongchangL+jinmihezuoL+ziyingL}}</span>
                                    </div>
                                    <div class="base-point pointtip" style="margin-top:5px;cursor:pointer;" @click="ziying1">
                                        <img class="icon3"  src="../assets/ziying.png">
                                        <span class="text">自营基地</span>
                                        <span class="count" style="display:inline-block;margin-right:5px;float:right;color:#fff;">{{ziyingL}}</span>
                                    </div>
                                    <div class="pointtip" style="margin-top:5px;cursor:pointer;" @click="hezuo1">
                                        <img class="icon3"  src="../assets/hezuojd.png" ref="hz">
                                        <span class="text">合作基地</span>
                                        <span class="count" style="display:inline-block;margin-right:5px;float:right;color:#fff;">{{baseLength}}</span>
                                    </div>
                                    <div class="pointtip" style="margin-top:5px;cursor:pointer;" @click="hezuoshe1">
                                        <img class="icon3" src="../assets/hezuoshe.png" ref="hzs">
                                        <span class="text">合作社</span>
                                        <span class="count" style="display:inline-block;margin-right:5px;float:right;color:#fff;">{{hezuosheL}}</span>
                                    </div>
                                        <div class="pointtip" style="margin-top:5px;cursor:pointer;" @click="jiatin1">
                                        <img class="icon3" src="../assets/jiatinnongchang.png" ref="jt">
                                        <span class="text">家庭农场</span>
                                        <span class="count" style="display:inline-block;margin-right:5px;float:right;color:#fff;">{{jiatingnongchangL}}</span>
                                    </div>
                                        <div class="pointtip" style="margin-top:5px;cursor:pointer;" @click="jinmi1">
                                        <img class="icon3" src="../assets/jingmihezuo.png" ref="jm">
                                        <span class="text">紧密合作基地</span>
                                        <span class="count" style="display:inline-block;margin-right:5px;float:right;color:#fff;">{{jinmihezuoL}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="center_main">
                            <a-row :gutter="16">
                                <a-col :span="11">
                                    <div class="center_main_1">
                                        <div class="title">
                                            <span class="point"></span>
                                            <span class="work">物资采购计划</span>
                                        </div>
                                        <div class="center_main_1_data">
                                            <a-carousel autoplay :dots="false">
                                                <div class="lunbo" v-for="(v,k) in boardfertilizerpurchase" :key="k">
                                                    <div class="lunbotitle">{{v.materialName}}</div>
                                                    <div>
                                                        <span class="center_1_point"></span>
                                                        <span class="center_1_title">总采购</span>
                                                    </div>
                                                    <div>
                                                        <span class="center_1_title_1">数量</span>
                                                        <span class="zhuzhuangtu"></span>
                                                        <span class="center_1_title_1">{{v.totalPurchase}}公斤</span>
                                                    </div>
                                                    <div>
                                                        <span class="center_1_title_1">金额</span>
                                                        <span class="zhuzhuangtu1"></span>
                                                        <span class="center_1_title_1">{{v.totalPrice}}元</span>
                                                    </div>
                                                   <div class="margin-wrapper" style="margin-top:15px;">
                                                        <span class="center_1_point"></span>
                                                        <span class="center_1_title">已交付</span>
                                                    </div>
                                                    <div>
                                                        <span class="center_1_title_1">数量</span>
                                                        <span class="zhuzhuangtu11" :style="{ width: ((v.payNum/v.totalPurchase)*180)>5?((v.payNum/v.totalPurchase)*250):5 + 'px' }"></span>
                                                        <span class="center_1_title_1">{{v.payNum?v.payNum:0}}公斤</span>
                                                    </div>
                                                    <div>
                                                        <span class="center_1_title_1">金额</span>
                                                        <span class="zhuzhuangtu22" :style="{ width: ((v.payPrice/v.totalPrice)*130)>5?((v.payPrice/v.totalPrice)*200):5 + 'px' }"></span>
                                                        <span class="center_1_title_1">{{v.payPrice?v.payPrice:0}}元</span>
                                                    </div>
                                                </div>
                                            </a-carousel>
                                        </div>
                                    </div>
                                </a-col>
                                <a-col :span="13">
                                    <div class="center_main_2">
                                        <div class="title">
                                            <span class="point"></span>
                                            <span class="work">订单采购计划</span>
                                        </div>
                                        <div class="right_main_1_data">
                                            <table class="table1" border="1">
                                                <tr>
                                                    <th>签订公司</th>
                                                    <th>产品等级/数量</th>
                                                    <!-- <th>产品数量</th> -->
                                                    <th>产品价格</th>
                                                    <th>交付时间</th>
                                                </tr>
                                            </table>
                                            <div id="srollbox" class="table2">
                                                <table id="sroll" style="width:100%;height:100%;position:relative; top:0">
                                                    <tr v-for="(v,k) in boardordercontract" :key="k">
                                                        <td>{{v.partyB}}</td>
                                                        <td>{{v.level}}/{{v.total}}</td>
                                                        <!-- <td>{{v.total}}</td> -->
                                                        <td>{{v.price}}元/公斤</td>
                                                        <td>{{v.deliveryTime}}</td>
                                                    </tr>
                                                </table>
                                                <table id="sroll1" style="width:100%;height:100%;position:relative; top:0">
                                                    <tr v-for="(v,k) in boardordercontract" :key="k">
                                                        <td>{{v.partyB}}</td>
                                                        <td>{{v.level}}/{{v.total}}</td>
                                                        <!-- <td>{{v.total}}</td> -->
                                                        <td>{{v.price}}元/公斤</td>
                                                        <td>{{v.deliveryTime}}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <!-- <div class="center_main_2_data">
                                            <div class="left_main_3_data_data">{{boardLabordispatch.totalCost}}元</div>
                                            <Tuxi ref="tuxi3"></Tuxi>
                                            <div class="left_main_3_data_title">总预计劳务费用</div>
                                        </div> -->
                                    </div>
                                </a-col>
                            </a-row>
                        </div>
                    </div>
                </a-col>
                <a-col :span="5">
                    <div class="right">
                        <div class="right_main">
                            <div class="right_main_1">
                                <div class="title">
                                    <span class="point"></span>
                                    <span class="work">劳务派遣计划</span>
                                </div>
                                <div class="center_main_2_data">
                                    <div class="left_main_3_data_data">{{boardLabordispatch?boardLabordispatch.totalCost:0}}元</div>
                                    <Tuxi ref="tuxi3"></Tuxi>
                                    <div class="left_main_3_data_title">总预计劳务费用</div>
                                </div>
                                <!-- <div class="right_main_1_data">
                                    <table class="table1" border="1">
                                        <tr>
                                            <th>签订公司</th>
                                            <th>产品等级</th>
                                            <th>产品数量</th>
                                            <th>产品价格</th>
                                            <th>交付时间</th>
                                        </tr>
                                    </table>
                                    <div class="table2">
                                        <table>
                                            <tr v-for="(v,k) in boardordercontract" :key="k">
                                                <td>{{v.partyB}}</td>
                                                <td>{{v.level}}</td>
                                                <td>{{v.total}}</td>
                                                <td>{{v.price}}元/公斤</td>
                                                <td>{{v.deliveryTime}}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>     -->
                            </div>
                            <div class="right_main_2">
                                <div class="title">
                                    <span class="point"></span>
                                    <span class="work">贷款计划</span>
                                </div>
                                <div class="right_main_2_data">
                                    <table class="table1" border="1">
                                        <tr>
                                            <th></th>
                                            <th>抵押物</th>
                                            <th>贷款金额</th>
                                            <th>贷款利率</th>
                                        </tr>
                                    </table>
                                    <div class="table2">
                                        <table>
                                            <tr v-for="(v,k) in boardloancontract" :key="k">
                                                <td style="font-size:16px;color:rgba(167,254,255,1);padding:10px 5px;">{{v.type==1?'物资贷款':'人资贷款'}}</td>
                                                <td>{{v.collateral}}</td>
                                                <td>{{v.loan_amount}}元</td>
                                                <td>{{v.exchange_rate}}‰</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>    
                            </div>
                            <div class="right_main_3">
                                <div class="title">
                                    <span class="point"></span>
                                    <span class="work">保险</span>
                                </div>
                                <div class="right_main_3_data">
                                    <a-row :gutter="16">
                                        <a-col :span="12">
                                            <div class="right_main_3_data_img_1">
                                                <img src="../assets/m_7.png">
                                                <span>{{boardinsurancecontract?boardinsurancecontract.cost:0}}元</span>
                                                <div class="rm3di_title">保单总费用</div>
                                            </div>
                                        </a-col>
                                        <a-col :span="12">
                                            <div class="right_main_3_data_img_2">
                                                <img src="../assets/m_8.png">
                                                <span>{{boardinsurancecontract?boardinsurancecontract.num:0}}亩</span>
                                                <div class="rm3di_title" style="margin-top:25px;">保单总保面积</div>
                                            </div>
                                        </a-col>
                                    </a-row>
                                    <div v-if="status" class="timetitle">{{boardinsurancecontract.startTime}}&nbsp;~&nbsp;{{boardinsurancecontract.endTime}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
        <Foot style="margin:0;"/>
    </div>
</template>
<script>
import roll from '../assets/js/roll.js';
import headers from '@/components/header/header1'
import Foot from '@/components/layouts/GlobalFooter.vue'
import Tuxi from '@/components/polygonal/tuxing.vue'
import MapLoader from '@/utils/loadMap.js'
import axios from 'axios'
import { getAllBase,basePurchase,getBoardStandardPlan,getBoardPledgeGoods,getBoardFertilizerPurchase,getBoardLaborDispatch,getBoardInsuranceContract,getBoardOrderContract,getBoardLoanContract } from '@/api/allapi'

export default {
    components:{
        headers,
        Foot,
        Tuxi
    },
    data(){
        return{
            mapChart:'',
            basepurchase:null,
            boardstandardplan:null,
            boardpledgegoods:null,
            boardfertilizerpurchase:[],
            boardLabordispatch:null,
            status:false,
            status1:false,
            boardinsurancecontract:null,
            boardordercontract:[],
            boardloancontract:[],
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
            blockinfo:[],
            polygonss:[],
            allbasearea:0,
            baseLength: 0,
            totalArea: 0,
            baseinfo:[],
            allbase:[],
            allpoint:[],
            map:null,
            baseScroll:{},
            geo:null,
            lsz:['中太镇','光辉镇','高堰乡','金鼓乡','百顷镇'],
            ssz:['芦溪镇','永明镇','老马镇','争胜镇','花园镇','刘营镇','里程镇','灵兴镇','永新镇'],
        }
    },
    created(){
        axios.get('json/santai.json').then((res)=>{
            this.geo=res.data;
    })
        basePurchase().then(res=>{
            if(res.success){
                this.basepurchase=res.result;
                if(this.basepurchase){
                    let par=this.basepurchase.estimatedValue/10000;
                    this.basepurchase.estimatedValue=par.toFixed(2);
                }
            }
        });
        getBoardStandardPlan().then(res=>{
            if(res.success){
                this.boardstandardplan=res.result;
                if(this.basepurchase){
                    let par=this.boardstandardplan.investment/10000;
                    this.boardstandardplan.investment=par.toFixed(2);
                }
            }
        });
        getBoardPledgeGoods().then(res=>{
            if(res.success){
                this.boardpledgegoods=res.result;
            }
        });
        getBoardFertilizerPurchase().then(res=>{
            if(res.success){
                this.boardfertilizerpurchase=res.result;
            }
        });
        getBoardLaborDispatch().then(res=>{
            if(res.success){
                this.boardLabordispatch=res.result;
            }
        });
        getBoardInsuranceContract().then(res=>{
            if(res.success){
                this.boardinsurancecontract=res.result;
                this.status=false;
            }
        });
        getBoardOrderContract().then(res=>{
            if(res.success){
                this.boardordercontract=res.result;
                this.$nextTick(() => {
                    if (this.baseScroll) {
                        clearInterval(this.baseScroll.timer);
                    }
                    let height=document.getElementById('sroll').offsetHeight;
                    this.baseScroll = new roll.Roll('srollbox', 'sroll', 'sroll1', -height+5);
                })
            }
        });
        getBoardLoanContract().then(res=>{
            if(res.success){
                this.boardloancontract=res.result;
            }
        })
    },
    mounted(){
        this.$refs.tuxi1.change(1);
        this.$refs.tuxi2.change(2);
        this.$refs.tuxi3.change(3);

        let that=this;
        that.allbasearea=0;
        getAllBase().then(res=>{
            if(res.success){
                that.allinfo=res.result;
                this._drawCityMap()   
            }
        })
        window.addEventListener('doneenod', function(){
            let googleLayer = new AMap.TileLayer({
                getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile'
            });
            let roadNetLayer = new AMap.TileLayer.RoadNet({
                opacity:0
            });
            that.map.setLayers([googleLayer,roadNetLayer]);
            // axios.get('json/blockinfo.json').then((res)=>{
            //     that.blockinfo=res.data.result;
            //     that.addBlockOnMap();
            // })
            let aaa=new AMap.GeoJSON({
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
                            strokeWeight: 2,
                            fillColor: '#fff'
                        });
                    }
                    
                }
            })
            aaa.setMap(that.map);

            that.baseinfo=[];
            that.jinmihezuo2=[];
            that.hezuoshe2=[];
            that.ziying2 = []
            that.jiatingnongchang2=[];
            that.baseLength=0;
            that.jinmihezuoL=0;
            that.ziyingL = 0
            that.hezuosheL=0;
            that.jiatingnongchangL=0;

            for(let i=0;i<that.allinfo.length;i++){
                if(that.allinfo[i].baseType.value==2){
                    that.totalArea += that.allinfo[i].acreage
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
                    marker.on("click",function(e) { that.changedata(that.allinfo[i].id);that.tip=that.allinfo[i].baseName});
                    marker.on("mousemove",function(e) {
                        marker.setIcon(jicon1)
                    });
                    marker.on("mouseout",function(e) {
                        marker.setIcon(jicon);
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
                    marker1.on("click",function(e) { that.changedata(that.allinfo[i].id);that.tip=that.allinfo[i].baseName;});
                    marker1.on("mousemove",function(e) {marker1.setIcon(hicon1);});
                    marker1.on("mouseout",function(e) {marker1.setIcon(hicon);});
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
                    marker2.on("click",function(e) { that.changedata(that.allinfo[i].id);that.tip=that.allinfo[i].baseName});
                    marker2.on("mousemove",function(e) {marker2.setIcon(nicon1)});
                    marker2.on("mouseout",function(e) {marker2.setIcon(nicon)});
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
                    marker3.on("click",function(e) { that.changedata(that.allinfo[i].id);that.tip=that.allinfo[i].baseName});
                    marker3.on("mousemove",function(e) {marker3.setIcon(micon1)});
                    marker3.on("mouseout",function(e) {marker3.setIcon(micon)});
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
                    marker.on("click",function(e) {that.changedata(that.ziying2[i].id);that.tip=that.ziying2[i].baseName});
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
    methods:{
        backhome(){
            this.$router.push({ name: 'home'});
        },
        changedata(id){
            basePurchase({baseId:id}).then(res=>{
                if(res.success){
                    this.basepurchase=res.result;
                    if(this.basepurchase){
                        let par=this.basepurchase.estimatedValue/10000;
                        this.basepurchase.estimatedValue=par.toFixed(2);
                    }
                    this.status1=true;
                }
            });
            getBoardStandardPlan({baseId:id}).then(res=>{
                if(res.success){
                    this.boardstandardplan=res.result;
                    if(!this.boardstandardplan.acreage){
                        this.boardstandardplan.acreage=0;
                    }
                    if(this.boardstandardplan){
                        let par=this.boardstandardplan.investment/10000;
                        this.boardstandardplan.investment=par.toFixed(2);
                    }
                }
            });
            getBoardPledgeGoods({baseId:id}).then(res=>{
                if(res.success){
                    this.boardpledgegoods=res.result;
                }
            });
            getBoardInsuranceContract({baseId:id}).then(res=>{
                if(res.success){
                    this.boardinsurancecontract=res.result;
                    if(this.boardinsurancecontract){
                        this.status=true;
                    }
                }
            });
        },
        _drawCityMap() {
            this.$refs.mapChart.style.height = '530px'
            let that = this
            MapLoader().then(AMap => {
                that.map = new AMap.Map(this.$refs.mapChart, {
                    center: [105.013664,31.206397],
                    zooms: [10,18],
                });
                AMap.plugin('AMap.DistrictSearch',function(){
                    var district=new AMap.DistrictSearch({
                        extensions:'all',
                        subdistrict:0
                    })
                    district.search('三台县',function(status,result){
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
                        pathArray.push.apply(pathArray,bounds)
                        var polygon = new AMap.Polygon( {
                            path:pathArray,
                            strokeColor: '#000000',
                            strokeWeight: 1,
                            fillColor: '#00224a',
                            fillOpacity: 1
                        });
                        polygon.setPath(pathArray);
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
                        var myEvent = new CustomEvent('doneenod',{});
                        if(window.dispatchEvent) {
                            window.dispatchEvent(myEvent);
                        } else {
                            window.fireEvent(myEvent);
                        }
                    });
                })
            })
        },
        addBlockOnMap(){
            for(let i=0;i<this.blockinfo.length;i++){
                let item = this.blockinfo[i];
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
                    this.map.add(polygon2);
                }
            }
        },
        removepoint(){
            this.map.remove(this.markers);
            this.map.remove(this.hezuoshe);
            this.map.remove(this.jiatingnongchang);
            this.map.remove(this.jinmihezuo);
            this.map.remove(this.ziying)
        },
        all(){
            this.tip='';
            basePurchase().then(res=>{
                if(res.success){
                    this.basepurchase=res.result;
                    if(this.basepurchase){
                        let par=this.basepurchase.estimatedValue/10000;
                        this.basepurchase.estimatedValue=par.toFixed(2);
                    }
                    this.status1=false;
                }
            });
            getBoardStandardPlan().then(res=>{
                if(res.success){
                    this.boardstandardplan=res.result;
                    if(!this.boardstandardplan.acreage){
                        this.boardstandardplan.acreage=0;
                    }
                    if(this.boardstandardplan){
                        let par=this.boardstandardplan.investment/10000;
                        this.boardstandardplan.investment=par.toFixed(2);
                    }else{
                        this.boardstandardplan.investment=0;
                    }
                }
            });
            getBoardPledgeGoods().then(res=>{
                if(res.success){
                    this.boardpledgegoods=res.result;
                }
            });
            getBoardInsuranceContract().then(res=>{
                if(res.success){
                    this.boardinsurancecontract=res.result;
                    this.status=false;
                }
            });
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
                marker.on("click",function(e) {that.changedata(that.baseinfo[i].id);that.tip=that.baseinfo[i].baseName });
                marker.on("mousemove",function(e) {marker.setIcon(jicon1)});
                marker.on("mouseout",function(e) {marker.setIcon(jicon)});
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
                marker.on("click",function(e) {that.changedata(that.hezuoshe2[i].id);that.tip=that.hezuoshe2[i].baseName});
                marker.on("mousemove",function(e) {marker.setIcon(hicon1)});
                marker.on("mouseout",function(e) {marker.setIcon(hicon)});
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
                marker.on("click",function(e) {that.changedata(that.jiatingnongchang2[i].id);that.tip=that.jiatingnongchang2[i].baseName });
                marker.on("mousemove",function(e) {marker.setIcon(nicon1)});
                marker.on("mouseout",function(e) {marker.setIcon(nicon)});
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
                marker.on("click",function(e) {that.changedata(that.jinmihezuo2[i].id);that.tip=that.jinmihezuo2[i].baseName;});
                marker.on("mousemove",function(e) {
                    marker.setIcon(micon1)
                });
                marker.on("mouseout",function(e) {marker.setIcon(micon)});
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
                marker.on("click",function(e) {that.changedata(that.ziying2[i].id);that.tip=that.ziying2[i].baseName});
                marker.on("mousemove",function(e) {
                marker.setIcon(zicon1);
                    that.tip=that.ziying2[i].baseName;
                });
                marker.on("mouseout",function(e) {marker.setIcon(zicon);that.tip=''});
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
                marker.on("click",function(e) {that.changedata(that.baseinfo[i].id);that.tip=that.baseinfo[i].baseName});
                marker.on("mousemove",function(e) {marker.setIcon(jicon1)});
                marker.on("mouseout",function(e) {marker.setIcon(jicon)});
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
                marker.on("click",function(e) {that.changedata(that.hezuoshe2[i].id);that.tip=that.hezuoshe2[i].baseName});
                marker.on("mousemove",function(e) {marker.setIcon(hicon1)});
                marker.on("mouseout",function(e) {marker.setIcon(hicon)});
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
                marker.on("click",function(e) { that.changedata(that.jiatingnongchang2[i].id);that.tip=that.jiatingnongchang2[i].baseName});
                marker.on("mousemove",function(e) {marker.setIcon(nicon1)});
                marker.on("mouseout",function(e) {marker.setIcon(nicon)});
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
                marker.on("click",function(e) {that.changedata(that.ziying2[i].id);that.tip=that.ziying2[i].baseName});
                marker.on("mousemove",function(e) {marker.setIcon(micon1);that.tip=that.ziying2[i].baseName});
                marker.on("mouseout",function(e) {marker.setIcon(micon);that.tip=''});
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
                marker.on("click",function(e) {that.changedata(that.jinmihezuo2[i].id);that.tip=that.jinmihezuo2[i].baseName});
                marker.on("mousemove",function(e) {marker.setIcon(micon1)});
                marker.on("mouseout",function(e) {marker.setIcon(micon)});
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
    },
}
</script>
<style scoped>
@media screen and (min-width: 2000px) {
    .margin-wrapper {
        margin-top: 0px !important
    }
}
.mapmap >>> .amap-logo{
  display:none !important;
}
.mapmap >>> .amap-copyright{
  visibility: hidden !important;
}
.main{
    min-width:1600px;
    background-image:url("../../src/assets/background.png");
    background-repeat:no-repeat;
    background-size:100% 100%;
}
.left{
    width: 100%;
    height: 850px;
    padding-top:20px;
}
.center{
    width: 100%;
    height: 850px;
}
.right{
    width: 100%;
    height: 850px;
    padding-top:20px;
}
.left_main,.right_main{
    height: 830px;
    background:rgba(13,46,83,0.8);
}
.back{
    position: relative;
    left:30px;
    width:70px;
    margin-top:20px;
    height:30px;
    border-radius:5px;
    background:#7EFAFC;
    line-height:30px;
    text-align:center;
    color:#17375A;
    cursor:pointer;
}
.map{
    position: relative;
    top:-15px;
    background:rgba(13,46,83,0.8);
    height: 585px;
    padding-top:20px;
    margin-bottom: 5px;
}
.map_title{
    margin: auto;
    text-align: center;
    width:480px;
    height:36px;
    background:linear-gradient(90deg,rgba(10,44,81,0.51),rgba(51,116,173,0.51),rgba(10,44,81,0.51));
}
.map_point{
    display: inline-block;
    vertical-align: middle;
    width:6px;
    height:36px;
    background:rgba(167,254,255,1);
    border-radius:3px;
}
.map_work{
    display: inline-block;
    vertical-align: middle;
    margin:0 10px 0 10px;
    height:36px;
    line-height: 36px;
    font-size:20px;
    font-weight:400;
    color:rgba(126,250,252,1);
}
.center_main{
    height:200px;
}
.left_main_1{
    height: 280px;
}
.left_main_2{
    height: 260px;
}
.left_main_3{
    height: 290px;
}
.right_main_1{
    height: 305px;
}
.right_main_2{
    height: 305px;
}
.right_main_3{
    height: 200px;
}
.center_main_1,.center_main_2{
    background:rgba(13,46,83,0.8);
    height: 260px;
}
.title{
    height:36px;
    background:linear-gradient(90deg,rgba(70,152,215,0.51),rgba(13,46,83,0));
}
.point{
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    width:6px;
    height:36px;
    background:rgba(167,254,255,1);
    border-radius:3px;
}
.work{
    display: inline-block;
    vertical-align: middle;
    height:36px;
    line-height: 36px;
    font-size:20px;
    font-weight:400;
    color:rgba(126,250,252,1);
}
.left_main_1_data{
    height:244px;
    padding: 20px;
}
.left_main_2_data{
    height:224px;
    padding: 40px 20px 20px 20px;
}
.left_main_3_data{
    height:254px;
}
.center_main_1_data{
    height:224px;
    padding: 10px 20px 20px 20px;
}
.center_main_2_data{
    height:269px;
    padding: 10px;
}
.right_main_3_data{
    height: 184px;
    padding: 22px 20px;
}
.right_main_2_data{
    height:269px;
    padding:20px;
}
.right_main_1_data{
    height:224px;
    padding:10px;
}
.left_main_1_data span{
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    color: #A7FEFF;
}
.left_main_1_data .one{
    width:12px;
    height:12px;
    background:rgba(167,254,255,1);
    border-radius:50%;
    margin-right:10px;
}
.left_main_3_data_data{
    text-align: center;
    font-size:14px;
    color:rgba(255,255,255,1);
    line-height:32px;
}
.left_main_3_data_title{
    text-align: center;
    font-size:14px;
    color:rgba(255,255,255,1);
    line-height:32px;
}
.lunbo span{
    vertical-align: middle;
    display: inline-block;
}
.lunbotitle{
    text-align: center;
    color: #fff;
}
.center_1_point{
    width:10px;
    height:10px;
    background:rgba(126,250,252,1);
    border-radius:50%;
}
.center_1_title{
    margin-left:5px;
    font-size:16px;
    color:rgba(167,254,255,1);
    line-height:25px;
}
.center_1_title_1{
    font-size:16px;
    color:rgba(255,255,255,1);
    line-height:25px;
}
.zhuzhuangtu{
    width:180px;
    height:14px;
    background:rgba(6,115,236,1);
    border-radius:3px;
    margin:0 10px;
}
.zhuzhuangtu1{
    width:130px;
    height:14px;
    background:rgba(167,254,255,1);
    border-radius:3px;
    margin:0 10px;
}
.zhuzhuangtu11{
    height:14px;
    background:rgba(6,115,236,1);
    border-radius:3px;
    margin:0 10px;
}
.zhuzhuangtu22{
    height:14px;
    background:rgba(167,254,255,1);
    border-radius:3px;
    margin:0 10px;
}
.right_main_1_data .table1,.right_main_2_data .table1{
    width:100%;
    height:30px;
    text-align: center;
    background:rgba(5,34,67,1);
    border:1px solid rgba(2,27,55,1);
}
.right_main_1_data .table1 th,.right_main_2_data .table1 th{
    width:20%;
    border: 1px solid rgba(2,27,55,1);
}
.right_main_2_data .table2{
    width:100%;
    height:199px;
    scrollbar-width: none;
    overflow-y:scroll; 
}
.right_main_1_data .table2{
    width:100%;
    height:173px;
    overflow-y:hidden; 
}
.table2::-webkit-scrollbar{
  width: 0px;
  height: 0px;
}
.right_main_1_data .table2 table,.right_main_2_data .table2 table{
    width:100%;
    text-align: center;
    background:rgba(5,34,67,1);
    border:1px solid rgba(2,27,55,1);
}
.right_main_1_data .table2 table td,.right_main_2_data .table2 table td{
    width:25%;
    text-align: center;
    background:rgba(5,34,67,1);
    border:1px solid rgba(2,27,55,1);
}

.right_main_1_data table th,.right_main_2_data table th{
    color: #A7FEFF;
    font-size: 16px;
}
.right_main_2_data table td,.right_main_1_data table td{
    color: #fff;
    font-size: 14px;
    padding: 5px;
}
.right_main_3_data img,.right_main_3_data span{
    display: inline-block;
    vertical-align: middle;
}
.right_main_3_data span{
    font-size:24px;
    color:rgba(255,255,255,1);
    line-height:32px;
    margin-left:5px;
}
.right_main_3_data .rm3di_title{
    font-size:16px;
    color:rgba(167,254,255,1);
    line-height:32px;
    margin-top:15px;
}
.right_main_3_data_img_1,.right_main_3_data_img_2{
    height:120px;
    background:rgba(2,27,58,0.6);
    border-radius:12px;
    text-align: center;
    padding-top:20px; 
}
.one_data,.one_pic,.one_title{
    text-align: center;
}
.one_data,.one_title{
    font-size:14px;
    color:rgba(255,255,255,1);
    line-height:20px;
}
.one_data{
    font-size:18px;
    margin-bottom:10px;
}
.mapmap{
    width: 100%;
    margin: 0 auto;
    position: relative;
    height: 530px;
}
.mapmap .allarea{
    width:96%;
    height:70px;
    position: absolute;
    background-image: url("../../src/assets/mapbottom.png") ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    right: 2%;
    bottom: 1%;
    z-index: 99;
}   
.mapmap .allarea .basearea{
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    line-height: 80px;
    color: yellow;
}   
.mapmap .allarea .work{
    text-align: center;
    color: #fff;
    font-size: 16px;
} 
.mapmap .twotip{
    position: absolute;
    right: 2%;
    bottom: 18%;
    z-index: 99;
}
.mapmap .twotip .text{
    color: #fff;
}
.mapmap .twotip .icon2{
    display: inline-block;
    width: 25px;
    height: 15px;
    border-radius: 5px;
    margin-right: 10px;
    vertical-align: middle;
}
.mapmap .tip{
    position: absolute;
    width: 54%;
    height: 30px;
    font-size: 16px;
    background-image: url("../../src/assets/tip.png") ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 9999;
    top: 5px;
    left: 23%;
    color: #fff;
    text-align: center;
    line-height: 30px;
}           
.mapmap .changebut{
    position: absolute;
    width: 80px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 5px 5px;
    top: 10%;
    right: 2%;
    color: #fff;
    z-index: 99999;
    cursor: pointer;
}
.mapmap .mappoint{
    position: absolute;
    left: 2%;
    top: 10%;
    z-index: 99999;
}
.mapmap .mappoint .text{
    color: #fff;
}
.mapmap .mappoint .icon1{
    display: inline-block;
    cursor: pointer;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
}
.mapmap .mappoint .icon3{
    display: inline-block;
    cursor: pointer;
    width: 20px;
    height: 23px;
    margin-right: 10px;
    vertical-align: middle;
}
.pointtip{
  width:140px;
  padding:5px; 
  background-image:url("../../src/assets/tip.png");
  background-repeat:no-repeat;
  background-size:100% 100%;  
}
.all_1_data{
    margin-top:5px;
    height:35px;
    text-align: center;
    font-size:24px;
    color:rgba(169,254,255,1);
}
.all_1_title{
    text-align: center;
    font-size:14px;
    color:rgba(255,255,255,1);
}
.timetitle{
    text-align:center;
    color:#fff;
    font-size:16px;
    line-height:30px;
}
.ant-carousel >>> .slick-slide {
    height: 204px;
    overflow: hidden;
}
</style>