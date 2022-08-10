<script setup lang="ts">
import useTodo from "../composables/use-todo";
import MaterialIcon from "./material-icon.vue";
import Icon from "../constants/icon";
const {
  todoInput,
  todos,
  add,
  toggleEdit,
  toggleDone,
  remove,
  dragStart,
  dragEnter,
  drop,
} = useTodo();
</script>

<template>
  <input v-model="todoInput" @keydown.enter="add" />
  <ul v-for="todo in todos" :key="todo.id">
    <li
      draggable="true"
      @dragstart="dragStart(todo)"
      @dragenter.prevent="dragEnter(todo)"
      @dragover.prevent
      @drop="drop"
    >
      <span v-if="!todo.editing" class="todo" :class="{ done: todo.done }">{{
        todo.todo
      }}</span>
      <input
        type="input"
        v-if="todo.editing"
        v-model.lazy="todo.todo"
        @change="toggleEdit(todo)"
      />
      <div class="buttons">
        <MaterialIcon
          :icon="Icon.EDIT"
          :class="{ editing: todo.editing }"
          v-if="!todo.done"
          @click="toggleEdit(todo)"
        />
        <MaterialIcon
          :icon="Icon.CHECK_CIRCLE"
          @click="toggleDone(todo)"
          :class="{ done: todo.done }"
        />
        <MaterialIcon
          :icon="Icon.DELETE"
          id="delete"
          @click="remove(todo.id)"
        />
      </div>
    </li>
  </ul>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15em;
  line-height: 1.5;
}
.material-symbols-outlined.editing {
  font-variation-settings: "FILL" 1, "wght" 200, "GRAD" 200, "opsz" 40;
  color: blue
}
.material-symbols-outlined.done {
  font-variation-settings: "FILL" 1, "wght" 200, "GRAD" 200, "opsz" 40;
  color: green;
}
.material-symbols-outlined:hover {
  font-variation-settings: "FILL" 1, "wght" 200, "GRAD" 200, "opsz" 40;
}
.todo.done {
  color: green;
}
#delete:hover {
  color: red;
}
input {
  background-color: rgba(84, 84, 84, 0.48);
  color: rgba(235, 235, 235, 0.64);
}
</style>
