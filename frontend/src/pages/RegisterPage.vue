<template>
  <section>
    <register-form @register="handleRegister"/>
  </section>
</template>

<script setup>
import RegisterForm from '../components/RegisterForm.vue';

const handleRegister = (payload) => {
  // console.log(payload);
  console.log(checkPassword(payload.password));
}

const checkPassword = (password) => {
  const checkResult = {
    length: password < 12 ? true : 'Password should be at least 12 characters long',
    lowercase: /[a-z]/.test(password) ? true : 'Password should contain lowercase letters',
    uppercase: /[A-Z]/.test(password) ? true : 'Password should contain uppercase letters',
    digit: /[0-9]/.test(password) ? true : 'Password should contain numbers',
    specialCharacters: /[!@#$%^&*(),.?":{}|<>]/.test(password) ? true : 'Password should contain special characters'
  }
  return checkResult;
}
</script>