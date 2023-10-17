<script>
export default {
    data(){
        return{
            title:"cool",
            wordMiddle:"center",
            isBlue:false,
            isLarge:false,
            isMiddle:false,
            styleArr:[],
            blizzardMax:'https://truth.bahamut.com.tw/s01/202107/5d5f6266dff85ae9505b7c334498b268.PNG',


        }
    },
    methods:{
    
    }
}

</script>

<template>
    <div class="test1">
        <h1 class="cool">COOL1</h1>
        <h2 v-bind:class="title">COOL2</h2>
        <h3 v-bind:class="wordMiddle">COOL3</h3>
    </div>

    <div class="test2">
        <h3> class{ }</h3>
        <label for="">isMiddle</label>
        <input type="checkbox" value="true" v-model="isMiddle">
        <label for="">isBlue</label>
        <input type="checkbox" value="true" v-model="isBlue">
        <label for="">isLarge</label>
        <input type="checkbox" value="true" v-model="isLarge">
        <p v-bind:class="{
            blue:isBlue,
            large:isLarge,
            middle:isMiddle
        }">在這裡</p>
    </div>

    <div class="test3">
        <h3>class{ }</h3>
        <label for="">Blue</label>
        <input type="checkbox" value="blue" v-model="styleArr">
        <label for="">Large</label>
        <input type="checkbox" value="large" v-model="styleArr">
        <label for="">Bold</label>
        <input type="checkbox" value="bold" v-model="styleArr">
        <p v-bind:class="styleArr">在那裏</p>
    </div>

    <div class="test4">
        <img v-bind:src="blizzardMax" alt="">
    </div>


</template>

<style lang="scss" scoped>
.cool{
    color:darkblue;
}
.center{
    text-align:center;
}

.blue{
    color:blue;
}

.large{
    font-size:56pt;
}

.middle{
    text-align:center;
}

.bold{
    font-weight:bold;
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

</style>