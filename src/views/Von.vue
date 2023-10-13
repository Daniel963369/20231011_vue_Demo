<script>
import { SassMixin } from 'sass'

export default{
    data() {
        return{
            answer:Math.floor(Math.random()*100+1),
            guess:"",
            max:100,
            min:1,
            
        }
    },
    methods:{
            print(){
                console.log(this.answer)
            },
            guess1(){
                if(this.guess == this.answer){
                    console.log("您答對了");
                }
                if(this.guess > this.max || this.guess < this.min){
                    console.log("不要亂猜")
                }
                if(this.guess < this.answer){
                    console.log("大一點");
                    this.min = this.guess
                    
                }
                if(this.guess > this.answer){
                    console.log("小一點");
                    this.max = this.guess;
                }
            }
            
    }
}
</script>

<template>
    <h1>V-on</h1>
    <div class="guessArea">
        <span>{{ this.min }}</span>
        <span>~</span>
        <span>{{ this.max }}</span>
        <input type="number" v-model="this.guess">
        <button type="button" v-on:click="guess1()">開始猜</button>
    </div>
</template>

<style lang="scss" scoped>


</style>