<template>
    <div class="company1">
        <headers></headers>
        <i-button class="button" style="line-height:19px; background: #7EFAFC;border-radius:5px;color: #17375A;" @click="() => {this.$router.push({path: '/'})}">返回</i-button>
        <div class="company-wrapper">
            <div class="message-team">
                <div class="message">
                    <div class="desc" style="padding:5px 0 0 20px">
                        <div class="title"><span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span><span style="vertical-align:middle;">基础信息</span></div>
                        <div class="descs">Basic Information</div>
                    </div>
                    <div class="message-wrapper" style="padding:15px 15px 15px 5px;">
                        <div v-for="(item,index) in message" :key="index" style="background-color:#102E4F;padding:10px;">
                            <span class="name" style="display: inline-block; width:40%; text-align:left;"><span style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;"></span><span style="color: #7EFAFC;margin-left:5px;">{{item.name}}</span></span>
                            <span class="message-desc" style="display: inline-block; width:60%; text-align:right;color: #FCE700">{{item.desc}}</span>
                        </div>
                    </div>
                </div>
                <div class="team">
                    <div class="desc" style="padding:5px 0 0 20px">
                        <div class="title"><span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span><span style="vertical-align:middle;">服务团队</span></div>
                        <div class="descs">Service Team</div>
                    </div>
                    <div style="padding:20px;">
                    <table class="team-table">
                        <thead>
                            <th>姓名</th>
                            <th>专业背景</th>
                            <th>学校</th>
                            <th>学历</th>
                        </thead>
                        <tbody>
                            <tr v-for="(v,k) in team" :key="k">
                                <td>{{v.name}}</td>
                                <td>{{v.major}}</td>
                                <td>{{v.school}}</td>
                                <td>{{v.education}}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <div class="company-info">
                <div class="info">
                    <div class="desc" style="padding:5px 0 0 0;text-align:center;">
                        <div class="title" ><span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span><span style="font-size:18px;vertical-align:middle;">公司简介</span><span style="font-size:15px;margin-left:8px;vertical-align:middle;">Company profile</span></div>
                    </div>
                    <div class="info-wrapper">
                        <p class="company-desc" style="margin-top:20px"><img style="float:left;margin-right:10px;" :src="jianjiepng" width="50%" height="250px" alt="">{{companyProfile}}</p>
                        <!-- <p>公司注重科研能力的积累，组建了企业技术中心，联合北京大学药学院、中国中医科学院、成都中医药大学等实力科研院所，构建川麦冬全产业链研发平台，是成都中医药大学就业实践与教学实习基地，西南交通大学新品系选育研究基地。通过近十年的积累和沉淀，公司探索形成了“公司+基地+专业合作社+农户”的道地药材产业化运营模式”和 “七统一分”管理模式，以道地药材全产业链数字化管理云平台（AMS-ERP）为工具，实现中药农业全程动态追溯食品（饮料、配方茶、炖料包）、麦冬日化产品三大衍生产品系列。公司将以“不急不燥、从容人生”的产品理念，贴心服务客户，与客户携手共进，共创价值。</p> -->
                        <!-- <p class="company-desc" style="margin-top:20px"><img style="float:left;margin-right:10px;" :src="jianjiepng" src="../assets/ddwb.png" width="50%" height="250px" alt="">{{companyProfile}}</p> -->
                    </div>
                    <div class="movepoint1"></div>
                </div>
                <div class="videos">
                    <div class="video1">
                        <div class="desc" style="margin:0;padding:5px 0 0 20px">
                            <div class="title"><span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span><span style="vertical-align:middle;">公司介绍</span></div>
                            <div class="descs">Company introduction</div>
                        </div>
                        <div class="video-wrapper">
                            <video :src="companyvideo" controls></video>
                        </div>
                    </div>
                    <div class="video2">
                        <div class="desc" style="margin:0;padding:5px 20px 0 0;text-align:right;">
                            <div class="title" style="margin:0;"><span style="vertical-align:middle;">产品介绍</span><span style="display:inline-block;margin-left:5px;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span></div>
                            <div class="descs">Product introduction</div>
                        </div>
                        <div class="video-wrapper">
                            <video :src="productvideo" controls></video>
                        </div>
                    </div>
                </div>
            </div>
            <div class="honors">
                <div class="model">
                    <div class="desc" style="margin:0;padding:5px 20px 0 0;text-align:right;">
                        <div class="title" style="margin:0;"><span style="vertical-align:middle;">管理模式</span><span style="display:inline-block;margin-left:5px;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span></div>
                        <div class="descs">Service Model</div>
                    </div>
                    <div style="width:100%;height:100%;padding:20px;">
                        <div class="servcie">
                            <img :src="servicejpg" width="100%" height="320px" alt="">
                        </div>
                    </div>
                </div>
                <div class="main-honors">
                    <div class="desc" style="margin:0;padding:5px 20px 0 0;text-align:right;">
                        <div class="title" style="margin:0;"><span style="vertical-align:middle;">主要荣誉</span><span style="display:inline-block;margin-left:5px;width:10px;height:10px;background-color:#6ddae0;border-radius:50%;"></span></div>
                        <div class="descs">Main honors</div>
                    </div>
                    <div style="width: 100%;height: 340px;padding:20px;">
                        <div class="lunbo">
                            <Carousel autoplay loop class="lunbo-wrapper">
                                <CarouselItem v-for="(v,k) in hppic" :key="k">
                                    <img :src="geturl(v.pictureUrl)" width="100%" height="300px" alt="">
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Foot style="margin:0px;"/>
    </div>
