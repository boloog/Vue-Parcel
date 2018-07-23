<template>
  <div class="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import { Footer } from './components';

export default {
  name: 'app',
  data () {
    return {
      list: [{
        name: 'page',
      }]
    }
  },
  components: {
    Footer
  }
}
</script>
<style lang="scss">
  .app{
    max-width: 750px;
    margin: 0 auto;
  }
</style>
