<script>
import { routeLocationKey } from 'vue-router'

export default {
    data(){
        return{
            register:{
            account:"",
            password:"",
            rePassword:""
            },
            get:"",
            changePage:1
            
        }
    },

    methods:{
        registerPerson(){
            this.register.account = this.register.account
            this.register.password = this.register.password
            this.rePassword = this.register.rePassword
            localStorage.setItem("user",JSON.stringify(this.register))
            this.get=JSON.parse(localStorage.getItem("user"))
            console.log(this.get)
            alert("創建成功")
        },

        cancelBtn(){
            let turnToLogin = 1
            this.$emit("chanpage",turnToLogin)
        }
    },
}


</script>


<template>
<div class="body" v-if="changePage == 1">
    
    <div class="signUpPage"> 
        <h1>Sign Up</h1>
        <div class="signUpAccount">
            <p>Account</p>
            <input v-model="register.account" type="text">
        </div>
        <div class="signUpPassword">
            <p>Password</p>
            <input v-model="register.password" type="password">
        </div>
        <div class="signUpRepeat">
            <p>repeat Password</p>
            <input type="password" v-model="register.rePassword">
        </div>
        <div class="btn">
            <button type="button" class="cancelBtn" @click="cancelBtn">cancel</button>
            <button type="button" class="signUpBtn" v-on:click="registerPerson()">sign up</button>
        </div>
    </div>
</div>




</template>


<style lang="scss" scoped>
    .body{
        width:100vw;
        flex-direction:column;
        text-align:center;
        background-image: url(../../public/都市景象圖.avif);
        display:flex;
        margin-top:2%;

        .signUpPage{
            width:80%;
            margin:0 10%;
        
            flex-direction:column;
            

            h1{
                color:white;
                
            }

            .signUpAccount{
                margin-top:3%;
                p{
                    margin-right:30%;
                    color:white;
                }
                input{
                    width:35%;
                    height:6vh;
                    border-radius:10px 10px 10px 10px;
                }
            }
            .signUpPassword{
                margin-top:3%;
                p{
                    margin-right:30%;
                    color:white;
                }
                input{
                    width:35%;
                    height:6vh;
                    border-radius:10px 10px 10px 10px;
                }
            }
            .signUpRepeat{
                margin-top:3%;
                p{
                    margin-right:25%;
                    color:white;
                }
                input{
                    width:35%;
                    height:6vh;
                    border-radius:10px 10px 10px 10px;
                }
            }

            .btn{
                margin-top:5%;
                display:flex;

                .cancelBtn{
                    width:8vw;
                    height:5vh;
                    border-radius:5px 5px 5px 5px;
                    background-color:rgb(181, 47, 114);
                    color:white;
                    margin-left:36%;
                }

                .signUpBtn{
                    width:8vw;
                    height:5vh;
                    border-radius:5px 5px 5px 5px;
                    background-color:rgb(56, 61, 208);
                    color:white;
                    margin-left:5%;
                }
            }



        }
    }
</style>