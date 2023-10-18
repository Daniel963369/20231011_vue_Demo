<script>
import propSign2 from './propSign2.vue'
export default {
    data(){
        return{
            page:1,
        }
    },
    components:{
        propSign2
    },

    methods:{
        changePage(){
            this.page = 2;
        }
    }
}

</script>


<template>


<div v-if="page == 1" class="inputPage">
    <h1>會員登入</h1>
    <div class="emailInput">
        <label for="">電子郵件</label>
        <input type="text">
    </div>
    <div class="passwordInput">
        <label for="">密碼</label>
        <input type="text">
    </div>
    <button type="button" v-on:click="changePage()">註冊帳號</button>
</div>


<div class="changePage" v-if="page == 2"> 

    <propSign2 />
</div>


</template>

<style lang="scss" scoped>

.inputPage{
    width:90vw;
    height:30vh;
    margin:0 5vw;
    background-color:blueviolet;
    text-align:center;
    margin-top:2%;

    h1{
        font-size:22pt;
        margin-left:2%;
    }

    .emailInput{
        margin-right:2.3%;
        margin-top:3%;
        
    }
    .passwordInput{
        margin-top:2%;
        
    }

    button{
        margin-top:1%;
    }
    
}

</style>