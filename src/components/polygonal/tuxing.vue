<template>
    <div :class="{squarebox:one,squarebox1:two,squarebox2:three}">
        <div :class="{front:one,front1:two,front2:three}"></div>
        <div :class="{bottom:one,bottom1:two,bottom2:three}"></div>
        <div :class="{back1:one,back2:two,back3:three}"></div>
        <div :class="{top:one,top1:two,top2:three}"></div>
        <div :class="{left1:one,left2:two,left3:three}"></div>
        <div :class="{right1:one,right2:two,right3:three}"></div>
        <div v-if="d" class="s_front"></div>
        <div v-if="d" class="s_bottom"></div>
        <div v-if="d" class="s_back1"></div>
        <div v-if="d" class="s_top"></div>
        <div v-if="d" class="s_left1"></div>
        <div v-if="d" class="s_right1"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            d:false,
            one:false,
            two:true,
            three:false,
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{
        change(par){
            switch (par) {
                case 1:
                    this.one=true;
                    this.two=false;
                    this.three=false;
                    this.d=false;
                    break;
                case 2:
                    this.one=false;
                    this.two=true;
                    this.three=false;
                    this.d=false;
                    break;
                case 3:
                    this.one=false;
                    this.two=false;
                    this.three=true;
                    this.d=true;
                    break;    
                default:
                    break;
            }
        },
    },
}
</script>
<style scoped>
.squarebox{
    width:60px;
    height: 180px;
    box-sizing: border-box;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(45deg) rotateZ(0deg);
    /* animation: rotateanimation 5s ease;
    animation-iteration-count: infinite;
    animation-timing-function: linear; */ 
    margin:auto;
    padding-left: 10px;
}
.squarebox>div{
    position: absolute;
}
/*设置六面的视角*/
.front{
    width: 40px;
    height: 160px;
    transform: translateZ(20px);
    background:rgba(115,214,215,0.5);
}
.bottom{
    width: 60px;
    height: 60px;
    transform: rotateX(90deg) translateX(-10px) translateY(0px) translateZ(-130px);
    background:rgba(135,240,241,0.5);
}
.back1{
    width: 40px;
    height: 160px;
    transform: translateZ(-20px);
    background:rgba(115,214,215,0.5);
}
.top{
    width: 40px;
    height: 40px;
    transform: rotateX(90deg) translateZ(20px);
    background:rgba(135,240,241,0.8);
}
.left1{
    width: 40px;
    height: 160px;
    transform: rotateY(90deg) translateZ(-20px);
    background:rgba(105,233,234,0.6);
}
.right1{
    width: 40px;
    height: 160px;
    transform: rotateY(90deg) translateZ(20px);
    background:rgba(105,233,234,0.5);
}

/*添加动画效果*/
@keyframes rotateanimation{
    0%{
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100%{
        transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
}


.squarebox1{
    width:60px;
    height: 150px;
    box-sizing: border-box;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(45deg) rotateZ(0deg);
    /* animation: rotateanimation1 5s ease;
    animation-iteration-count: infinite;
    animation-timing-function: linear; */ 
    padding:0 0 0 10px; 
    margin:auto;
}
.squarebox1>div{
    position: absolute;
}
/*设置六面的视角*/
.front1{
    width: 40px;
    height: 130px;
    transform: translateZ(20px);
    background:rgba(115,214,215,0.5);
}
.bottom1{
    width: 60px;
    height: 60px;
    transform: rotateX(90deg) translateX(-10px) translateY(0px) translateZ(-100px);
    background:rgba(135,240,241,0.5);
}
.back2{
    width: 40px;
    height: 130px;
    transform: translateZ(-20px);
    background:rgba(115,214,215,0.5);
}
.top1{
    width: 40px;
    height: 40px;
    transform: rotateX(90deg) translateZ(20px);
    background:rgba(135,240,241,0.8);
}
.left2{
    width: 40px;
    height: 130px;
    transform: rotateY(90deg) translateZ(-20px);
    background:rgba(105,233,234,0.6);
}
.right2{
    width: 40px;
    height: 130px;
    transform: rotateY(90deg) translateZ(20px);
    background:rgba(105,233,234,0.5);
}
/*添加动画效果*/
@keyframes rotateanimation1{
    0%{
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100%{
        transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
}



.squarebox2{
    width:70px;
    height: 190px;
    box-sizing: border-box;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(45deg) rotateZ(0deg);
    /* animation: rotateanimation2 5s ease;
    animation-iteration-count: infinite;
    animation-timing-function: linear;  */
    margin:auto;
    padding-left:10px; 
}
.squarebox2>div{
    position: absolute;
}
/*设置六面的视角*/
.front2{
    width: 50px;
    height: 170px;
    transform: translateZ(25px);
    background:rgba(115,214,215,0.5);
}
.bottom2{
    width: 70px;
    height: 70px;
    transform: rotateX(90deg) translateX(-10px) translateY(0px) translateZ(-135px);
    background:rgba(135,240,241,0.5);
}
.back3{
    width: 50px;
    height: 170px;
    transform: translateZ(-25px);
    background:rgba(115,214,215,0.5);
}
.top2{
    width: 50px;
    height: 50px;
    transform: rotateX(90deg) translateZ(25px);
    background:rgba(135,240,241,0.8);
}
.left3{
    width: 50px;
    height: 170px;
    transform: rotateY(90deg) translateZ(-25px);
    background:rgba(105,233,234,0.6);
}
.right3{
    width: 50px;
    height: 170px;
    transform: rotateY(90deg) translateZ(25px);
    background:rgba(105,233,234,0.5);
}
.s_front{
    width: 40px;
    height: 170px;
    transform: translateX(5px)  translateZ(20px);
    background:rgba(115,214,215,1);
}
.s_bottom{
    width: 40px;
    height: 40px;
    transform: translateX(5px)  rotateX(90deg)  translateZ(-110px);
    background:rgba(135,240,241,1);
}
.s_back1{
    width: 40px;
    height: 170px;
    transform: translateX(5px)  translateZ(-20px);
    background:rgba(115,214,215,1);
}
.s_top{
    width: 40px;
    height: 40px;
    transform: translateX(5px)  rotateX(90deg) translateZ(20px);
    background:rgba(135,240,241,1);
}
.s_left1{
    width: 40px;
    height: 170px;
    transform:  rotateY(90deg) translateZ(-10px);
    background:rgba(105,233,234,1);
}
.s_right1{
    width: 40px;
    height: 170px;
    transform:  rotateY(90deg) translateZ(25px);
    background:rgba(105,233,234,1);
}
/*添加动画效果*/
@keyframes rotateanimation2{
    0%{
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100%{
        transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
}
</style>