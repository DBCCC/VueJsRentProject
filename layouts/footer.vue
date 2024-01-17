<template>
        <footer class="mt-10 bg-[#0a1535] text-white">
      <div  class="flex gap-10 justify-center py-10">
        <div class="flex flex-col">
          <nuxt-link class="opacity-40 uppercase leading-1 text-[12px]" to="">RESOURCES</nuxt-link>
          <nuxt-link to="">Usage</nuxt-link>
          <nuxt-link to="">Docs</nuxt-link>
          <nuxt-link to="">Support</nuxt-link>
          <nuxt-link to="">Hardware</nuxt-link>
        </div>
        <div class="flex flex-col">
          <nuxt-link class="opacity-40 uppercase leading-1 text-[12px]" to="">PRICING</nuxt-link>
          <nuxt-link to="">Overview</nuxt-link>
          <nuxt-link to="">Flexible Data</nuxt-link>
          <nuxt-link to="">High Volume</nuxt-link>
          <nuxt-link to="">Enterprise</nuxt-link>
        </div>
        <div class="flex flex-col">
          <nuxt-link class="opacity-40 uppercase leading-1 text-[12px]" to="">DEVELOPERS</nuxt-link>
          <nuxt-link to="">Forum</nuxt-link>
          <nuxt-link to="">Projects</nuxt-link>
          <nuxt-link to="">Open Source</nuxt-link>
          <nuxt-link to="">GitHub</nuxt-link>
        </div>
        <div class="flex flex-col">
          <nuxt-link class="opacity-40 uppercase leading-1 text-[12px]" to="">COMPANY</nuxt-link>
          <nuxt-link to="">About Us</nuxt-link>
          <nuxt-link to="">Blog</nuxt-link>
          <nuxt-link to="">Partnerships</nuxt-link>
          <nuxt-link to="">Careers</nuxt-link>
        </div>
      </div>
      <div class="w-full h-[2px] bg-white mb-2"></div>
      <div class="px-5 flex items-center gap-2">
        Made with
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart"
          viewBox="0 0 16 16">
          <path
            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>
        by
        <span class="underline"> DBC </span>
      </div>
    </footer>
  
    <div>
      <slot/>
    </div>
  </template>
  
  
  <script setup>
  </script>
  