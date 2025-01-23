<template>
  <p>Saída do comando Date: {{ new Date() }}</p>
  <p>Data formatada {{ paramDate}}</p>
</template>

<script setup>

import { useToDateFormat } from './components/Composable/useToDateFormat.js'
const {paramDate} = useToDateFormat(new Date())
</script>
