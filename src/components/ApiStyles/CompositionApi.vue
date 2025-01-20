<template> Composition App </template>

<script>
import {
  computed,
  onBeforeMount, onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch
} from 'vue'

export default {
  setup(props){
    const stateModal = ref(false)
    const form = reactive({
      name: '',
      email: '',
    })

    const toggleModal = function(){
      stateModal.value = !stateModal.value
    }

    const fullName = computed(() => {
      return 'First Name' + ' ' + "Last Name"
    })

    const chancheStateModal = watch(stateModal, (newValue, oldValue) => {
      //todo
    })

    onBeforeMount(() => {
      //todo
    })
    onMounted(() => {
      //lifecycle
    })
    onBeforeUnmount(() =>{
      //lifecycle
    })
    onUnmounted(() => {
      //lifecycle
    })

    return{
      props,
      stateModal,
      form,
      toggleModal,
      fullName,
      chancheStateModal,
    }
  }
}
</script>
