<script >
    import { RouterLink, RouterView } from 'vue-router'
    import Header from "./Header.vue"
    export default {
      data(){
        return{

        }
      },
      components: {
        RouterLink,
        RouterView,
        Header
      }
    }
</script>

<template>
  <div class="headerShow">
    <h1>Home View</h1>
    <!-- <Header /> -->
  </div>
  <div class="showContent">

    <RouterView />
  </div>
</template>


<style lang="scss" scoped>
  .headerShow{
    width:100vw;
    height:100vh;
  }
</style>
