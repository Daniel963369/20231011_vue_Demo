<script>
import addtransaction from './addtransaction.vue'
import deletePage from './deletePage.vue'

export default {
  data() {
    return {
      key:0,
      page:1,
      addtransactionPage:1,
      showAddtransaction:false,
      showDelete:false,
      plusNum:0,  
      neNum: 0,
      totalNum: 0,
      Title:"Expense Tracker",
      Title2:"Kouhei",
      Title3:"Your Balance",
      costContain :[
        
    ],
    
      
    }
  },
  methods: {
    changePage(){
      this.page = 2
    },
    changeaddtransactionPage(){
      this.addtransactionPage = 2
      page = 0
    },
    getData(x){
      this.costContain.push(x)
      // if(x.amount >= 0){
      //   this.plusNum = this.costContain.reduce((total, item) => total + Number(item.amount), 0);
      // }
      // else {
      //   this.neNum = this.costContain.reduce((total1, item1) => total1 + Number(item1.amount), 0);
      // }
      if(x.amount >= 0){
        this.plusNum = this.plusNum + x.amount
      }
      else{
        this.neNum = this.neNum + x.amount
      }

      this.totalNum = this.plusNum + this.neNum
    },

    toggleAddtransaction(){
      this.showAddtransaction = !this.showAddtransaction
    },
    
    toggleDelete(){
      this.showDelete = !this.showDelete
    },

    indexTransfer(index){
      this.key = index
    },

    deleteDataTransfer(x1){
      x1 = this.costContain
    },

    delback(x2){
      this.showDelete =x2
    },

    getNewNum(x3){
      if(x3 >= 0){
        this.plusNum = this.plusNum - x3
        
      }

      else{
        this.neNum = this.neNum - x3
        
      }
    }


 



    },


  components: {
      addtransaction,
      deletePage
      
  },
  

    
  
}
</script>

<template>
  <div class="bgArea" v-if="page == 1">
    <div class="blueArea">
      <h1 class="titleZone">{{ Title }}</h1>
      <h1 class="titleZone2">{{ Title2 }}</h1>
      <h1 class="titleZone3">{{ Title3 }}</h1>
      <h1 class="titleZone4">＄{{ totalNum }}</h1>
    </div>
    <div class="whiteArea">
      <div class="top">
        <div class="topLeft">
          <h1 class="topLeftText">INCOME</h1>
          <h1>＄{{ plusNum }}</h1>
        </div>
        <div class="topRight">
          <h1 class="topRightText">EXPENSE</h1>
          <h1>＄{{ neNum }}</h1>
        </div>
      </div>
      <div class="btn">
        <button type="button" class="numBtn" v-on:click="toggleAddtransaction()">Add transaction</button>
      </div>
      <deletePage @delback="delback" @getNewNum="getNewNum" :deleteCostContain="costContain" :deleteIndex="key" @newData="deleteDataTransfer"  v-if="showDelete"/>
      <div class="content">
        <div class="block" v-for="item,index in costContain">
          <span>{{ item.thing }}</span>
          <span>{{ item.amount }}</span>
          <button type="button" class="blockBtn" v-on:click="toggleDelete();indexTransfer(index)" >delete</button>
        </div>
        <addtransaction @data="getData" v-if="showAddtransaction"/>
      </div>
    </div>
  </div>



</template>

<style lang="scss" scoped>
.bgArea {
  width: 100%;
  height: 100vh;
  display: flex;

  .blueArea {
    width: 40vw;
    height: 100vh;
    background-color: #4b85a0;
    

    h1{
      color:white;
    }

    .titleZone{
      display:flex;
      justify-content: center;
      align-items: center;
      height:15vw;
    }

    .titleZone2{
      display:flex;
      justify-content: center;
      align-items: center;
    }

    .titleZone3{
      display:flex;
      justify-content: center;
      align-items: center;
      margin-top:7%;
    }

    .titleZone4{
      display:flex;
      justify-content: center;
      align-items: center;
    }



  }

  .whiteArea {
    width: 60vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    .top{
      width:100%;
      height:30%;
      display:flex;
      justify-content:space-around;
      

    .topLeft{
      color:rgb(33, 137, 75);
    }

    .topRight{
      color:rgb(164, 52, 127);
    }
    }

    .numBtn{
      background-color:rgb(102, 102, 176);
      color:white;
      font-size:24pt;
      margin-bottom:10%;
      border-radius:5px 5px 5px 5px;
    }
    .content{
      width:60% ;
      height: 40vh;
      color:#3C7FA5;
      
      .block{
        display: flex;
        justify-content: space-between;
        font-size: 24pt;
        border:2px solid #3C7FA5;
        margin-bottom:3%;

        input{
          color:blue;
          font-size:30px;
          width:200px;
          height:50px;
        }

        .blockBtn{
          background-color:rgb(19, 19, 79);
          color:white;
          font-size:20pt;
        }
      }
    }
  }

}
</style>
