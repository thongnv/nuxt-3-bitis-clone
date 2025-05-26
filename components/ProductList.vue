<template>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ products: Array<any> }>();
import ProductCard from "./ProductCard.vue";
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  justify-content: center;
}
</style>
