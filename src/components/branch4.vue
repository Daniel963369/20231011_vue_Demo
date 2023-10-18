<script>
export default {
    data(){
        return{
            rectangle:[
                {
                    name:"お気に入り物件"
                },
                {
                    name:"お気に入りタッグ"
                },
                {
                    name:"ユーザー設定"
                },
                {
                    name:"XXXXXX"
                },
                {
                    name:"OOOOOO"
                },
                {
                    name:"お問い合わせ履歴"
                },
            ]
        }
    }
}
</script>



<template>
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

    <div class="footer">
        <div class="footerZone">
            <div class="footerRectangle" v-for="footerRectangle in rectangle">
                <p>{{ footerRectangle.name }}</p>
            </div>
        </div>
    </div>


</template>


<style lang="scss" scoped>


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
    height:140vh;
    background-color:lightpink;
    
    .footerZone{
        width:90%;
        margin:0 5%;
        display:flex;
        flex-wrap:wrap;
        .footerRectangle{
        width:25vw;
        height:25vh;
        background-color:blueviolet;
        margin-top:10%;
        margin-left:5%;

        }
    }
}



</style>