<template>
  <nav class="h-[65px] bg-black flex items-center justify-between p-5 px-7 uppercase text-sm">
    <div class="flex gap-3 ">
      <nuxt-link to="/home" class="hover:text-[#cb333b]">Home</nuxt-link>
      <nuxt-link to="/home" class="hover:text-[#cb333b]">Products</nuxt-link>
      <nuxt-link to="/home" class="hover:text-[#cb333b]">Support</nuxt-link>
    </div>

    <div class="text-lg">
      <h1>BlackSirius</h1>
    </div>

    <div class="flex gap-3">
      <nuxt-link to="/login" class="hover:text-[#cb333b]">Log In</nuxt-link>
      <button @click="sidebar.openSidebar()" class="hover:text-[#cb333b]">Cart(0)</button>
    </div>
  </nav>
</template>

<script setup>
import { useSidebarStore } from '~/stores/sidebarStore'

const sidebar = useSidebarStore()

</script>

<style>

</style>