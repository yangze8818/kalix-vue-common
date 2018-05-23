<!--
描述：我的首页-通讯录-搜索组件
开发人：yangz
开发日期：2018年03月06日
-->
<template lang="pug">
  kalix-search(:searchFields="searchFields" title="通讯录查询" bizKey="address")
</template>

<script type="text/ecmascript-6">
  // import BaseSearch from '@/components/custom/baseSearch.vue'
  // import Cache from 'common/cache'

  export default {
    name: 'CommonAddressSearch',
    components: {
      // KalixSearch: BaseSearch
    },
    data() {
      return {
        searchFields: [
          {label: '姓名', prop: 'name'},
          {type: 'inputHidden', prop: 'userId', defaultVal: this.$KalixCatch.get('id')}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
