<script>
export default {
    data() {
        return{
            arr:[
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                },
                {
                    name:""
                }
            ]
        }
    }
}
</script>


<template>
<div class="bigarea">
    <div class="item" v-for="item in arr">
        <p>{{ item.name }}</p>
        <label>Product name</label>
    </div>
</div>
</template>


<style lang="scss" scoped>
.bigarea{
    width:100vw;
    height:100vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    

    .item{
        margin-top:5%;
        width:30%;
        height:30%;
        background-color:aqua;
        
        label{
            display:flex;
            justify-content: center;
            margin-top:50%;
        }
        
    }
}


</style>