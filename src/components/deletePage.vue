<script>
export default {
    data(){
        return{

        }
    },
    props:[
        "deleteCostContain",
        "deleteIndex",
    ],

    methods:{
        allDelete(){   //第三個卡關
            this.$emit("newData",this.deleteCostContain)
            console.log(this.deleteCostContain)
            let y;
            y = this.deleteCostContain[this.deleteIndex].amount //先得到要刪除的值並傳回父層
            this.$emit("getNewNum",y)
            console.log(y)

            this.deleteCostContain.splice(this.deleteIndex,1)
            let x =false
            this.$emit("delback",x)
            
            
        },

        toggleDeletePage(){
            this.deletePage = !this.deletePage
        }
    }
}


</script>


<template>
<div class="body">
    <div class="deleteZone">
        <p>Sure to Delete?</p>
        <button type="button" @click="allDelete(); toggleDeletePage()">Delete</button>
    </div>
</div>
</template>


<style lang="scss" scoped>


</style>