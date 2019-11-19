<template>
  <div id="container">
    <div class="jumbotron">
    </div>
    <div id="card">
     <center><div>
        <b-img :src="require('assets/pic.png')" rounded="circle" alt="Circle image" id="user"></b-img>
      </div></center><hr>
      <b-card no-body class="overflow-hidden" id="hello" >
        <b-row no-gutters>
          <b-col md="12">
          <center><b-card-body title="Personal Information"> 
                <hr>
                <b-card-text>
                    <h6>Fullname: {{fullname}}</h6>
                    <h6>Username: {{username}}</h6>
                    <h6>Email: {{email}}</h6>
                    <h6>Address: {{address}}</h6>
                    <h6>Phone: {{phone}}</h6>
                    <!-- <h6>Email: {{email}}</h6> -->
                </b-card-text>
            </b-card-body>
            </center>
          </b-col>
        </b-row>
      </b-card><br>
      </div>
  </div>
</template>

<style>
.jumbotron{
    padding: 0px;
    text-align: center;
    margin-bottom:0px;
}
#card {
    margin-top: 79px;
    margin-left: 380px;
    width:560px;
    height:700px;
}
#hello {
     background-color:transparent;
     max-height: 560px;
}
#user {
  width: 40%;
  height: auto;
}

</style>
<script>
export default {
  // name: "container",
  data() {
    return {
      fullname: sessionStorage.getItem("Fullname"),
      username: sessionStorage.getItem("Username"),
      email: sessionStorage.getItem("Email"),
      address: sessionStorage.getItem("Address"),
      phone: sessionStorage.getItem("Phone"),
    //   password: sessionStorage.getItem("Password")
    };
  },
};
</script>