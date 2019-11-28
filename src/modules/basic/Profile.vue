<template>
  <div id="container">
    <div>
      <center>
        <h1>Profile</h1>
        <hr />
      </center>
    </div>
    <div class="mt-4">
      <b-container fluid class>
        <b-row>
          <b-col cols="2">
          </b-col>
          <b-col cols="4">
            <b-img
              thumbnail
              flui
              v-b-tooltip.hover.top
              title="Change your Avatar"
              :src="imgUrl"
              alt="Image 3"
              accept="image;"
              id="userIcon"
              rounded="circle"
              @click="$refs.file.click()"
            ></b-img>
            <div>
              <span>
                <input
                  type="file"
                  id="file"
                  @change="handleFileUpload()"
                  ref="file"
                  style="display:none"
                />
                <center>
                  <br />
                  <button :disabled="file.length" id="button" class="border border" @click="submit">Update Profile</button>
                  <br><h1>Hi {{Uname}}</h1>
                </center>
              </span>
            </div>
          </b-col>
          <b-col cols="4">
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
            <br>
              <center>
              <button
                type="button"
                class="btn btn-outline-primary login-btn"
                id="btnLogin"
                @click="save"
              >Save changes</button>
            </center>
          </b-col>
          <b-col cols="2">
          </b-col>
        </b-row>
      </b-container>
    </div>
    <br>
    <br>
    <hr>
  </div>
</template>

<script>
import AUTH from "services/auth";
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      imgUrl:
        "https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg",
      auth: AUTH,
      file:'',
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
        (this.file);
    },
    addImage() {
      $("#images")[0].click();
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.imgUrl = URL.createObjectURL(this.file);
    },

    submit() {
      /*
                Initialize the form data
            */
      let formData = new FormData();

      /*
                Add the form data we need to submit
            */
      formData.append("img", this.file);
      /*
          Make the request to the POST /single-file URL
        */
      axios
        .post("http://localhost:3000/uploadSingle", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then((res)=> {
          console.log(res);
          
         this.imgUrl = res.data.filename;
        })  
        .catch((err)=> {
          console.log(err);
        });
    }

    /*
        Handles a change on the file upload
      */

    // setUploadFile(event){
    //     let files = event.target.files ||
    //       event.dataTransfer.files
    //     if(!files.length){
    //       return false;
    //     }else{
    //       this.files = files[0]
    //       this.createFiles(files[0])
    //     }
    // },
    // Upload(){
    //   let formData = new FormData()
    //   formData.append('files' , this.files)
    //   formData.append('files_url',this.file.name)
    // },
    // createFile(file){
    //   let fileReader = new FileReader()
    //   FileReader.readerDataURL(file)
    //   this.upload()
    // }
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
  border: 2px solid;
}
#userIcon {
  width: 75%;
  height: 70%;
  margin-left: 60px;
  margin-top: 10px;
}
/* h1{
  color:#bb6bd9;
} */
.mt-4 {
  border-color: #bb6bd9;
}
.img-thumbnail {
  border: 1px solid #bb6bd9;
}
.form-control {
  border: 1px solid #bb6bd9;
}
.btn-outline-primary {
  color: #bb6bd9;
  border-color: #bb6bd9;
}
hr {
  border-top: 1px solid #bb6bd9;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 21rem;
  margin-right: 17.5rem;
}
#button{
   background-color: transparent;
}
.border {
  border-color: #bb6bd9;
  border-radius: 0.25rem;
}
</style>