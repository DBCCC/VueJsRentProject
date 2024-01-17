<template>
      <div class="fade-left">

    <div class="singleCard pt-5">
        <div
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img v-if="props.type == 'bike'" class="object-cover w-64 h-96 rounded-lg" src="../assets/images/whitebike.jpg"
                alt="" />
            <img v-if="props.type == 'car'" class="object-cover w-42 h-96 rounded-lg"
                src="../assets/images/informationCardCarMain.jpg" alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ props.title }}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {{ props.desc }}
                </p>
                <div class="informationCardButtons flex">
                    <button class="bg-black text-white rounded-l-lg"><span class="px-3">Rent Now!</span></button>
                    <button class="bg-white text-black border-black border rounded-r-lg"><span class="px-3"><router-link :to="'products/'+props.type">More Detail</router-link></span></button>
                </div>
            </div>
        </div>

    </div>
      </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['title', 'desc', 'type'])


</script>