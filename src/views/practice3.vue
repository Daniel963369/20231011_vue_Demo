<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<template>
<div class="bgArea">
    <div class="header">
        <div class="headerLeft"></div>
        <div class="headerRight"></div>
    </div>
    
    <div class="second">
        <div class="secondText">
            <h1>Title</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor esse, aliquid consequuntur perspiciatis repudiandae dolorum corporis, error veniam deserunt blanditiis, soluta in maiores praesentium amet consequatur nulla voluptate possimus quidem!</p>
        </div>
        <div class="secondImg"></div>
    </div>

    <div class="third">
        <div class="thirdText">
            <p>On Sale</p>
        </div>

        <div class="thirdImg">
            <div class="thirdImg1"></div>
            <div class="thirdImg2"></div>
            <div class="thirdImg3"></div>
        </div>
    </div>

    <hr>

    <div class="fourth">
        <div class="fourthText">
            <p>News</p>
        </div>
        <div class="fourthImg">
            <div class="fourthImg1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iusto delectus! Facilis est maiores quibusdam, nemo enim dolores vitae neque!</p>
                <button type="button">Detail</button>
            </div>
            <div class="fourthImg2">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga porro dolor esse aliquam incidunt recusandae repudiandae qui facilis atque modi!</p>
                <button type="button">Detail</button>
            </div>
            <div class="fourthImg3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem assumenda reiciendis unde dicta minus soluta in expedita eligendi laboriosam!</p>
                <button type="button">Detail</button>
            </div>
        </div>
        <div class="fourthBtn">
            <button type="button">More</button>
        </div>
    </div>

    <div class="fifth">
        <div class="fifthImg">
            <div class="fifthSquare"></div>
            <img src="../images/甜點圖片/8.png" alt="">
        </div>
        <div class="fifthText">
            <h1>New Arrival</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor esse, aliquid consequuntur perspiciatis repudiandae dolorum corporis, error veniam deserunt blanditiis, soluta in maiores praesentium amet consequatur nulla voluptate possimus</p>
        </div>
    </div>
    <div class="footer">
        <p>Copyright©️2023 by kouhei</p>
    </div>
</div>

</template>

<style lang="scss" scoped>
.bgArea{
    width:100vw;
    background-color:rgb(239, 200, 214);

    .header{
        width:90%;
        margin:0 5%;
        height:15vh;
        display:flex;
        justify-content:space-between;
        margin-bottom:5%;

        .headerLeft{
            width:98px;
            height:98px;
            background-color:palevioletred;
            }
            
            .headerRight{
            width:20%;
            height:60%;
            background-image: url(../images/甜點圖片/10.png);
            background-size:contain;
            background-repeat:no-repeat;
            }
    }

    .second{
        width:90%;
        height:70vh;
        margin:0 5%;
        display:flex;
        justify-content:space-around;
        
        

        .secondText{
            width:50%;
            height:80%;
            margin-right:50%;
            margin-left:5%;
            
        }

        .secondImg{
            width:70%;
            height:100%;
            margin-right:5%;
            background-image: url(../images/甜點圖片/1.png);
            background-size: contain;
            background-repeat: no-repeat;
            
        }
    }
    .third{
        width:90%;
        margin:0 5%;
        height:70vh;
        margin-bottom:50px;
        margin-bottom:5%;

        .thirdText{
            
            p{
                font-size:35pt;
                text-align:center;
            }
        }

        .thirdImg{
            display:flex;
            width:100%;
            height:70vh;
            justify-content:space-around;

            .thirdImg1{
                width:25%;
                height:100%;
                background-image: url(../images/甜點圖片/2.png);
                background-size: contain;
                background-repeat: no-repeat;
            }
            .thirdImg2{
                width:25%;
                height:100%;
                background-image: url(../images/甜點圖片/3.png);
                background-size: contain;
                background-repeat: no-repeat;
            }
            .thirdImg3{
                width:25%;
                height:100%;
                background-image: url(../images/甜點圖片/4.png);
                background-size: contain;
                background-repeat: no-repeat;
            }
        }
    }
    hr{
        border:5px solid red;
    }
    .fourth{
        width:90%;
        margin:0 5%;
        height:100vh;
        margin-bottom:5%;
        

        .fourthText{
            font-size:35pt;
            text-align:center;
        }

        .fourthImg{
            display:flex;
            width:100%;
            height:70vh;
            justify-content:space-around;

            .fourthImg1{
                width:30%;
                height:100%;
                background-image: url(../images/甜點圖片/5.png);
                background-size: contain;
                background-repeat: no-repeat;

                p{
                    margin-top:70%;
                }

                button{
                    background-color: black;
                    color:white;
                    width:120px;
                    height:50px;
                    
                }
            }
            .fourthImg2{
                width:30%;
                height:100%;
                background-image:url(../images/甜點圖片/6.png);
                background-size: contain;
                background-repeat: no-repeat;

                p{
                    margin-top:70%;
                }

                button{
                    background-color: black;
                    color:white;
                    width:120px;
                    height:50px;
                    
                }
            }
            .fourthImg3{
                width:30%;
                height:100%;
                background-image: url(../images/甜點圖片/7.png);
                background-size: contain;
                background-repeat: no-repeat;

                p{
                    margin-top:70%;
                }

                button{
                    background-color: black;
                    color:white;
                    width:120px;
                    height:50px;
                    
                }
            }
        }

        .fourthBtn{
            width:100%;
            height:10vh;
            
            margin-left:40%;

            button{
                color:white;
                background-color:palevioletred;
                width:15%;
                height:100%;
            }
        }
    }
    
    .fifth{
        width:90%;
        height:70vh;
        margin:0 5%;
        display:flex;
        position:relative;
        justify-content:space-between;
        

        .fifthImg{
            width:30%;
            height:100%;
            display:flex;
            .fifthSquare{
            width:500px;
            height:500px;
            background-color:rgb(192, 67, 108);
            }

            img{
                width:500px;
                height:300px;
                z-index:1;
                position:absolute;
                margin-left:8%;
                margin-top:5%;
                
            }
        }
        .fifthText{
            width:20%;
            height:60%;
            background-color:rgb(247, 206, 213);
            border:1px solid black;
            margin-top:5%;
            text-align:center;
            margin-right:20%;
            
        }
    }

    .footer{
        margin-top:50px;
        width:100vw;
        height:10vh;
        background-color:rgb(167, 78, 108);
        
        p{
            text-align:center;
            color:white;
        }
    }
}
</style>