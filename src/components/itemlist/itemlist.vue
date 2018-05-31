<template>
  <div class='bb-item-list'>
    <div v-for='item in data' :key='item.id' :class='["bb-item","bb-item-"+item.type]'>
      <bb-col :span='4'>
        <div class='bb-item-icon-container'>
          <i :class='["bb-item-icon","bb-item-icon-"+item.type]'></i>
        </div>
        <div class='bb-item-process'>
          <span>{{item.current}}</span>
          <span>/{{item.total}}</span>
        </div>
      </bb-col>
      <bb-col :span='18'>
        <div class='bb-item-title'>{{item.title}}</div>
        <div class='bb-item-content'>{{item.content}}</div>
        <div class='bb-item-time'>{{item.time[0]+'~'+item.time[1]}}</div>
      </bb-col>
      <bb-col :span='2'>
        <p-check class="pretty p-image p-plain p-tada bb-item-check">
          <img slot="extra" class="image" src="./images/checked.png">
        </p-check>
      </bb-col>
    </div>
  </div>
</template>

<script>
import BbCol from '@/components/col/col.vue';
import PCheck from 'pretty-checkbox-vue/check';
export default {
  name: 'itemlist',
  components: {
    BbCol,
    PCheck
  },
  props: {
    data: Array
  },
  data: function() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang='scss' type='text/css' scoped>
.bb-item-list {
  padding: 8px 0;
  .bb-item {
    height: 80px;
    width: 360px;
    margin: 0 auto 4px auto;
    padding: 4px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    .bb-item-icon-container {
      height: 48px;
      border-right: 1px solid #eeeeee;
      .bb-item-icon {
        display: block;
        height: 48px;
        width: 48px;
        margin: auto;
        border-radius: 50%;
      }
    }
    .bb-item-process {
      height: 24px;
      border-right: 1px solid #eeeeee;
      font-family: 'Candy_Number-webfont';
      font-size: 20px;
      color: #ffffff;
      text-align: center;
    }
    .bb-item-time-info {
      height: 20px;
    }
    .bb-item-title {
      height: 24px;
      padding: 0 4px;
      font-size: 16px;
      font-weight: bold;
      border-right: 1px solid #eeeeee;
    }
    .bb-item-content {
      height: 32px;
      padding: 0 4px;
      color: #4d4d4d;
      font-size: 12px;
      border-right: 1px solid #eeeeee;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .bb-item-time {
      height: 16px;
      padding: 0 4px;
      font-size: 12px;
      color: #ffffff;
      border-right: 1px solid #eeeeee;
    }
    .bb-item-check {
      display: block;
      margin: 26px auto;
      font-size: 20px;
      width: 20px;
    }
  }
}

.bb-item-fitness {
  background: linear-gradient(to bottom, #fdd99a, #ff8692);
}
.bb-item-icon-fitness {
  background: url(./images/fitness.png);
}
.bb-item-study {
  background: linear-gradient(to bottom, #57e3b7, #23cac4);
}
.bb-item-icon-study {
  background: url(./images/study.png);
}
.bb-item-travel {
  background: linear-gradient(to bottom, #50e3f0, #66adfe);
}
.bb-item-icon-travel {
  background: url(./images/travel.png);
}
.bb-item-rise {
  background: linear-gradient(to bottom, #fedc67, #ff8866);
}
.bb-item-icon-rise {
  background: url(./images/rise.png);
}
.bb-item-sleep {
  background: linear-gradient(to bottom, #fdd99a, #ff8692);
}
.bb-item-icon-sleep {
  background: url(./images/sleep.png);
}
</style>
