<script>
import provideChild2 from '../components/provideChild2.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        provideChild2
    }
}

</script>


<template>
<div class="show">
    <h1>這是爸爸</h1>

    <provideChild2 />
</div>

</template>


<style lang="scss" scoped>
.show{
    width:400px;
    height:400px;
    border:1px solid black;
}

</style>