<template>
  <div>
    <div class='date-container'></div>
    <div class='item-container'></div>
  </div>
</template>

<script>
export default {
  props: {},
  data: function() {
    return {
      itemList: [],
      current: null
    };
  },
  computed: {
    active() {
      return this.current || (this.itemList[0] && this.itemList[0].name);
    }
  },
  methods: {
    setCurrent(item) {
      this.current = item.name;
      this.$router.push(item.path);
    }
  }
};
</script>

<style lang='scss' type='text/css' scoped>
.bb-tab-nav {
  height: 48px;
  width: 100%;
  padding: 4px;
  box-shadow: 0 -2px 4px #cccccc;
  .bb-tab-item {
    box-sizing: border-box;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    color: #292b2e;
    text-align: center;
    .bb-tab-icon {
      display: block;
      margin: auto;
      font-size: 20px;
      height: 24px;
      line-height: 24px;
    }
    .bb-tab-label {
      line-height: 16px;
      font-size: 12px;
    }
    &.active {
      color: #01d7d7;
    }
  }
}
</style>
