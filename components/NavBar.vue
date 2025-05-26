<template>
  <nav class="navbar-mainmenu">
    <ul class="menuList-primary">
      <li class="has-submenu">
        <a href="/pages/corporate" target="_blank" data-vn="VỀ BITI'S">
          <span>VỀ BITI'S</span>
        </a>
      </li>
      <li class="has-submenu active">
        <a href="/" data-vn="NHÃN HIỆU">
          <span>NHÃN HIỆU</span>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
      </li>
      <li class="has-submenu">
        <a href="/collections/nam" data-vn="NAM">
          <span>NAM</span>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
      </li>
      <li class="has-submenu">
        <a href="/collections/nu" data-vn="NỮ">
          <span>NỮ</span>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
      </li>
      <li class="has-submenu">
        <a href="/collections/teen-nam" data-vn="TEEN NAM">
          <span>TEEN NAM</span>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
      </li>
      <li class="has-submenu">
        <a href="/collections/teen-nu" data-vn="TEEN NỮ">
          <span>TEEN NỮ</span>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
      </li>
      <li class="has-submenu">
        <a href="/collections/be-trai" data-vn="BÉ TRAI">
          <span>BÉ TRAI</span>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
      </li>
      <li class="has-submenu">
        <a href="/collections/be-gai" data-vn="BÉ GÁI">
          <span>BÉ GÁI</span>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
      </li>
      <li class="has-submenu">
        <a href="/collections/phu-kien" data-vn="PHỤ KIỆN">
          <span>PHỤ KIỆN</span>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
      </li>
      <li class="has-submenu">
        <a href="/blogs/all" data-vn="CHIA  SẺ">
          <span>CHIA SẺ</span>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

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
ul.menuList-primary > li:hover:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 0%;
    transform-origin: 0%;
}
ul.menuList-primary > li:before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 0;
    z-index: -1;
    background-color: var(--shop-color-text);
    height: 2px;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 100%;
    transform-origin: 100%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}
</style>
