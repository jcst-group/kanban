<template>
    <div class="artel-wrapper">
        <div class="header">
            <span>
                {{equipmentName}}
            </span>
        </div>
        <div class="content">
            <div class="flex-wrapper">
                <div class="main-content">
                    <content-chart class="content-charts" style="margin-top: 50px" :dataObj='airData' @changeTab='(obj, index) => getTab(obj, index, "air")'>
                        <a-carousel class="lunbo-wrapper" :dots='false' ref="airLunboWrapper">
                            <div class="lunbo" v-for="(item,index) in airData.arr" :key="index">
                                <artechart :item="item" :dataSource='item.data'></artechart>
                            </div>
                        </a-carousel>
                    </content-chart>
                    <content-chart class="content-charts" style="margin-top: 50px" :dataObj='baseData' @changeTab='(obj, index) => getTab(obj, index, "base")'>
                        <a-carousel class="lunbo-wrapper" :dots='false' ref="baseLunboWrapper">
                            <div class="lunbo" v-for="(item,index) in baseData.arr" :key="index">
                                <arthchart :itemObj='item' :dataSource='item.data'></arthchart>
                            </div>
                        </a-carousel>
                    </content-chart>
                </div>
                <div class="main-content">
                    <div class="middle-content map">
                        <div class="content-header">
                            <div class="bar"></div>
                            <span>站点图</span>
                        </div>
                        <div class="map-content" id="mapcontent"></div>
                    </div>
                    <div class="middle-content state">
                        <div class="content-header">
                            <div class="bar"></div>
                            <span>系统状态/参数</span>
                            <div class="date-wrapper">
                                <span>更新时间</span>
                                <span>{{equipmentObj.monitorTime}}</span>
                            </div>
                        </div>
                        <div class="table-content" v-if="equipmentObj.equipment">
                            <div class="item item1">
                                <span>经度坐标：</span>
                                <span>{{equipmentObj.lng}}</span>
                            </div>
                            <div class="item item2">
                                <span>设备状态：</span>
                                <span style="color: #FFCB15">在线</span>
                            </div>
                            <div class="item item3">
                                <span>纬度坐标：</span>
                                <span>{{equipmentObj.lat}}</span>
                            </div>
                            <div class="item item4">
                                <span>通信状态：</span>
                                <span style="color: #FFCB15">正常</span>
                            </div>
                            <div class="item item5">
                                <div class="text-wrapper" v-for="(item,index) in iconData" :key="index">
                                    <img :src="item.imgUrl" width="25" height="25" class="icon">
                                    <div class="text-flex">
                                        <span>{{item.text.title}}</span>
                                        <span>{{item.text.num}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-content">
                    <content-chart style="margin-top:50px" class="content-charts" :dataObj='rainData' @changeTab='(obj, index) => getTab(obj, index, "rain")'>
                        <a-carousel class="lunbo-wrapper" :dots='false' ref="rainLunboWrapper">
                            <div class="lunbo" v-for="(item,index) in rainData.arr" :key="index">
                                <artechart :item="item" :dataSource='item.data' :chartType='"降雨量(mm)"'></artechart>
                            </div>
                        </a-carousel>
                    </content-chart>
                    <content-chart style="margin-top:50px" class="content-charts" :dataObj='soilData' @changeTab='(obj, index) => getTab(obj, index, "soil")'>
                        <a-carousel class="lunbo-wrapper" :dots='false' ref="soilLunboWrapper">
                            <div class="lunbo" v-for="(item,index) in soilData.arr" :key="index">
                                <artechart :item="item" :dataSource='item.data'></artechart>
                            </div>
                        </a-carousel>
                    </content-chart>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const airData = {
    name: '大气环境',
    arr: [
        {
            name: '温度',
            unit: '(℃)'
        },
        {
            name: '压力',
            unit: '(kPa)'
        },
        {
            name: '湿度',
            unit: '(%)'
        },
        {
            name: 'PM2.5',
            unit: '(ug/m³)',
        },
        {
            name: 'CO2浓度',
            unit: '(ppm)'
        }
    ]
}
const baseData = {
    name: '风向风速图',
    arr: [
        {
            name: '日',
            id: 'day'
        },
        {
            name: '月',
            id: 'month'
        },
        {
            name: '年',
            id: 'year'
        },
        {
            name: '空',
            id: 'null'
        }
    ]
}
const rainData = {
    name: '降雨量',
    arr: [
        {
            name: '小时',
            xDatas: ['0小时', '1小时', '2小时', '3小时', '4小时', '5小时', '6小时', '7小时', '8小时', '9小时', '10小时', '11小时', '12小时', '13小时', '14小时', '15小时', '16小时', '17小时', '18小时', '19小时', '20小时', '21小时', '22小时', '23小时']
        },
        {
            name: '日',
            xDatas: ['1天', '2天', '3天', '4天', '5天', '6天', '7天', '8天', '9天', '10天', '11天', '12天', '13天', '14天', '15天', '16天', '17天', '18天', '19天', '20天', '21天', '22天', '23天', '24天', '25天', '26天', '27天', '28天', '29天', '30天', '31天']
        },
        {
            name: '月',
            xDatas: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ]
}
const soilData = {
    name: '土壤环境',
    arr: [
        {
            name: '温度',
            unit: '(℃)'
        },
        {
            name: '湿度',
            unit: '(%)'
        },
        {
            name: 'PH值',
            unit: ''
        },
        {
            name: '土壤电导率',
            unit: '(uS/cm)'
        },
        {
            name: '光照度',
            unit: '(Lux)'
        }
    ]
}
const iconData = [
    {
        imgUrl: require('../../public/artel/大气温度.png'),
        text: {
            title: '大气温度',
            num: '24.1',
            key: 'airTemperature',
            unit: '℃'
        }
    },
    {
        imgUrl: require('../../public/artel/风速.png'),
        text: {
            title: '风速',
            num: '4.2',
            key: 'windSpeed',
            unit: 'm/s'
        }
    },
    {
        imgUrl: require('../../public/artel/土壤温度.png'),
        text: {
            title: '土壤温度',
            num: '26.5',
            key: 'soilTemperature',
            unit: '℃'
        }
    },
    {
        imgUrl: require('../../public/artel/大气湿度.png'),
        text: {
            title: '大气湿度',
            num: '61.3',
            key: 'airHumidity',
            unit: '%'
        }
    },
    {
        imgUrl: require('../../public/artel/风向.png'),
        text: {
            title: '风向',
            num: '',
            key: 'windDirection',
            unit: '°'
        }
    },
    {
        imgUrl: require('../../public/artel/土壤湿度.png'),
        text: {
            title: '土壤湿度',
            num: '85.5',
            key: 'soilHumidity',
            unit: '%'
        }
    },
    {
        imgUrl: require('../../public/artel/大气压力.png'),
        text: {
            title: '大气压力',
            num: '101.8',
            key: 'airPressure',
            unit: 'kPa'
        }
    },
    {
        imgUrl: require('../../public/artel/今日降雨量.png'),
        text: {
            title: '今日降雨量',
            num: '0',
            key: 'rainfall',
            unit: 'mm'
        }
    },
    {
        imgUrl: require('../../public/artel/PH.png'),
        text: {
            title: '土壤PH值',
            num: '5.9',
            key: 'soilPh',
            unit: ''
        }
    },
    {
        imgUrl: require('../../public/artel/CO2浓度.png'),
        text: {
            title: 'CO2浓度',
            num: '5.9',
            key: 'co2Value',
            unit: 'ppm'
        }
    },
    {
        imgUrl: require('../../public/artel/PM2.5.png'),
        text: {
            title: 'PM2.5',
            num: '5.9',
            key: 'pm25Value',
            unit: 'ug/m³'
        }
    },
    {
        imgUrl: require('../../public/artel/光照度.png'),
        text: {
            title: '光照度',
            num: '5.9',
            key: 'illIntensity',
            unit: 'Lux'
        }
    },
    {
        imgUrl: require('../../public/artel/土壤电导率.png'),
        text: {
            title: '土壤电导率',
            num: '5.9',
            key: 'soilEc',
            unit: 'uS/cm'
        }
    },
]
// import { getLongitudeById } from '@/api/allapi'
import {
    getEquipmentLng,
    getAtmosphereData,
    getSoilData,
    getLastMonitor2,
    getRainData,
    chartWsrose
} from '@/api/allapi' 
import contentChart from '@/components/contentChart/contentChart'
import artechart from '@/components/artelEcharts/artechart'
import arthchart from '@/components/artelEcharts/arthchart'
import MapLoader from '@/utils/loadMap.js'
export default {
    name: 'artel',
    data () {
        return {
            airData,
            baseData,
            rainData,
            soilData,
            iconData,
            date: '',
            map:null,
            equipmentName: '',
            equipmentObj: {}
        }
    },
    components: {
        contentChart,
        artechart,
        arthchart
    },
    created(){
        this._inits();
    },
    mounted(){
        this._drawCityMap();
        let that = this;
        window.addEventListener('done11', function(){
            getEquipmentLng().then(res => {
                if(res.success){
                    for(let i=0;i<res.result.length;i++){
                        let basename=res.result[i].baseName;
                        let lng=res.result[i].lng;
                        let lat=res.result[i].lat;
                        let marker= new AMap.CircleMarker({
                            radius:8,
                            topWhenClick:true,
                            zIndex:999,
                            fillColor:'#ffcb15',
                            strokeColor: '#ffcb15',
                            center: new AMap.LngLat(lng, lat),
                        });
                        that.map.add(marker);
                        let text= new AMap.Text({
                            text:basename,
                            position:new AMap.LngLat(lng, lat),
                            offset:new AMap.Pixel(50,0),
                        })
                        that.map.add(text);
                        marker.on("click",function() { 
                            that._inits(res.result[i].equipmentId);
                        });
                    }
                }
            })
        })
    },
    methods: {
        _drawCityMap() {
            let that = this
            MapLoader().then(AMap => {
                let googleLayer = new AMap.TileLayer({
                    getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile'
                });//定义谷歌卫星切片图层
                let roadNetLayer = new AMap.TileLayer.RoadNet({
                    opacity:0
                }); //定义一个路网图层
                that.map = new AMap.Map('mapcontent', {
                    zooms: [10,18],
                    layers:[googleLayer,roadNetLayer],
                    zoomEnable:false,
                    dragEnable: false,
                });

                AMap.plugin('AMap.DistrictSearch',function () {
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
                            fillColor: '#0f3b39',
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
                                    strokeWeight: 3,
                                    path: bounds[i],
                                    fillOpacity: 0,
                                    fillColor: '#CCF3FF',
                                    strokeColor: '#13B068'
                                })
                                polygons.push(polygon1)
                            }
                            // 地图自适应
                            that.map.setFitView(polygons)
                        }
                    })
                    that.map.on("complete", function(){
                        var myEvent = new CustomEvent('done11',{});
                        if(window.dispatchEvent) {
                            window.dispatchEvent(myEvent);
                        } else {
                            window.fireEvent(myEvent);
                        }
                    });
                })
            })
        },
        _inits(val) {
            getLastMonitor2({
                equipmentId: val ? val : 1
            }).then(res => {
                if (res.success) {
                    this.equipmentObj = res.result.length ? res.result[0] : {}
                    this.equipmentName = res.result.length ? res.result[0].equipment.equipmentName : ''
                    if (this.equipmentObj.id) { 
                        this.iconData.forEach(item => {
                            item.text.num = this.equipmentObj[item.text.key] + item.text.unit
                        })
                    }
                }
            })
            getRainData({
                equipmentId: val ? val : 1
            }).then(res => {
                this.$set(this.rainData.arr[0], 'data', res.result.day)
                this.$set(this.rainData.arr[1], 'data', res.result.month)
                this.$set(this.rainData.arr[2], 'data', res.result.year)
            })
            chartWsrose({
                equipmentId: val ? val : 1
            }).then(res => {
                if (res.success) {
                    if (res.result) {
                        this.$set(this.baseData.arr[0], 'data', res.result.day)
                        this.$set(this.baseData.arr[1], 'data', res.result.month)
                        this.$set(this.baseData.arr[2], 'data', res.result.year)
                    }
                }
            })
            for (let i = 1; i < 6; i++) {
                getAtmosphereData({
                    type: i,
                    equipmentId: val ? val : 1
                }).then(res => {
                    if (res.success) {
                        this.$set(this.airData.arr[i - 1], 'data', res.result)
                    }
                })
                getSoilData({
                    type: i,
                    equipmentId: val ? val : 1
                }).then(res => {
                    this.$set(this.soilData.arr[i - 1], 'data', res.result)
                })
            }
        },
        getDate() {
            setInterval(() => {
                let date = new Date().toString().split(' ')
                let month = new Date().getMonth() + 1
                let str = ''
                this.date = str + date[3] + '/' + month + '/' + date[2] + ' ' + date[4]
            }, 1000)
        },
        getTab(obj, index, prefix) {
            let str = prefix + 'LunboWrapper'
            this.$refs[str].goTo(index)
        }
    },
}
</script>
<style lang="stylus" scoped>
    @media screen and (max-width 1400px)
        .artel-wrapper
            .header
                font-size 35px !important
    @media screen and (min-width 2600px)
        .artel-wrapper
            .header
                span
                    top -7px !important
                    left 45% !important
        .date-wrapper
            span:nth-of-type(2)
                line-height 30px !important
        .text-wrapper
            img
                margin-top 3px !important
        .text-flex
            span:nth-of-type(2)
                line-height 30px !important
    .artel-wrapper
        background-image url('../../public/artel/background.png')
        height 100%
        overflow hidden
        color #13B068
        min-width 1400px
        padding-bottom 100px
        .header
            margin-top 40px
            height 40px
            background-image url('../../public/artel/header.png')
            background-repeat no-repeat
            text-align center
            font-size 40px
            width 100%
            position relative
            font-weight bold
            letter-spacing 8px
            background-size 100% 100%
            span
                position absolute
                top -25px
                left: 50%;
                transform: translateX(-50%);
        .content
            margin 17px 20px 0
            .button-wrapper
                width: 60px
                span
                    display inline-block
                    text-align center
                    background-color #13B068
                    border-radius 6px
                    width 100%
                    height 30px
                    line-height 30px
                    color #ffffff
                    font-weight 400
                    cursor pointer
            .flex-wrapper
                display flex
                justify-content space-between
    .main-content
        flex 1
        text-align center
        overflow hidden
        .lunbo
            height 390px
            width 100%
        .map
            height 610px
        .state
            margin-top 20px
            height 430px
            .date-wrapper
                flex 1
                display flex
                flex-direction column
                text-align right
                span
                    font-size 14px
                    height 15px
                    line-height 15px
                span:nth-of-type(1)
                    color #13B068
                    margin-bottom 5px
    .table-content
        display grid
        height: 310px
        grid-template-columns repeat(2, 50%)
        grid-template-rows: 65px 65px 210px
        gap 3px
        .item
            font-size 16px
            color #ffffff
            text-align center
            line-height 65px
            background-color #124440
        .item5
            display grid
            grid-column 1 / 3
            grid-template-columns repeat(4, 25%)
            grid-template-rows: repeat(4, 25%)
            .text-wrapper
                padding 15px 15px
                display flex
                font-size 14px
                img
                    margin-right 15px
                .text-flex
                    display flex
                    flex 1
                    text-align left
                    flex-direction column
                    line-height 15px
                    white-space nowrap
                    span:nth-of-type(1)
                        margin-bottom 5px
                        color #13B068
    .middle-content
        width 100%
        padding 20px 15px
        background-image url('../../public/artel/content.png')
        background-size 100% 100%
        background-repeat no-repeat
        .map-content
            width 100%
            height 530px
        .content-header
            height 30px
            display flex
            color #fff
            margin-bottom 20px
            letter-spacing 1px
            .bar
                height 100%
                width 5px
                border-radius 3px
                background-color #13B068
                margin-right 6px
            span
                line-height 30px
                font-size 16px
    .main-content:nth-of-type(2)
        margin 0 40px
</style>
