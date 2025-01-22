<template>
  <h1>Diretiva v-html</h1>
  <p>O nome do usuário é: <span v-html="element"></span></p>
</template>

<script setup>
import { ref } from 'vue'

const element = ref('<b>Purgato</b>')</script>
