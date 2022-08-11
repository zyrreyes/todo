import { ref } from "vue";

export default function useCategory() {
  const categoryInput = ref("");
  const categories = ref<string[]>([]);

  const createCategory = () => {
    categories.value.push(categoryInput.value);
    categoryInput.value = "";
  };
  return { categoryInput, categories, createCategory };
}
