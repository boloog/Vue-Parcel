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
body{
  background: #FF5E52;
}
</style>


