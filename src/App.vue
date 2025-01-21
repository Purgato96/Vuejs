<template>
<OptionsApi v-if="showComponent" />
<CompositionApi v-if="showComponent" />

<button @click="showComponent = !showComponent">Toggle</button>
</template>

<script setup>
import OptionsApi from '@/components/LifeCycle/OptionsApi.vue'
import CompositionApi from '@/components/LifeCycle/CompositionApi.vue'
import { ref } from 'vue'

const showComponent = ref(false)
</script>
