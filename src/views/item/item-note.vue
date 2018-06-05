<template>
  <div class='bb-item-detail'>
    <div class='bg-top'></div>
    <div class='bg-bottom'></div>
    <div class='topbar'>
      <a @click='back'>取消</a>
      <a @click='back'>记录</a>
    </div>
    <div class='bb-note-container'>
      <textarea class='bb-note-textarea' placeholder='这一刻的想法...'></textarea>
      <div class='bb-note-image-area'>
        <div class='bb-image-add'>
          <i class='iconfont bb-image-add-icon icon-tianjia'></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BbCol from '@/components/col/col.vue';
export default {
  props: {},
  components: {
    BbCol
  },
  data: function() {
    return {};
  },
  computed: {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    publish() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='scss' type='text/css' scoped>
.bg-top {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 80px;
  width: 375px;
  background: linear-gradient(to right, #57e3b7, #23cac4);
  z-index: -1;
}

.bg-bottom {
  position: absolute;
  top: 80px;
  left: 0px;
  height: 540px;
  width: 375px;
  background: #f0f0f0;
  z-index: -1;
}
.topbar {
  height: 40px;
  line-height: 40px;
  padding-top: 40px;
  .bb-topbar-back-icon {
    float: left;
    font-size: 20px;
    color: #4d4d4d;
    padding: 0 12px;
  }
  .bb-topbar-title {
    width: 240px;
    font-size: 20px;
    font-weight: bold;
    color: #4d4d4d;
    margin: auto;
    text-align: center;
  }
}
.bb-note-container {
  width: 360px;
  margin: auto;
  padding: 20px 10px;
  .bb-note-textarea {
    height: 80px;
    width: 340px;
    border: 0;
    font-size: 14px;
  }
  .bb-note-image-area {
    .bb-image-add {
      height: 116px;
      width: 116px;
      padding: 4px;
      border: 1px dashed #cccccc;
      border-radius: 4px;
      text-align: center;
      line-height: 108px;
      background-color: #eeeeee;
      .bb-node-add-icon {
        font-size: 20px;
      }
    }
  }
}
</style>
