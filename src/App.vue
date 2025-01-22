<template>
  <CompositionCard
    :title="card.title"
    :access="card.access"
    :status="card.status"
    :format="card.format"
    @updateTitle="changeTitle"
  />

</template>

<script setup>
import CompositionCard from '@/components/Props/CompositionCard.vue'
import { reactive } from 'vue'
const card = reactive({
  title: 'Este é o título do meu card',
  access: 1230,
  status: true,
  format: 'user'
})

const changeTitle = (data) => {
  //card.title = 'Novo título'
  card.title = data
}
</script>
