<template>
  <h1>Diretiva v-if</h1>

  <div v-if="user.isAdmin === true">
    <p>Seja bem vindo Adm</p>
  </div>

  <div v-else-if="user.isActive === true">
    <p>Seja bem vindo User</p>
  </div>
  <div v-else>
    <p>Você precisa regularizar sua conta para continuar, em caso de dúvida consultar o suporte!</p>
  </div>
  <label for="admin">Is Admin</label>
  <input type="checkbox" id="admin" v-model="user.isAdmin">
  <label for="active">Is Active</label>
  <input type="checkbox" id="active" v-model="user.isActive">

</template>

<script setup>
import { reactive } from 'vue'

const user = reactive({
  isAdmin: true,
  isActive: true
})
</script>

