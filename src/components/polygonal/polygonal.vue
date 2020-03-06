<template>
    <div class="polygonal">
        <div class="temperature-map" ref="polygonal"></div>
    </div>
</template>
<script>
import chartsType from '../../assets/js/chartsType.js';
import axios from 'axios'
import { getFatByCompanyId } from '@/api/allapi'

export default {
    data() {
        return {
            datas: [],
            tdataAxis: [],
            data1:[],
            data2:[],
        }
    },
    mounted () {
         getFatByCompanyId({companyId:1}).then(res=>{
            this.datas=[];
            this.tdataAxis=[];
            this.data1=[];
            this.data2=[];
            if(res.success){
                for(let i=0;i<res.result.length;i++){
                    let aa=Number(res.result[i].organicFat)/Number(res.result[i].ordinaryFat);
                    this.datas.push(res.result[i].organicFat);
                    this.tdataAxis.push(res.result[i].year);
                    this.data1.push(res.result[i].ordinaryFat);
                    this.data2.push(aa.toFixed(2)*100);
                    this._drawPolygonal();
                }
            }
        })
        
    },
    methods: {
        _drawPolygonal () {
            let polygonalChart = this.$echarts.init(this.$refs.polygonal);
            window.addEventListener("resize", function() {
                polygonalChart.resize();
            })
            var option = chartsType.charts(this.tdataAxis,this.datas,null,'bar','有机肥','#FFCD21','x');
            option.legend = {
                left: 'left',
                textStyle: {
                    color: '#fff'
                }
            }
            option.yAxis= [
            {
                name: '用量（亩/kg）',
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
                bottom:'10%'
            }
            option.series.push({
                name: '复合肥',
                barWidth:20,
                data:this.data1,
                type: 'bar',
                itemStyle: {
                    emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: '#7EFAFC'
                    },
                    normal:{
                            color: '#7EFAFC'
                    }
                },
            })
            // option.series.push({
            //     name:'百分比',
            //     type:'line',
            //     data: this.data2,
            //     itemStyle: {
            //         normal:{
            //             color: '#FFCD21'
            //         }
            //     }
            // })
            polygonalChart.setOption(option);
        }
    }
}
</script>
<style lang="stylus">

</style>
