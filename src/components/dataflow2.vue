<script>
export default {
    data() {
        return{

            
        }
    },
    props:[
        "name",
        "age",
        "pageChan"
    ]
}


</script>


<template>

<div class="inputArea">
    <p>姓名是:{{this.name}}</p>
    <p>年齡是:{{this.age}}</p>
</div>

</template>


<style lang="scss" scoped>


</style>