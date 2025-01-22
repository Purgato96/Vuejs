<template>
  <h1>Diretiva v-cloak</h1>
  <div v-cloak>
    <p> Olá {{ user }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const user = ref('Purgato')
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
