<script>
import accountSignup from '../components/accountSignup.vue'
import ledger from '../components/ledger.vue'
export default {
    data(){
        return{
            pageSignUp:1,
            inputAccount:"",
            inputPassword:"",
            localstorageBottle:[]
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

        getData(){

            this.localstorageBottle = JSON.parse(localStorage.getItem("user"))
            console.log(this.localstorageBottle)
            if(this.localstorageBottle.account == this.inputAccount && this.localstorageBottle.password == this.inputPassword){
                alert("帳號密碼正確")
                alert("成功登入")
                this.pageSignUp = 0
                this.$router.push('/ledger')
                
            }
            else{
                alert("帳號密碼錯誤")
                alert("請重新輸入")
                
                
                
            }
        },

        toLogin(x){
            this.pageSignUp = x
        }
    }
}


</script>


<template>
<div class="signPage" v-if="pageSignUp == 1">
    <h1>Expense Tracker</h1>
    <label for="">Account</label>
    <input type="text" v-model="inputAccount">
    <label for="">Password</label>
    <input type="password" v-model="inputPassword">
    <div class="btn">
        <button type="button" class="signBtn" @click="changeSignUpPage()">Sign Up</button>
        <button type="button" class="logBtn" @click="getData()">Log in</button>
    </div>
</div>


<div class="signUpPage" v-else-if="pageSignUp == 2" >

    <accountSignup @data="getData" @chanpage="toLogin" />
    
    
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