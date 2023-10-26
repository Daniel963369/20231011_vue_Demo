<script>
export default {
  data(){
    return{
      arr:[
          {
            step:"01",
            method:"探索",
            description:"從html和css最基礎的部分"+"開始講解"
          },

          {
            step:"02",
            method:"講課",
            description:"html結合css的綜合應用"
          },
          {
            step:"03",
            method:"實戰",
            description:"html、css與javascript結合"
          }
      ],
      
      imgArr:[
        "../../public/動畫圖1.avif",
        "../../public/動畫圖2.avif",
        "../../public/動畫圖3.avif",
        
      ]
    }
  }
}
</script>

<template>
<div class="header">
  <div class="headerLeft">
    <i class="fa-solid fa-house-user"></i>
    <p>Vue-Practice</p>
  </div>

  <div class="headerRight">
    <p class="title">首頁</p>
    <p class="introduction">作品介紹</p>
    <div class="login">
      <i class="fa-solid fa-right-to-bracket"></i>
      <p>會員登入</p>
    </div>
  </div>
</div>

<div class="secondContent">
  <div class="scText">
    <p>面對光明</p>
    <br>
    <p>陰影就在我們身後</p>
  </div>

  <div class="scText2">
    <p>html&Css｜</p>
    <p>javascript｜</p>
    <p>vue｜</p>
  </div>
</div>

<div class="navbar">
  <nav class="navIntroduction1">努力學習中<br>請大家多多指教</nav>

  <nav class="navIntroduction2">
    <i class="fa-solid fa-arrows-rotate"></i>
    <p>初步學習html和css</p>
    <p>藉由南應大的課程 培養<br>程式邏輯與切版能力</p>
  </nav>

  <nav class="navIntroduction3">
    <i class="fa-brands fa-android"></i>
    <p>學習有效率</p>
    <p>優秀師資認真教學 讓學習變簡單</p>
  </nav>

  <nav class="navIntroduction4">
    <i class="fa-solid fa-briefcase"></i>
    <p>高效學習讓你學習沒煩惱</p>
    <p>學生個個學習情緒高</p>
  </nav>
</div>

<div class="process">
  <div class="processContent" v-for="item in arr">
    <p class="processStep">{{ item.step }}</p>
    <p class="processMethod">{{ item.method }}</p>
    <p class="processDescription">{{ item.description }}</p>
    <i class="fa-solid fa-arrow-right"></i>
  </div>

</div>

<div class="learningImg">
    <div class="learningImg1"></div>
    <div class="learningImg2"></div>
    <div class="learningImg3"></div>
    <div class="learningImg4"></div>
</div>

<div class="articleShare" >
  <h1>文章分享</h1>
  <div class="articleShareImg" v-for="item in imgArr">
    <img :src="item" alt="">
  </div>
</div>

<div class="uniqueVision">
  <div class="uvText">
    <p>打造專屬於你的網頁</p>
    <p>得到程式超能力</p>
  </div>
  <div class="uvImg">
    <img src="../../public/願景圖-1.avif" alt="">
    <div class="rectangle">
      <p>要比每天更進步</p>
    </div>
    <div class="circle"></div>
  </div>
</div>

<div class="footer">
  <p>Coding by Daniel Θ All Right Reserved</p>
</div>
</template>


<style lang="scss" scoped>
.header{
  width:100vw;
  height:15vh;
  display:flex;
  justify-content:space-between;
  background-color:rgb(0, 0, 0,0.7);

  .headerLeft{
    width:15vw;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left:5%;

    i{
      font-size:38pt;
      color:lightgreen;
    }

    p{
      font-size:18pt;
      margin-left:5%;
      color:white;
      font-family:cursive;
    }
  }

  .headerRight{
    display:flex;
    align-items: center;
    width:30vw;
    

    i{
      font-size:20pt;
      color:white;
      margin-top:0.5%;
    }

    p{
      font-size:15pt;
      color:white;
    }

    .introduction{
      margin-left:2%;
    }

    .login{
      width:15vw;
      display:flex;
      margin-left:8%;

      p{
        
        margin-left:8%;
      }
    }
  }
}

