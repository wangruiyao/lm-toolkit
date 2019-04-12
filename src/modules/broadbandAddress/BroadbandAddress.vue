<!-- 宽带地址查询 -->

<template>
  <div id="broadband-address">
    <!-- 头部 -->
    <tk-header>
      <div class="header-search">
        <tk-search></tk-search>
      </div>
      <tk-header-filter></tk-header-filter>
    </tk-header>

    <!-- 列表 -->
    <div class="broadband-container">

    </div>

  </div>
</template>

<script>
import 'core/use'
import 'assets'
import TkHeader from "components/tkHeader/TkHeader";
import TkSearch from "components/common/TkSearch";
import TkHeaderFilter from "components/tkHeader/components/TkHeaderFilter";
export default {
  name: 'BroadbandAddress',
  components: {TkHeaderFilter, TkSearch, TkHeader}
}
</script>

<style lang="scss" scoped>
  #broadband-address {
    .header-search {
      width: 295px;
    }
    .broadband-container {
      @include container();
    }

  }
</style>