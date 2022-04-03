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
/* Movil */
  h1 {
    font-size: 2rem;
  }

  .contenedor {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 2rem;
  }

/* Tablet */
@media screen and (min-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
}

/* Ordenador */
@media screen and (min-width: 1024px) {
  h1 {
    font-weight: 500;
    font-size: 3rem;
  }

  .contenedor {
    padding: 0 4rem;
  }
}
</style>
