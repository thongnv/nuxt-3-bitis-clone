<template>
  <div class="blog-slider-wrapper">
    <Carousel
      :itemsToShow="4"
      :wrapAround="false"
      :autoplay="0"
      :pauseAutoplayOnHover="true"
      :breakpoints="breakpoints"
    >
      <Slide v-for="(blog, idx) in blogs" :key="idx">
        <div class="item-blog">
          <div class="item-blog-inner">
            <div class="box-img-blog">
              <a :href="blog.link">
                <NuxtImg
                  class="dt-width-100 bigloaded"
                  width="480"
                  height="480"
                  :src="blog.img"
                  :alt="blog.title"
                />
              </a>
            </div>
            <div class="box-detail-blog">
              <h4>
                <a :href="blog.link">{{ blog.title }}</a>
              </h4>
              <div class="short-description">{{ blog.description }}</div>
              <div
                class="action-blog d-flex align-items-center justify-content-between"
              >
                <div class="data-blog">{{ blog.date }}</div>
                <div class="view-blog">
                  <a :href="blog.link">Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const blogs = [
  {
    img: "/images/1920x750px_copy_9f2c5b9be3c44c939d50526c90194ee8_large.webp",
    link: "/blogs/news/the-le-chuong-trinh-khuyen-mai-sam-giay-at-ty-rinh-ty-loc-ve",
    title: "THỂ LỆ CHƯƠNG TRÌNH KHUYẾN MÃI SẮM GIÀY ẤT TỴ - RINH TỶ LỘC VỀ",
    description:
      "THỂ LỆ CHƯƠNG TRÌNH KHUYẾN MẠISẮM GIÀY ẤT TỴ - RINH TỶ LỘC VỀTên chương trình: SẮM GIÀY...",
    date: "30/11/2024",
  },
  {
    img: "/images/rebrand_banner_1_bd7dcaaf81fd489cb78801542601a2e6_large.webp",
    link: "/blogs/news/bitis-hunter-chuyen-minh-tro-thanh-thuong-hieu-thoi-trang-voi-tinh-than-buoc-toi",
    title: "BITI'S HUNTER CHUYỂN MÌNH TRỞ THÀNH THƯƠNG HIỆU THỜI TRANG",
    description: "https://file.hstatic.net/1000230642/file/big_banner.webp,...",
    date: "18/10/2024",
  },
  {
    img: "/images/1_50a75565c66c417a83239475f52107d3_large.webp",
    link: "/blogs/news/cung-biti-s-chinh-phuc-giai-chay-truyen-cam-hung",
    title:
      "CÙNG BITI'S CHINH PHỤC GIẢI CHẠY TRUYỀN CẢM HỨNG: GREENUP LONG AN HALF MARATHON 2024",
    description:
      "Chiều 24.8, cùng hàng nghìn “chân chạy” tại Cảng Quốc tế Long An, 16 VĐV Biti's đã tham...",
    date: "10/09/2024",
  },
  {
    img: "/images/hl-62_0bcb9e88f9854b0ca5a46ec144a4e9db_large.webp",
    link: "/blogs/news/biti-s-to-chuc-le-trao-hoc-bong-nang-niu-tai-nang-viet-lan-thu-18",
    title:
      "BITI’S TỔ CHỨC LỄ TRAO HỌC BỔNG “NÂNG NIU TÀI NĂNG VIỆT” LẦN THỨ 18 VỚI TỔNG TRỊ GIÁ 1.5 TỶ ĐỒNG",
    description:
      "Vào lúc 08h00 ngày 09.08.2024, tại Nhà máy Biti’s Biên Hòa - KCN Amata, Biti’s đã tổ chức...",
    date: "26/08/2024",
  },
  {
    img: "/images/thu_pin_-_trade-06__1___1__0bce8a54dea2426c86df0133b85a0193_large.webp",
    link: "/blogs/news/biti-s-cac-diem-thu-hoi-pin-cu-tren-toan-quoc",
    title: "BITI'S - CÁC ĐIỂM THU HỒI PIN CŨ TRÊN TOÀN QUỐC",
    description:
      'Sau thành công của dự án " THU PIN CŨ, PHỦ XANH RỪNG", Biti\'s quyết định tiếp tục...',
    date: "19/08/2024",
  },
  {
    img: "/images/1920x750px_copy_9f2c5b9be3c44c939d50526c90194ee8_large.webp",
    link: "/blogs/news/bitis-tang-voucher-giam-50k-ky-niem-50-nam-giai-phong-mien-nam",
    title:
      "BITI'S TẶNG VOUCHER GIẢM 50K NHÂN DỊP KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM",
    description:
      "BITI'S TẶNG VOUCHER GIẢM 50K NHÂN DỊP KỶ NIỆM 50 NĂM GIẢI PHÓNG MIỀN NAM&nbsp;Tưng bừng Tháng Đại...",
    date: "24/04/2025",
  },
  {
    img: "/images/img_6396_94a24fdba52d411b80e08b29dd657903_large.webp",
    link: "/blogs/news/sensing-journey-hanh-trinh-cam-nhan-dong-chay-chuyen-hoa-cua-nha-may",
    title:
      "SENSING JOURNEY - HÀNH TRÌNH CẢM NHẬN DÒNG CHẢY CHUYỂN HÓA CỦA NHÀ MÁY SÀI GÒN",
    description: "[...]",
    date: "23/04/2025",
  },
  {
    img: "/images/banner_chinh_thuc_c31b88138b7842f8a60847ccdab0de71_large.webp",
    link: "/blogs/news/hoi-thao-dau-tien-tai-viet-nam-co-su-tham-gia-cua-cac-dien-gia-den-tu",
    title:
      "Hội thảo đầu tiên tại Việt Nam có sự tham gia của các diễn giả đến từ Lean Global Network",
    description:
      "&nbsp;Hội thảo đầu tiên tại Việt Nam có sự tham gia của các diễn giả đến từ Lean...",
    date: "03/04/2025",
  },
  {
    img: "/images/h1__1__0b2986875f4142c8a117473cef475256_large.webp",
    link: "/blogs/news/biti-s-duoc-vinh-danh-top-100-doanh-nghiep-ben-vung-viet-nam-csi-2024",
    title:
      "BITI'S ĐƯỢC VINH DANH TOP 100 DOANH NGHIỆP BỀN VỮNG VIỆT NAM CSI 2024",
    description: "[...]",
    date: "06/12/2024",
  },
  {
    img: "/images/h1_d9bbac82a93241409392bb4b8ded1c6d_large.webp",
    link: "/blogs/news/biti-s-dat-top-100-noi-lam-viec-tot-nhat-viet-nam-5-nam-lien-tiep",
    title:
      "BITI'S ĐẠT “TOP 100 NƠI LÀM VIỆC TỐT NHẤT VIỆT NAM” 5 NĂM LIÊN TIẾP",
    description:
      "Tối ngày 19/11/2024, Biti’s tiếp tục được vinh danh trong Top 100 Nơi Làm Việc Tốt Nhất Việt...",
    date: "05/12/2024",
  },
];

const breakpoints = {
  576: { itemsToShow: 1 },
  768: { itemsToShow: 3 },
  1200: { itemsToShow: 4 },
};
</script>

<style scoped>
.blog-slider-wrapper {
  width: 100%;
}

.carousel__slide {
  width: 313.75px;
  margin-right: 5px;
  background: #f8f9fb;
  border-radius: 4px;
}

.blog-home .item-blog {
  position: relative;
  overflow: hidden;
  padding: 5px;
}

.box-img-blog img {
  width: auto !important;
  height: auto;
  text-align: center;
  margin: auto;
  overflow: hidden;
}
</style>
