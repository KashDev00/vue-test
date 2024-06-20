<script setup lang="ts">
</script>

<template>
  <RouterLink to="/users">Go to users</RouterLink>
  <RouterLink to="/office">Go to office</RouterLink>
  <RouterView/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
