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

<p>{{this.person.name}}</p>
<p>{{this.person.phone}}</p>
<p>{{this.person.email}}</p>
<p>{{this.person.adress}}</p>
<p>{{this.person.school}}</p>
<p>{{this.person.gender}}</p>
<p>{{this.person.interest}}</p>

</template>



<style lang="scss" scoped></style>