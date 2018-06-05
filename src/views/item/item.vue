<template>
  <div class='bb-item-page'>
    <div class='bg-top'></div>
    <div class='bg-bottom'></div>
    <div class='search-container'>
      <searchbar :data='info'></searchbar>
    </div>
    <div class='info-container'>
      <infopanel :data='info'></infopanel>
    </div>
    <div class='item-container'>
      <itemlist :data='itemlist'></itemlist>
    </div>
  </div>
</template>

<script>
import Searchbar from '@/components/searchbar/searchbar.vue';
import Itemlist from '@/components/itemlist/itemlist.vue';
import Infopanel from '@/components/infopanel/infopanel.vue';
export default {
  props: {},
  components: {
    Searchbar,
    Itemlist,
    Infopanel
  },
  data: function() {
    return {
      info: {
        weather: 'sunny',
        date: new Date(),
        completePlan: 4,
        insistDay: 213,
        shared: 12
      },
      itemlist: [
        {
          id: 1102,
          title: '健身计划',
          type: 'fitness',
          current: 3,
          total: 27,
          complete: false,
          time: ['10:30', '11:30'],
          content:
            '杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6 杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6',
          tag: 'fitness'
        },
        {
          id: 1103,
          title: '健身计划',
          type: 'sleep',
          current: 3,
          total: 27,
          complete: false,
          time: ['10:30', '11:30'],
          content:
            '杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6 杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6',
          tag: 'fitness'
        },
        {
          id: 1156,
          title: '健身计划',
          type: 'travel',
          current: 3,
          total: 27,
          complete: false,
          time: ['10:30', '11:30'],
          content:
            '杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6 杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6',
          tag: 'fitness'
        },
        {
          id: 1121,
          title: '健身计划',
          type: 'rise',
          current: 3,
          total: 27,
          complete: false,
          time: ['10:30', '11:30'],
          content:
            '杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6 杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6',
          tag: 'fitness'
        },
        {
          id: 1178,
          title: '健身计划',
          type: 'study',
          current: 3,
          total: 27,
          complete: false,
          time: ['10:30', '11:30'],
          content:
            '杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6 杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6',
          tag: 'fitness'
        },
        {
          id: 1104,
          title: '健身计划',
          type: 'fitness',
          current: 3,
          total: 27,
          complete: false,
          time: ['10:30', '11:30'],
          content:
            '杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6 杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6',
          tag: 'fitness'
        },
        {
          id: 1105,
          title: '健身计划',
          type: 'sleep',
          current: 3,
          total: 27,
          complete: false,
          time: ['10:30', '11:30'],
          content:
            '杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6 杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6',
          tag: 'fitness'
        },
        {
          id: 1179,
          title: '健身计划',
          type: 'travel',
          current: 3,
          total: 27,
          complete: false,
          time: ['10:30', '11:30'],
          content:
            '杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6 杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6',
          tag: 'fitness'
        },
        {
          id: 1129,
          title: '健身计划',
          type: 'rise',
          current: 3,
          total: 27,
          complete: false,
          time: ['10:30', '11:30'],
          content:
            '杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6 杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6',
          tag: 'fitness'
        },
        {
          id: 1100,
          title: '健身计划',
          type: 'study',
          current: 3,
          total: 27,
          complete: false,
          time: ['10:30', '11:30'],
          content:
            '杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6 杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6',
          tag: 'fitness'
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang='scss' type='text/css' scoped>
.bg-top {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 160px;
  width: 375px;
  background: linear-gradient(to right, #57e3b7, #23cac4);
  z-index: -1;
}

.bg-bottom {
  position: absolute;
  top: 160px;
  left: 0px;
  height: calc(100% - 160px);
  width: 375px;
  background: #f0f0f0;
  z-index: -1;
}

.search-container {
  height: 100px;
  width: 375px;
  line-height: 60px;
  text-align: center;
  padding-top: 12px;
}
.info-container {
  height: 80px;
  width: 350px;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  background: #ffffff;
}
.item-container {
  height: calc(100% - 182px);
}

.bb-item-page {
  height: 100%;
  width: 375px;
}
</style>
