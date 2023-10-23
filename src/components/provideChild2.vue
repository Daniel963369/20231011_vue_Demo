<script>
export default {
    data(){
        return{

        }
    },
    inject:[
        "msg"
    ]
}

</script>


<template>
<div class="show">
    <h1>這是孫子</h1>
爺爺傳的訊息:{{ msg }}
</div>

</template>


<style lang="scss" scoped>

.show{
    width:200px;
    height:200px
}
</style>