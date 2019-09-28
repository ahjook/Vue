<template>
<body>
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col id = "top" cols="5">
        <b-card 
         title="SIGN UP"
          style="margin-top:20%"
        ></b-card>
        <br>
          <b-form @submit="onSubmit" v-if="show">

            <b-form-group id="lastName"  label="Lastname" label-for="userLastName">
              <b-form-input
                id="userLastName"
                v-model="form.userLastName"
                type="text"
                required
                placeholder="LastName"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="firstName" label="Firstname" label-for="userFirstName">
              <b-form-input
                id="userFirstName"
                v-model="form.userFirstName"
                type="text"
                required
                placeholder="FirstName"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="emailAdd" label="Email Address" label-for="userEmail">
              <b-form-input
                id="userEmail"
                v-model="form.userEmail"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="initialUserPassword" label="Password" label-for="initialPassword">
              <b-form-input
                id="initialPassword"
                v-model="form.initialPassword"
                type="password"
                required
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="confirmUserPassword" label="Confirmed Passsword" label-for="confirmedPassword">
              <b-form-input
                id="confirmedPassword"
                v-model="form.confirmedPassword"
                type="password"
                required
                placeholder="Confirm Password"
              ></b-form-input>
            </b-form-group>

            <center><b-button type="submit" variant="primary">Submit</b-button></center>
          </b-form>
      </b-col>

      <b-col></b-col>
    </b-row>
  </b-container>
</body>
</template>
<script>
export default {
  data() {
    return {
      form: {
        userLastName: "",
        userFirstName: "",
        userEmail: "",
        initialPassword: "",
        confirmedPassword: "",
      },
      show: true
    };
  },
   methods: {
      checkForm(event) {
        event.preventDefault();
        event.target.classList.add('was-validated');
      }
    }
};
</script>

<style scoped>

#top{
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuAxu_07_sc_sA-NA_bXTY4NuIUB7CoxgclMx24fcUdvTsUHt);
  background-size: cover;
  padding: 3vw 4vw 5vw;
  border-radius: 4px;
  text-align: center;
  margin-top:5%;
}

</style>
