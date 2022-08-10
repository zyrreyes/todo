import type ITodo from "@/interfaces/todo";
import { ref } from "vue";

export default function useTodo() {
  let id = 0;
  const todoInput = ref("");
  const todos = ref<ITodo[]>([]);

  let dragged: ITodo;
  let dragIndex: number;
  let enter: number;

  const add = (): void => {
    if (todoInput.value == "") {
      alert("empty todo");
    } else {
      todos.value.unshift({
        id: id++,
        todo: todoInput.value,
      });
      todoInput.value = "";
    }
  };

  const findIndex = (todo: ITodo): number =>
    todos.value.findIndex((item) => item === todo);

  const toggleEdit = (todo: ITodo): void => {
    todos.value[findIndex(todo)].editing =
      !todos.value[findIndex(todo)].editing;
  };

  const toggleDone = (todo: ITodo): void => {
    todos.value[findIndex(todo)].done = !todos.value[findIndex(todo)].done;
  };

  const remove = (todo: number): void => {
    todos.value = todos.value.filter((item) => item.id !== todo);
  };

  const dragStart = (todo: ITodo): void => {
    dragIndex = findIndex(todo);
    dragged = todo;
  };

  const dragEnter = (todo: ITodo): void => {
    enter = findIndex(todo);
  };

  const drop = (): void => {
    if (dragIndex < enter) {
      todos.value.splice(enter + 1, 0, {
        id: id++,
        todo: dragged.todo,
        editing: dragged.editing,
        done: dragged.done,
      });
    } else {
      todos.value.splice(enter, 0, {
        id: id++,
        todo: dragged.todo,
        editing: dragged.editing,
        done: dragged.done,
      });
    }
    remove(dragged.id);
  };

  return {
    todoInput,
    todos,
    add,
    toggleEdit,
    toggleDone,
    remove,
    dragStart,
    dragEnter,
    drop,
  };
}
