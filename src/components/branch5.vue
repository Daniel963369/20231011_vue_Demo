<script>
export default {
    data(){
        return{
            square:[
                {
                    box:""
                },
                {
                    box:""
                },
                {
                    box:""
                },
                {
                    box:""
                },
            ],
            
            name:{
                name1:"都心区　A物件",
                name2:"都心区　B物件",
                name3:"都心区　C物件",
                name4:"都心区　D物件",
            }
                
            
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
            <div class="footerSquare" v-for="footerSquare in square">
            <p>{{ square.footerSquare }}</p>
            <p v-for="x in this.name">{{ x }}</p>
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
    position:relative;
    width:100vw;
    height:140vh;
    background-color:rgb(226, 191, 226);

    .footerZone{
        width:80%;
        height:100%;
        margin:2% 5%;
        margin-left:10%;
        padding-top:1%;

        .footerSquare{
            
            margin-top:5%;
            width:18vw;
            height:25vh;
            background-color:blueviolet;

            p{
                color:black;
                position:absolute;
                left:30%;
            }
        }
    }
}


</style>