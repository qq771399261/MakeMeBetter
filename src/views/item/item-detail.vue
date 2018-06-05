<template>
  <div class='bb-item-detail-page'>
    <div class='topbar'>
      <i class='iconfont bb-topbar-back-icon icon-tianjia' @click='back'></i>
      <div v-if='!titleVisible' class='bb-topbar-title'>{{ title }}</div>
    </div>
    <div class='bg-top'>
    </div>
    <div class='bg-bottom'>
    </div>
    <div class='bb-main-container'>
      <div class='bb-item-detail-container'>
        <div ref='title' class='bb-title-container'>
          <div class='bb-item-icon-container'>
            <i :class='["bb-item-icon","bb-item-icon-"+type]'></i>
          </div>
          <div class='bb-item-title'>{{ title }}</div>
          <div class='bb-item-typename'>{{ typename }}</div>
        </div>
        <div class='bb-complete-container'>
          <div class='bb-container-title'>进度</div>
          <div class='bb-complete-day'>
            <div class='bb-form-item'>
              <bb-col :span='12'>
                <span>坚持天数：</span>
                <span>{{ current }}</span>
              </bb-col>
              <bb-col :span='12'>
                <span>计划天数：</span>
                <span>{{ total }}</span>
              </bb-col>
            </div>
            <div class='bb-form-item'>
              <bb-col :span='12'>
                <span>完成率：</span>
                <span>{{ (current/total*100).toFixed(1)+'%' }}</span>
              </bb-col>
              <bb-col :span='12'>
                <span>推迟天数：</span>
                <span>{{ delay }}</span>
              </bb-col>
            </div>
            <div class='bb-form-item'>
              <bb-col :span='12'>
                <span>时间安排：</span>
                <span>{{time[0]+'~'+time[1]}}</span>
              </bb-col>
              <bb-col :span='12'>
                <span>完成情况：</span>
                <span>{{ completeName }}</span>
              </bb-col>
            </div>
          </div>
        </div>
        <div class='bb-content-container'>
          <div class='bb-container-title'>内容</div>
          <div class='bb-content'>{{ content }}</div>
        </div>
      </div>
      <div class='bb-button-container'>
        <bb-col v-if='!complete' :span='12' class='bb-detail-button'>
          <button @click='done'>
            <div class='bb-item-button-label'>完成</div>
          </button>
        </bb-col>
        <bb-col v-if='complete' :span='24' class='bb-detail-button'>
          <button>
            <div class='bb-item-button-label' @click='note'>记录</div>
          </button>
        </bb-col>
        <bb-col v-if='!complete' :span='12' class='bb-detail-button'>
          <button class='warning'>
            <div class='bb-item-button-label'>推迟</div>
          </button>
        </bb-col>
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
    return {
      id: 1102,
      title: '李正浩de增肌计划',
      type: 'fitness',
      typename: '健身计划',
      current: 3,
      total: 27,
      delay: 1,
      complete: false,
      time: ['10:30', '11:30'],
      content:
        '杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6 杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6哑铃飞鸟动作对胸大肌的厚度和线条有着非常显著的锻炼效果，是广大健美爱好者锻炼胸肌最喜欢的动作之一。平板和上斜哑铃飞鸟，是发展胸肌外侧最好的练习。哑铃飞鸟动作对胸大肌的厚度和线条有着非常显著的锻炼效果，是广大健美爱好者锻炼胸肌最喜欢的动作之一。平板和上斜哑铃飞鸟，是发展胸肌外侧最好的练习。哑铃飞鸟动作对胸大肌的厚度和线条有着非常显著的锻炼效果，是广大健美爱好者锻炼胸肌最喜欢的动作之一。平板和上斜哑铃飞鸟，是发展胸肌外侧最好的练习。杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6 杠铃卧推*10*6 哑铃飞鸟*10*6 上斜杠铃卧推*10*6哑铃飞鸟动作对胸大肌的厚度和线条有着非常显著的锻炼效果，是广大健美爱好者锻炼胸肌最喜欢的动作之一。平板和上斜哑铃飞鸟，是发展胸肌外侧最好的练习。哑铃飞鸟动作对胸大肌的厚度和线条有着非常显著的锻炼效果，是广大健美爱好者锻炼胸肌最喜欢的动作之一。平板和上斜哑铃飞鸟，是发展胸肌外侧最好的练习。哑铃飞鸟动作对胸大肌的厚度和线条有着非常显著的锻炼效果，是广大健美爱好者锻炼胸肌最喜欢的动作之一。平板和上斜哑铃飞鸟，是发展胸肌外侧最好的练习。',
      tag: 'fitness',
      titleVisible: true
    };
  },
  computed: {
    completeName() {
      return this.complete ? '完成' : '未完成';
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    done() {
      this.complete = true;
    },
    note() {
      let path = '/item/note/' + this.id;
      this.$router.push(path);
    }
  },
  mounted() {
    let io = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio <= 0) {
        this.titleVisible = false;
      } else {
        this.titleVisible = true;
      }
    });
    io.observe(this.$refs['title']);
  }
};
</script>

