<script>
export default {
    data(){
        return{
            cost:{
                thing:"",
                amount:"",

            },
            
            
        }
    },

    methods:{  //第一個卡關
        dataGo(){
            this.$emit("data",this.cost )
            this.cost = { thing: "", amount: "" } //得把整個物件都一起傳過去才行
        },

        
        
        

    }
}


</script>


<template>
    <div class="body"> 
        <div class="addtransactionZone">
            <div class="textZone">
                <label for="">Text</label>
                <input type="text" v-model="cost.thing">
            </div>
            <div class="amountZone">
                <label for="">Amount</label>
                <input type="number" v-model="cost.amount">
            </div>
            <button type="button" class="btn" @click="dataGo()">Add transaction</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.body{
    width:100vw;
    height:100vh;
    display:flex;
    
    

    .addtransactionZone{
        position:absolute;
        width:35%;
        height:50%;
        border:1px solid black;
        text-align:center;
        

        .textZone{
            
            margin-top:15%;
        }

        .amountZone{
            margin-top:5%;
            margin-right:6%;
        }

        .btn{
            margin-top:8%;
            background-color:blue;
            color: white;
            margin-left:5%;
        }
    }
}

</style>