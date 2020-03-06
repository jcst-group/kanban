<template>
    <div class="base-map" ref="baseMap"></div>
</template>
<script>
import axios from 'axios'
import { getAllBase } from '@/api/allapi'

export default {
    data () {
        return {
            color:['#975FE5','#FE8463','#36CBCB','#E55F76','#3AA1FF','#5FE583','#5F95E5','#E5AF5F','#36CBCB','#4ECB73'],
            baseDatas: [],
        }
    },
    mounted() {
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + ': ' + params.value + '亩'
                } 
            },
            grid: {
                left: 20
            },
            series: [
                {
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data: this.baseDatas
                }
            ]
        };
        getAllBase().then(res=>{
            if(res.success){
                 let data = res.result
                if (data && data.length) {
                    var j=0;
                    for (var i = 0; i < data.length; i++) {
                        if(j==9){
                            j=0;
                        }
                        let typeid=[2,7,8,4];
                        if(typeid.indexOf(data[i].baseType.value)>-1){
                            this.baseDatas.push({name:data[i].baseName,value:data[i].acreage,itemStyle:{color: this.color[j]}})
                            j++;
                        }  
                        
                    } 
                }
                let curBaseMap = this.$echarts.init(this.$refs.baseMap)
                window.addEventListener("resize", function() {
                    curBaseMap.resize();
                })
                curBaseMap.setOption(option)
            }
        })
        // axios.get('json/base_info.json').then(res => {
        //     if (res.status == 200) {
        //         let data = res.data.result
        //         if (data && data.length) {
        //             for (var i = 0; i < data.length; i++) {
        //                 this.baseDatas[i].name = data[i].name
        //                 this.baseDatas[i].value = data[i].area
        //             } 
        //         }
        //         let curBaseMap = this.$echarts.init(this.$refs.baseMap)
        //         curBaseMap.setOption(option)
        //     }
        // })
        
    }
}
</script>
<style lang="stylus">

</style>
