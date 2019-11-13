<template>
  <div>
    <div></div>
    <div>
      <b-card
        title="About Us"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojpPKiaMLFpaoYCQDS7_axuOx2GheSpJRncwDTia_pjzXpgSKaQ&s"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 100rem; max-height:50rem;"
        class="mb-3"
      >
        <b-card-text>
          iConnect is a web apllication that connects people from different places
          which basically give communication from one user to another users.It is
          application where you can connect with other people .
          <br />
          <br />
          </b-card-text>
     

          <!-- <h1>Mission</h1>
          To make the world even more smaller
          through connectivity and help people to
          transport files
          or any documents easily, quickly and hassle free.
          <br />
          <br />

          <h1>Vission</h1>To become one of the ways
          that makes people’s lives easier. -->
    
        <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
      </b-card>

      <b-card title="Contact">
        <b-card-text>
          Some quick example text to build on the
          <em>card title</em> and make up the bulk of the card's
          content.
        </b-card-text>

        <b-card-text>A second paragraph of text in the card.</b-card-text>

        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>
      </b-card>
    </div>
  </div>
</template>

<style>
#userIcon {
  margin-left: 30px;
  margin-top: 50px;
  width: 90px;
  height: 60px;
}
h1 {
  margin: center;
}
</style>
<script>
export default {
  // name: "container",
  data() {
    return {
      username: sessionStorage.getItem("Username"),
      email: sessionStorage.getItem("Email")
      //   password: sessionStorage.getItem("Password")
    };
  }
};
</script>