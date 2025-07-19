<template>
  <div  @click="handleVideoEnded"  class="page-container">
    <!-- Video Arka Plan -->
    <button >
      <video
      class="bg-video"
      src="@/assets/videos/mainvideo2.mp4"
      autoplay
      muted
      playsinline
      @ended="handleVideoEnded"
      ref="videoRef"
    />
    </button>

    <!-- Menü (başta görünmez, video bitince görünür) -->
    <div class="menu" :class="{ visible: showMenu }">
      <NuxtLink to="/home">Home</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <NuxtLink to="/products">Ürünler</NuxtLink>
      <NuxtLink to="/about">Hakkımızda</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
definePageMeta({
  layout: false
})
const showMenu = ref(false)
const videoRef = ref(null)

const handleVideoEnded = () => {
  // Fade video out
  videoRef.value.classList.add('fade-out')

  // Menü göster
  setTimeout(() => {
    showMenu.value = true
  }, 500) // video kaybolduktan sonra menü gelsin
}
</script>

<style scoped>
.page-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* Video stilleri */
.bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  transition: opacity 0.5s ease;
}

.bg-video.fade-out {
  opacity: 0;
  pointer-events: none;
}

/* Menü */
.menu {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: black;

  opacity: 0;
  transition: opacity 1s ease;
  pointer-events: none;
}

.menu.visible {
  opacity: 1;
  pointer-events: auto;
}

/* Link stilleri */
.menu a {
  color: black;
  font-size: 2rem;
  text-decoration: none;
  transition: 0.3s;
  font-weight: bold;
}

.menu a:hover {
  text-decoration: underline;
}
</style>
