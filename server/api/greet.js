export default defineEventHandler(async(event)=>{
    // handling queries
    const {name} = useQuery(event)

    // handling post data
    const {age} = await useBody(event)

    // taking env vars through runtime config
    const {apiKey} = useRuntimeConfig()

    // api call with private key 
    const {data} = await $fetch(`url/${process.env.API_KEY}`)

    return {
        message:`Welcome ${name}`
    }
})