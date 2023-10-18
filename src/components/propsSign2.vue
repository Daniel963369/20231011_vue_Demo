<script>
import signChild from './signChild.vue'
export default {
    data(){
        return{
            page:1,

            propsObj:{
                name:"",
                phone:"",
                email:"",
                address:"",
                school:"",
                gender:"",
                interest:"",
            }
        }    
    },

    components:{
        signChild
    },

    methods:{
        changePage(){
            this.page = 2
        }
    }
}

</script>

<template>
<div class="body">
    <div v-if="page == 1" class="registerPage">
        <h1>註冊頁面</h1>
        <div class="name">
            <label for="">姓名</label>
            <input type="text" placeholder="" v-model="propsObj.name">
        </div>
        <div class="phone">
            <label for="">電話</label>
            <input type="text" placeholder="" v-model="propsObj.phone">
        </div>
        <div class="email">
            <label for="">email</label>
            <input type="text" placeholder="" v-model="propsObj.email">
        </div>
        <div class="adress">
            <label for="">地址</label>
            <input type="text" placeholder="" v-model="propsObj.address">
        </div>
        <div class="school">
            <label for="">畢業學校</label>
            <input type="text" placeholder="" v-model="propsObj.school">
        </div>
        <div class="gender">
            <label for="">性別</label>
            <div class="male">
                <label for="">男生</label>
                <input type="radio" placeholder="" v-model="propsObj.gender">
            </div>
            <div class="female">
                <label for="">女生</label>
                <input type="radio" placeholder="" v-model="propsObj.gender">
            </div>
        </div>
        <div class="interest">
            <label for="">興趣</label>
            <input type="text" placeholder="" v-model="propsObj.interest">
        </div>
        <button type="button" v-on:click="changePage()">註冊完成</button>
    </div>

    <div class="informationPage" v-if="page == 2">
    
        <signChild :person="propsObj"/>
    </div>
</div>

</template>


<style lang="scss" scoped>
.body{
    width:100vw;
    height:100vh;
    text-align:center;
    background-color:pink;

    .registerPage{
        width:80%;
        margin:0 10%;
        border:1px solid black;
        background-color:rgb(210, 51, 210);
        color:white;
    
        h1{
            margin-top:1%;
            font-size:22pt;
            margin-left:1%;
        }

        .name{
            margin-top:1%;
            margin-bottom:1%;
        }

        .phone{
            margin-bottom:1%;
        }
        .email{
            margin-bottom:1%;
            margin-right:0.5%;
        }
        .adress{
            margin-bottom:1%;
        }
        .school{
            margin-bottom:1%;
            margin-right:1.2%;
        }
        .gender{
            display:flex;
            margin-bottom:1%;
            margin-left:46%;

            .male{
                margin-left:2%
            }
            .female{
                margin-left:2%
            }
        }
        .interest{
            margin-bottom:1%;
        }

        button{
            background-color:lightcoral;
            color:black;
        }
    }

}


</style>