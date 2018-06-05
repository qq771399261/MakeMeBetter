<template>
  <div class='bb-info-panel'>
    <bb-col :span='8' class='bb-info-item'>
      <div>已完成任务</div>
      <span>
        {{data.completePlan}}
      </span>
    </bb-col>
    <bb-col :span='8' class='bb-info-item'>
      <div>已坚持天数</div>
      <span>
        {{data.insistDay}}
      </span>
    </bb-col>
    <bb-col :span='8' class='bb-info-item'>
      <div>共享任务</div>
      <span>
        {{data.shared}}
      </span>
    </bb-col>
  </div>
</template>

<script>
import BbCol from '@/components/col/col.vue';
import { formatDate } from '@/utils/date.js';
export default {
  name: 'infopanel',
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
.bb-info-panel {
  height: 100%;
  padding: 16px 0;
  overflow: auto;
  .bb-info-item {
    text-align: center;
    span {
      display: block;
      margin-top: 4px;
      font-size: 24px;
      color: #4d4d4d;
    }
  }

  .bb-complete-plan {
    height: 50px;
    font-size: 16px;
    span {
      display: inline-block;
      font-family: 'Candy_Number-webfont';
      font-size: 30px;
      color: #4d4d4d;
    }
  }
}
</style>
