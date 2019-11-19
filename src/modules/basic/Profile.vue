<template>
  <div id="container">
    <div>
      <center>
        <h1>Profile</h1><hr>
      </center>
    </div>
    <div class="mt-4">
      <b-container fluid class>
        <b-row>
          <b-col cols="4">
            <b-img
              thumbnail
              fluid
              v-b-tooltip.hover.top
              title="Change your Avatar"
              src="https://picsum.photos/250/250/?image=59"
              alt="Image 3"
              id="userIcon"
            ></b-img>
            <center>
              <p>Hi {{Uname}}</p>
            </center>
            <!-- </v-hover> -->
          </b-col>
          <b-col cols="8">
            <div class="form-group">
              <label for="fullname">Full Name</label>
              <b-form-input
                required
                type="text"
                class="form-control"
                id="fullname"
                v-model="fullname"
              ></b-form-input>
            </div>
            <div class="form-group">
              <label for="username" class="bmd-label-floating">Username</label>
              <b-form-input
                required
                type="text"
                class="form-control"
                id="Username"
                v-model="username"
              ></b-form-input>
            </div>
            <div class="form-group">
              <label for="email" class="bmd-label-floating">Email</label>
              <b-form-input required type="email" class="form-control" id="Email" v-model="email"></b-form-input>
            </div>
            <div class="form-group">
              <label for="address" class="bmd-label-floating">Address</label>
              <b-form-input
                required
                type="text"
                class="form-control"
                id="Address"
                v-model="address"
              ></b-form-input>
            </div>
            <div class="form-group">
              <label for="phone" class="bmd-label-floating">PhoneNo.</label>
              <b-form-input required type="text" class="form-control" id="phone" v-model="phone"></b-form-input>
            </div>
            <div class="form-group">
              <label for="pwd" class="bmd-label-floating">Password</label>
              <b-form-input
                required
                type="password"
                class="form-control"
                id="passw"
                v-model="password"
              ></b-form-input>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <center>
      <button
        type="button"
        class="btn btn-outline-primary login-btn"
        id="btnLogin"
        @click="save"
      >Save changes</button>
    </center>
    <br />
    <br />
  </div>
</template>

<script>
import AUTH from "services/auth";
export default {
  data() {
    return {
      auth: AUTH,
      fullname: "",
      username: "",
      email: "",
      address: "",
      phone: "",
      password: "",
      Uname: sessionStorage.getItem("Username")
    };
  },
  methods: {
    save: function(e) {
      e.preventDefault();
      sessionStorage.setItem("Fullname", this.fullname),
        sessionStorage.setItem("Username", this.username),
        sessionStorage.setItem("Email", this.email),
        sessionStorage.setItem("Address", this.address),
        sessionStorage.setItem("Phone", this.phone),
        sessionStorage.setItem("Password", this.password),
        // AUTH.save(this.username, this.email, this.password);
        (this.fullname = ""),
        (this.username = ""),
        (this.email = ""),
        (this.address = ""),
        (this.phone = ""),
        (this.password = "");
    }
  }
};
</script>

<style scoped>
#container {
  margin-left: auto;
  margin-right: auto;
}
.card {
  background-color: transparent;
  border: 2px solid ;
}
#userIcon {
  width: 100%;
  height: 60%;
  margin-left: 1px;
  margin-top: 10px;
}
.mt-4{
  border-color:#BB6BD9;;
}
</style>