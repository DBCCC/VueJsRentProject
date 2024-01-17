<template>
    <div class="productsContainer">
        <div class="cardsSection flex flex-wrap gap-10  justify-center">
            <index-information-card v-for="(item, index) in informationCardsDataForCar" :key="index" :title="item.title" :desc="item.desc"
          :type="item.type"></index-information-card>
        </div>
    </div>

</template>


<script setup>
import indexInformationCard from '../components/indexInformationCard.vue'
import {ref} from 'vue'


const informationCardsDataForCar = ref([
  {
    "title": "Audi A4",
    "desc": "Elegance and performance define the Audi A4, a luxury sedan with cutting-edge technology and powerful engine options. Ideal for city or highway driving.",
    "type": "car"
  },
  {
    "title": "Mountain Bike",
    "desc": "Conquer rugged terrains with our high-performance mountain bike, featuring top-tier components and responsive handling for thrilling off-road adventures.",
    "type": "bike"
  },
  {
    "title": "Tesla Model S",
    "desc": "Experience the future of electric driving with the Tesla Model S, a groundbreaking sedan offering cutting-edge technology, impressive range, and stunning design.",
    "type": "car"
  },
  {
    "title": "Road Bike",
    "desc": "Optimized for speed and precision, our road bike delivers an unparalleled riding experience with aerodynamic features, lightweight construction, and responsive handling.",
    "type": "bike"
  }
])
</script>


<style scoped>


</style>
