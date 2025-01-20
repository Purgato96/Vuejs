<template>
  <h1>ComputedProperties (Options Api)</h1>

  <p> O nome do usuário é: {{ user.firstName }} {{ user.lastName }}</p>
  <p> O nome do usuário é: {{ fullName }}</p>
</template>

<script>
export default {
  data() {
    return {
      user:{
        firstName: 'Matheus',
        lastName: 'Purgato',
      }
    }
  },
  computed: {
    fullName(){
      return this.user.firstName + ' ' + this.user.lastName
    }
  }
}
</script>
