<script>
import test from '../components/test.vue'
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

            colorBlue:"color:blue",
            textAlignCenter:"text-align:center",
            bold:"font-weight:bold",
            

            imgArr:[],
            hotelroom:[]
        }
},components:{
    test
},
method:{

}
}
</script>


<template>
    <div class="body">
        <h1>V-text and V-model</h1>
        <p class="templateInfo">{{ this.info }}</p>
        
        <test class="templateTest" v-text="info" />

        <div class="test1">
            <input type="text" v-model="cool">
            <h4>{{ this.cool }}</h4>
            <input type="number" v-model="age">
            <h4>{{ '年齡:'+this.age }}</h4>
        </div>
        <div class="test2">
            <select name="" id="" v-model="selectText">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <h4>{{ selectText }}</h4>
        </div>
        
        <div class="test3">
        <input type="text" v-model.lazy="lazyText">
            <p>{{ this.lazyText }}</p>
            <input type="number" v-model.number="numberText">
            <p>{{ this.numberText }}</p>
            <input type="text" v-model.trim="trimText">
            <p>{{ this.trimText }}</p>
        </div>

        <div class="test4">
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
    </div>

    <div class="test5">
        <label for="">究極天使獸</label>
        <input type="radio" value="https://digimon.net/cimages/digimon/seraphimon.jpg" v-model="imgArr">
        <label for="">神聖天女獸</label>
        <input type="radio" value="https://truth.bahamut.com.tw/s01/202001/00f91b6c792a025c121a968633b78f8b.JPG" v-model="imgArr">
        <label for="">基路比獸</label>
        <input type="radio" value="https://digimon.net/cimages/digimon/cherubimon.jpg" v-model="imgArr">
        <img :src="imgArr" alt="">
    </div>
    <hr>

    <div class="test6">
        <label for="">高級套房</label>
        <input type="radio" v-model="hotelroom" value="https://www.sheratongrandtaipei.com/files/pages_15973110501159uwd27_l.jpg">
        <label for="">一般套房</label>
        <input type="radio" v-model="hotelroom" value="https://www.sheratongrandtaipei.com/files/pages_15973109311159ut025_l.jpg">
        <label for="">平價套房</label>
        <input type="radio" v-model="hotelroom" value="https://www.sheratongrandtaipei.com/files/pages_15973114171159v9j51_l.jpg">
        <img v-bind:src="hotelroom" alt="">
    </div>
</div>
</template>

<style lang="scss" scoped>
.body{
    width:100vw;
    justify-content: center;
    align-items:center;

    h1{
        text-align:center;
    }
.templateInfo{
    color:green;
    font-size:15pt;
    text-align:center;
}
.templateTest{
    font-size:20pt;
    color:pink;
    text-align:center;
}

.test1{
    width:100vw;
    
    text-align:center;
}

.test2{
    width:100vw;
    
    text-align:center;
}
.test3{
    width:100vw;
    
    text-align:center;
}
.test4{
    width:100vw;
    
    text-align:center;
}
.test5{
    width:100vw;
    
    text-align:center;
}
.test6{
    width:100vw;
    
    text-align:center;
}
}
</style>