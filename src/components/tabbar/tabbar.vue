<template>
  <div class='bb-tab-nav'>
    <div v-for="item in itemList" v-bind:key='item.name' v-bind:class='{
          "bb-tab-item":true,
          "active" :item.name === active
        }' v-bind:style='{
          "width" :(100/itemList.length)+"%"
        }' @click='(ev) => { setCurrent(item); }'>
      <i :class='["iconfont","bb-tab-icon",item.icon]' aria-hidden="true">
      </i>
      <div class='bb-tab-label'>{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data: function() {
    return {
      itemList: [
        {
          name: 'item',
          label: '事项',
          path: '/layout/item',
          icon: 'icon-xianxing_qingdan'
        },
        {
          name: 'plan',
          label: '计划',
          path: '/layout/plan',
          icon: 'icon-xianxing_xiangmu'
        },
        {
          name: 'infornmation',
          label: '我的',
          path: '/layout/infornmation',
          icon: 'icon-xianxing_wode'
        }
      ],
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
