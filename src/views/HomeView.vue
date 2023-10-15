<script >
    import { RouterLink, RouterView } from 'vue-router'
    import Header from "./Header.vue"
    export default {
      data(){
        return{

        }
      },
      components: {
        RouterLink,
        RouterView,
        Header
      }
    }
</script>

<template>
  <div class="headerShow">
    <h1>展舜の家</h1>
    <div class="headerNav">
      <p>Tainan｜</p>
      <p>Abroad｜</p>
      <p>Lifestyle｜</p>
      <p>Sharing｜</p>
      <p>Other｜</p>
      <p>Search｜</p>
    </div>
    <div class="introduction">
      <div class="introductionText">
        <h2>自我介紹</h2>
        <p>姓名:鄭展舜</p>
        <p>學歷:屏東國立大學教育學系</p>
        <p>星座:巨蟹座</p>
        <p>血型:A型</p>
      </div>
      <div class="introductionImg"></div>
    </div>
    
    <div class="connection">
      <h2>聯絡方式</h2>
      <p>電話:09xxxxxxxx</p>
      <p>Email:XXXX@gmail.com</p>
      <p>地址:XX鄉XX里XX村</p>
    </div>
    <div class="interest"></div>

    <div class="skill">
      <h2>專業技能</h2>
      <p>html★★☆☆☆</p>
      <p>css★★☆☆☆</p>
      <p>javascript★★☆☆☆</p>
      <p>vue★☆☆☆☆</p>
    </div>
    <!-- <Header /> -->
  </div>
  <div class="showContent">
    <div class="landscape">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../images/landscape1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../images/landscape2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../images/landscape3.jpg" class="d-block w-100" alt="...">
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
  </div>
  
    <RouterView />
  </div>
</template>


<style lang="scss" scoped> 
  .headerShow{
    width:100vw;
    height:100vh;
    border:1px solid black;

    h1{
      width:100%;
      text-align:center;
      text-shadow:2px 3px 1px aqua;
      color:blue;
      font-size:50px;
      background-color: papayawhip;
    }

    .headerNav{
      display:flex;
      justify-content: center;
      background-color:rgb(205, 197, 197);
      color:white;
      p{
        font-size:26px;
        margin-top:1%;
      }
    }

    .introduction{
      display:flex;
      height:25vh;
      border:1px solid black;

      .introductionText{
          width:50%;
          height:100%;
          border:1px solid black;
          font-size:24pt;
          text-align:center;
          background-color: beige;
          color:black;
      }

      .introductionImg{
          width:50%;
          height:100%;
          border:1px solid black;
          background-image:url(../images/Heaerphoto.png);
          background-size: contain;
          background-repeat:no-repeat;
          background-color: beige;
      }
    }

    .connection{
        border:1px solid black;
        font-size:24pt;
        text-align:center;
        background-color: beige;
        color:black;
    }

    .skill{
      border:1px solid black;
      font-size:24pt;
      text-align:center;
      background-color: beige;
      color:black;
    }
  }
  

  .showContent{
    width:100%;

    .contentFirst{
      width:100vw;
      height:15vh;
      border:1px solid black;
      display:flex;
      justify-content: center;
      align-items: center;
    .zodiacSign{
      width:30%;
      height:15vh;
      display:flex;
      
      
      .signText{
        flex-direction: column-reverse;
        border:1px solid black;
      }

    }
  }
  }
</style>
