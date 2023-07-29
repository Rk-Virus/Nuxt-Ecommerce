<template>
  <section class="text-gray-600 body-font">
    <h2 class="mx-8 text-xl">Latest Products</h2>
    <div class="container px-5 py-5 mx-auto">
      <div class="flex flex-wrap -m-4">

        <div class="lg:w-1/4 md:w-1/2 p-4 w-full" v-for="product in products">
          <NuxtLink :to="'/products/'+product.id" class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" :src="product.image">
          </NuxtLink>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ product.category }}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">{{ product.title }}</h2>
            <p class="mt-1">${{ product.price }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'product'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')
console.log(products)
</script>

<style lang="scss" scoped></style>