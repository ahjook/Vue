<template>
  <div>
    <div class="jumbotron">
      <h1></h1>
    </div>
    <center>
      <b-card text-align id="card5" img-top tag="article" style="max-width: 30rem;" class="mb-2">
        <b-form-group label-size="lg" label-for="input-lg">
          <h1>TIMELINE</h1>
          <hr />
          <b-img :src="require('assets/pic.png')" rounded="circle" alt="Circle image" id="Icon"></b-img>
          <b-form-input v-model="infos.post" id="post" size="lg"></b-form-input>
          <br />
          <b-button variant="primary" @click="addPost">Post</b-button>
        </b-form-group>
      </b-card>
      <br />
      <br />
    </center>
    <center>
      <b-card text-align id="card1" img-top tag="article" style="max-width: 40rem;" class="mb-2y">
        <thead>
          <tr>
            <center>
              <th scope="col">--------------------- POST ----------------------</th>
              <br />
              <br />
            </center>
          </tr>
        </thead>
        <tbody v-for="(item, index) in this.rows" :key="index">
          <tr>
            <td>{{ item.post }}</td>
          </tr>
        </tbody>
      </b-card>
    </center>
  </div>
</template>


<style>
#Icon {
  width: 15%;
  height: auto;
}
#card5 {
  background-color: transparent;
  width: 700px;
}
.jumbotron {
  padding: 0px;
  text-align: center;
}
#card1 {
  background-color: transparent;
  width: 500px;
  height: 500px;
}
</style>

<script>
// import AUTH from 'services/auth'
export default {
  data() {
    return {
      rows: [],
      infos: {
        post: ""
      }
    };
  },
  methods: {
    addPost() {
      var object = {
        post: this.infos.post
      };
      // AUTH.addSubjects(this.infos.subject,this.infos.teacher,this.infos.time,this.infos.day,this.infos.room)
      this.rows.push(object);
      this.infos.post = "";
    }
  }
};
</script>












































  
  
  
  
  
  