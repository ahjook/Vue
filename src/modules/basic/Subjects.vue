<template>
  <div>
    <div class="jumbo">
      <h1></h1>
    </div>

    <center>
      <b-card text-align id="card" img-top tag="article" style="max-width: 30rem;" class="mb-2">
        <b-form-group label-size="lg" label-for="input-lg">
          <h1>Schedules...</h1>
          <label id="Subject">Subject:</label>
          <b-form-input v-model="infos.subject" id="subject" size="lg"></b-form-input>
          <label id="teacher">Teacher:</label>
          <br />
          <b-form-input v-model="infos.teacher" id="teacher" size="lg"></b-form-input>
          <label id="time">Time:</label>
          <b-form-input v-model="infos.time" id="time" size="lg"></b-form-input>
          <label id="time">Day:</label>
          <b-form-input v-model="infos.day" id="day" size="lg"></b-form-input>
          <label id="room">Room:</label>
          <b-form-input v-model="infos.room" id="room" size="lg"></b-form-input>
          <br />
        </b-form-group>
      </b-card>
      <b-button variant="primary" @click="addItem">Add Subject</b-button>
      <br />
      <br>
      <b-button  variant="success" v-b-toggle.collapse-2 class="m-1">Remove Subjects</b-button>
      <b-collapse id="collapse-2">
              <b-form-group>
                  <!-- <label id = "subject">Subjects to remove</label> -->
                  <b-form-input required v-model="delInfo.delCourse" id="subjecte"></b-form-input><br>
                  <b-button variant="primary" @click="remove">Remove Sub</b-button>
              </b-form-group>
      </b-collapse>
    </center>

    <center><br><br>
      <b-card text-align id="card" img-top tag="article" style="max-width: 40rem;" class="mb-2y">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">SUBJECT</th>
              <th scope="col">TEACHER</th>
              <th scope="col">TIME</th>
              <th scope="col">DAY</th>
              <th scope="col">ROOM</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in this.rows" :key="index">
            <tr>
              <td>{{ item.subject }}</td>
              <td>{{ item.teacher }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.day }}</td>
              <td>{{ item.room }}</td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </center>
  </div>
</template>


<style>
#card {
  background-color: transparent;
}
.jumbo {
  padding: 0px;
  text-align: center;
}
#card1 {
  background-color: transparent;
}
#subjecte{
    width:148px;
}
</style>

<script>
import AUTH from 'services/auth'
export default {
  data() {
    return {
      auth:AUTH,
      rows: [],
      delInfo: {
        delCourse: ""
      },
      infos: {
        subject: "",
        teacher: "",
        time: "",
        day: "",
        room: ""
      }
    };
  },
  methods: {
    addItem() {
      var object = {
        subject: this.infos.subject,
        teacher: this.infos.teacher,
        time: this.infos.time,
        day: this.infos.day,
        room: this.infos.room
      };
      AUTH.addSubjects(this.infos.subject,this.infos.teacher,this.infos.time,this.infos.day,this.infos.room)
      this.rows.push(object);
      this.infos.subject = "";
      this.infos.teacher = "";
      this.infos.time = "";
      this.infos.day = "";
      this.infos.room = "";
    }
  },
  remove() {
      for (let i = 0; i < this.rows.length; i++) {
        if (this.rows[i].course === this.delInfo.delCourse) {
          this.rows.splice(this.rows.indexOf(this.rows[i], 1));
        }
      }
    }
};
</script>
