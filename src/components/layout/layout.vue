<template>
  <div class='warpper'>
    <div class='bb-main'>
      <router-view></router-view>
    </div>
    <div class='bb-footer'>
      <tabbar>
      </tabbar>
    </div>
  </div>
</template>

<script>
const Tabbar = () => import('@/components/tabbar/tabbar.vue');
export default {
  name: 'layout',
  components: {
    Tabbar
  }
};
</script>

<style lang='scss' type='text/css' scoped>
.warpper {
  height: 100%;
}

.bb-main {
  width: 375px;
  height: calc(100% - 50px);
}

.bb-footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 48px;
  width: 375px;
  z-index: 10px;
}
</style>
