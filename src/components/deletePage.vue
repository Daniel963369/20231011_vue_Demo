<script>
export default {
    data(){
        return{

        }
    }
}


</script>


<template>
<div class="body">
    <div class="deleteZone">
        <p>Sure to Delete?</p>
        <button type="button">Delete</button>
    </div>
</div>
</template>


<style lang="scss" scoped>

.body{
    width:100vw;
    height:100vh;
    margin-left:50%;
    justify-content: center;
    align-items: center;
    margin-top:50%;

    .deleteZone{
        border:1px solid black;
        width:40vh;
        height:25vh;
        text-align:center;
        align-items: center;
        
        p{
            margin-top:10%;
            font-size:20pt;
        }
        button{
            width:20vh;
            background-color:red;
            color:white;
        }
    }
}
</style>