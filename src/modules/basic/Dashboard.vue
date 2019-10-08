<template>
  <div id="card">
    <!-- <h2></h2>
    <h1></h1>-->
    <div>
      <b-img :src="require('assets/pic.png')" rounded="circle" alt="Circle image" id="userIcon"></b-img>
      <hr />
      <h2>Hi {{Uname}},</h2>
      <!-- <h2>Welcome to your Dashboard</h2> -->
    </div>
    <p></p>
    <center>
      <h2>Timeline</h2>
    </center>
    <div class="card">
      <center>
        <div>
          <b-img :src="require('assets/pic.png')" rounded="circle" alt="Circle image" id="userIcon"></b-img>
          <br />
          <h2>{{Uname}}</h2>
        </div>
      </center>
      <hr />
      <textarea id="text">Type text here...</textarea>
      <br />
      <!-- <b-img :src="require('assets/pic.png')" rounded="circle" alt="Circle image" id="userIcon"></b-img>
      <h2>{{Uname}}</h2>-->
      <button type="button" class="btn btn-primary" id="btnPost">post</button>
    </div>
    <br />
    <center>
      <b-card text-align id="text" img-top tag="article" style="max-width: 40rem;" class="mb-2y"></b-card>
    </center>
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
  font-size: 20px;
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

