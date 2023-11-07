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
      <a href="">Tainan｜</a> 
      <a href="">Abroad｜</a>
      <a href="">Lifestyle｜</a>
      <a href="">Sharing｜</a>
      <a href="">Other｜</a>
      <a href="">Search｜</a>
    </div>
    <div class="introduction">
      <div class="introductionText">

      </div>
      <div class="introductionImg"></div>
    </div>
    
    <div class="connection">
 
    </div>
    <div class="interest"></div>

    <div class="skill">
  
    </div>
    <!-- <Header /> -->
  </div>
  <div class="showContent">
 

  <div class="aboutMe">
    
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
      color:aqua;
      font-size:50px;
      background-color: papayawhip;
      animation-name:titleChange;
      animation-duration:2s;
      animation-iteration-count:infinite;
      text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);

      @keyframes titleChange {
        
        0%  {background-color:green;}
        25% {background-color:lawngreen; font-size:26pt;}
        50% {background-color:lightgreen; font-size:30pt;}
        
      }
    }

    .headerNav{
      display:flex;
      justify-content: center;
      background-color:rgb(205, 197, 197);
      color:white;
      text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);
      a{
        font-size:26px;
        margin-top:1%;
        text-decoration:none;
        color:purple;
      }
    }

    .introduction{
      display:flex;
      height:35vh;
      border:1px solid black;

      .introductionText{
          width:50%;
          height:100%;
          border:1px solid black;
          font-size:20pt;
          text-align:center;
          background-color: beige;
          color:black;
      }

      .introductionImg{
          width:50%;
          height:100%;
          border:1px solid black;
          background-size: contain;
          background-repeat:no-repeat;
          background-color: beige;
      }
    }

    .connection{
        width:50vw;
        border:1px solid black;
        font-size:24pt;
        text-align:center;
        background-color: beige;
        color:black;

        video{
          width:50vw;
          border:1px solid black;
        }
    }

    .skill{
      width:100vw;
      height:50vh;
      border:1px solid black;
      font-size:24pt;
      text-align:center;
      background-color: beige;
      color:black;
    }
  }
  

  .showContent{
    width:100%;
    margin-top:18%;

    .aboutMe{
      width:100vw;
      height:25vh;
      border:1px solid black;
      background-color: blueviolet;

      p{
        font-size:26pt;
        text-align:center;
        margin-top:5%;
        color:white;
      }
    }
  }
</style>
