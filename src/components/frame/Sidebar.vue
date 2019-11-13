<template>
  <sidebar-menu :menu="menu" />
</template>
 
<script>
import AUTH from 'services/auth'
export default {
  data() {
    return {
      auth:AUTH,
      menu: [
        {
          header: true,
          title: "Main Menu",
          hiddenOnCollapse: true
        },
        {
          href: "/Dashboard",
          title: "Dashboard",
          icon: "fa fa-user",
          child: [
            {
              href: '/Timeline',
              title: 'Timeline'
            }
          ]
        },
        {
          href: "/Account",
          title: "Account",
          icon: "fa fa-user",
          child: [
            {
              href: '/Profile',
              title: 'Edit Profile'
            }
          ]
        },
        {
        
          href: "/Subjects",
          title: "Subjects",
         icon: "fa fa-user"
        },
        {
          href: "/Login",
          title: "Logout",
          icon: "fa fa-user"
        }
      ]
    }
  }
};
</script> 
<style scoped>
  .v-sidebar-menu {
    height:91%;
    margin-top:63px;
  }
</style>

