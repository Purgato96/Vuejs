<template>
  <h1>Componente Keep Alive</h1>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Componente Keep Alive montado')
})
onUnmounted(() => {
  console.log('Componente Keep Alive desmontado')
})
</script>
