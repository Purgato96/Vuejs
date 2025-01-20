
<template>
  <h1>V-Model</h1>
  <h2>Nome: {{form.name}}</h2>
  <h2>Email: {{form.email}}</h2>
  <form action="">
    <div>
      <div>
        <label for="name">Name</label>
        <input name="name" type="text" id="name" v-model="form.name" value="Purgato" />
      </div>
      <div>
        <label for="email">Email</label>
        <input name="email" type="email" id="email" v-model="form.email" value="matheuspurgato@gmail.com" />
      </div>
    </div>
  </form>

</template>

<script setup>
  import { reactive } from 'vue'

  const form = reactive({
    name: '',
    email: '',
  })
</script>
