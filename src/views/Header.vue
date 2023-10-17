<script>
    import { RouterLink, RouterView } from 'vue-router';
    export default {
        components: {
            RouterLink
        }
    }
</script>



<template>
    <nav class="topNav">
        <RouterLink class="navHome" to="/">Home</RouterLink>
        <RouterLink class="navtextAndVModel" to="/VtextAndVModel">V-text & V-Model</RouterLink>
        <RouterLink class="navVfor" to="/Vfor">V-for</RouterLink>
        <RouterLink class="navPractice1" to="/Practice1">practice1</RouterLink>
        <RouterLink class="navPractice2" to="/practice2">practice2</RouterLink>
        <RouterLink class="navVon" to="/Von">V-on</RouterLink>
        <RouterLink class="navPractice3" to="/practice3">practice3</RouterLink>
        <RouterLink class="navVbind" to="/Vbind">v-bind</RouterLink>
        <RouterLink class="navPractice4" to="/practice4">practice4</RouterLink>
        <RouterLink class="navVifAndVshow" to="/VifAndVshow">VifAndVshow</RouterLink>
        <RouterLink class="navPractice5" to="/practice5">practice5</RouterLink>
        
        
    </nav>
</template>

<style lang="scss" scoped>

.topNav{
    width:100%;
    height:100%;
    background-color:aqua;
    font-size:24pt;
    color:white;
    text-align:center;

    
    

    .navHome{
        margin-right:1%;
        text-decoration:none;
        color:green;
    }

    .navtextAndVModel{
        margin-right:1%;
        text-decoration:none;
        color:green;
    }

    .navVfor{
        margin-right:1%;
        text-decoration:none;
        color:green;
    }
    .navPractice1{
        margin-right:1%;
        text-decoration:none;
        color:green;
    }
    .navPractice2{
        margin-right:1%;
        text-decoration:none;
        color:green;
    }
    .navVon{
        margin-right:1%;
        text-decoration:none;
        color:green;
    }
    .navPractice3{
        margin-right:1%;
        text-decoration:none;
        color:green;
    }
    .navVbind{
        margin-right:1%;
        text-decoration:none;
        color:green;
    }
}
</style>
