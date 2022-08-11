<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <body>
    <h1>Zyr Acel Reyes <br />08/03/2022 <br /></h1>
    <br /><RouterLink to="/todo"><button>Go to app</button></RouterLink>
  </body>
</template>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
}

button {
  color: green;
  font-size: x-large;
}
</style>
