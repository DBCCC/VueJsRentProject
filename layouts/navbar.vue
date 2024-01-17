<template>
      <header>
      <LoginRegisterSection  @closeDrawer="closeDrawer"   v-model="drawerOptions"></LoginRegisterSection>
    <nav class=" w-full h-16 static z-[200]  text-[18px]">
      
      <div class="flex w-full h-full">
        <div class="w-1/2 flex justify-center bg-[#FFFCF5] items-center h-full">
          <NuxtLink  to="/">
          <div class="px-5 text-[40px] font-semibold">
            DBC
          </div>
        </NuxtLink>
        </div>
        <div class="bg-[#2F2F2F] w-1/2 flex justify-center items-center ">
          <ul class=" flex">
            <li class="flex gap-24 font-semibold">
              <NuxtLink to="/" class=" text-[15px]  text-white">Home</NuxtLink>

              <NuxtLink to="/products" class=" text-[15px] text-white">Products</NuxtLink>
              <NuxtLink to="/contact" class=" text-[15px] text-white">Contact</NuxtLink>
              <NuxtLink to="/about" class=" text-[15px] text-white">About</NuxtLink>
              
            </li>
          </ul>
        </div>
      </div>



      <div v-if="false"  class="pr-5 ">
        <button type="button"
        @click="openDrawer"
          class="inline-block rounded text-black bg-white px-6 pb-2 pt-2.5 text-xs font-semibold uppercase leading-normal text-[#031D44] border border-gray-300 rounded-lg transition duration-150 ease-in-out hover:bg-primary-600 hover:scale-110 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          Get Started
        </button>
      </div>
    </nav>

    
  </header>
  <div>
    <BannerSection></BannerSection>
  </div>
</template>

<script setup>
import BannerSection from '../components/bannerSection.vue'
import LoginRegisterSection from '../components/loginRegisterSection.vue'


const drawerOptions = ref({
  drawerWidth:0,
  drawerOpacity:0
})

const closeDrawer = () => {
  drawerOptions.value.drawerWidth = 0
  drawerOptions.value.drawerOpacity = 0
}
const openDrawer = () => {
  drawerOptions.value.drawerWidth = 400
  drawerOptions.value.drawerOpacity = 100
}

</script>