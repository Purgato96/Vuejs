<template>
<h1>Suspense Component</h1>
  <div v-if="loaded === false">Carregando...</div>
  <div v-else>Listagem de usuários completa</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const loaded = ref(false)

onMounted( async () => {
  loaded.value = false
  await listUser()
  loaded.value = true
})

const listUser = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
        console.log('Chegou aqui')
        resolve()
      },
      3000)
  })
}

</script>