.secondContent{
  width:100vw;
  height:90vh;
  background-image: url(../../public/投影圖1.avif);
  background-size:cover;
  position:relative;
  z-index:1;

  .scText{
    width:40vw;
    height:28vh;  
    position:absolute;
    left:30%;
    top:35%;
    font-size:22pt;
    font-family:fantasy;
    color:white;
    text-align:center;
    background-color:rgb(0, 0, 0,0.5);
    
  }

  .scText2{
    width:40vw;
    font-size:18pt;
    display:flex;
    justify-content: center;
    position:absolute;
    left:30%;
    top:66%;
    background-color:rgb(0, 0, 0,0.5);
    color:white;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
}

.navbar{
  width:100vw;
  display:flex;
  align-items: center;
  justify-content:space-around;
  background-color:rgb(88, 85, 85);
  color:white;

  .navIntroduction1{
    font-size:20pt;
  }

  .navIntroduction2{
    i{
      margin-top:5%;
      font-size:35pt;
      display:flex;
      justify-content: center;
    }

    p{
      text-align:center;
      font-size:16pt;
      
    }
  }
  .navIntroduction3{
    i{
      font-size:35pt;
      display:flex;
      justify-content: center;
    }

    p{
      text-align:center;
      font-size:16pt;
      
    }
  }
  .navIntroduction4{
    i{
      font-size:35pt;
      display:flex;
      justify-content: center;
    }

    p{
      text-align:center;
      font-size:16pt;
      
    }
  }
}

.process{
    width:100vw;
    height:50vh;
    display:flex;
    justify-content:space-around;
        
    background-color:black;
    color:white;
    position:relative;
    z-index:-2;

  .processContent{
    width:30vw;
    height:40vh;
    margin-top:2%;
    border:3px solid lightcoral;
    text-align:center;
    z-index:-1;


    .processStep{
      position:absolute;
      margin-left:14%;
      top:5%;
      z-index:999;
      font-size:18pt;
    }
    .processMethod{
      font-size:14pt;
      margin-top:15%;
    }
    .processDescription{
      font-size:12pt;
      margin-top:15%;
    }

    

  }
}

.learningImg{
    width:100vw;
    display:flex;
    background-color:gray;

    .learningImg1{
        margin-top:5%;
        width:25%;
        height:50vh;
        background-image: url(../../public/學習圖-1.avif);
        background-size:cover;

        &:hover{
          opacity:0.7;
        }
    }
    .learningImg2{
        margin-top:5%;
        width:25%;
        height:50vh;
        background-image: url(../../public/學習圖-2.avif);
        background-size:cover;

        &:hover{
          opacity:0.7;
        }
    }
    .learningImg3{
        margin-top:5%;
        width:25%;
        height:50vh;
        background-image: url(../../public/學習圖-3.avif);
        background-size:cover;

        &:hover{
          opacity:0.7;
        }
    }
    .learningImg4{
        margin-top:5%;
        width:25%;
        height:50vh;
        background-image: url(../../public/學習圖-4.avif);
        background-size:cover;

        &:hover{
          opacity:0.7;
        }
    }
}

.articleShare{
  display:flex;
  width:100vw;
  justify-content:space-around;
  background-color:gray;
  position:relative;
  
  h1{
    position:absolute;
    color:white;
    top:15%;
    left:45%;
  }
  
  .articleShareImg{
    margin-top:10%;
    display:flex;
    justify-content:space-around;
    cursor: pointer;
  img{
    width:30vw;
    justify-content:space-around;
    border:1px solid white;
    
  }
  p{
    font-size:18pt;
    color:lightgreen;
    border:1px solid white;
    
  }
  }
}

.uniqueVision{
  width:100vw;
  background-color:black;
  position:relative;
  
  .uvText{
    font-size:20pt;
    color:white;
    text-align:center;
  }

  .uvImg{
    display:flex;
    img{
    width:30vw;
    height:50vh;
    border:1px solid white;
    margin-left:25%;
    margin-top:5%;
    z-index:1;
    }
    .rectangle{
      width:30vw;
      height:15vh;
      background-color:white;
      position:absolute;
      left:50%;
      top:70%;
      z-index:2;
      border-radius:20px;

      p{
        margin-left:3%;
        margin-top:7%;
        font-weight:bold;
      }
    }

    .circle{
      background-color:white;
      width:80px;
      height:80px;
      border-radius:99em;
      background-image: url(../../public/winter.jpg);
      background-size:contain;
      position:absolute;
      top:60%;
      left:75%;
      z-index:3;
    }
  }
}

.footer{
  display:flex;
  justify-content: center;
  align-items: center;
  color:white;
  width:100vw;
  height:10vh;
  background-color:gray;
}




</style>
