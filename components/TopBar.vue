<template>
  <div class="topbar">
    <div class="container-fluid">
      <div class="topbar-content">
        <div class="left-topbar">
          <div class="hotline-left">
            <span>Hotline: </span>
            <span><a href="tel:0966158666">0966158666</a></span>
            <span> (8h – 21h30)</span>
          </div>
          <div class="aff-left">
            <a href="/pages/lien-he-hop-tac" data-vn="Liên hệ hợp tác"
              ><span>Liên hệ hợp tác</span></a
            >
          </div>
        </div>
        <div class="right-topbar">
          <ul class="right-topbar-items">
            <li>
              <a href="/pages/he-thong-cua-hang" data-vn="Tìm cửa hàng"
                ><span>Tìm cửa hàng</span></a
              >
            </li>
            <li>
              <a
                href="/pages/tra-cuu-tinh-trang-don-hang"
                data-vn="Kiểm tra đơn hàng"
                ><span>Kiểm tra đơn hàng</span></a
              >
            </li>

            <li>
              <div class="module_translate">
                <div class="module_translate_mask">
                  <span>VN</span>
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
              </div>
            </li>

            <li class="bitis-b2b">
              <a
                href="https://b2b.bitis.com.vn/?utm_source=trade&amp;utm_medium=b2b_header"
                aria-label="B2B action"
                target="_blank"
              >
                <NuxtImg
                  src="/images/b2b_.webp"
                  alt="B2B action"
                  width="120"
                  height="28"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.topbar {
  text-align: center;
  font-weight: 500;
  font-size: 13px;
  padding: 8px 0;
  position: relative;
  display: block;
  background: #212026;
  color: #ffffff;
}

.topbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-topbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.aff-left {
  padding: 0 0 0 15px;
  margin: 0 0 0 15px;
  border-left: 1px solid #fff;
}
.right-topbar {
  display: flex;
  align-items: center;
}
.right-topbar-items {
  display: flex;
  align-items: center;
}
.topbar a {
  color: #ffffff;
}

.topbar .topbar-content .right-topbar ul li ~ li {
    padding: 0 0 0 10px;
    margin: 0 0 0 10px;
    border-left: 1px solid #FFF;
}
.topbar .topbar-content .right-topbar ul li.bitis-b2b a {
    position: relative;
    display: block;
    width: 8.8vw;
}
.module_translate_mask {
    padding-left: 30px;
    background: url(/images/vietnam.webp) no-repeat;
    background-size: contain;
    background-position: left center;
    cursor: pointer;
}
.fa-chevron-down:before {
    content: "" !important;
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 5px;
    height: 5px;
    border-bottom: 1px solid;
    border-right: 1px solid;
    transform: rotate(45deg);
    left: 1px;
    top: 0px;
    border-color: var(--shop-color-text);
}
.fa {
    display: inline-block;
    font: normal normal normal 14px / 1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.fa-chevron-down {
    position: relative;
    width: 7px;
    height: 7px;
}
</style>
