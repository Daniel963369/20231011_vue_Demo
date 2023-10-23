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
        allDelete(){
            this.deleteCostContain.splice(this.deleteIndex,1)
            this.$emit("newData",this.deleteCostContain)
            console.log(this.deleteCostContain)
            let y;
            y = this.deleteCostContain[this.deleteIndex].amount
            console.log(y)


            let x =false
            this.$emit("delback",x)
            this.$emit("getNewNum",y)
            
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