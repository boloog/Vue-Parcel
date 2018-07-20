<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      list: [{
        name: 'page',
      }]
    }
  }
}
</script>
<style lang="scss">
  .app{
    max-width: 750px;
    margin: 0 auto;
  }
</style>
