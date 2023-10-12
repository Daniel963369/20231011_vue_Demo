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
        <RouterLink class="practice1" to="/practice1">practice1</RouterLink>
        <RouterLink class="practice2" to="/practice2">practice2</RouterLink>
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
        text-decoration:none;
        color:green;
    }
}
</style>
