<template>
  <h1>Título do meu card: {{props.title}}</h1>
  <p>Quantidade de acessos: {{props.access}}</p>
  <p>Status: {{props.status}}</p>

</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  access: {
    type: [Number , String],
    default: 0,
  },
  status: {
    type: Boolean,
    required: true,
  },
})

</script>
