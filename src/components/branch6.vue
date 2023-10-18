<script>
export default {
    data(){
        return{
            
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
        <div class="footerTop">
            <div class="footerSquare"></div>
            <div class="footerText">
                <p>都心区　A物件</p>
                <hr>
            </div>
        </div>
        <div class="footerBottom"></div>
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
    height:300vh;
    background-color: rgb(206, 155, 206);

    .footerTop{
        width:90%;
        height:45vh;
        margin:0 5%;
        
        display:flex;

        .footerSquare{
            width:300px;
            height:300px;
            background-color:blueviolet;
            margin-right:2%;;
        }
        
        .footerText{
        width:60vw;
        p{
            font-size:22pt;
        }

        hr{
            border:3px solid black;
            width:100%;
        }
    }

    }
    .footerBottom{
        width:90%;
        height:240vh;
        margin:0 5%;
        background-color:white;
    }
}


</style>