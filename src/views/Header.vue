<script>
    import { RouterLink, RouterView } from 'vue-router';
    import { mapState, mapActions } from 'pinia';
    import indexState from '../../stores/indexState';
    export default {
        components: {
            RouterLink
        },
        computed:{
            ...mapState(indexState, ["location", "locationInfo"])
        },

        methods:{
            ...mapActions(indexState,["getLocation","setLocation"]),
        },
    }
</script>



<template>
    <nav class="topNav">
        <RouterLink class="navHome" to="/">首頁</RouterLink>
        <RouterLink class="navbar" to="/HTMLANDCSS">HTML&CSS&JS&Vue作品</RouterLink>
        <RouterLink class="navbar" to="/vueNote">vue筆記</RouterLink>
        <p>{{ location }}</p>
        
        
        
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

    .navbar{
        margin-right:1%;
        text-decoration:none;
        color:green;
    }
}
</style>
