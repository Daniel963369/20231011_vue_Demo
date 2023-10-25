<script>
import travel from '../components/travel.vue';
import propsSign from './propsSign.vue';
import accountLogin from './accountLogin.vue';
import dataflow from './dataflow.vue';
import cssPractice1 from '../views/practice1.vue';
import cssPractice2 from '../views/practice2.vue';
import cssPractice3 from '../views/practice3.vue';
import cssPractice4 from '../views/practice4.vue';
import cssPractice5 from '../views/practice5.vue';
export default {
    data(){
        return{
            controlPage:false,
            controlPropsSign:false,
            controlTravelPage:false,
            controlaccountLogin:false,
            controlDataflow:false,
            controlCssPractice1:false,
            controlCssPractice2:false,
            controlCssPractice3:false,
            controlCssPractice4:false,
            controlCssPractice5:false,
        }
    },

    components:{
        travel,
        propsSign,
        accountLogin,
        dataflow,
        cssPractice1,
        cssPractice2,
        cssPractice3,
        cssPractice4,
        cssPractice5,
    },

    methods:{
        turnToTravel(){
            this.controlTravelPage = !this.controlTravelPage
            this.controlPage = !this.controlPage
        },
        turnToPropsSign(){
            this.controlPropsSign = !this.controlPropsSign
            this.controlPage = !this.controlPage
        },
        turnToAccountLogin(){
            this.controlaccountLogin = !this.controlaccountLogin
            this.controlPage = !this.controlPage
        },
        turnToDataflow(){
            this.controlDataflow = !this.controlDataflow
            this.controlPage = !this.controlPage
        },
        
        turnToCssPractice1(){
            this.controlCssPractice1 = !this.controlCssPractice1
            this.controlPage = !this.controlPage
        },
        turnToCssPractice2(){
            this.controlCssPractice2 = !this.controlCssPractice2
            this.controlPage = !this.controlPage
        },
        turnToCssPractice3(){
            this.controlCssPractice3 = !this.controlCssPractice3
            this.controlPage = !this.controlPage
        },
        turnToCssPractice4(){
            this.controlCssPractice4 = !this.controlCssPractice4
            this.controlPage = !this.controlPage
        },
        turnToCssPractice5(){
            this.controlCssPractice5 = !this.controlCssPractice5
            this.controlPage = !this.controlPage
        },
    }



}

</script>



<template>
<div class="theme" v-if="controlPage == false">
    <div class="travelSort">
        <div class="travelImg" @click="turnToTravel"></div>
        <div class="travelText">
            <p>旅遊網站</p>
        </div>
    </div>

    <div class="cssPractice1Sort">
        <div class="cssPractice1Img" @click="turnToCssPractice1"></div>
        <div class="cssPractice1Text">
            <p>切版練習1</p>
        </div>
    </div>

    <div class="cssPractice2Sort">
        <div class="cssPractice2Img" @click="turnToCssPractice2"></div>
        <div class="cssPractice2Text">
            <p>切版練習2</p>
        </div>
    </div>
    <div class="cssPractice3Sort">
        <div class="cssPractice3Img" @click="turnToCssPractice3"></div>
        <div class="cssPractice3Text">
            <p>甜點切版</p>
        </div>
    </div>
    <div class="cssPractice4Sort">
        <div class="cssPractice4Img" @click="turnToCssPractice4"></div>
        <div class="cssPractice4Text">
            <p>瀑布流</p>
        </div>
    </div>
    <div class="cssPractice5Sort">
        <div class="cssPractice5Img" @click="turnToCssPractice5"></div>
        <div class="cssPractice5Text">
            <p>房地產</p>
        </div>
    </div>
    <div class="propsSignSort">
        <div class="propsSignImg" @click="turnToPropsSign"></div>
        <div class="propsSignText">
            <p>登陸註冊系統</p>
        </div>
    </div>
    <div class="accountLoginSort">
        <div class="accountLoginImg" @click="turnToAccountLogin"></div>
        <div class="accountLoginText">
            <p>記帳系統</p>
        </div>
    </div>
    <div class="dataflowSort">
        <div class="dataflowImg" @click="turnToDataflow"></div>
        <div class="dataflowText">
            <p>資料傳輸</p>
        </div>
    </div>
