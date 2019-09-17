<template>
  <div>
    <div>
    <h1 class="text-primary">Log In</h1>
  
  <div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->
    <!-- Login Form -->
    <br>
    <form>
       <label for="username"><b>Username</b></label>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="Enter username" required ><br><br>

      <label for="password"><b>Password</b></label>
      <input type="pwd" id="password" class="fadeIn third" name="login" placeholder="Enter password" require ><br><br>

      <input type="submit" class="fadeIn fourth" value="Log In"><br><br>
    </form>

    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>

</div>

</div>
  </div>
</template>


<script>
import tutorialForm from './form/Form.vue'
export default {
  name: 'HelloWorld',
  components:{
    tutorialForm
},
props:{
  msg:String
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
html {
  background-color: #56baed;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #92badd;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px; 
  color: #cccccc;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuAxu_07_sc_sA-NA_bXTY4NuIUB7CoxgclMx24fcUdvTsUHt);
  background-size:cover;
  padding: 30px;
  width: 100%;
  height: 100%;
  max-width: 550px;

  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
  border: 5px solid #888;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}


/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/

input[type=text] {
  background-color:transparent;
  border: 1px solid #ccc;
  color: black;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
input[type=pwd] {
  background-color:transparent;
  border: 1px solid #ccc;
  color: black;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>