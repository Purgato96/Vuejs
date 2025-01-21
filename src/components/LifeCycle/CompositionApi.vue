<template>
  <h1>Composition Api</h1>
  <p>Contador {{ counter }}</p>
  <button @click="counter++" >Somar</button>
  <button @click="counter--" >Subtrair</button>

</template>

<script setup>
const counter = ref(0)

import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'

onBeforeMount(() =>{
  console.log('1. Before Mount')
})
  onMounted(() =>{
    console.log('2. Mounted')
  })

onBeforeUpdate(() =>{
  console.log('3. Before Update')
})

onUpdated(() =>{
  console.log('4. Updated')
})

onBeforeUnmount(() =>{
  console.log('5. Before Unmounted')
})

onUnmounted(() =>{
  console.log('6. Unmounted')
})
</script>
