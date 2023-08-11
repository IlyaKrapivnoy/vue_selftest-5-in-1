<template>
  <main class="container mx-auto px-4 mt-20">
    <h1>TODO PAGE</h1>
    <form @submit.prevent="handleSubmit" class="flex flex-col">
      <label for="todoInput" class="text-lg font-bold">Add new todo</label>
      <el-input
        placeholder="Enter your task..."
        v-model="newTodo"
        id="todoInput"
        clearable
      />

      <div class="self-end mt-3">
        <el-button @click="markAllDone" class="w-[140px]">
          Mark all done
        </el-button>
        <el-button @click="removeAllTodos" class="w-[140px]">
          Remove all todos
        </el-button>
        <el-button native-type="submit" type="primary" class="w-[140px]">
          Add
        </el-button>
      </div>
    </form>

    <ul class="mt-8">
      <li v-for="todo in todos" :key="todo.id" class="my-5">
        <el-card class="box-card">
          <div class="flex justify-between items-center">
            <h3
              @click="toggleDone(todo)"
              :class="{ 'line-through': todo.done }"
              class="cursor-pointer"
            >
              TODO: {{ todo.content }}
            </h3>
            <el-button type="danger" @click="removeItem(todo)">x</el-button>
          </div>
        </el-card>
      </li>
    </ul>

    <el-alert
      v-if="showAlert"
      title="Add some text to create a todo"
      type="error"
    >
    </el-alert>
  </main>
</template>

<script>
import { ref } from "vue";
import { nanoid } from "nanoid";

export default {
  setup() {
    const newTodo = ref("");
    const todos = ref([]);
    const showAlert = ref(false);

    const handleSubmit = () => {
      if (newTodo.value) {
        todos.value.push({
          id: nanoid(),
          done: false,
          content: newTodo.value,
        });
        newTodo.value = "";
        console.log("todos", todos);
        showAlert.value = false;
      } else {
        showAlert.value = true;
      }
    };

    const toggleDone = (todo) => {
      todo.done = !todo.done;
    };

    const markAllDone = () => {
      todos.value.forEach((todo) => (todo.done = true));
    };

    const removeItem = (todo) => {
      todos.value = todos.value.filter((el) => el.id !== todo.id);
    };

    const removeAllTodos = () => {
      todos.value = [];
    };

    return {
      newTodo,
      handleSubmit,
      toggleDone,
      markAllDone,
      removeItem,
      removeAllTodos,
      showAlert,
      todos,
    };
  },
};
</script>