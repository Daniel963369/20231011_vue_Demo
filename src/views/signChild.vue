<script>
export default {
    data(){
        return{

        }
    },

    props:[
        "person",
    ],
}

</script>


<template>

<div class="body">
    <div class="bgArea">
        <div class="signPage">
            <h1>註冊頁面</h1>
            <div class="name">
                <label for="">姓名</label>
                <input type="text" placeholder="" v-model="person.name">
            </div>
            <div class="phone">
                <label for="">電話</label>
                <input type="text" placeholder="" v-model="person.name">
            </div>
            <div class="Email">
                <label for="">e-mail</label>
                <input type="text" placeholder="" v-model="person.Email">
            </div>
            <div class="password">
                <label for="">密碼</label>
                <input type="text" placeholder="">
            </div>
            <div class="adress">
                <label for="">住址</label>
                <input type="text" placeholder="">
            </div>  
            <div class="school">
                <label for="">畢業學校</label>
                <input type="text" placeholder="">
            </div>
            <div class="gender">
                <p>性別</p>
                <div class="male">
                    <label for="">男生</label>
                    <input type="radio">
                </div>
                <div class="female">
                    <label for="">女生</label>
                    <input type="radio">
                </div>
            </div>
            <div class="interest">
                <label for="">興趣</label>
                <input type="text" placeholder="">
            </div>

            <button class="completed">註冊完成</button>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>

.body{
    width:100vw;
    height:100vh;
    margin-top:2%;

    h1{
        font-size:35pt;
        margin-left:4%;
        color:blue;
    }

    .bgArea{
        width:70%;
        height:80%;
        margin:0 15%;
        background-color:rgb(131, 131, 199);
        display:flex;
        align-items: center;
        
        

        .signPage{
            width:80%;
            height:90%;
            margin:0 10%;
            background-color:rgb(226, 221, 221);
            text-align:center;
            display:flex;
            flex-direction:column;

            .name{
                margin-top:3%;
            }
            .phone{
                margin-top:2%;
            }
            .Email{
                margin-top:2%;
                margin-right:2%;
            }
            .password{
                margin-top:2%;
                
            }
            .adress{
                margin-top:2%;
            }
            .school{
                margin-top:2%;
                margin-right:4%;
            }
            .gender{
                display:flex;
                margin-top:2%;
                margin-left:37%;

                .male{
                    margin-left:3%;
                }
                .female{
                    margin-left:7%;
                }
            }


            .completed{
                width:10%;
                height:10%;
                margin-left:45%;
                margin-top:1%;
                background-color:plum;
                color:rgb(68, 69, 77);
                
                
            }
        }
    }
}

</style>