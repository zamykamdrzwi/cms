<template>
  <section class="flex justify-center items-center mt-3" v-if="props.errors[0] !== true">
    <div class="bg-white p-8 shadow-md max-w-sm w-full border border-red-500">
      <ul class="text-red-500 font-bold" v-for="error in props.errors" :key="error">
        <li class="text-center my-4">
          {{ error }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  errors: Array
});
console.log(props.errors);

</script>