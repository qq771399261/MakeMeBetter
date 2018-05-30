<template>
  <div class='bb-item-list'>
    <div v-for='item in itemlist' :key='item.id'>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    // itemlist: Array
  },
  data: function() {
    return {
      itemlist: [
        {
          id: 1102,
          title: '健身计划',
          day: 3,
          total: 27,
          complete: false,
          time: ['10:30', '11:30'],
          content: '杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6',
          tag: 'fitness'
        },
        {}
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang='scss' type='text/css' scoped>
</style>
