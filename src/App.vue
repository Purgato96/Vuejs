<template>
  <KeepAlive>
<CompKeepAlive v-if="keepAlive" />
  </KeepAlive>
  <button @click=" keepAlive = !keepAlive">Tooggle</button>
</template>

<script setup>
import CompKeepAlive from '@/components/KeepAlive/CompKeepAlive.vue'
import { ref } from 'vue'

const keepAlive = ref(true)
</script>
