<script>
export default {
    data(){
        return{
            name:{
                name1:"千代田区",
                name2:"六本木区",
                name3:"秋葉原区",
                name4:"台場区",
            },

            zone:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                }
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
        <div class="center">
            <div class="centerText">
                <p>都心区</p>
                <hr>
            </div>
            <div class="outArea">
                <div class="centerArea1" v-for="centerArea1 in zone">
                    <p>{{ name.name1 }}</p>
                </div>
                <div class="centerArea2" v-for="centerArea2 in zone">
                    <p>{{name.name2}}</p>
                </div>
                <div class="centerArea3" v-for="centerArea3 in zone">
                    <p>{{name.name3}}</p>
                </div>
            </div>
        </div>
        <div class="east">
            <div class="eastText">
                <p>23区東部</p>
                <hr>
            </div>
            <div class="outArea2">
                <div class="eastArea1" v-for="eastArea1 in zone">
                    <p>{{ name.name4 }}</p>
                </div>
                <div class="eastArea2" v-for="eastArea2 in zone">
                    <p>{{ name.name3 }}</p>
                </div>
            </div>
        </div>
        <div class="west">
            <div class="westText">
                <p>23区西部</p>
                <hr>
            </div>
            <div class="outArea3">
                <div class="westArea1" v-for="eastArea1 in zone">
                    <p>{{ name.name1 }}</p>
                </div>
                <div class="westArea2" v-for="eastArea2 in zone">
                    <p>{{ name.name2 }}</p>
                </div>
                <div class="westArea3" v-for="eastArea1 in zone">
                    <p>{{ name.name3 }}</p>
                </div>
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
    height:250vh;
    background-color:rgb(214, 157, 214);

    .center{
        width:80%;
        margin:0 6%;
        height:70vh;
        

        .centerText{
            margin-left:5%;
            width:80%;
            p{
                font-size:20pt;
            }
            hr{
                border:1px solid red;
            }
        }
        .outArea{
            width:100%;
            height:35vw;
            display:flex;
            flex-wrap:wrap; 
            .centerArea1{
                width:20%;
                height:15%;
                background-color:pink;
                margin-left:5%;
                
            }
            .centerArea2{
                width:20%;
                height:15%;
                background-color:pink;
                margin-left:5%;
                
            }
            .centerArea3{
                width:20%;
                height:15%;
                background-color:pink;
                margin-left:5%;
                
            }
        }
    }
    .east{
        width:80%;
        margin:0 10%;
        height:70vh;
        

        .eastText{
            
            width:80%;
            p{
                font-size:20pt;
            }
            hr{
                border:1px solid red;
            }
        }

        .outArea2{
            width:100%;
            
            height:35vw;
            display:flex;
            flex-wrap:wrap;
            
            .eastArea1{
                width:20%;;
                height:15%;
                background-color:pink;
                margin-right:5%;
                
            }
            .eastArea2{
                width:20%;;
                height:15%;
                background-color:pink;
                margin-right:5%;
                
            }
        }
    }
    .west{
        width:80%;
        margin:0 6%;
        height:70vh;
        

        .westText{
            margin-left:5%;
            width:80%;
            p{
                font-size:20pt;
            }
            hr{
                border:1px solid red;
            }
        }

        .outArea3{
            width:100%;
            height:35vw;
            display:flex;
            flex-wrap:wrap;
            .westArea1{
                width:20%;
                height:15%;
                background-color:pink;
                margin-left:5%;
                
                
                
            }
            .westArea2{
                width:20%;
                height:15%;
                background-color:pink;
                margin-left:5%;
                
            }
            .westArea3{
                width:20%;
                height:15%;
                background-color:pink;
                margin-left:5%;
                
            }
        }
    }
}


</style>