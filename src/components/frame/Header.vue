<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" id="title">StudenteDrocer</b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-form-input size="sm" class="my-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-2" type="submit">Search</b-button>
        <b-nav-item v-on:click="redirect('/register')" v-if="auth.user === null">Register</b-nav-item>
        <b-nav-item v-on:click="redirect('/login')"  v-if="auth.user === null" >Login</b-nav-item>
      </b-navbar-nav>
  </b-collapse>

    </b-navbar>
    
</div>
</template>
<style scoped lang="scss">
@import "~assets/colors.scss";
      #title{
        color: $primary !important;
      }
      #login{
          color: $primary !important;
      }
      #register{
        color: $warning !important;
      }
</style>
<script>
  import AUTH from 'services/auth'
 import ROUTER from 'router'
 export default {
   data(){
     return{
       auth:AUTH
     }
   },
     methods : {
         redirect (route) {
             ROUTER.push(route)
         }
     }
 }
</script>