<template>
  <div>
    <div class='date-container'></div>
    <div class='item-container'>
      <itemlist :data='itemlist'></itemlist>
    </div>
  </div>
</template>

<script>
import Itemlist from '@/components/itemlist/itemlist.vue';
export default {
  props: {},
  components: {
    Itemlist
  },
  data: function() {
    return {
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
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang='scss' type='text/css' scoped>
.date-container {
  height: 100px;
}
.item-container {
  height: 520px;
  box-shadow: 0 -2px 4px #cccccc;
  background: #fefefe;
}
</style>
