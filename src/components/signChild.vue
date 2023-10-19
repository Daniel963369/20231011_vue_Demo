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
    <label for="">姓名</label>
    <p>{{this.person.name}}</p>
    <label for="">手機</label>
    <p>{{this.person.phone}}</p>
    <label for="">email</label>
    <p>{{this.person.email}}</p>
    <label for="">地址</label>
    <p>{{this.person.address}}</p>
    <label for="">學校</label>
    <p>{{this.person.school}}</p>
    <label for="">性別</label>
    <p>{{this.person.gender}}</p>
    <label for="">興趣</label>
    <p>{{this.person.interest}}</p>
</div>

</template>



<style lang="scss" scoped>

.answer{

    width:80vw;
    margin:0 10vw;
    background-color:transparent;
    text-align:center;
    color:blue;
    font-size:22pt;
    
    
}

</style>