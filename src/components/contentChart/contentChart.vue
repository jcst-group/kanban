<template>
    <div class="air-content">
        <div class="content-header">
            <div class="bar"></div>
            <span>{{dataObj.name}}</span>
            <div class="tab-wrapper">
                <div class="all-tab">
                    <div class="tab" v-show="item.name !== '空'" :class="{'active': active === index}" @click="changeTab(index)" v-for="(item,index) in dataObj.arr" :key="index">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="content-chart">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        dataObj: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            active: 0,
            lock: false
        }
    },
    methods: {
        changeTab(index) {
            if (this.lock) {
                return
            }
            this.lock = true
            this.active = index
            this.$emit('changeTab', this.dataObj, index)
            setTimeout(() => {
                this.lock = false
            }, 500)
        }
    },
}
</script>
<style lang="stylus" scoped>
    @media screen and (min-width 2600px)
        .all-tab
            .tab
                line-height 33px !important
                width 135px !important
    .air-content
        width 100%
        height 480px
        padding 20px 15px
        margin-top 20px
        background-image url('../../../public/artel/content.png')
        background-size 100% 100%
        background-repeat no-repeat
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
            .tab-wrapper
                flex 1
                text-align right
                .all-tab
                    justify-content flex-end
                    float right
                    display flex
                    height 100%
                    border 1px solid #13B068
                    border-radius 4px
                    .tab
                        color #13B068
                        text-align center
                        line-height 30px
                        cursor pointer
                        border-right 1px solid #13B068
                        width 68px
                    .active
                        color #ffffff
                        background-color #13B068
                        transition all 0.5s
                    .tab:last-child
                        border-right 0
        .content-chart
            height 390px
            background-color rgba(18,68,64,1)
</style>