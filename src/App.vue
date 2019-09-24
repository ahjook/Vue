<template>
  <div id="app">
    <Header/>
    <AppBody/>
  </div>
</template>

<script>
import Header from 'components/frame/Header.vue'
import AppBody from 'components/frame/Body.vue'
export default {
  name: 'app',
  components: {
    Header,
    AppBody
  }
}
</script>