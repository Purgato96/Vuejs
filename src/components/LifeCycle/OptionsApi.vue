<template>
<h1>Options Api</h1>
  <p>Contador {{ counter }}</p>
  <button @click="counter++" >Somar</button>
  <button @click="counter--" >Subtrair</button>
</template>

<script>
export default {

  data(){
    return {
      counter: 0
    }
  },
  beforeCreate(){
    console.log('1. beforeCreate')
  },
  created(){
    console.log('2. created')
  },
  beforeMount(){
    console.log('3. beforeMount')
  },
  mounted(){
    console.log('4. mounted')
  },
  beforeUpdate(){
    console.log('5. beforeUpdate')
  },
  updated(){
    console.log('6. updated')
  },
  beforeUnmount(){
    console.log('7. beforeUnmount')
  },
  unmounted(){
    console.log('8. unmounted')
  }
}
</script>
