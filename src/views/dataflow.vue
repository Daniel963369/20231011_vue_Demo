<script>
import dataflow1 from '../components/dataflow1.vue'
import dataflow2 from '../components/dataflow2.vue'

export default {
    data() {
        return{
            obj:{

            },

            page:false
            
        }
    },
    components:{
        dataflow1,
        dataflow2
    },

    methods:{
        getData(x){
            this.obj = x
            console.log(x)
        },

        pageChange(x){
            console.log(x)
            this.page = !this.page
        }
    }
}


</script>


<template>

<div class="show1" v-show="page == false">
{{this.obj}}

<dataflow1 @data="getData" />
</div>

<div class="show2" v-show="page == true">

<dataflow2 :name="obj.name" :age="obj.age" :pageChan="pageChange" />
</div>


</template>


<style lang="scss" scoped>


</style>