</div>


<div class="travelPage">
    
    <travel v-if="controlTravelPage == true"/>
</div>
<div class="propsSignPage">
    
    <propsSign v-if="controlPropsSign == true"/>
</div>
<div class="accountLoginPage">
    
    <accountLogin v-if="controlaccountLogin == true"/>
</div>
<div class="dataflowPage">
    
    <dataflow v-if="controlDataflow == true"/>
</div>
<div class="cssPractice1Page">
    
    <cssPractice1 v-if="controlCssPractice1 == true"/>
</div>
<div class="cssPractice2Page">
    
    <cssPractice2 v-if="controlCssPractice2 == true"/>
</div>
<div class="cssPractice3Page">
    
    <cssPractice3 v-if="controlCssPractice3 == true"/>
</div>
<div class="cssPractice4Page">
    
    <cssPractice4 v-if="controlCssPractice4 == true"/>
</div>
<div class="cssPractice5Page">
    
    <cssPractice5 v-if="controlCssPractice5 == true"/>
</div>



</template>



<style lang="scss" scoped>
.theme{
    width:100%;
    height:100%;
    border:2px solid black;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    background-color:lightcoral;

    .travelSort{
        
        margin-top:3%;
        width:30vw;
        height:40vh;
    

        .travelText{
            margin-top:2%;
            width:15.5vw;
            
            color:blue;
            text-align:center;
        }

        .travelImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/熱氣球.avif);
        cursor: pointer;
        }
    }
    .cssPractice1Sort{
        
        margin-top:3%;
        width:30vw;
        height:40vh;
       

        .cssPractice1Text{
            margin-top:2%;
            width:15.5vw;
            
            color:blue;
            text-align:center;
        }

        .cssPractice1Img{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/甜點圖片/2.png);
        cursor: pointer;
        }
    }
    .cssPractice2Sort{
        margin-top:3%;
        width:30vw;
        height:40vh;
       

        .cssPractice2Text{
            margin-top:2%;
            width:15.5vw;
            
            color:blue;
            text-align:center;
        }

        .cssPractice2Img{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/甜點圖片/3.png);
        cursor: pointer;
        }
    }
    .cssPractice3Sort{
        margin-top:3%;
        width:30vw;
        height:40vh;
       

        .cssPractice3Text{
            margin-top:2%;
            width:15.5vw;
            color:blue;
            text-align:center;
        }

        .cssPractice3Img{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/甜點圖片/4.png);
        cursor: pointer;
        }
    }
    .cssPractice4Sort{
        margin-top:3%;
        width:30vw;
        height:40vh;
       

        .cssPractice4Text{
            margin-top:2%;
            width:15.5vw;
            color:blue;
            text-align:center;
        }

        .cssPractice4Img{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/甜點圖片/3.png);
        cursor: pointer;
        }
    }
    .cssPractice5Sort{
        margin-top:3%;
        width:30vw;
        height:40vh;
       

        .cssPractice5Text{
            margin-top:2%;
            width:15.5vw;
            color:blue;
            text-align:center;
        }

        .cssPractice5Img{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/甜點圖片/2.png);
        cursor: pointer;
        }
    }
    .propsSignSort{
        margin-top:3%;
        width:30vw;
        height:40vh;
       

        .propsSignText{
            margin-top:2%;
            width:15.5vw;
            color:blue;
            text-align:center;
        }

        .propsSignImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/甜點圖片/2.png);
        cursor: pointer;
        }
    }
    .accountLoginSort{
        margin-top:3%;
        width:30vw;
        height:40vh;
       

        .accountLoginText{
            margin-top:2%;
            width:15.5vw;
            color:blue;
            text-align:center;
        }

        .accountLoginImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/甜點圖片/3.png);
        cursor: pointer;
        }
    }
}
    .dataflowSort{
        margin-top:3%;
        width:30vw;
        height:40vh;
       

        .dataflowText{
            margin-top:2%;
            width:15.5vw;
            color:blue;
            text-align:center;
        }

        .dataflowImg{
        margin-left:5%;
        width:12vw;
        height:30vh;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../../public/甜點圖片/4.png);
        cursor: pointer;
        }
    
}

</style>