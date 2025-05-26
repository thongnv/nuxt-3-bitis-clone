<template>
  <div class="product-card">
    <NuxtImg :src="product.image" :alt="product.name" class="product-image" width="220" height="220"/>
    <div class="product-box-info">
      <div class="product-box-variable">
        <div class="box-number-size">7 Size</div>
        <div class="box-number-color">1 Màu sắc</div>
      </div>
      <div class="product-box-title">
        Giày Chạy Bộ Biti's Hunter Running 2.0 Nam Màu Cam HSM004800CAM
      </div>
      <div class="hrv-crv-container disabled"></div>
      <div class="product-box-price">
        <div class="main-price-sale">
          <span class="main-price-inner">881,300 đ</span>
        </div>
        <del class="main-price-del">1,259,000 đ</del
        ><span class="sale-price-discount">-30%</span>
      </div>
      <div
        class="product-swatch-loop d-flex flex-wrap align-items-center justify-content-center"
      >
        <div style="display: none" class="product-action">
          <button class="add-to-cart-loop">Mua ngay</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ product: any }>();
import { formatPrice } from "~/utils/formatPrice";
</script>

<style scoped>
.product-card {
  width: calc((100% - 25px) / 2);
  margin: 5px;
  margin-bottom: 10px;
  padding: 0 0 10px 0;
  border: 1px solid #eee;
  border-radius: 8px;
  font-size: 14px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-image {
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
}
.product-box-info {
  padding: 0 4px;
  text-align: center;
}
.product-box-variable {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 1rem 0;
}
.product-box-title {
  overflow: hidden;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  min-height: 34px;
  text-align: left;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;
}
.product-box-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
}
.main-price-sale {
  color: #ed4e4e !important;
  font-weight: 500;
  font-size: 11px;
}
.main-price-del {
  font-size: 11px;
  color: #000;
  margin: 0 !important;
}
.sale-price-discount {
  font-size: 11px;
  border: 1px solid #e71a3c;
  color: #e71a3c;
  border-radius: 3px;
  padding: 2px 5px;
  background: #ffe9ea;
}
@media (min-width: 768px) {
  .product-card {
    width: 220px;
    margin: 10px;
    padding: 0 0 16px 0;
  }
  .product-box-info {
    padding: 0 8px;
  }

  .main-price-sale {
    font-size: 12px;
  }
  .main-price-del {
    font-size: 12px;
  }
  .sale-price-discount {
    font-size: 12px;
  }
}
</style>
