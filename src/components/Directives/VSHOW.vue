<template>
<h1>Diretiva V-Show</h1>

  <div v-if="test.active === true">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.</p>
  </div>
  <label for="active">Liga/Desliga</label>
  <input type="checkbox" v-model="test.active" id="active"/>
</template>

<script setup>
import { reactive, ref } from 'vue'

const test = reactive({
  active: false,

})
</script>
