<template>
  <section>
    <login-form @login="handleLogin" />
  </section>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue';

const handleLogin = (payload) => {
  console.log(payload);
}
</script>