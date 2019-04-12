<template>
  <div id="tk-header-filter">
    <i class="iconfont">&#xe695;</i>济南
  </div>
</template>

<script>
  export default {
    name: "TkHeaderFilter"
  }
</script>

<style lang="scss" scoped>
  #tk-header-filter {
    @include flex-row(center);
    height: $header-height;
    width: 50px;
  }
</style>