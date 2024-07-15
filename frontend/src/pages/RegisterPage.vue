<template>
  <section class="flex items-center justify-center mt-16">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <div class="font-bold text-red-500 text-2xl mb-2" :class="{ 'hidden' : !passwordError }">Errors:</div>
      <ul class="list-disc pl-5 mb-7 text-sm" :class="{ 'hidden' : !passwordError }">
        <li v-for="error in passwordResult" :key="error">
          {{ error }}
        </li>
      </ul>
      <h2 class="text-2xl font-bold mb-6">Create account</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">
            Username:
          </label>
          <input type="text"
                 id="username"
                 v-model="username"
                 placeholder="example123"
                 required
                 class="mt-1 block w-full px-3 py-2 border-2 border-gray-300
              rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 sm:text-sm text-gray-600"
                 :class="{ 'border-red-500': usernameError }"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input type="email"
                 id="email"
                 v-model="email"
                 placeholder="example@example.com"
                 required
                 class="mt-1 block w-full px-3 py-2 border-2 border-gray-300
              rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 sm:text-sm text-gray-600"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input type="password"
                 id="password"
                 v-model="password"
                 required
                 placeholder="At least 12 characters"
                 class="mt-1 block w-full px-3 py-2 border-2 border-gray-300
              rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 sm:text-sm text-gray-600"
                 :class="{ 'border-red-500': passwordError }"
          />
        </div>
        <div class="mb-4">
          <input type="checkbox"
                 id="isChecked"
                 v-model="isChecked"
                 required>
          <label for="isChecked" class="ml-3 text-sm font-medium text-gray-700">
            I agree to the processing of my personal data for marketing purposes and receiving marketing information from anything i want via email and push notifications.
          </label>
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
import { ref } from "vue";

const username = ref();
const email = ref();
const password = ref();
const isChecked = ref(false);

const errors = ref([]);
const passwordError = ref(false);
const usernameError = ref(false);

const handleRegister = () => {
  const passwordResult = checkPassword(password.value);
  passwordError.value = passwordResult.length > 0;

  const usernameResult = checkUsername(username.value);
  usernameError.value = usernameResult !== true;

  username.value = '';
  email.value = '';
  password.value = '';
}

const checkPassword = (password) => {
  const checkResult = {
    length: password.length > 12 ? true : 'At least 12 characters long',
    lowercase: /[a-z]/.test(password) ? true : 'Contain lowercase letters',
    uppercase: /[A-Z]/.test(password) ? true : 'Contain uppercase letters',
    digit: /[0-9]/.test(password) ? true : 'Contain numbers',
    specialCharacters: /[!@#$%^&*(),.?":{}|<>]/.test(password) ? true : 'Password should contain special characters'
  }
  return Object.keys(checkResult)
      .filter(key => checkResult[key] !== true)
      .map(key => checkResult[key]);
}

const checkUsername = (username) => {
  return username.length < 3 ? 'Username must have at least 3 characters' : true;
}
</script>