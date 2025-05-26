<template>
  <div class="search-box wpo-wrapper-search">
    <form
      action="/search"
      class="searchform searchform-categoris ultimate-search"
    >
      <div class="wpo-search-inner">
        <input type="hidden" name="type" value="product" />
        <input
          id="inputSearchAuto"
          class="input-search"
          name="q"
          maxlength="40"
          autocomplete="off"
          type="text"
          size="20"
          data-vn="Bạn cần tìm gì..."
          placeholder="Bạn cần tìm gì..."
        />
      </div>
      <button
        type="submit"
        class="btn-search btn"
        id="search-header-btn"
        aria-label="button search"
      >
        <svg
          version="1.1"
          class="svg search"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 24 27"
          style="enable-background: new 0 0 24 27"
          xml:space="preserve"
        >
          <path
            d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z"
          ></path>
          <rect
            x="17"
            y="17"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)"
            width="4"
            height="8"
          ></rect>
        </svg>
      </button>
    </form>
    <div
      id="ajaxSearchResults"
      class="smart-search-wrapper ajaxSearchResults"
      style="display: none"
    >
      <div class="resultsContent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopBar from "./TopBar.vue";
import Logo from "./Logo.vue";
import CartIcon from "./CartIcon.vue";
</script>

<style scoped>
.navbar-mainmenu {
  width: 100%;
  letter-spacing: 0.75px;
  font-weight: 500;
  font-size: 14px;
}
.menuList-primary {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  background-color: var(--shop-color-bg, #fff);
}
ul.menuList-primary > li > a {
  display: block;
  padding-top: 25px;
  padding-bottom: 25px;
}
ul.menuList-primary > li {
  display: inline-block;
  margin: 0 10px;
  position: relative;
}
.sitenav-search form.searchform {
  position: relative;
  padding: 0;
}
.sitenav-search form.searchform input.input-search {
  line-height: 28px;
  padding: 3px 8px 3px 40px;
  color: #000;
  border-radius: 4px;
  width: 100%;
  background: #efefef;
  border: none;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  height: 35px;
}
.sitenav-search form.searchform .btn-search {
  width: 40px;
  height: 35px;
  position: absolute;
  padding: 0;
  top: 0px;
  left: 0px;
  background: transparent;
  transition: opacity 150ms linear;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sitenav-search form.searchform .btn-search svg {
  width: 20px;
  height: 20px;
}
.sitenav-search form.searchform input.input-search:focus {
    background: #f2f5fa;
    outline: none;
    border-color: var(--shop-color-main);
}
</style>
