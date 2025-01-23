import { format } from 'date-fns'
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'

export function useToDateFormat(param) {
  const paramDate = ref('')
  const formatParameter = () => {
    paramDate.value = format(param, 'dd/MM/yyyy')
  }
  onMounted(() => {
    window.addEventListener('keydown', (e) => {
      if(e.keyCode === 69) {
        paramDate.value = '11/04/1996'
      }
    })
  })

  onUnmounted(() =>{
    window.removeEventListener('keydown', () => {
      param = ''
      formatParameter()
    })
  })

  watchEffect(()=>{
    formatParameter()
  })

  return { paramDate }
}
