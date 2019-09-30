<template>
  <sidebar-menu :menu="menu" />
</template>
 
<script>
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Menu",
          hiddenOnCollapse: true
        },
        {
          href: "/Account",
          title: "Account",
          icon: "assets/user.png",
        },
        {
          href: "/Subjects",
          title: "Subjects",
          icon: "assets/user.png",
        },
        {
          href: "/Login",
          title: "Logout",
          icon: "assets/user.png",
        }
      ]
    }
  }
};
</script> 