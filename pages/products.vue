<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col sm:grid grid-cols-3 xl:grid-cols-4 gap-4 w-full px-[32px]">
    <ProductCard
        v-for=" i in 1" :key="i"
        image-src="https://m.atcdn.co.uk/ect/media/%7Bresize%7D/4b14ab0c7868451baf5912779f112f40.jpg"
        price="3 285 000 ₽"
        title="Hyundai Sonata 2.0 AT, 2023, 30 км"
        status="promote"
    />
    <ProductCard
        v-for=" i in 1" :key="i"
        image-src="https://m.atcdn.co.uk/ect/media/%7Bresize%7D/4b14ab0c7868451baf5912779f112f40.jpg"
        price="3 285 000 ₽"
        title="Hyundai Sonata 2.0 AT, 2023, 30 км"
        status="promoted"
    />
    <ProductCard
        v-for=" i in 1" :key="i"
        image-src=""
        price="3 285 000 ₽"
        title="Hyundai Sonata 2.0 AT, 2023, 30 км"
        status="promoted"
    />
    <ProductCard
        v-for=" i in 1" :key="i"
        image-src="https://m.atcdn.co.uk/ect/media/%7Bresize%7D/4b14ab0c7868451baf5912779f112f40.jpg"
        price="3 285 000 ₽"
        title="Hyundai Sonata 2.0 AT, 2023, 30 кмHyundai Sonata 2.0 AT, 2023, 30 кмHyundai Sonata 2.0 AT, 2023, 30 кмHyundai Sonata 2.0 AT, 2023, 30 кмHyundai Sonata 2.0 AT, 2023, 30 км"
        status="hidden"
    />

  </div>

</template>

<style scoped>

</style>