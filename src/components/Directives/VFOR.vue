<template>
  <h1>Diretiva v-for</h1>
  <table>
    <tr>
      <td>ID</td>
      <td>Nome</td>
      <td>Email</td>
      <td>Idade</td>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.age}}</td>
    </tr>
  </table>
<br><br>
  <hr>
  <br><br>
  <select name="contact">
    <option v-for="(type, index) in contactType" :key="index" :value="type.value">{{type.label}}</option>
  </select>
</template>

<script setup>
const users = [
  {
    id: 1,
    name: 'Matheus Purgato',
    email: 'matheuspurgato@gmail.com',
    age: 28,

  },
  {
    id: 2,
    name: 'Ana Purgato',
    email: 'anapurgato@gmail.com',
    age: 27,
  },
  {
    id: 3,
    name: 'Nathan Purgato',
    email: 'nathanpurgato@gmail.com',
    age: 25,
  },
  {
    id: 4,
    name: 'Luciane Purgato',
    email: 'lucianepurgato@gmail.com',
    age: 48,
  },
  {
    id: 5,
    name: 'Espedito Purgato',
    email: 'espeditopurgato@gmail.com',
    age: 53,
  },
]

const contactType = [
  {
    value: 'contact',
    label: 'Contato'
  },
  {
    value: 'withoutConnection',
    label: 'Sem conexão com a internet'
  },
  {
    value: 'internetSlow',
    label: 'Internet lenta'
  },
]
</script>
