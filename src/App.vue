<template>
  <m-header></m-header>
  <Tab></Tab>
  <router-view></router-view>
</template>
<script>
import Header from '@/components/header/header'
import Tab from '@/components/tabs/tab'
export default {
  components: {
    MHeader: Header,
    Tab
  }
}
</script>
