<template>
  <div class='bb-searchbar'>
    <div class='search-info'>
      <bb-col :span='6' class='search-title'>今日</bb-col>
      <bb-col :span='14' class='search-outline'>
        <i class='search-icon'></i>
        <input class='search-input' @keyup.enter="search" />
      </bb-col>
      <bb-col :span='4' class='bb-date-info'>
        <i class='iconfont bb-item-add-icon icon-tianjia'></i>
      </bb-col>
    </div>
  </div>
</template>

<script>
import BbCol from '@/components/col/col.vue';
import { formatDate } from '@/utils/date.js';
export default {
  name: 'searchbar',
  components: {
    BbCol
  },
  props: {
    data: Object
  },
  data: function() {
    return {};
  },
  computed: {
    datetime() {
      return formatDate(this.data.date, 'yyyy年MM月dd日');
    }
  },
  methods: {}
};
</script>

<style lang='scss' type='text/css' scoped>
.bb-searchbar {
  .search-outline {
    width: 210px;
    height: 28px;
    line-height: 28px;
    margin: 16px auto;
    padding: 2px 6px;
    background: #ffffff;
    border-radius: 100px;
    .search-icon {
      float: left;
      width: 24px;
      height: 24px;
      background: url('./images/search_small.png');
      margin-right: 4px;
    }
    .search-input {
      float: left;
      height: 24px;
      line-height: 24px;
      width: 168px;
      margin-right: 2px;
      border: 0px;
      outline: none;
      background: rgba(255, 255, 255, 0);
      vertical-align: super;
      font-size: 14px;
      color: #d4d9f5;
    }
  }
  .search-info {
    height: 48px;
    margin-top: 8px;
    .search-title {
      font-size: 26px;
      color: #ffffff;
      text-align: left;
      padding: 0 20px;
    }
    // .bb-weather-icon {
    //   display: block;
    //   height: 48px;
    //   width: 48px;
    //   margin: auto;
    // }
    // .bb-date-info {
    //   height: 24px;
    //   font-size: 14px;
    //   color: #ffffff;
    //   // color: #4d4d4d;
    //   text-align: center;
    // }
  }
  .bb-item-add-icon {
    float: right;
    font-size: 20px;
    color: #ffffff;
    padding: 0 12px;
  }
}

// .bb-weather-icon-sunny {
//   background: url(./images/sunny.png);
// }
// .bb-weather-icon-rainy {
//   background: url(./images/rainy.png);
// }
// .bb-weather-icon-windy {
//   background: url(./images/windy.png);
// }
// .bb-weather-icon-snowy {
//   background: url(./images/snowy.png);
// }
</style>
