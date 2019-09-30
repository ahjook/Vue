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
          href: "/Dashboard",
          title: "Dashboard",
          icon: "assets/user.png",
        },
        {
          href: "/Subjects",
          title: "Subjects",
          icon: "assets/user.png",
        },
        {
          href: "/PersonalInfo",
          title: "Personal Info",
          icon: "assets/user.png",
        },
        {
          href: "/Login",
          title: "Logout",
          icon: "assets/user.png",
        }
      ]
    };
  }
};
</script> 