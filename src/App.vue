<template>
<Users />
</template>

<script setup>
import Users from '@/components/ProvideInject/Users.vue'
import { provide } from 'vue'

const users = [
{
  id: 1,
  name: 'Matheus',
},
{
  id: 2,
  name: 'Ana'
},
]

provide('users', users)
</script>
