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
            ]
        }
    }
}
</script>


<template>
<div class="zone1"></div> 
<div class="zone2">
    <div class="item" v-for="item in arr">
        <div>{{ item.name }}</div>
    </div>
</div>
<div class="zone3">
    <div class="zone3Left">
    </div>
    <div class="zone3Right">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi reiciendis totam optio officia iste magni quae. Voluptate, laborum ea!</p>
    </div>>
</div>
<div class="zone4"></div>


</template>


<style lang="scss" scoped>
.zone1{
    margin-top:5%;
    width:100vw;
    height:15vh;
    background-color: aqua;
}


.zone2{
    display:flex;
    justify-content:space-around;
    width:100vw;
    height:20vh;
    margin-top:5%;

    .item{
    width:150px;
    height:150px;
    background-color:aqua;
}
}

.zone3{
    margin-top:5%;
    width:100vw;
    height:30vh;
    display:flex;
    

    .zone3Left{
        width:350px;
        height:350px;
        background-color:aqua;
    }

    .zone3Right{
        margin-top:7%;
        margin-left:5%;
        justify-content: center;
        align-items: center;
        height:350px;
        

        p{
            width:30%;
        }
    }
}

.zone4{
    margin-top:20%;
    width:100vw;
    height:10vh;
    background-color:aqua;
}




</style>