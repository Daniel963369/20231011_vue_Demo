<script>
import { toHandlers } from 'vue'

export default {
    data(){
        return{
            point:0,
            ntd:0
        }
    },

    methods:{
        addPoint(){
            this.point = this.point +1
        }
        
    },
    watch:{
        point(){
            this.ntd = this.point * 10
        }
    },
    computed:{
        jyp(){
            return this.ntd * 4.63;
        }
    },
    beforeCreate(){
        console.log("beforeCreate"+this.point)
    },
    created(){
        console.log("Create"+this.point)

    },
    beforeMount(){
        console.log("beforeMount"+this.point)

    },
    mounted(){
        console.log("mounted"+this.point)

    },
    beforeUpdate(){
        console.log("beforeUpdate"+this.point)

    },
    updated(){
        console.log("updated"+this.point)
    },
    beforeUnmount(){
        console.log("beforeUnmount"+this.point)

    },
    unmounted(){
        console.log("unmounted"+this.point)

    },
}

</script>


<template>
<p>{{ this.point }}</p>
<p>{{ this.ntd }}</p>
<p>{{ jyp }}</p>
<p v-if="point == 10">100</p>


<div class="circle" @click="addPoint()"></div>


</template>


<style lang="scss" scoped>


.circle{
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:palevioletred;
    cursor:pointer;

    &:hover{
        scale:1.05;
    }


}

</style>