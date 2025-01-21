<template>
 <h1>Event Handling</h1>

  <form action="https://google.com.br" @submit.prevent="submitForm">
    <label for="name">Nome</label>
    <input type="text" name="name" id="name" v-model="form.name" @keyup.delete="showNotification" />
<!--    <input type="text" @click="myFunc" :onclick="myFunc" />-->
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="form.email">

    <button type="submit">Enviar</button>
    <input type="submit" value="Enviar Formulário">
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const myFunc = function(){
  console.log('Teste!')
}

const form = reactive({
  name: 'Matheus Purgato',
  email: 'matheuspurgato@gmail.com'
})

const submitForm = function() {
  console.log(form.name, form.email)
  console.log('Código finalizado com sucesso!')

}

const showNotification = function() {
  alert('Você não pode apagar o nome!')
}
</script>

