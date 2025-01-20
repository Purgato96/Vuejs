<template>
  <h1>Contador: {{ counter }}</h1>

  <button @click="sumCounter">Somar</button>
  <button @click="subCounter">Subtrair</button>

  <p>O contador atual está no múmero: {{ counter }}</p>
</template>

<script>
export default {
  data(){
    return {
      counter: 0
    }
  },
  methods: {
    sumCounter: function(){
      this.counter = this.counter + 1;
    },
    subCounter(){
      this.counter = this.counter - 1;
    },
  }
}
</script>
