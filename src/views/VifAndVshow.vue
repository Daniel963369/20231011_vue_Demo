<script>
export default{
    data(){
        return{
            
            blacktea:false,
            greentea:false,
            blackteaPrice:30,
            greenteaPrice:30,
            tea:0,
            tea2:0, 
        }
    }
}
</script>


<template>

    <div class="test1">
        <h1>V-if And V-show</h1>
        <label for="">紅茶</label>
        <input type="checkbox" value="true" v-model="blacktea">
        <p v-if="blacktea">您點了紅茶!一共是{{this.blackteaPrice}}元</p>
        <br>
        <label for="">綠茶</label>
        <input type="checkbox" value="true" v-model="greentea">
        <p v-if="greentea">您點了綠茶!一共是{{this.greenteaPrice}}元</p>
    </div>

    <div class="test2">
        <h3>v-if And v-else</h3>
        <select name="" id="" v-model="tea">
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <p v-if="tea == 1">普通的茶</p>
        <p v-if="tea == 2">高檔的茶</p>
        <p v-else>不怎麼樣的茶</p>
    </div>


    <div class="test3">
        <h3>v-if And v-else-if And v-else</h3>
        <select name="" id="" v-model="tea2">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        </select>

        <p v-if="tea2 == 0">不怎麼樣的茶</p>
        <p v-else-if="tea2 == 1">普通的茶</p>
        <p v-else="tea2 == 2">高檔的茶</p>
    </div>
    

</template>


<style lang="scss" scoped>

.test1{
    width:100vw;
    text-align: center;
}
.test2{
    width:100vw;
    text-align: center;
}
.test3{
    width:100vw;
    text-align: center;
}
</style>