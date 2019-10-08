<template>
  <div>
    <div v-if="auth.user !== null" >
      <sideBar></sideBar>
        <transition>
          <router-view></router-view>
        </transition>
      </div>
      <div v-else>
        <transition>
          <router-view></router-view>
        </transition>
      </div>
  </div>
</template>
<script>
import AUTH from 'services/auth'
import sideBar from 'components/frame/Sidebar.vue'
export default {
  components:{
    sideBar
  },
  data(){
    return{
      auth:AUTH
    }
  }
};
</script>
<style>
</style>