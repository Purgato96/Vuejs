<template>
  <h1>Título do meu card: {{props.title}}</h1>
  <button @click.prevent="emitEventForUpdateTitle">Alteraro titulo</button>
  <p>Conteúdo do meu card: {{props.body}}</p>
  <p>Quantidade de acessos: {{props.access}}</p>
  <p>Status: {{props.status}}</p>
  <p>Formato: {{props.format}}</p>
 </template>
<script setup>
const emit = defineEmits(['updateTitle'])

const emitEventForUpdateTitle = () => {
  emit('updateTitle', 'O Purga é foda demais!')
}

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    default: 'Valor Padrão',
  },
  access: {
    type: Number || String,
    default: 0,
  },
  status: {
    type: Boolean,
    required: true,
  },
  format:{
    type: String,
    required: true,
    validator(value) {
      return ['post', 'user'].includes(value)
    }
  }
})
</script>
