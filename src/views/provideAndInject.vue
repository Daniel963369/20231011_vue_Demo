<script>
import provideChild from '../components/provideChild.vue'
import {provide,ref} from 'vue'

export default {
    data(){
        return{
            dataMsg:"message",
            dataArr:["str","spe","luck"]
        }
    },

    methods:{
        addItem(){
            this.dataArr.push('xxx')
        }
    },

    components:{
        provideChild
    },

    provide(){
        return{
            msg:this.dataMsg,
            arr:this.dataArr
        }   
    },

    setup(){
        let pig = ref('pig')
        provide('setupMSG',pig)
        return{
            pig
        }
    }


}

</script>


<template>
<div class="show">
    <h1>這是爺爺</h1>
    <input type="text" v-model="this.dataMsg">
    <button type="button" @click="addItem">加xxx</button>
    <p>{{ this.dataArr }}</p>
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