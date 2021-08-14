<template>
  <div class="singer-detail">
      <music-list
        :songs="songs"
        :pic="pic"
        :title="title"
        :loading="loading"
      ></music-list>
  </div>
</template>

<script>
import { getSingerDetail } from '@/service/singer'
import { processSongs } from '@/service/song'
import MusicList from '@/components/base/music-list/music-list'
import { SINGER_KEY } from '@/assets/js/constant'
import storage from 'good-storage'

export default {
  name: 'singer-detail',
  props: {
    singer: Object
  },
  data() {
    return {
      songs: [],
      loading: false
    }
  },
  computed: {
    computedSigner() {
      let ret = null
      const singer = this.singer
      if (singer) {
        ret = singer
      } else {
        const cachedSigner = storage.session.get(SINGER_KEY)
        if (cachedSigner && cachedSigner.mid === this.$route.params.id) {
          ret = cachedSigner
        }
      }
      return ret
    },
    pic() {
      const signer = this.computedSigner
      return signer && signer.pic
    },
    title() {
      const signer = this.computedSigner
      return signer && signer.name
    }
  },
  components: {
    MusicList
  },
  async created () {
    if (!this.computedSigner) {
      const path = this.$route.matched[0].path
      this.$router.push({
        path
      })
      return
    }
    this.loading = true
    const result = await getSingerDetail(this.computedSigner)
    this.songs = await processSongs(result.songs)
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
  .singer-detail {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: $color-background;
  }
</style>
