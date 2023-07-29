<template>
    <Header2 />
    <slot />
</template>

<script setup>
import Header2 from '../components/Header2.vue';

useHead({
    title:'Wheels.com | Products'
})

</script>

<style lang="scss" scoped>

</style>