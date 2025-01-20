<template>
<h1>Ref Example</h1>
  <p>Contador: {{ counter }}</p>

  <button @click="sumCounter">Somar</button>
  <button @click="subCounter">Subtrair</button>

</template>

<script setup>
  import { ref } from 'vue'

  const counter = ref(0)

 const sumCounter = function(){
    counter.value = counter.value + 1;
  }
 const subCounter = function(){
    counter.value = counter.value - 1;
  }
</script>
