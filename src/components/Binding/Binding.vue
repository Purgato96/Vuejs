<template>
<h1>Bindings</h1>
  <input :type="input.type" :name="input.name" :placeholder="input.placeholder">
  <button @click.prevent="hideShowPassword">Hide/Show</button>
</template>
<script setup>
import { reactive } from 'vue'

const input = reactive({
  name: 'name',
  type: 'password',
  'placeholder': 'Digite seu nome',

})

const hideShowPassword = function() {
  if(input.type === 'password') {
    input.type = 'text'
}else {
  input.type = 'password'}
}
</script>

