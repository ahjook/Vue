<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">StudenteDrocer</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
        <b-nav-item @click="redirect('login')">Login</b-nav-item>
        <b-nav-item @click="redirect('Register')">Register</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar><br><br>
    <tutorialForm></tutorialForm>
</div>
</template>

<style scoped lang="scss">
@import "~../../assets/colors.scss";
 #title {
  color: $warning !important;
}
</style>
<script>
import tutorialForm from '../form/Form.vue'
export default {
  name: 'Header',
  components: {
    tutorialForm
  },
  data() {
      return {
      }
    }
}
</script>
