<script>
export default {
    data(){
        return{

            waterfallArr:[

            ],
            waterfallArr2:[

            ],
            waterfallArr3:[

            ],
            waterfallArr4:[

            ],
        }
    }
}

</script>


<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<div class="header">
    <i class="fa-solid fa-fire"></i>

    <button type="button" class="btn btn-dark">首頁</button>

    <p class="word">建立</p>

    <i class="fa-solid fa-chevron-down"></i>

    <div class="searchInput">
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>搜尋</p>
        <input class="searchLine" type="text">

    </div>
    <i class="fa-solid fa-bell"></i>
    <i class="fa-solid fa-comment-dots"></i>
    <i class="fa-regular fa-circle"></i>
    <i class="fa-solid fa-angle-down"></i>
</div>

<div class="waterfallArea">
    <div class="waterfall1" v-for="item in waterfallArr">
        <img vbind:src="item" alt="">
    </div>
    <div class="waterfall2" v-for="item2 in waterfallArr2">
        <img vbind:src="item2" alt="">
    </div>
    <div class="waterfall3" v-for="item3 in waterfallArr3">
        <img vbind:src="item3" alt="">
    </div>
    <div class="waterfall4" v-for="item4 in waterfallArr4">
        <img vbind:src="item4" alt="">
    </div>
</div>

</template>


<style lang="scss" scoped>
.header{
    display:flex;
    justify-content:space-around;
    margin-top:20px;


    .word{
        margin-top:1%;
        font-weight:bold;
        font-size:22px;
    }
    .fa-chevron-down{
        margin-top:1%;
        font-size:20pt;
    }
    
    .fa-fire{
        font-size:24pt;
        border:1px solid black;
        margin-top:1%;
        margin-right:1%;
    }

    .btn-dark{
        border-radius:50px 50px 50px 50px;
        font-size:26pt;
        margin-right:1%;
    }
    .btn-secondary{
        
        margin-top:2%;
        font-size:16pt;
    }



    .searchInput{
        width:70%;
        height:10vh;
        border-radius:50px 50px 50px 50px;
        display:flex;
        background-color:rgb(212, 206, 206);
        position:relative;
        .searchLine{
        width:100%;
        height:10vh;
        border-radius:50px 50px 50px 50px;
        background-color:rgb(212, 206, 206);
        }

        .fa-magnifying-glass{
            position:absolute;
            left:2%;
            font-size:20pt;
            margin-top:2%;
        }
        
        p{
            position:absolute;
            left:5%;
            font-size:20pt;
            margin-top:1%;
        }

    }

    .fa-bell{
        margin-top:1%;
        font-size:26pt;
        margin-left:1%;
    }
    .fa-comment-dots{
        margin-top:1%;
        font-size:26pt;
        margin-left:1%;
    }
    .fa-circle{
        margin-top:1%;
        font-size:26pt;
        margin-left:1%;
    }
    .fa-angle-down{
        margin-top:1%;
        font-size:26pt;
        margin-left:1%;
    }
}

.waterfallArea{
    width:100%;

    .waterfall1{
        width:25%;
    }
    .waterfall2{
        width:25%;
    }
    .waterfall3{
        width:25%;
    }
    .waterfall4{
        width:25%;
    }
}
</style>