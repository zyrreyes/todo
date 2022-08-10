<script setup lang="ts">
import TodoList from "../components/todo-list.vue";
import { ref } from "vue";

const categoryInput = ref("");
const categories = ref<string[]>([]);

const createCategory = () => {
  categories.value.push(categoryInput.value);
  categoryInput.value = "";
};
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
    <!-- <button @click="createCategory">Create category</button> -->
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
}
h3 {
  padding: 2vh;
}
</style>
