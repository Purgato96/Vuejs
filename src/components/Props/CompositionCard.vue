<template>
  <h1>Título do meu card: {{props.title}}</h1>
  <p>Conteúdo do meu card: {{props.body}}</p>
  <p>Quantidade de acessos: {{props.access}}</p>
  <p>Status: {{props.status}}</p>
  <p>Formato: {{props.format}}</p>
  <hr>
  <CoursesCard :title="props.title" :status="props.status" :access="props.access" />
</template>
<script setup>

// const props = defineProps([
//   'title',
//   'body',
//   'access',
//   'status'
// ])
//
// const props = defineProps({
//   title: String,
//   body: String,
//   access: Number,
//   status: Boolean,
// })
//
// const props = defineProps({
//   title: {
//     type: String,
//     required: true,
//   },
//   body: {
//     type: String,
//     default: 'Valor Padrão',
//   },
//   access: {
//     type: Number || String,
//     default: 0,
//   },
//   status: {
//     type: Boolean,
//     required: true,
//   },
// })

import CoursesCard from '@/components/Props/CoursesCard.vue'

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
