<template>
  <div>
    <TopBar />
    <Header />
    <main>
      <div class="new_hunter">
        <div class="container-fluid">
          <a href="/pages/hunter">
            <svg
              width="127"
              height="41"
              viewBox="0 0 127 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.0821 0H61.3929L50.3446 10.6078C56.6096 9.05901 63.2146 8.10439 70.2766 7.5087L78.2494 0H105.814L96.7028 7.62784C109.573 8.34266 121.078 10.0121 127 11.9183C115.041 12.3949 101.031 12.7523 84.4005 15.2557C77.6801 16.2088 71.5305 17.1619 65.0378 18.593C71.5305 17.8782 79.1617 17.9974 84.4005 18.9505L58.659 41H38.4992L59.1158 20.1434C55.1294 21.2156 50.8015 22.5276 46.1305 24.3147C30.6403 30.0363 18.9088 41 18.9088 41H0L35.0821 0Z"
                fill="#111111"
              ></path>
            </svg>
            <span>Biti's Hunter thế hệ mới</span>
          </a>
        </div>
      </div>
      <MainSlider />
      <div class="container">
        <div class="sectionHeading-tab-new hasBanner">
          <NuxtImg
            src="/images/banner1.webp"
            alt="TOP TÌM KIẾM"
            width="1920"
            height="750"
            priority
            format="webp"
            sizes="(max-width: 768px) 100vw, 1920px"
            class="bigloaded"
            style="position:absolute;left:0;top:0;aspect-ratio:1920/750;width:100%;height:100%;object-fit:cover;"
          />
        </div>
      </div>
      <div class="sectionHeading-tab-new">TOP TÌM KIẾM</div>
      <ProductList :products="products" />
      <div class="sectionHeading-tab-new">SẢN PHẨM MỚI</div>
      <ProductList :products="products" />
      <div class="sectionHeading-tab-new">SẢN PHẨM NỔI BẬT</div>
      <ProductList :products="products" />
      <section class="mainBannerhome section-home">
        <div class="container">
          <div class="section-head">
            <h4>CHÚNG TÔI CÓ GÌ MỚI</h4>
          </div>
          <div class="bg-three-banner-home">
            <div class="row three-branner">
              <a
                class="bannerEffect"
                href="https://bitis.com.vn/collections/giay-the-thao-bitis-hunter-tennis"
                aria-label="Banner 1"
              >
                <NuxtImg
                  class="lazyload dt-width-100 bigloaded"
                  width="403"
                  height="217"
                  src="/images/banner_giaytennis.webp"
                  data-src="/images/banner_giaytennis.webp"
                  alt=""
                />
              </a>
              <a
                class="bannerEffect"
                href="https://bitis.com.vn/collections/giay-tay-nam"
                aria-label="Banner 2"
              >
                <NuxtImg
                  class="lazyload dt-width-100 bigloaded"
                  width="403"
                  height="217"
                  src="/images/banner_giaytay.webp"
                  data-src="/images/banner_giaytay.webp"
                  alt=""
                />
              </a>
              <a
                class="bannerEffect"
                href="https://bitis.com.vn/collections/sandal-tre-em-bitis-gau-chu-tam"
                aria-label="Banner 3"
              >
                <NuxtImg
                  class="lazyload dt-width-100 bigloaded"
                  width="403"
                  height="217"
                  src="/images/banner_gauchuatam_510x275.webp"
                  data-src="/images/banner_gauchuatam_510x275.webp"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="banner-home-bottom section-home text-center">
        <a
          href="https://bitis.com.vn/collections/dep-tre-em-disney"
          class="bannerEffect"
          aria-label="banner bottom"
        >
          <NuxtImg
            class="dt-width-100 lazyload bigloaded"
            width="1950"
            height="750"
            src="/images/banner_stitch_.webp"
            alt=""
            data-src="/images/banner_stitch_.webp"
            data-mobile="//file.hstatic.net/1000230642/file/banner_stitch__grande.webp"
          />
        </a>
      </section>

      <section class="blog-home section-home styleOwl">
        <div class="container">
          <div class="section-heading-tab d-flex align-items-center">
            <h3>TIN TỨC BITIS</h3>
          </div>
          <div class="section-content">
            <BlogSlider />
          </div>
        </div>
      </section>

      <SectionAddress />
      <SectionNewsLetter />
      <SectionGallery />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import TopBar from "~/components/TopBar.vue";
