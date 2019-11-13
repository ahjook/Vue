<template>
  <div id="card">
    <!-- <h2></h2>
    <h1></h1>-->
    <div>
      <b-img :src="require('assets/pic.png')" rounded="circle" alt="Circle image" id="userIcon"></b-img>
      <hr />
      <h3>Hi {{Uname}},</h3><br><br>
      <!-- <center><h2>Welcome to your Dashboard</h2></center> -->
    </div>
  </div>
</template>
<style scoped>
#card {
  margin-top: 0px;
  margin-left: 380px;
  margin-bottom: 0px;
  width: 560px;
  height: 800px;
  background-color: transparent;
}
#userIcon {
  width: 10%;
  height: auto;
}
h2 {
  font-size: 50px;
}
#text {
  width: 550px;
  height: 200px;
}
</style>

<script>
import AUTH from "services/auth";
export default {
  name: "card",
  auth: AUTH,
  data() {
    return {
      Uname: sessionStorage.getItem("Username")
    };
  },
  component: {

  },
  methods: {
    
  }
};
</script>

