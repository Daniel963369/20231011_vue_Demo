<script>
export default {
    data() {
        return{
            childObj:{
                name:"",
                age:""
            }
        }
    },
    methods:{
        dataGo(){
            this.$emit("data",this.childObj)
        }
    }

}


</script>


<template>
<input type="text" v-model="childObj.name">
<input type="text" v-model="childObj.age">
<button type="button" @click="dataGo()">資料傳送</button>
    

</template>


<style lang="scss" scoped>


</style>