<script setup lang="ts">
const props = defineProps({ icon: String });
</script>

<template>
  <span class="material-symbols-outlined">{{ props.icon }}</span>
</template>
