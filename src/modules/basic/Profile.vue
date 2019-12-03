<template>
  <div id="container">
    <div>
      <center>
        <h1>Profile</h1>
        <hr/>
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
                   <p>Hi {{Uname}}</p>
                  <button :disabled="file.length" id="button" class="border border" @click="submit">Upload</button>
                </center>
              </span>
            </div>
          </b-col>
      
          <b-col cols="4">
            <div class="form-group">
              <label for="username" class="bmd-label-floating">Username</label>
              <b-form-input required type="text" class="form-control" id="Username" v-model="username" disabled ></b-form-input>
            </div>

            <div class="form-group">
              <label for="email" class="bmd-label-floating">Email</label>
              <b-form-input required 
              type="email" class="form-control" id="Email" v-model="email" disabled></b-form-input>
            </div>

            <div class="form-group">
              <label for="pwd" class="bmd-label-floating">Password</label>
              <b-form-input required type="password" class="form-control" id="passw" v-model="password" disabled></b-form-input>
            </div>
            

            <div>
              <br><center>
                <button :disabled="state.isSending" id="button" class="border border">Update Profile</button>  
              </center>
            </div>

           
            </b-col>
          <b-col cols="2">
          </b-col>  
        </b-row> <hr>
      </b-container>
    </div><br><br>
  </div>
</template>

<script>
import AUTH from "services/auth";
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      show: true,
      imgUrl:
        "https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg",
      auth: AUTH,
      file:'',
      username: "",
      email: "",
      password: "",
      Uname: sessionStorage.getItem("Username"),
      state: {
        isSending: false
      }
    };
  },
  methods: {
    save: function(e) {
      e.preventDefault();
        sessionStorage.setItem("Username", this.username),
        sessionStorage.setItem("Email", this.email),
        sessionStorage.setItem("Password", this.password),
        // AUTH.save(this.username, this.email, this.password);
        (this.username = ""),
        (this.email = ""),
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
  width: auto;
  height: 65%;
  margin-left: 60px;
  margin-top: 1px;
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
  margin-top: 15px;
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
.col-4{
  margin-top:50px;
}
p {
  font-weight: bold;
}
</style>