<template>
  <section>
    <register-form @register="handleRegister"/>
    <div class="mt-10">
<!--      <error-notification v-for="error in errorMessage" :key="error">-->
<!--        {{ error }}-->
<!--      </error-notification>-->
      <error-notification :errors="errorMessage" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import RegisterForm from '../components/RegisterForm.vue';
import ErrorNotification from "../components/ErrorNotification.vue";

const errorMessage = ref([true]);
const passwordFailed = ref(false);
const handleRegister = (payload) => {
  errorMessage.value = checkPassword(payload);
  // passwordFailed.value =
}

const checkPassword = (password) => {
  const checkResult = {
    length: password.length > 12 ? true : 'Password should be at least 12 characters long',
    lowercase: /[a-z]/.test(password) ? true : 'Password should contain lowercase letters',
    uppercase: /[A-Z]/.test(password) ? true : 'Password should contain uppercase letters',
    digit: /[0-9]/.test(password) ? true : 'Password should contain numbers',
    specialCharacters: /[!@#$%^&*(),.?":{}|<>]/.test(password) ? true : 'Password should contain special characters'
  }
  return Object.keys(checkResult)
      .filter(key => checkResult[key] !== true)
      .map(key => checkResult[key]);
}
</script>