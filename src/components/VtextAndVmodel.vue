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