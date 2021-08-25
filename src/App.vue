<template>
  <m-header></m-header>
  <Tab></Tab>
  <router-view :style="viewStyle"></router-view>
  <player></player>
</template>
<script>
import Header from '@/components/header/header'
import Tab from '@/components/tabs/tab'
import Player from '@/components/player/player'
import { mapState } from 'vuex'
export default {
  components: {
    Player,
    MHeader: Header,
    Tab
  },
  computed: {
    viewStyle () {
      const bottom = this.playlist.length ? '60px' : 0
      return {
        bottom
      }
    },
    ...mapState([
      'playlist'
    ])
  }
}
</script>
