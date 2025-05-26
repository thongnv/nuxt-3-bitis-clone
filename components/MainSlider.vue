<template>
  <div class="home-slider" id="home-slider">
    <Carousel
      :autoplay="0"
      :wrapAround="true"
      :clamp="true"
      :pauseAutoplayOnHover="true"
      :mouseDrag="true"
      :transition="5000"
    >
      <Slide v-for="(slide, idx) in slides" :key="idx">
        <div class="slider-item item-owl">
          <div class="slide--image">
            <a
              :href="slide.link"
              :aria-label="slide.label"
              :title="slide.label"
            >
              <NuxtImg
                class="dt-width-100 bigloaded"
                :src="slide.img"
                :alt="slide.label"
                width="1920"
                height="750"
                :preload="idx === 0 ? true : false"
                :fetchPriority="idx === 0 ? 'high' : 'low'"
              />
            </a>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const slides = [
  {
    img: "/images/banner_tetthieunhi_flashsale__1_.webp",
    link: "https://bitis.com.vn/collections/flashsale-ngay-23-05-tu-11h-so-luong-co-han",
    label: "Slider 1",
  },
  {
    img: "/images/1920x750__8__6e42e0ba269445219790306e6ee5a0a4.webp",
    link: "https://bitis.com.vn/collections/thang-5-chao-he-sale-den-50",
    label: "Slider 2",
  },
  {
    img: "/images/1920x750__7__2c8bf0f6dfd045699083515b2fa5eb00.webp",
    link: "https://bitis.com.vn/collections/hunter-running",
    label: "Slider 3",
  },
  {
    img: "/images/1920x750__3__4ef91021d2814accab542b12d9d1ef07.webp",
    link: "https://bitis.com.vn/collections/litedash-sale-20",
    label: "Slider 4",
  },
  {
    img: "/images/1920x750__6__cf73ddadd0ce4d9fbe3aca461c9e124c.webp",
    link: "https://bitis.com.vn/collections/balo-tui-xach-gosto",
    label: "Slider 5",
  },
  {
    img: "/images/1920x750__24_.webp",
    link: "https://bitis.com.vn/collections/san-pham-moi",
    label: "Slider 6",
  },
  {
    img: "/images/1920x750__23_.webp",
    link: "https://bitis.com.vn/collections/phu-kien-1",
    label: "Slider 7",
  },
];
</script>

<style scoped type="text/scss">
.home-slider {
  padding-top: 0;
  position: relative;
  overflow: hidden;
  margin-bottom: 0px;
}
img {
    width: 100%;
    text-align: center;
    margin: auto;
    overflow: hidden;
}
.slide--image {
  width: 100vw;
  max-width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;
  overflow: hidden;
}
.slide--image a,
.slide--image img {
  display: block;
  width: 100vw;
  max-width: 100vw;
  height: auto;
  object-fit: cover;
}
</style>