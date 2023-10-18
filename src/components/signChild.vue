<script>
export default {
    data(){
        return{
            
        }
    },
    props:[
        "person"
    ]
}

</script>

<template>

<div class="answer">
    <p>{{this.person.name}}</p>
    <p>{{this.person.phone}}</p>
    <p>{{this.person.email}}</p>
    <p>{{this.person.adress}}</p>
    <p>{{this.person.school}}</p>
    <p>{{this.person.gender}}</p>
    <p>{{this.person.interest}}</p>
</div>

</template>



<style lang="scss" scoped>

.answer{

    width:80vw;
    margin:0 10vw;
    background-color:pink;
    text-align:center;
    color:blue;
    font-size:22pt;
    border:1px solid black;
    
}

</style>