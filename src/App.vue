<script setup>
import HomeView from "./views/HomeView.vue"
import Header from "./views/Header.vue"
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
<div class="topHeader">
  <Header />
</div>

  <RouterView />
</template>

<style lang="scss" scoped>

</style>
