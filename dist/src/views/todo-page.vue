<script setup lang="ts">
import TodoList from "../components/todo-list.vue";
import useCategory from "@/composables/use-category";

const { categoryInput, categories, createCategory } = useCategory();
</script>

<template>
  <header>
    <h1>To-do</h1>
  </header>
  <section>
    <h2>Create a category</h2>
    <input
      type="text"
      v-model="categoryInput"
      @keydown.enter="createCategory"
    />
    <h3 v-for="category in categories" :key="category">
      {{ category }}
      <TodoList />
    </h3>
  </section>
</template>
<style scoped>
header,
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
}
input {
  background-color: rgba(84, 84, 84, 0.48);
  color: rgba(235, 235, 235, 0.64);
}
h3 {
  padding: 2vh;
}
</style>
