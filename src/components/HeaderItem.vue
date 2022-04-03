<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="contenedor">
    <h1 class="Titulo">
        Developedia
        <font-awesome-icon icon="earth" />    
    </h1>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.5rem;
}
</style>
