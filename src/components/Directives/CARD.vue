<template>

<!-- # = v-slot -->
<!-- : = v-model -->
<!-- @ = v-on -->
  <div>
    <header>
      <slot name="header"></slot>
    </header>
  </div>
  <div class="title">
    <slot name="title"></slot>
  </div>
  <div>
    <main>
      <slot name="content"></slot>
    </main>
  </div>
</template>
<script setup>

</script>
<style scoped>
header {
  color: red
}

.title {
  background: yellow;
  color: blue;
}
main{
  color: green;
}
</style>
