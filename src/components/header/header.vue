<template>
    <div class="header">
        <div class="left-border"></div>
        <span class="rotate-line"></span>
        <div class="border">
            <h1 class="title">道地药材（川麦冬）数字化管理平台</h1>
        </div>
        <span class="rotate-line"></span>
        <div class="right-border"></div>
        <div class="wrapper">
            <span class="date">{{date}}</span>
            <span class="weather">天气:{{weather}}</span>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    created() {
        setInterval(() => {
            var date = new Date().toString().split(' ')
            var month = new Date().getMonth() + 1
            var str = ''
            this.date = str + date[3] + '/' + month + '/' + date[2] + ' ' + date[4]
        }, 1000)
        axios.get("/tq",{params:{from:'5',lat: 31.10,lng: 105.06,needMoreDay:1},
        headers:{Authorization:"APPCODE 912f4ba38a394870aed1d60aca9a34fb"}}).then((res)=>{
            if (res.status === 200) {
              console.log(res);
              this.weather = res.data.showapi_res_body.now.weather
            }
        });
    },
    data() {
        return {
            date: '',
            weather: ''
        }
    }
}
</script>
<style lang="stylus">
body
    height 100% !important
    background-image url("../../assets/background.png")
    background-repeat no-repeat
    background-size 100% 100%
    .header
        width 100%
        display flex
        padding-top 30px
        position relative
        .left-border, .right-border
            flex 1
            border-top 1px solid #0093EE
            margin-top 20px
        span
            width 44px
            display inline-block
            border-top 2px solid rgba(0,147,238,1);
            height 1px
            position relative
            top 10px
            font-size 0
        .rotate-line:nth-of-type(1)
            transform rotateZ(-27deg)
        .rotate-line:nth-of-type(2)
            transform rotateZ(27deg)
        .border
            text-align center
            width 700px
            height 60px
            min-width 700px
            font-size 0
            border-top 1px solid rgba(0,147,238,1);
            .title
                color #0093EE
                font-size 40px
                margin-top 6px
                font-weight 1000
                letter-spacing  5px
        .wrapper
            position absolute
            bottom 10px
            right 28px
            span
                margin-right 10px
                display inline
                font-size 16px
                color #0093EE
                border none
</style>

