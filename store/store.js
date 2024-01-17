import { createStore } from "vuex";


export default createStore({
  state: {
    choosenAvantage:[],
    avantageStatus : {
        image1 : false,
        image2 : false,
        image3 : false,
        image4 : false,
    },
    isOpenIndex : []
  },

  getters: {
    getChoosenAvantage : (state) => {
        return state.choosenAvantage
    },

    getAvantageStatus : (state) => {
        return state.avantageStatus
    },

    getIsopenIndex : (state) => {
      return state.isOpenIndex
    }
  },
  mutations: {
    setAvantage: (state, payload) => {
        state.choosenAvantage.push(payload);
      },

      setAvantageImageStatus : async(state, payload) => {
        let param1 = await payload.itemInd
        let myNumber = () =>{
          return getImageString(param1)
        }
        await console.log("askldlakds",myNumber);

        state.avantageStatus = payload.status
      },
    isOpenAvantage: (state,payload) => {

        state.isOpenIndex.push(payload)
      
    },
    removeAvantage : (state,payload) => {
      console.log("payloads",payload);
      state.isOpenIndex.forEach(element => {
        if(element == payload){
          const equalElement = (element) => element == payload;
          let findedIndex = state.isOpenIndex.findIndex(equalElement)
          state.isOpenIndex.splice(findedIndex,1)
        }
      });
    }

  },

  actions: {},
});