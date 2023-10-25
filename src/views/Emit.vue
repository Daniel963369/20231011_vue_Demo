<script>
import child2 from '../components/child2.vue'
export default {
    data(){
        return{
            childText:"",
            childText2:"",
        }
    },

    components:{ 
        child2
    },

    methods:{

        emitObj(Hell){
            this.childText = Hell
            console.log(Hell)
        },

        getNumber1(Number1){
            this.childText = Number1
            console.log(Number1)
        },
        getNumber2(Number2){
            this.childText2 = Number2
            console.log(Number2)
        },
    }
}

</script>


<template>


<div class="show"></div>
<child2 @apple="emitObj"
@nu1="getNumber1"
@nu2="getNumber2"
:num2="childText2" />
</template>


<style lang="scss" scoped>




</style>