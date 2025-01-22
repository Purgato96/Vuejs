<template>
<h1>Diretiva v-pre</h1>
  <p>o nome do usupario é: {{user}}</p>
  <p v-pre>o nome do usupario é: {{ Purgato }}</p>
</template>

<script setup>
const user = '{{ Purgato }}'
</script>

<style scoped>

</style>
