<template>
  <div id="tk-header-back">
    <i class="iconfont">&#xeb99;</i>
  </div>
</template>

<script>
  export default {
    name: "TkHeaderBack"
  }
</script>

<style lang="scss" scoped>
  #tk-header-back {
    @include flex-row(space-between);
    height: 100%;
    width: 30px;
    i {
      font-size: 24px;
    }
  }
</style>