</template>
<script>
import headers from '@/components/header/header1'
import Foot from '@/components/layouts/GlobalFooter.vue'
import {getCompany,getTeam} from '@/api/allapi'

export default {
    name: 'company',
    components: {
        headers,
        Foot
    },
    data () {
        return {
            message: [],
            info:{},
            companyvideo:'',
            productvideo:'',
            servicejpg:'',
            jianjiepng:'',
            hppic:[],
            companyProfile:'',
            team:[],
        }
    },
    created(){
        getCompany({id:1}).then(res=>{
            if(res.success){
                this.info=res.result;
                this.hppic=this.info.honorPicture;
                if(this.info.companyProfile){
                    this.companyProfile=this.info.companyProfile;
                }
                this.message=[{
                name: '企业名称：',
                desc: this.info.companyName
            }, {
                name: '地理位置：',
                desc: this.info.companyAddress
            }, {
                name: '主要品种：',
                desc: this.info.platCrop
            }, {
                name: '管理面积(亩)：',
                desc: this.info.manageArea
            }, {
                name: '管理合作社(个)：',
                desc: this.info.manageCooperation
            }];
            if(this.info.managePicture.length>0){
                this.servicejpg='/api/pictureInfo/show/'+this.info.managePicture[0].pictureUrl
            }
            if(this.info.companyPicture.length>0){
                this.jianjiepng='/api/pictureInfo/show/'+this.info.companyPicture[0].pictureUrl
            }
            if(this.info.videoCompany){
                this.companyvideo='/api/fileInfo/getVideo?fileUrl='+this.info.videoCompany.fileUrl;
            }
            if(this.info.videoProduct){
                this.productvideo='/api/fileInfo/getVideo?fileUrl='+this.info.videoProduct.fileUrl;
            }
            }
        })
        getTeam().then(res=>{
            if(res.success){
                this.team=res.result;
            }
        })
    },
    methods:{
        geturl(url){
            return '/api/pictureInfo/show/'+url;
        },
    },
}
</script>
<style lang="stylus">
    .video1
        background-image url("../../src/assets/center_left.png") 
        background-repeat no-repeat
        background-size 100% 100%
    .video2
        background-image url("../../src/assets/center_right.png") 
        background-repeat no-repeat
        background-size 100% 100%
    .company1
        min-width 1750px
        background-image url("../../src/assets/background.png") 
        background-repeat no-repeat
        background-size 100% 100%
    .button
        position absolute
        height 30px
        color #fff
        width 80px
        top 120px
        left 15px
    .company-wrapper
        display flex
        margin 70px 15px 20px
        .desc
            height 45px
            color #6ddae0
            font-size 16px
            padding-left 10px
            box-sizing border-box
            .title
                height 20px
                color #6ddae0
                line-height 30px
            .descs
                font-size 10px
        .message-team
            flex 1.2
            height 100%
            .message
                height 315px
                background-image url("../../src/assets/left4_1.png") 
                background-repeat no-repeat
                background-size 100% 100%
                .message-wrapper
                    font-size 18px
                    height 270px
                    display flex
                    flex-direction column
                    justify-content space-around
                    div
                        flex 1
                        margin-left 10px
                        color #fff
                    div:nth-of-type(1)
                        margin-top 8px
            .team
                margin-top 20px
                background-image url("../../src/assets/left4_2.png") 
                background-repeat no-repeat
                background-size 100% 100%
                .team-table
                    height 430px
                    width 100%
                    color #fff
                    tr, th
                        background-color #102E4F
                        text-align center
                        font-weight bold
                        padding 5px 5px
                    td, th
                        border 1px solid #ADFEFF
                    th
                        color #B1FEFF
        .company-info
            flex 2
            margin 0 20px
            height 850px
            .info
                position relative
                height 560px
                background-image url("../../src/assets/center4_1.png") 
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
                .info-wrapper
                    padding 40px 20px 0 20px
                    p
                        color #fff
                        text-indent 2em
                        margin 0
                        line-height 30px
                        font-size 16px
                        padding 0 10px
                        box-sizing border-box
            .videos
                margin-top 20px
                height 270px
                display flex
                div
                    flex 1
                    .video-wrapper
                        padding 20px
                        video
                            height 185px
                            width 100%
                div:nth-of-type(1)
                    margin-right 20px
        .honors
            flex 1
            .model
                background-image url("../../src/assets/right4_1.png") 
                background-repeat no-repeat
                background-size 100% 100%
                .servcie
                    height 340px
                    background-color #102E4F
                    img
                        position relative
                        top 50%
                        transform translateY(-50%)
            .main-honors
                margin-top 40px
                background-image url("../../src/assets/right4_2.png") 
                background-repeat no-repeat
                background-size 100% 100%
                .lunbo
                    height 100%
                    width 380px
                    position relative
                    left 50%
                    transform translateX(-50%)
                    .lunbo-wrapper
                        height 100%
                        .ivu-carousel-arrow
                            background-color rgba(0, 0, 0, 0.3)
                        .ivu-carousel-arrow:hover
                            background-color rgba(0, 0, 0, 0.8)
</style>
<style lang="stylus" scoped>
    @media screen and (min-width: 2000px)
        .lunbo-title
            height 350px !important
        .name
            width 185px !important
            white-space nowrap
        .title
            height 25px !important
</style>