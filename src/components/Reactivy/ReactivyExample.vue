<template>
  <h1> Reactivy Example</h1>
  <p>Contador: #{{form.counter}}  {{ form.firstName }} {{ form.lastName }}</p>
  <button @click="sumCounter">Somar</button>
  <button @click="subCounter">Subtrair</button>
  <br>
  <input @input="subCounter" name="firstName" type="text" />
  <input @input="sumCounter" name="lastName" type="text" />
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  counter: 0,
  firstName: 'Matheus',
  lastName: 'Purgato'
})

const sumCounter = function(){
  form.counter = form.counter + 1;
}
const subCounter = function() {
  form.counter = form.counter - 1;
}
</script>

