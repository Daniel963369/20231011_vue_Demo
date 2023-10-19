<script>
import child2 from '../components/child2.vue'
export default {
    data(){
        return{
            childText:""
        }
    },

    components:{ 
        child2
    },

    methods:{

        emitObj(Hell){
            console.log(Hell)
            this.childText = Hell
        },
    }
}

</script>


<template>
    <h1>Emit</h1>
    {{ this.childText }}

<div class="show"></div>
<child2 @apple="emitObj" />
</template>


<style lang="scss" scoped></style>