// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title:"Wheels.com",
      meta:[
        {name:'description', content:'Get all type of tubes and tyres'},
        {name:'keywords', content:'tubes, tyres, two-wheelers'}
      ],
      link:[
        {rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'}
      ]
    }
  },

  runtimeConfig:{
    apiKey: process.env.API_KEY
  }
})
