<template>
  <div class='bb-searchbar'>
    <div class='search-outline'>
      <i class='search-icon'></i>
      <input class='search-input' @keyup.enter="search" />
    </div>
    <div class='search-info'>
      <bb-col :span='8' class='search-title'>今日</bb-col>
      <bb-col :span='8'>
        <i :class='["bb-weather-icon","bb-weather-icon-"+data.weather]'></i>
      </bb-col>
      <bb-col :span='8' class='bb-date-info'>{{datetime}}
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
    display: block;
    width: 180px;
    height: 28px;
    line-height: 28px;
    margin: 0 auto;
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
      width: 138px;
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
    .bb-weather-icon {
      display: block;
      height: 48px;
      width: 48px;
      margin: auto;
    }
    .bb-date-info {
      height: 24px;
      font-size: 14px;
      color: #ffffff;
      // color: #4d4d4d;
      text-align: center;
    }
  }
}

.bb-weather-icon-sunny {
  background: url(./images/sunny.png);
}
.bb-weather-icon-rainy {
  background: url(./images/rainy.png);
}
.bb-weather-icon-windy {
  background: url(./images/windy.png);
}
.bb-weather-icon-snowy {
  background: url(./images/snowy.png);
}
</style>
