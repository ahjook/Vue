<template>
  <div id="app">
  <Header></Header>
  <AppBody></AppBody>
 
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import AUTH from 'services/auth'
import Header from 'components/frame/Header.vue'
import AppBody from 'components/frame/Body.vue'
// import Sidebar from 'components/frame/Sidebar.vue'

export default {
  name: 'app',
  // auth: AUTH,
  components: {
    Header,
    AppBody,
    // Sidebar
  }
}
</script>
<style>
#app{
  height:1000px;
}
</style>