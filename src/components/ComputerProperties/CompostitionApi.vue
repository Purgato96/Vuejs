<template>
  <h1>ComputedProperties</h1>

  <input type="text" v-model="user.firstName">
  <input type="text" v-model="user.lastName">
  <input type="text" v-model="fullName">


  <p>O nome completo do usuário é: {{ user.firstName }}  {{ user.lastName }}</p>
  <p>O nome completo do usuário é: {{ fullName }}</p>

  <p>O valor do pedido é {{ order.price }}</p>
  <p>O valor do pedido é {{ orderPriceFormatted }}</p>

</template>

<script setup>
import { computed, reactive } from 'vue'

  const user = reactive({
    firstName: 'Matheus',
    lastName: 'Purgato',
  })

/*
  const fullName = computed(() =>
    user.firstName + ' ' + user.lastName
  )
*/

const fullName = computed({
  get(){
    return  user.firstName + ' ' + user.lastName
  },
  set(newValue){
    user.firstName = newValue.split(' ')[0]
    user.lastName = newValue.split(' ')[1]
  }
})

const order = reactive({
  price: 99700
})

const formatCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
})

const orderPriceFormatted = computed(() => {
  return formatCurrency.format(order.price / 100)
})
</script>
