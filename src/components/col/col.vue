<template>
  <div :class='["bb-col","bb-col-"+span]'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: Number,
      default: 24
    }
  },
  data: function() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang='scss' type='text/css' scoped>
@for $i from 0 through 24 {
  .bb-col-#{$i} {
    width: (1 / 24 * $i * 100) * 1%;
  }
}

.bb-col {
  float: left;
  box-sizing: border-box;
  height: 100%;
}
</style>
