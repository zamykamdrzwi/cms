<template>
  <section class="flex items-center justify-center mt-16">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700 text-center">
            Username:
          </label>
          <input type="text"
            id="username"
            v-model="username"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-gray-600"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 text-center">
            Email:
          </label>
          <input type="email"
            id="email"
            v-model="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-gray-600"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700 text-center">
            Password:
          </label>
          <input type="password"
            id="password"
            v-model="password"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-gray-600"
          />
        </div>
        <button
          type="submit"
          class="w-full mt-3 py-2 px-4 border border-transparent rounded-md 
            shadow-sm text-sm font-medium text-white bg-indigo-600 
            hover:bg-indigo-700 focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-indigo-500"
        >Register
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const username = ref();
const email = ref();
const password = ref();

const emit = defineEmits(['register']);

const handleSubmit = () => {
  emit('register', { username: username.value, email: email.value, password: password.value });
  username.value = '';
  email.value = '';
  password.value = '';
}
</script>