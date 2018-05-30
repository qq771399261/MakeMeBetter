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
  },
  props: {},
  data: function() {
    return {
      itemList: []
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang='scss' type='text/css' scoped>
.warpper {
  height: 100%;
}

.bb-main {
  width: 100%;
  height: calc(100% - 48px);
}

.bb-footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 48px;
  width: 100%;
}
</style>
