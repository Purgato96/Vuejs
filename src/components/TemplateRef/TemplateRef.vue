<template>
  <h1>Template Ref</h1>
  <p id="welcome" ref="welcome">Hello World!</p>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const welcome = ref(null)

console.log('start na aplicação')

onMounted( () => {
  const teste = document.querySelector('#welcome')
  welcome.value.style.color = 'red'
  welcome.value.style.border = '1px solid blue'
  welcome.value.style.padding = '10px'
  welcome.value.style.allignItems = 'center'
  welcome.value.style.justifyContent = 'center'
  welcome.value.style.display = 'flex'
  console.log(teste)
})
</script>

