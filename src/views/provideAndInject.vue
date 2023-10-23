<script>
import provideChild from '../components/provideChild.vue'
export default {
    data(){
        return{
            dataMsg:"message"
        }
    },

    components:{
        provideChild
    },

    provide(){
        return{
            msg:this.dataMsg
        }
    }
}

</script>


<template>
<div class="show">
    <h1>這是爺爺</h1>

    <provideChild />
</div>
</template>


<style lang="scss" scoped>

.show{
    width:600px;
    height:600px;
    border:1px solid black;
}


</style>