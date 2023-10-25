<script>
export default {
    data(){
        return{
            page:1
        }
    },

    methods:{

    }
}


</script>




<template>
<div class="body" v-if="page==1">
    <div class="header">
            <div class="headerLeft">
                <p class="headerTitle">GoGoplay</p>
                <nav class="leftNavbar">
                    <p>首頁</p>
                    <p>最新活動</p>
                    <p>景點快報</p>
                    <p>折扣碼優惠</p>
                </nav>
            </div>

            <div class="headerRight">
                <p>下載App</p>
                <p>繁體中文</p>
                <input type="text" placeholder="搜尋">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <div class="headerUser">
                    <i class="fa-solid fa-user"></i>
                    <p>登入｜註冊</p>
                </div>
            </div>
        </div>

        <div class="contentImg"></div>
        <div class="content">
            <div class="contentNavbar">
                <nav>
                    <p>推薦</p>
                    <p>景點</p>
                    <p>活動</p>
                    <p>放鬆</p>
                    <p>戶外</p>
                    <p>交通</p>
                    <p>美食</p>
                </nav>
            </div>

            <div class="contentCard">

                <div class="card" style="width: 18rem;">
                    <img src="../../public/煙火.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">台北101煙火</h5>
                    <p class="card-text">門票價588</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../../public/煙火.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">台北101煙火</h5>
                    <p class="card-text">門票價588</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../../public/煙火.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">台北101煙火</h5>
                    <p class="card-text">門票價588</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <img src="../../public/煙火.avif" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">台北101煙火</h5>
                    <p class="card-text">門票價588</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <div class="opacityImg">
                <p>住宿推薦</p>
            </div>
        </div>
</div>

</template>



<style lang="scss" scoped>
.header{
    width:100vw;
    height:10vh;
    background-color:black;
    display:flex;
    justify-content:space-between;

    .headerLeft{
        width:30vw;
        height:100%;
        color:white;
        display:flex;
        
        
        .headerTitle{
            font-size:26pt;
            margin-top:4%;
            
        }
        .leftNavbar{
            width:15vw;
            display:flex;
            justify-content:space-around;
            font-size:20px;
            margin-left:5%;
            margin-top:6%;
            
        }
    }

    .headerRight{
        width:30vw;
        height:100%;
        color:white;
        display:flex;
        align-items: center;
        

        p{
            margin-left:1%;
            font-size:16pt;
            margin-top:2%;
        }

        input{
            margin-top:0.5%;
            margin-left:2%;
        }

        i{
            margin-left:2%;
        }

        .headerUser{
            width:10vw;
            margin-left:5%;
            display:flex;
            

            i{
                margin-top:10%;
                margin-right:5%;
            }

            p{
                margin-left:3%;
                margin-top:7%;
            }
        }

    }
}

.contentImg{
    border:1px solid black;
    width:100vw;
    height:100vh;
    background-image: url(../../public/風景圖.avif);
}

.content{
    width:100vw;
    background-color:aqua;
    .contentNavbar{
        width:90vw;
        height:10vh;
        margin:0 5vh;
        border:1px solid black;
        background-color:darkblue;
        

        nav{
            width:100%;
            height:100%;
            display:flex;
            justify-content:space-around;
            font-size:26pt;
            color:white;
            border:1px solid white;
            align-items: center;
            
        }
    }

    .contentCard{
        width:80vw;
        margin:0 10vw;
        display:flex;
        justify-content:space-around;

        .card{
            margin-top:3%;
        }
    }

    .opacityImg{
        width:80vw;
        height:40vh;
        margin:0 10vw;
        background-image: url(../../public/房間.avif);
        background-size:cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        margin-top:3%;
        opacity:0.7;

        p{
            
            font-size:50pt;
            text-align:center;
            color:white;
        }
    }
}</style>