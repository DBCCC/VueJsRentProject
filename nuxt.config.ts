
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: 'IMPTREX',
      meta: [
      ]
    },
  },
  modules: ['nuxt-swiper','@vueuse/motion/nuxt','@pinia/nuxt'],
  swiper: {
     prefix: 'Swiper',
     styleLang: 'css',
     modules: ['navigation', 'pagination'], // all modules are imported by default
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},  
    },
  },
  build: {},
    runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  }

})
