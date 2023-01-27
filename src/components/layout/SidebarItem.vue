<script setup>
  import { RouterLink } from 'vue-router';

  const categorias = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Angular",
    "VueJS",
    "Java"
  ]
</script>

<template>
  <ul>
    <li><h2>Categorias</h2></li>
    <li class="categoria" v-for="categoria in categorias">
      <a href="">{{categoria}}</a>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    list-style: none;
  }
  .categoria {
    margin: 0 0 0 1.5rem;
  }
  .categoria a {
    color: #414b83;
  }
  .categoria a:hover {
    text-decoration: underline 1px #000;
  }
</style>
