<script>
export default {
    data() {
        return{
            arr:[1,2,3,4,5],

            arr2:[
                {
                    name:"Mark",
                    age:15,
                    address:"xx市XX里366號"
                },
                {
                    name:"Molly",
                    age:32,
                    address:"xx市XX里360號"
                },
                {
                    name:"Christy",
                    age:26,
                    address:"xx市XX里47號"
                },
            ]
        }
    }
}
</script>

<template>
    <h1>v-for</h1>
    <p v-for="item in arr">{{ item }}</p>
    <ol v-for="item in arr2">
        <li>{{ item.name }}</li>
        <li>{{ item.age }}</li>
        <li>{{ item.address }}</li>
    
    </ol>
</template>

<style lang="scss" scoped>
h1{
    text-align:center;
}
</style>