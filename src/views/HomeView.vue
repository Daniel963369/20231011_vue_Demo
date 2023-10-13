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
    <div class="headerImg">
      <div class="headerImg1"></div>
      <div class="headerImg2"></div>
      <div class="headerImg3"></div>
    </div>
    <!-- <Header /> -->
  </div>
  <div class="showContent">
    <div class="zodiacSign">
      <p class="signText">星座:巨蟹座<br><br><br>個性:內向、羞怯、道德意識強烈、感覺敏銳</p>
      <img src="../images/Cancer.webp"  alt="">
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
      border:2px solid greenyellow;
      background-color: papayawhip;
    }

    .headerImg{
      display:flex;
      width:100%;
      height:40%;
      justify-content:space-around;
      position: relative;
      
      

      .headerImg1{
        width:30%;
        height:100%;
        background-image: url(../images/beach-bora-bora-flow-hd-wallpaper.jpg);
        background-size:contain;
        background-repeat:no-repeat;
        position:absolute;
        left:0;
      }
      .headerImg2{
        width:30%;
        height:100%;
        background-image:url(../images/blue-sky-clouds-flying-hd-wallpaper.jpg);
        background-size:contain;
        background-repeat:no-repeat;
        margin-left:6%;
        position:absolute;
        left:50;
      }
      .headerImg3{
        width:30%;
        height:100%;
        background-image: url(../images/bright-countryside-dawn-daylight.jpg);
        background-size:contain;
        background-repeat:no-repeat;
        position:absolute;
        right:0;
      }
    }
  }

  .showContent{
    width:100%;

    .zodiacSign{
      width:30%;
      height:30vh;
      display:flex;
      
      
      .signText{
        flex-direction: column-reverse;
        border:1px solid black;
      }
      
      img{
        margin-right:12%;
        
      }
    }
  }
</style>
