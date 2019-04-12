<template>
  <div id="tk-search">
    <input type="text" placeholder="搜索"/>
  </div>
</template>

<script>
  export default {
    name: "TkSearch"
  }
</script>

<style lang="scss" scoped>
  #tk-search {
    input {
      border: none;
      width: 100%;
      height: 100%;
    }
    height: 100%;
    border: solid $line-deep 1px;
    overflow: hidden;
    border-radius: 50px;
    width: 100%;
    padding: 0 10px;
  }
</style>