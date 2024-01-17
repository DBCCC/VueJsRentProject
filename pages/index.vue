<template>
  <div class="fade-up">
    <LoginRegisterSection
    @closeDrawer="closeDrawer"
    v-model="drawerOptions"
  ></LoginRegisterSection>

  <div class=" bg-[#FFFCF5]">
    <section class="bg-[#FFFCF5]">
      <div class="flex min-h-screen">
        <div class="indexWhiteSide w-1/2 h-full h-screen bg-[#FFFCF5]">
          <div class="flex justify-center items-center w-full h-full">
            <div class="flex flex-col">
              <div class="flex flex-col">
                <h6
                  style="font-family: Arial, Helvetica, sans-serif"
                  class="text-[#9E9EA7]"
                >
                  Part of Modern Time
                </h6>
                <h2
                  class="uppercase text-[50px] font-semibold text-[#252338] w-[70%] leading-[1.2] font-bold"
                  style="
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode',
                      'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                  "
                >
                  Trendy & Comfortable
                </h2>
              </div>
              <div class="mt-10">
                <button
                  @click="openDrawer"
                  class="px-8 py-2 rounded-[2px] bg-[#F40000] text-white"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="indexBlackSide w-1/2 relative bg-gradient-to-b from-[#2F2F2F] from-10% [#282828] via-30% to-[#282828] to-90% h-screen rounded-bl-[40%]"
        >
          <div v-if="false" class="absolute right-0 z-20 p-3">
            <button class="px-4 py-2 bg-white rounded-[5px] hoverButton">
              Hover me !
            </button>
          </div>
          <div class="absolute bottom-[-60px]">
            <img
              class="scale-x-[-1] indexbikeHoverClass"
              src="../assets/images/rambo-savage-750w-electric-bike-best-ebike1.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>


    <div class="fade-left">
      <section>
      <div class="flex items-center gap-5 p-5">
        <div class="flex gap-4">
          <div class="carCard">
            <div
              class="cardInner w-[300px] hover:scale-105 transition duration-150 relative h-[400px] rounded-[20px]"
            >
              <div
                class="bg-black w-full h-full innerShadow absolute opacity-0 rounded-[20px]"
              ></div>
              <img
                src="../assets/images/indexcard1.jpg"
                class="w-full h-full object-cover rounded-[20px]"
                alt=""
              />
              <div
                class="cardTexts absolute bottom-10 px-5 flex mx-auto text-white"
              >
                <div class="flex flex-col">
                  <h3 class="text-[20px] font-bold">Bike Renting</h3>
                  <p>
                    Explore the city on two wheels with our convenient bike.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bikeCard">
            <div
              class="cardInner w-[300px] hover:scale-105 transition duration-150 relative h-[400px] rounded-[20px]"
            >
              <div
                class="bg-black w-full h-full innerShadow absolute opacity-0 rounded-[20px]"
              ></div>
              <img
                class="w-full h-full object-cover rounded-[20px]"
                src="../assets/images/indexcard2.2.jpg"
                alt=""
              />
              <div class="cardTexts absolute bottom-10 px-5 m-auto text-white">
                <div class="flex flex-col">
                  <h3 class="text-[20px] font-bold">Car Renting</h3>
                  <p>Unlock the driver's seat to your next adventure!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[50%]">
          <h2 class="text-[25px] font-semibold">
            Discover the Journey: Unleash Freedom with Our Diverse and
            Eco-Friendly Rental Options!
          </h2>
          <p class="text-[16px]">
            "On the Road to Freedom, Choose, Rent, Ride, Dive into Adventure,
            Speed, Comfort, Diversity, Explore, Harmony with Nature, Affordable,
            Eco-Friendly, Vibrant Bicycles, Luxury Vehicles, Flexible Plans"
          </p>
        </div>
      </div>
    </section>
    </div>

    <div class="fade-right">
      <section class="avantageSection flex gap-2 p-6">
      <div class="w-1/2 h-full">
        <div class="w-full flex flex-col gap-1">
          <advantagesSectionVue
            :avantages="avantages"
            :item="item"
            v-for="(item, index) in avantages"
            :key="index"
          ></advantagesSectionVue>
        </div>
      </div>
      <div
        style="gap: 8px"
        class="w-1/2 flex containerForImages justify-center"
      >
        <div v-for="(item, i) in 4" :key="i" class="innerImage">
          <img
            :class="getIsopenIndexComp.includes('0') ? 'avantageActive' : ''"
            v-if="i == 0"
            src="../assets/images/avantageIMG1.jpg"
            class="w-[100px] object-cover h-full hover:w-[200px] hover:rounded-[50px] transition-all ease-in-out object-cover rounded-[100px]"
            alt=""
          />
          <img
            :class="getIsopenIndexComp.includes('1') ? 'avantageActive' : ''"
            v-if="i == 1"
            src="../assets/images/avantageIMG2.jpg"
            class="w-[100px] object-cover h-full hover:w-[200px] hover:rounded-[50px] transition-all ease-in-out object-cover rounded-[100px]"
            alt=""
          />
          <img
            :class="getIsopenIndexComp.includes('2') ? 'avantageActive' : ''"
            v-if="i == 2"
            src="../assets/images/avantageIMG3.jpg"
            class="w-[100px] object-cover h-full hover:w-[200px] hover:rounded-[50px] transition-all ease-in-out object-cover rounded-[100px]"
            alt=""
          />
          <img
            :class="getIsopenIndexComp.includes('3') ? 'avantageActive' : ''"
            v-if="i == 3"
            src="../assets/images/avantageIMG4.jpg"
            class="w-[100px] object-cover h-full hover:w-[200px] hover:rounded-[50px] transition-all ease-in-out object-cover rounded-[100px]"
            alt=""
          />
        </div>
      </div>
    </section>
    </div>

    <section class="cardsSections flex justify-center">
      <div class="cardsWrapper flex gap-5 justify-between">
        <div class="basis-1/2">
          <index-information-card
            :title="informationCardsDataForBike.title"
            :desc="informationCardsDataForBike.desc"
            :type="informationCardsDataForBike.type"
          ></index-information-card>
        </div>

        <div class="basis-1/2">
          <index-information-card
            :title="informationCardsDataForCar.title"
            :desc="informationCardsDataForCar.desc"
            :type="informationCardsDataForCar.type"
          ></index-information-card>
        </div>
      </div>
    </section>
  </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import indexInformationCard from "../components/indexInformationCard.vue";
