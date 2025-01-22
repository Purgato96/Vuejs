<template>
  <h1>Diretiva v-memo</h1>
  <p>O constator está em {{counter}}</p>
  <button @click="counter++">Incrementar</button>
  <p v-once>O constator está em {{counterVOnce}}</p>
  <button @click="counterVOnce++">Incrementar</button>
  <p v-memo="[counterVMemo]">O constator está em {{counterVMemo}}</p>
  <button @click="counterVMemo++">Incrementar</button>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)
const counterVOnce = ref(0)
const counterVMemo = ref(0)
</script>

<style scoped>

</style>
