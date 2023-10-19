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
            <div class="textZone">
                <label for="">Text</label>
                <input type="text">
            </div>
            <div class="amountZone">
                <label for="">Amount</label>
                <input type="text">
            </div>
            <button type="button" class="btn">Add transaction</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.body{
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;

    .deleteZone{
        width:35%;
        height:50%;
        border:1px solid black;
        text-align:center;

        .textZone{
            
            margin-top:15%;
        }

        .amountZone{
            margin-top:5%;
            margin-right:6%;
        }

        .btn{
            margin-top:8%;
            background-color:blue;
            color: white;
            margin-left:5%;
        }
    }
}

</style>