import { Autoplay } from "swiper/modules";
import LoginRegisterSection from "../components/loginRegisterSection.vue";
import advantagesSectionVue from "~/components/advantagesSection.vue";
import store from "~/store/store";
const avantageActive = ref(true);
const choosenAvantage = computed(() => {
  return store.getters.getChoosenAvantage;
});


const getIsopenIndexComp = computed(()=> {
  return store.getters.getIsopenIndex
})

const avantageItems = ref([
  { imageType: "1" },
  { imageType: "2" },
  { imageType: "3" },
  { imageType: "4" },
]);
const avantages = ref([
  {
    index: "0",
    isOpen: false,
    title: "Discover Your Freedom",
    desc: "Explore the city by renting a bike. Enjoy the taste of freedom with speed, flexibility, and environmentally friendly transportation.",
    img: {
      imgType: "1",
      width: "40",
      height: "40",
    },
  },
  {
    index: "1",
    isOpen: false,
    title: "Practical and Cost-Effective Option",
    desc: "Bike rental offers a practical and cost-effective option. Avoid city traffic and keep the costs low.",
    img: {
      imgType: "2",
      width: "40",
      height: "40",
    },
  },
  {
    index: "2",
    isOpen: false,
    title: "Healthy and Fun Journeys",
    desc: "Embark on a healthy and enjoyable journey with bike rentals. Preserve both your well-being and the environment.",
    img: {
      imgType: "3",
      width: "40",
      height: "40",
    },
  },
  {
    index: "3",
    isOpen: false,
    title: "Effortless and Enjoyable Riding",
    desc: "Experience effortless and enjoyable rides through bike rentals. Discover the joy of convenient and pleasurable transportation.",
    img: {
      imgType: "4",
      width: "40",
      height: "40",
    },
  },
]);

const drawerOptions = ref({
  drawerWidth: 0,
  drawerOpacity: 0,
});

const closeDrawer = () => {
  drawerOptions.value.drawerWidth = 0;
  drawerOptions.value.drawerOpacity = 0;
};
const openDrawer = () => {
  drawerOptions.value.drawerWidth = 400;
  drawerOptions.value.drawerOpacity = 100;
};

const informationCardsDataForBike = ref({
  title: "Swift, Green, and Healthy Deliveries!",
  desc: "Doing Uber Eats with a bicycle combines fast delivery, eco-friendly transportation, and a healthy lifestyle; avoids traffic, preserves the environment, and keeps you fit!",
  type: "bike",
});

const informationCardsDataForCar = ref({
  title: "The Benefits of Car Rental for Seamless Journeys",
  desc: "Explore with ease, flexibility, and affordability. Car rental opens doors to limitless adventures, making travel stress-free and convenient.",
  type: "car",
});
</script>

<style scoped>
.avantageActive {
  width: 200px;
  border-radius: 50px;
}

.innerImage:hover .containerForImages {
  gap: 0px !important;
}

.hoverButton:hover .indexbikeHoverClass {
  transition: all;
  transition: ease-in-out;
  transition-duration: 200ms;
  transform: scaleX(1);
}
.cardInner:hover .cardTexts {
  font-size: 18px;
  transition: ease-in-out;
  transition-duration: 400ms;
}

.informationSectionButton:hover .arrowClass {
  margin-left: 10px;
  transition: ease-in-out;
  transition-duration: 300ms;
}

.cardInner:hover .innerShadow {
  opacity: 40%;
  transition: ease-in-out;
  transition-duration: 400ms;
}
</style>
