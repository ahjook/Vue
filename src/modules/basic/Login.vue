<template>

  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
     <b-col id="top" cols="5">
        <b-card
         title="LOGIN"
          style="margin-top:20%"
        ></b-card>
      <br>
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group id="emailAdd" label="Username" label-for="userName" >
            <b-form-input
              id="userName"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="userPassword" label="Password" label-for="password">
            <b-form-input
              id="password"
              v-model="form.name"
              type="password"
              required
              placeholder="Password"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="rememberPassword">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
              <b-form-checkbox value="me">Remember password?</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

         <center><b-button type="submit" variant="primary">Login</b-button></center>
        </b-form>
    
      </b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
//eslint-disable-next-line
/*eslint-disable*/
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        checked: []
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(JSON.stringify(this.form));
    }
  }
};
</script>


<style scoped>
body{
  background-image: url(http://www.pptbackgrounds.org/uploads/children-education-backgrounds-wallpapers.jpg);
}
#top{
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuAxu_07_sc_sA-NA_bXTY4NuIUB7CoxgclMx24fcUdvTsUHt);
  background-size: cover;
  padding: 3vw 4vw 5vw;
  border-radius: 4px;
  text-align: center;
  margin-top:5%;
}

</style>
