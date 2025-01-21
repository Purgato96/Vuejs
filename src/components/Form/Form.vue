<template>
  <h1>Form</h1>

  <pre>
    {{ form }}
  </pre>

  <form action="" @submit.prevent="submitForm">
    <label for="name">Nome</label>
    <input type="text" name="name" id="name" v-model="form.name">
    <br><br>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="form.email">
    <br><br>
    <textarea v-model="form.bio"></textarea>
    <br><br>
    <input type="submit">

  </form>
</template>

<script setup>
import { reactive } from 'vue'

/**
 * $user = User::query()->where('email', 'matheuspurgato@gmail.com')->first();
 * return view('user.edit', ['user' => $user]) // blade
 * return response()->json($user) // json
 * return Inertia::render('Form.vue', ['user' => $user]) // Inertia
 */

/*const props = defineProps({
  user: {
    type: Object,
    required: true,
  }
})*/

const props = {
  user: {
    name: 'Matheus',
    email: 'matheuspurgato@gmail.com',
    bio: 'Programador',

  }
}

const form = reactive({
  name: props.user.name,
  email: props.user.email,
  bio: props.user.bio,
})

const submitForm = () => {
  console.log('Formulário enviado com sucesso!')
}
</script>
