<script>
export default {
    data(){
        return{
        }
    },
    props:[
        "card",
        "cardImg",
        "card2",
        "card2Img"
    ]
}
</script>


<template>
<div class="square">
    <p>{{ this.card }}</p>
    
    <img :src="cardImg" alt="">

    <p>{{this.card2}}</p>

    <img :src="card2Img" alt="">
</div>


</template>

<style lang="scss" scoped>
    .square{
        margin-top:5%;
        width:600px;
        height:600px;
        background-color: aqua;
    }

</style>