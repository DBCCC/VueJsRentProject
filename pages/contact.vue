<template>
    <div class="contactContainer relative min-h-screen">
        <div v-if="modalParam != true" class="flex justify-center w-full flex-col items-center py-10">
            <h3 class="font-semibold text-[30px]">Contact Us</h3>
            <p class="text-[20px] leading-[1.2] opacity-70 w-[50%] text-center">
                We use an agile approach to test assumptions and connect with the needs
                of your audience early and often.
            </p>
        </div>

        <div v-if="modalParam != true" class="flex px-10">
            <div class="formSection w-[60%] flex flex-col gap-3 p-5">
                <form class="formClass" @submit.prevent="submitContactForm">
                <div class="flex gap-5 ">
                    <div class="flex flex-col gap-1">
                        <label for="firstName">First Name</label>
                        <input v-model="contactFormData.firstName" name="firstName" required class="w-[300px] border border-gray-300 outline-none rounded-[5px] h-[30px] p-1" type="text" />
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="lastName">Last Name</label>
                        <input v-model="contactFormData.lastName"  name="lastName" required class="w-[300px] outline-none border border-gray-300 rounded-[5px] h-[30px] p-1" type="text" />
                    </div>
                </div>
                <div class="flex gap-5">
                    <div class="flex flex-col gap-1">
                        <label for="email">Your email</label>
                        <input v-model="contactFormData.email" name="email" required class="w-[300px] border border-gray-300 outline-none rounded-[5px] h-[30px] p-1" type="text" />
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="phoneNumber">Phone Number</label>
                        <input v-model="contactFormData.phoneNumber" name="phoneNumber" required class="w-[300px] border border-gray-300 outline-none rounded-[5px] h-[30px] p-1" type="text" />
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="content">Your message</label>
                    <textarea required v-model="contactFormData.content"   name="content"   class="mt-1 outline-none border border-gray-300 rounded-[5px] p-1" placeholder="Your Comment" id="" cols="30"
                        rows="6"></textarea>
                </div>

                <div class="mt-3">
                    <span>By submitting this form you agree to our
                        <span class="text-blue-600">terms and conditions</span> and our
                        <span class="text-blue-600">privacy policy</span> which explains how
                        we may collect, use and disclose your personal information including
                        to third parties.</span>
                </div>

                <div>
                    <button type="submit" class="bg-green-500 text-white px-4 mt-2 py-1 rounded-[5px]">
                        Submit
                    </button>
                </div>
                </form>
            </div>
            <div class="optionsSection w-[40%] bg-white mb-5 rounded-[10px]">
                <div class="flex flex-col justify-center text-center items-center gap-5 py-5">
                    <div class="flex flex-col justify-center items-center p-3">
                        <div class="w-[50px] w-[50px] bg-gray-400 rounded-[10px] p-2">
                            <svg class="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 ErtfuPDAbVhbrEDAXyPl _dvU7XkD_gq8rV5MWJnx cmyOlpMdB9WCo6ZbMyYL jt7K__cy_iHy7aMDMaLX"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <h1 class="text-[20px] font-semibold">Chat</h1>
                        <p class="w-1/2">
                            "Connect" button initiates live communication for quick and easy
                            collaboration in the online environment.
                        </p>
                        <button @click="openLiveChatModal"
                            class="border border-black px-3 py-1 mt-2 rounded-[5px] hover:text-white hover:bg-black">
                            Connect
                        </button>
                    </div>
                    <div class="bg-black w-full h-[2px]"></div>
                    <div class="flex flex-col justify-center items-center p-3">
                        <div class="w-[50px] w-[50px] bg-gray-400 rounded-[10px] p-2">
                            <svg class="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 ErtfuPDAbVhbrEDAXyPl _dvU7XkD_gq8rV5MWJnx cmyOlpMdB9WCo6ZbMyYL jt7K__cy_iHy7aMDMaLX"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <h1 class="text-[20px] font-semibold">Address:</h1>
                        <p class="w-1/2">
                            SILVER LAKE, United States 1941 Late Avenue Zip Code/Postal
                            code:03875
                        </p>
                    </div>
                    <div class="bg-black w-full h-[2px]"></div>
                    <div class="flex flex-col items-center justify-center p-3">
                        <div class="w-[50px] w-[50px] bg-gray-400 rounded-[10px] p-2">
                            <svg class="eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6 ErtfuPDAbVhbrEDAXyPl _dvU7XkD_gq8rV5MWJnx cmyOlpMdB9WCo6ZbMyYL jt7K__cy_iHy7aMDMaLX"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <h1 class="text-[20px] font-semibold">Call Us:</h1>
                        <p class="w-1/2">
                            Call us to speak to a member of our team. We are always happy to
                            help.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Section -->
        <div v-if="modalParam" class="absolute z-20 top-3 mt-10 rounded-[10px] left-1/3 w-1/3 h-[500px] bg-white">
            <div class="flex flex-col rounded-[10px] justify-between h-full">
                <div class="chatMainSection h-[85%] overflow-y-scroll   p-3">
                    <div :class="item.flexStatus" v-for="(item,index) in chatItems" :key="index" class="flex border borde-gray-300 w-full items-center justify-start mt-2  gap-5">
                        <div class="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center">
                            <svg v-if="item.type =='support'" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                class="bi bi-person-raised-hand" viewBox="0 0 16 16">
                                <path
                                    d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
                                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                            </svg>
                        </div>
                        <div class="bg-white flex flex-col p-2 rounded-[10px] ">
                            <h3 class="font-semibold text-[19px]">{{ item.title }}</h3>
                            <p>{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
                <div class="chatTextSection h-[15%] bg-gray-300 p-3">
                    <form @submit.prevent="sendMessage">
                        <div class="w-full flex items-center gap-3">
                        <div class="w-[90%]">
                            <input v-model="chatInput" class="w-full rounded-[5px] outline-none h-[30px]" type="text" />
                        </div>
                        <div class="flex w-[10%] bg-green-500 rounded-full text-white text-[15px] justify-center items-center"
                            style="width: 40px; height: 40px">
                            <button type="submit"  class="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                    class="bi bi-send" viewBox="0 0 16 16">
                                    <path
                                        d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const modalParam = ref(false);
const modalShadow = ref(false);
const chatInput = ref()
const flexStatus = ref()
const contactFormData = ref({
    id :"",
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    content:""

})

const staticAnswers = ref(
    [
  {
    "title": "Support Team",
    "desc": "Hello! How can I assist you? Feel free to ask me any questions.",
    "type":"support"
  },
  {
    "title": "Support Team",
    "desc": "Hello, I'd be happy to help. Please share your question in detail.",
    "type":"support"
  },
  {
    "title": "Support Team",
    "desc": "Hi there! Can you share your question so I can assist you?",
    "type":"support"
  },
  {
    "title": "Support Team",
    "desc": "Hello, welcome to our support team! How can we assist you?",
    "type":"support"
  },
  {
    "title": "Support Team",
    "desc": "We're here for your questions! Feel free to reach out whenever you need help.",
    "type":"support"
  }
    ]
)

const chatItems = ref([
    {title:"Support Team",desc:"Hi, How can i help you ?",type:"support"}
])


const openLiveChatModal = () => {
    modalShadow.value = true;
    modalParam.value = true;
};


const sendMessage = ()=> {
    let newMessage = {
        title:"User",
        type:"user",
        desc:chatInput.value,
        flexStatus:"flex-row-reverse"
    }
    chatItems.value.push(newMessage)

    chatInput.value = ""
    const answer = staticAnswers.value[Math.floor(Math.random() * staticAnswers.value.length)];
    setTimeout(() => {
    chatItems.value.push(answer)
    }, 2000);
}


const submitContactForm = () => {
    let randomId = Math.floor((Math.random() * 100) + 1);
    contactFormData.value.id = randomId
    let stringData = JSON.stringify(contactFormData.value)
    localStorage.setItem('personData',stringData)
    contactFormData.value = {
    id :"",
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    content:""

}
$toast.success('Merhaba, bu bir başarı mesajı!');
}
</script>

<style scoped>
.formClass input{
    border: 1px soldid black;
}

</style>
