<template>
  <div
    :style="'width:' + modelValue.drawerWidth + 'px'"
    :class="'opacity-'+modelValue.drawerOpacity"
    class="min-h-screen drawerClass overflow-hidden z-30 bg-[#FFFCF5] absolute top-0 right-0"
  >
    <button class="p-3" @click="$emit('closeDrawer')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></button>
    <div    class="flex flex-col min-h-screen mt-10">
        <div class="flex justify-center py-5 flex-col items-center">
            <div  class="text-center">
                <h1 class="text-black text-[35px] font-bold">DBC</h1>
                <h3 class="text-black text-[30px]">Log into Your Account</h3>
                <p class="text-black">We're excited to see you again! Log in to your account and continue your journey with us.</p>
            </div>
        </div>
        <div class="loginEmail px-3 w-full flex-col flex justify-center">
              <label
                for="Forgotemail"
                class="text-[24px] text-black font-semibold decoration-solid"
                >E-mail</label
              ><input
                v-model="login.email"
                required=""
                class="outline-none border h-10 w-full pl-3 rounded-[4px] border-gray-300"
                type="text"
                name="email"
                placeholder="E-mail"
              />
        </div>
        <div class="loginPass px-3 w-full flex-col flex justify-center">
              <label
                for="Forgotemail"
                class="text-[24px] text-black font-semibold decoration-solid"
                >Password</label
              ><input
              v-model="login.password"
                required=""
                class="outline-none border h-10 w-full pl-3 rounded-[4px] border-gray-300"
                type="password"
                name="password"
                placeholder="Password"
              />
        </div>
        <div class="flex justify-center mt-5">
            <div @click="loginFunction()" class="w-[170px] cursor-pointer rounded-[5px] text-[18px] bg-black text-white flex justify-center h-[40px] ">
                <button>Login</button>
            </div>
        </div>
    </div>
  </div>

</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import Apiservice from '../services/apiservice'
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);


const login = ref({
  "email":"",
  "password" :""
})

const loginFunction = () => {
  Apiservice.post('login',login.value).then((res)=>{
    console.log("res",res);
  }).catch((err)=> {
    console.log(err);
  });
}

</script>

<style scoped>
.drawerClass {
  transition: ease-in-out, all;
  transition-duration: 300ms;
}
</style>
