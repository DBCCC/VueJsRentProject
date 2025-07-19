<template>
  <div class="w-full h-screen">
    <div class="flex h-full">
      <div class="w-[30%]  flex justify-center ">
        <div class="flex flex-col">
          <!-- Büyük görsel -->
          <div class="w-[450px] h-[450px] p-3 border border-gray-200 rounded-2xl">
            <img src="@/assets/images/hoddie1.webp" class="rounded-2xl w-full h-full object-cover" alt="">
          </div>

          <!-- Küçük görseller: Yükseklikler eşitlendi -->
          <div class="grid grid-cols-3 gap-3 w-[450px] h-[150px]  mt-2">
            <img class="w-full h-full object-cover rounded-2xl border border-gray-200" src="@/assets/images/hoddie2.webp" alt="">
            <img class="w-full h-full object-cover rounded-2xl border border-gray-200" src="@/assets/images/hoddie2.webp" alt="">
            <img class="w-full h-full object-cover rounded-2xl border border-gray-200" src="@/assets/images/hoddie2.webp" alt="">
          </div>
          <div class="mt-16 border border-[#1E1E1E] rounded-2xl p-5">
            <div class="flex justify-between m-3">
              <p>Stylish</p>
              <span>(4.8) 17.5k reviews</span>
            </div>
            <div class="bg-[#1E1E1E] h-[1px] w-full"></div>
            <div class="flex justify-between m-3">
              <p>New york, USA</p>
              <button>View More</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Sağ taraf -->
      <div class="w-[70%] bg-indigo-800">
        asda
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
</script>

<style scoped></style>
