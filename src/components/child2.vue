<script>
export default {
    data(){
        return{
            text:"orange",
            number1:"5",
            number2:"6"
            
            
        }
    },
    methods:{   
        emitGo(){
            this.$emit("apple",this.text)
        
        },
        transferN1(){
            this.$emit("nu1",this.number1)
        },
        transferN2(){
            this.$emit("nu2",this.number2)
        }
    }
}

</script>

<template>
<div class="showArea">
    <h1>Emit child</h1>
    <p>text變數:{{this.text}}</p>
    <button type="button" v-on:click="emitGo()">emitGo</button>
    <button type="button" @click="$emit('apple',this.text)">emitGo</button>
    <input type="number" v-model="number1" placeholder="">
    <button type="button" @click="transferN1()">傳送第一個數</button>
    <button type="button" @click="transferN2()">傳送第二個數</button>
    <input type="number" v-model="number2" placeholder="">
    

</div>


</template>


<style lang="scss" scoped>


    .showArea{
        width:100vw;
        height:100vh;
        display:flex;
        justify-content: center;
        align-items: center;
    }



</style>