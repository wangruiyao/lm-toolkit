<template>
  <div id="tk-header">
    <tk-header-back></tk-header-back>
    <div class="tk-header-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import tkHeaderBack from './components/TkHeaderBack'
  export default {
    name: "TkHeader",
    components: {tkHeaderBack},
  }
</script>

<style lang="scss" scoped>
  #tk-header {
    position: fixed;
    background: $header-background;
    height: $header-height;
    width: 100%;
    border-bottom: solid $line-light 1px;
    padding: 0 5px;
    @include flex-row(space-between);
    .tk-header-container {
      padding: 8px 2px;
      width: 345px;
      height: 100%;
      @include flex-row(center);
    }
  }
</style>