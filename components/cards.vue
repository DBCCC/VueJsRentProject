<template>
  <div class="relative border border-[#1E1E1E] group w-full hover:text-[#cb333b]">
    <!-- Arka plan görseli -->
    <nuxt-link to="/products/1">
      <div class="absolute top-0 left-0 w-full h-full block group-hover:hidden transition-all duration-300">
      <img src="../assets/images/hoddie1.webp" class="object-cover w-full h-full" alt="">
    </div>

    <!-- Hover'da değişen görsel -->
    <div class="absolute top-0 left-0 w-full h-full hidden group-hover:block transition-all duration-300">
      <img src="../assets/images/hoddie2.webp" class="object-cover w-full h-full" alt="">
    </div>

    <!-- Bu içerik artık düzgün görünür -->
    <div class="absolute flex flex-col bottom-0 w-full h-20 border border-[#1E1E1E] z-10 text-left text-sm  items-start justify-center p-10 uppercase">
      <h3>The King In The North Hoodie</h3>
      <span>€49,20</span>
    </div>
    </nuxt-link>
  </div>
</template>
