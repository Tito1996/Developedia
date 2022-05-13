<script setup>
import { RouterView } from 'vue-router'
import HeaderItem from './components/layout/HeaderItem.vue';
import SidebarItem from './components/layout/SidebarItem.vue'
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
  border-bottom: 1px solid var(--vt-c-divider-dark-1);
}

.contenido {
  display: flex;
  flex-direction: column;
}

.sidebar {
  width: 100%;
  min-height: 4rem;
  padding: 1rem;
  border-bottom: 1px solid var(--vt-c-divider-dark-1);
}

.main {
  width: 100%;
  min-height: calc(100vh - 13rem);
  padding: 1rem;
}

/* Tablet */
@media screen and (min-width: 768px) {
  .sidebar {
    border-right: 1px solid var(--vt-c-divider-dark-1);
  }
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