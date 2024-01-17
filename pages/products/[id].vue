<template>
  <div class="min-h-screen flex flex-col items-center pt-10">
    <div>
      <h3 class="text-[25px]">
        SPECIALIZED TARMAC SL6 COMP DİSC 58CM ULTEGRA C60 CERAMİCSPEED
      </h3>
      {{ counterParam }}
    </div>
    <div class="flex mt-5 gap-10 items-start">
      <div class="product-detail-images flex justify-center items-center gap-3">
        <button @click="minusCounter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
            class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </button>
        <div class="w-96 h-[250px] rounded-[10px]">
          <img class="w-full h-full object-cover rounded-[10px]" :src="'/_nuxt/assets/images/avantageIMG'+(counterParam+1)+'.jpg'" ></div>
        <button @click="plusCounter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
            class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </button>
        <div class="other-images flex justify-center h-full flex-wrap gap-3 mt-3" style="max-width: 400px">
          <div v-for="(item, ind) in 4" :key="ind" class="w-20 h-20 rounded-[10px] bg-green-400">
            <img class="w-full h-full object-cover rounded-[10px]" :src="'/_nuxt/assets/images/avantageIMG'+(ind+1)+'.jpg'" >
          </div>
        </div>
      </div>
      <div class="product-details">
        <div class="detail-price-location">
          <h4>175.000 TL</h4>
          <h5>İzmir / Karşıyaka / Bahçelievler Mh.</h5>
        </div>
        <div class="more-detail">
          <div class="border mt-3" v-for="(i, index) in productDetails" :key="index">
            <div class="flex gap-5">
              <p class="font-bold">{{ i.key }}</p>
              <p>{{ i.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 flex flex-col items-center justify-center">
      <div class="flex gap-3 items-center">
        <button @click="changeExplanationToDetail" :class="explanationDetail ? 'bg-yellow-400' : ''"
          class="border border-yellow-400 p-2 rounded-[5px]">
          Advert Details
        </button>
        <button @click="changeExplanationToLocation" :class="explanationLocation ? 'bg-yellow-400' : ''"
          class="border border-yellow-400 p-2 rounded-[5px]">
          Location
        </button>
      </div>
      <div class="mt-5 flex justify-center text-center">
        <div class="flex justify-center w-1/2">
          <p v-if="explanationDetail">
            1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptates minima, beatae consequatur similique, eveniet consectetur
            accusantium earum, excepturi aliquam exercitationem! Modi non
            necessitatibus natus, eos est error nemo animi.
          </p>
          <div v-if="explanationLocation">
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.4665706712!2d20.89638638127872!3d52.23303347741715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2zVmFyxZ9vdmE!5e0!3m2!1str!2spl!4v1705525815196!5m2!1str!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'

const { id } = useRoute().params;
const productDetails = ref([
  { key: "Advert Number", value: "1146935966" },
  { key: "Advert Date", value: "14 Jan 2024" },
  { key: "Brand", value: "Specialized" },
  { key: "Number of Gears", value: "22" },
  { key: "Model year", value: "2022" },
  { key: "Status", value: "Good Condition" },
]);

const explanationDetail = ref(true);
const explanationLocation = ref(false);
const changeExplanationToDetail = () => {
  explanationDetail.value = true;
  explanationLocation.value = false;
};

const changeExplanationToLocation = () => {
  explanationLocation.value = true;
  explanationDetail.value = false;
};

const counterParam = ref(0)


const minusCounter = () => {
  if(counterParam.value < 1){
    counterParam.value = 0
  }
  else{
    counterParam.value--
  }
}
const plusCounter = () => {
  if(counterParam.value > 2){
    counterParam.value = 3
  }
  else{
    counterParam.value++
  }
}

const postData = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    postData.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData()
})

       

</script>

<style scoped></style>
