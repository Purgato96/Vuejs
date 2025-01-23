<template>
  <button @click="toggle = !toggle">Toggle</button>
  <Transition
    enter-from-class=" opacity-0 translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    enter-active-class="transition ease-out duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-1"
    leave-active-class="transition ease-in duration-150">
    <div v-if="toggle">
      <TransitionComponent />
    </div>
  </Transition>
</template>

<script setup>
import TransitionComponent from '@/components/Transition/TransitionComponent.vue'
import { ref } from 'vue'

const toggle = ref(true)
</script>