<style lang='scss' type='text/css' scoped>
.bb-item-detail-page {
  height: 100%;
  width: 375px;
}
.topbar {
  height: 80px;
  line-height: 40px;
  padding-top: 40px;
  background: linear-gradient(to right, #57e3b7, #23cac4);
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
.bg-top {
  position: absolute;
  top: 80px;
  left: 0px;
  height: calc(100% - 80px);
  width: 375px;
  background: #f0f0f0;
  z-index: -1;
}

// .bg-bottom {
//   position: absolute;
//   top: 267px;
//   left: 0px;
//   height: 400px;
//   width: 375px;
//   background: linear-gradient(to right, #57e3b7, #23cac4);
//   z-index: -1;
// }

.bb-main-container {
  height: calc(100% - 147px);
  width: 360px;
  background: #ffffff;
  border-radius: 4px;
  margin: 12px auto 0 auto;
  .bb-item-detail-container {
    height: calc(100% - 60px);
    overflow-y: auto;
    .bb-title-container {
      height: 80px;
      width: 100%;
      padding: 20px 20px 0 20px;
      text-align: center;
      .bb-item-icon-container {
        .bb-item-icon {
          display: block;
          height: 48px;
          width: 48px;
          margin: auto;
        }
      }
      .bb-item-title {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #4d4d4d;
      }
      .bb-item-typename {
        text-align: center;
        font-size: 12px;
        color: #c4c4c4;
      }
    }
    .bb-complete-container {
      height: 100px;
      padding-top: 12px;
      .bb-complete-day {
        width: 100%;
        font-size: 14px;
        color: #9d9d9d;
      }
    }
    .bb-content-container {
      padding-top: 12px;
      .bb-content {
        height: 228px;
        padding: 8px 20px;
        font-size: 14px;
        color: #9d9d9d;
      }
    }
  }
  .bb-button-container {
    height: 60px;
    line-height: 60px;
    .bb-detail-button {
      text-align: center;
      button {
        height: 24px;
        width: 120px;
        border: 0px;
        border-radius: 12px;
        background: linear-gradient(to right, #57e3b7, #23cac4);
        color: #ffffff;
        .bb-item-button-label {
          width: 40px;
          margin: auto;
          text-align-last: justify;
        }
      }
      .warning {
        background: linear-gradient(to right, #fdd99a, #ff8692);
      }
    }
  }
}

.bb-form-item {
  padding: 2px 0 2px 20px;
}
.bb-container-title {
  height: 20px;
  font-size: 14px;
  font-weight: bold;
  &::before {
    float: left;
    content: '';
    height: 12px;
    width: 4px;
    background: #01d7d7;
    margin: 4px 8px;
  }
}

.bb-item-icon-fitness {
  background: url(../../assets/images/types/fitness.png);
}
.bb-item-icon-study {
  background: url(../../assets/images/types/study.png);
}
.bb-item-icon-travel {
  background: url(../../assets/images/types/travel.png);
}
.bb-item-icon-rise {
  background: url(../../assets/images/types/rise.png);
}
.bb-item-icon-sleep {
  background: url(../../assets/images/types/sleep.png);
}
</style>
