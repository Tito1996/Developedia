<script setup>
import { RouterView } from 'vue-router'
import HeaderItem from './components/HeaderItem.vue';
</script>

<template>
  <HeaderItem class="header"/>
  <RouterView class="main"/>
</template>

<style>
@import '@/assets/base.css';

.header {
  width: 100%;
  height: 10rem;
}
</style>