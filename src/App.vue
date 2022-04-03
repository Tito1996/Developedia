<script setup>
import { RouterView } from 'vue-router'
import HeaderItem from './components/HeaderItem.vue';
import SidebarItem from './components/SidebarItem.vue'
</script>

<template>
  <HeaderItem class="header"/>
  <div class="contenido">
    <SidebarItem class="sidebar"/>
    <RouterView class="main"/>
  </div>
</template>

<style>
@import '@/assets/base.css';

/* Movil */
.header {
  width: 100%;
  height: 9rem;
}

.contenido {
  display: flex;
  flex-direction: column;
}

.sidebar {
  width: 100%;
  min-height: 4rem;
  background-color: #eee;
}

.main {
  width: 100%;
  min-height: calc(100vh - 13rem);
  background-color: #abc;
}

/* Tablet */
@media screen and (min-width: 768px) {
  
}

/* Ordenador */
@media screen and (min-width: 1024px) {
  .header {
    height: 10rem;
  }

  .contenido {
    flex-direction: row;
  }

  .sidebar {
    width: 27rem;
    min-height: calc(100% - 10rem);
  }

  .main {
    width: calc(100% - 27rem);
    min-height: calc(100vh - 10rem);
  }
}
</style>