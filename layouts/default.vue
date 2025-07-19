<template>
  <div class="relative">
      <div class="h-screen absolute z-10 w-full text-white bg-black">
        <Sidebar/>
        <MainBanner />
        <Navbar />
        <NuxtPage />
  </div>
  </div>
</template>

<script setup>
import MainBanner from '~/layouts/mainBanner.vue'
import Navbar from '~/layouts/navbar.vue'
import { onMounted, onBeforeUnmount } from 'vue'
import Sidebar from './sidebar.vue'
let vantaEffect = null

onMounted(async () => {
  // CDN'den three.js ve vanta.waves.js yükle
  await Promise.all([
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'),
    loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js')
  ])

  // global THREE objesi
  vantaEffect = window.VANTA.WAVES({
    el: '#vanta-bg',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x0
  })
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})

// Script yükleyici
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.onload = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })
}
</script>