import Header from "~/components/Header.vue";
import ProductList from "~/components/ProductList.vue";
import SectionAddress from "~/pages/layouts/SectionAddress.vue";
import SectionNewsLetter from "~/pages/layouts/SectionNewsLetter.vue";
import SectionGallery from "~/pages/layouts/SectionGallery.vue";
import Footer from "~/pages/layouts/Footer.vue";

const products = [
  {
    id: 1,
    name: "Bitis Hunter X",
    price: 1200000,
    image: "/images/bitis_shoe1_large.webp",
    description: "Comfortable and stylish sneakers for everyday use.",
  },
  {
    id: 2,
    name: "Bitis Sandal Pro",
    price: 800000,
    image: "/images/bitis_shoe1_large.webp",
    description: "Durable sandals perfect for summer.",
  },
  {
    id: 3,
    name: "Bitis Classic",
    price: 950000,
    image: "/images/bitis_shoe1_large.webp",
    description: "Classic design with modern comfort.",
  },
  {
    id: 1,
    name: "Bitis Hunter X",
    price: 1200000,
    image: "/images/bitis_shoe1_large.webp",
    description: "Comfortable and stylish sneakers for everyday use.",
  },
  {
    id: 2,
    name: "Bitis Sandal Pro",
    price: 800000,
    image: "/images/bitis_shoe1_large.webp",
    description: "Durable sandals perfect for summer.",
  },
  {
    id: 3,
    name: "Bitis Classic",
    price: 950000,
    image: "/images/bitis_shoe1_large.webp",
    description: "Classic design with modern comfort.",
  },
];
</script>

<style scoped type="text/scss">
.new_hunter {
  background: #ff3d00;
  height: 70px;

  .container-fluid {
    height: 100%;

    a {
      display: -webkit-flex;
      display: flex;
      font-family: "MN HUNTER", sans-serif;
      font-size: 36px;
      /* font-display: swap; */
      line-height: 19.5px;
      align-items: center;
      position: relative;
      justify-content: center;
      height: 100%;
      width: 100%;
      color: #111111;

      svg {
        position: absolute;
        left: 0;
      }

      span {
        margin-top: 8px;
      }
    }
  }
}

.sectionHeading-tab-new.hasBanner {
  display: block;
  padding-top: calc(100% * 750 / 1920);
  position: relative;
  transition: none;
  background: #f7f8f9;
}

.hasBanner img {
  position: absolute;
  left: 0;
  top: 0;
  aspect-ratio: 1920 / 750;
  width: 100%;
  height: 100%;
}
.sectionHeading-tab-new {
  text-shadow: 0 0.1em 20px #ff0000, 0.05em -0.03em 0 #ff0000,
    0.05em 0.005em 0 #ff0000, 0em 0.08em 0 #ff0000, 0.05em 0.08em 0 #ff0000,
    0px -0.03em 0 #ff0000, -0.03em -0.03em 0 #ff0000, -0.03em 0.08em 0 #ff0000,
    -0.03em 0 0 #ff0000;
  color: #ff0000 !important;
  line-height: 2.2rem;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 70px 0;
  text-align: center;
}

.mainBannerhome {
  padding: 50px 0 30px 0;
  background: url("/images/bg_banner_center.webp");
  background-position: center top;

  .section-head {
    margin-bottom: 40px;
    text-align: center;
    margin: 0 0 45px 0;

    .section-head h4 {
      font-size: 18px;
      color: #000;
      font-weight: bold;
      padding: 0 0 10px 0;
      margin: 0;
      display: inline-block;
    }
  }
  .bg-three-banner-home {
    display: flex;
    justify-content: center;

    .three-branner {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }
}
</style>
