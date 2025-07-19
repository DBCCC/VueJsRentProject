<template>
      
  <div ref="target"
    class="fixed top-0 border border-l-[#1E1E1E] text-white border-t-black bg-black h-screen z-50 transition-all duration-300"
    :class="sidebar.sidebarStatus ? 'w-[350px] right-0' : 'w-0 -right-[350px]'">
    <div class="flex justify-between p-5">
      <h1 class="text-lg">Your cart - 1 item</h1>
      <button @click="sidebar.closeSidebar()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></button>
    </div>
    <div class="bg-[#1E1E1E] h-[1px] w-full"></div>

    <div class="flex justify-between p-4">
      <div class="flex text-sm">
        <img class="w-20 h-full" src="@/assets/images/hoddie1.webp" alt="">
        <div>
          <span>Bot Diff T-Shirt XS</span>
          <div class="flex mt-1 lg:mt-2 items-center" bis_skin_checked="1">
            <button class="w-6 p-1" data-qty-adjust="minus" aria-label="Remove one Bot Diff T-Shirt - XS">
              <svg aria-hidden="true" focusable="false" role="presentation" class="icon fill-current icon-minus"
                viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M20 11v2H4v-2z"></path>
              </svg>
            </button>
            <input type="text" value="0" name="updates[]"
              class="min-w-0 w-6 py-1 text-center text-sm border-b-text border-current bg-transparent" min="1"
              aria-label="Quantity" data-qty-input="" pattern="[0-9]*" data-qty-adjust="set"
              x-model.number="item.quantity" autocomplete="off">
            <button class="w-6 p-1" data-qty-adjust="plus" aria-label="Add one Bot Diff T-Shirt - XS">
              <svg aria-hidden="true" focusable="false" role="presentation" class="icon fill-current icon-plus"
                viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M20 11v2h-7v7h-2v-7H4v-2h7V4h2v7z"></path>
              </svg>
            </button>
          </div>
          <div>
            <span class="text-[10px]">Remove</span>
          </div>
        </div>
      </div>
      <div class="text-sm">
        <span>€49,20</span>
      </div>
    </div>
    <div class="bg-[#1E1E1E] h-[1px] w-full"></div>
    <div class="p-4 pt-2">
      <span class="text-[10px]">Add a note to your order</span>
      <div class="mt-2  border border-white">
        <textarea class="bg-[black] w-full" name="" id=""></textarea>
      </div>
    </div>
    <div class="bg-[#1E1E1E] h-[1px] w-full"></div>
    <div class="p-4">
      <div class="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>€49,20</span>
      </div>
      <div class="flex justify-end text-end">
        <span class="text-[10px] mt-2">Tax included and shipping calculated at checkout</span>
      </div>
      <div class='w-full mt-3'>
        <button class="text-sm border rounded-2xl py-1 w-full border-white hover:text-[#cb333b] hover:border-[#cb333b]">Check out</button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { useSidebarStore } from '~/stores/sidebarStore'
const sidebar = useSidebarStore()
const target = ref()
onMounted(() => {
  onClickOutside(target, () => {
    sidebar.closeSidebar()
  })
})


</script>