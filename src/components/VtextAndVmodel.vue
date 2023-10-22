<script>
import test from './test.vue'
export default {
    data(){
        return{
            info:{
                name:"Daniel",
                age:23
            },

            cool:"",
            age:18,

            selectText:"",
            lazyText:"",
            numberText:0,
            trimText:"",
            checkboxText:[],
            radioText:[],

            
        }
},components:{
    test
},
method:{

}
}
</script>


<template>
    <h1>V-text and V-model</h1>
    <p class="templateInfo">{{ this.info }}</p>
    <test class="templateTest" v-text="info" />

    <input type="text" v-model="cool">
    <h4>{{ this.cool }}</h4>
    <input type="number" v-model="age">
    <h4>{{ '年齡:'+this.age }}</h4>

    <select name="" id="" v-model="selectText">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <h4>{{ selectText }}</h4>

    <input type="text" v-model.lazy="lazyText">
    <p>{{ this.lazyText }}</p>
    <input type="number" v-model.number="numberText">
    <p>{{ this.numberText }}</p>
    <input type="text" v-model.trim="trimText">
    <p>{{ this.trimText }}</p>

    <label for="">早餐</label>
    <input type="checkbox" v-model="checkboxText" name="meal" value="breakfast" id="breakfast">
    <label for="">中餐</label>
    <input type="checkbox" v-model="checkboxText" name="meal" value="lunch" id="lunch">
    <label for="">晚餐</label>
    <input type="checkbox" v-model="checkboxText" name="meal" value="dinner" id="dinner">
    <p>{{ this.checkboxText }}</p>
    
    <label for="">早餐</label>
    <input type="radio" v-model="radioText" name="food" value="pork">
    <label for="">午餐</label>
    <input type="radio" v-model="radioText" name="food" value="chicken">
    <label for="">晚餐</label>
    <input type="radio" v-model="radioText" name="food" value="fish">
    <p>{{ this.radioText }}</p>
    
</template>

<style lang="scss" scoped>
.templateInfo{
    color:green;
    font-size:15pt;
}
.templateTest{
    font-size:20pt;
    color:pink;
    text-align:center;
}
</style>