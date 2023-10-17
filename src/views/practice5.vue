<script>
import { RouterLink , RouterView } from 'vue-router';
export default {
    data(){
        return{
            Square:[
                {
                    name:"タッグから探す"
                },
                {
                    name:"エリアから探す"
                },
                {
                    name:"沿線．駅から探す"
                }
            ]
        }
    },
    components:{
        RouterLink,
        RouterView,
    }
}

</script>


<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />



    <div class="header">
        <div class="headerSquare"></div>
        <div class="headerWord">
            <p>会社案内</p>
            <p>｜</p>
            <p>店舗．アクセス</p>
        </div>
        <div class="cellphone">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <p>010-123456789</p>
        </div>

        <div class="rectangle">
            <p>ログイン　｜　お問い合わせ</p>
        </div>
    </div>


    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="../../public/房地產圖片/banner1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="../../public/房地產圖片/banner2.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="../../public/房地產圖片/banner3.png" class="d-block w-100" alt="...">
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="footer">
        <div class="footerRectangle" v-for="footerRectangle in Square">
            <p>{{ footerRectangle.Square }}</p>
        </div>
    </div>


<div class="branch">
    <RouterLink class="branchRouter" to="/practice5/branch1">branch1</RouterLink>
    <RouterLink class="branchRouter" to="/practice5/branch2">branch2</RouterLink>
    <RouterLink class="branchRouter" to="/practice5/branch3">branch3</RouterLink>
    <RouterLink class="branchRouter" to="/practice5/branch4">branch4</RouterLink>
    <RouterLink class="branchRouter" to="/practice5/branch5">branch5</RouterLink>
    <RouterLink class="branchRouter" to="/practice5/branch6">branch6</RouterLink>
</div>
</template>


<style lang="scss" scoped>

.branch{
    width:100vw;
    display:flex;
    justify-content:space-around;
    background-color:greenyellow;
    
    .branchRouter{
        text-decoration:none;
        color:red;
        font-size:20pt;
    }
}

.header{
    width:100vw;
    height:15vh;
    display:flex;

    .headerSquare{
        width:100px;
        height:100px;
        background-color:blueviolet;
        margin-right:7%
    }
    
    .headerWord{
        display:flex;
        margin-top:4%;
        margin-right:45%;
    }

    .cellphone{
        display:flex;
        margin-top:4%;
        margin-right:1%;
    }

    .rectangle{
        margin-top:3%;
        width:220px;
        height:50px;
        background-color:blueviolet;
        display:flex;
        justify-content: center;
        align-items: center;
    }
}
.footer{
    width:100vw;
    height:50vh;
    display:flex;
    background-color:#BEC0CD;

    .footerRectangle{
        margin-top:5%;
        width:300px;
        height:200px;
        background-color:blueviolet;
        display:flex;
        justify-content:space-between;
        margin-left:10%;
    }

}

</style>