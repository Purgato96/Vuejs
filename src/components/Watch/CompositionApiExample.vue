<template>
  <h1>Watch</h1>

  <label for="checkbox">Aceito os termos de uso</label>
  <input type="checkbox" name="checkbox" id="checkbox" v-model="form.terms">
  <p>{{ form.terms }}</p>
  <p>{{ status }}</p>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

const form = reactive({
  terms: false
})
const status = ref(null)

watch(form, () => {
  status.value = 'Pesquisando...'
  setTimeout(() => {
    status.value = 'Aceito!'
  }, 3000)
})
</script>
