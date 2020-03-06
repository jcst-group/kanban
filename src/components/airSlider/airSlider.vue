<template>
    <div class="total-air">
        <div class="airs air-temperature">
            <div class="desc test">温度</div>
            <div class="air cur-temperture">
            <span style="color:#EF6363">32℃</span>
            </div>
        </div>
        <div class="airs air-humidity">
            <div class="desc test">湿度</div>
            <div class="air cur-temperture">
                <span style="color:#2E92DC">{{humidity}}</span>
            </div>
        </div>
        <div class="airs air-pressure">
            <div class="desc test">气压</div>
            <div class="air cur-temperture">
            <span style="color:#FF9E48">999.7mb</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        humidity: {
            type: String,
            default: '48%'
        }
    }
}
</script>
<style lang="stylus">
.total-air
    flex 1
    min-width 180px
    margin-left 30px
    height 750px
    display flex
    flex-direction column
    .test
        padding-left 10px
        box-sizing border-box
    .airs
        height 252px
        position relative
        flex 1
        .air
            width 100%
            background-color rgba(88, 88, 88, 0.2)
            height 190px
            span
                position absolute
                display inline-block
                font-size 40px
                top 50%
                left 50%
                transform translate(-50%, -50%)
</style>
