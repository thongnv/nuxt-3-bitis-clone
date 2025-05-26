<template>
  <header>
    <div class="header-inner">
      <Logo class="logo" />
      <NavBar class="header-wrap-menu d-none d-md-none d-lg-block" />
      <div class="header-wrap-action">
        <div class="header-action">
          <div
            class="header-action-item header-wrap-search header-action_search d-none d-xxl-block"
          >
            <SearchBar class="header-search sitenav-content sitenav-search" />
          </div>
          <ActionBar />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";
import NavBar from "./NavBar.vue";
import SearchBar from "./SearchBar.vue";
import ActionBar from "./ActionBar.vue";
</script>

<style scoped>
header {
  padding: 0 40px;
  border-bottom: 1px solid var(--shop-color-border, #eee);
  background: var(--shop-color-bg, #fff);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  width: 95px;
  height: 60px;
}
.header-action {
  position: relative;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
}

.header-action-item:first-child {
    margin-left: 0;
    margin-right: 45px;
}
.header-action-item {
    margin-left: 15px;
    align-self: center;
}
</style>
