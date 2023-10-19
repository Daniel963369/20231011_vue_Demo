<script>
export default {
    data(){
        return{
            text:"orange",
            
            
        }
    },
    methods:{   
        emitGo(){
            this.$emit("apple",this.text)
        
        },
    }
}

</script>

<template>
<div class="showArea">
    <h1>Emit child</h1>
    <p>text變數:{{this.text}}</p>
    <button type="button" v-on:click="emitGo()">emitGo</button>

</div>


</template>


<style lang="scss" scoped></style>