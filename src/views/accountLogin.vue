<script>
import accountSignup from '../components/accountSignup.vue'
import ledger from '../components/ledger.vue'
export default {
    data(){
        return{
            pageSignUp:1,
            pageLedger:1
        }
    },
    components:{
        accountSignup,
        ledger
    },

    methods:{
        changeSignUpPage(){
            this.pageSignUp = 2
        },

        changeLedgerPage(){
            this.pageLedger = 2
            this.pageSignUp = 0
        }
    }
}


</script>


<template>
<div class="signPage" v-if="pageSignUp == 1">
    <h1>Expense Tracker</h1>
    <label for="">Account</label>
    <input type="text">
    <label for="">Password</label>
    <input type="text">
    <div class="btn">
        <button type="button" class="signBtn" @click="changeSignUpPage()">Sign Up</button>
        <button type="button" class="logBtn" @click="changeLedgerPage()">Log in</button>
    </div>
</div>


<div class="signUpPage" v-else-if="pageSignUp == 2" >

    <accountSignup />
    
    
</div>

<div class="ledgerPage" v-if="pageLedger == 2">

    <ledger/>
</div>


</template>


<style lang="scss" scoped>
.signPage{
    width:80%;
    margin:0 10%;
    display:flex;
    flex-direction:column;
    background-image: url(../../public/都市白天景象圖.avif);
    h1{
        text-align:center;
        color:blue;
    }

    label{
        margin-left:30%;
    }
    input{
        margin-left:30%;
        width:40%;
        height:5vh;
        border-radius:10px 10px 10px 10px;
    }

    .btn{
        width:80vw;
        height:20vh;
        margin-top:5%;
        justify-content: center;

        .signBtn{
            
            width:10%;
            height:30%;
            margin-right:6%;
            background-color:pink;
            color:white;
        }

        .logBtn{
            width:10%;
            height:30%;
            background-color:pink;
            color:white;
        }


    }
}
</style>