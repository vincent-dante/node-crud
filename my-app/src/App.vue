<template>
  <h1>Simple Node JS / Vue CRUD</h1>
  <br>
  <br>

  <EmployeeTable :users="userList"></EmployeeTable>
  <EmployeeForm v-show="displayForm" :user="user"></EmployeeForm>

  <br>
  <br>
</template>

<script>
import axios from 'axios'
import EmployeeTable from './components/EmployeeTable'
import EmployeeForm from './components/EmployeeForm'

export default {
  name: 'App',
  components: {
    EmployeeTable: EmployeeTable,
    EmployeeForm: EmployeeForm
  },
  data() {
    return {
      userList: [],
      displayForm: false,
      user: {}
    };
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    getUsers(){
      axios
      .get("/api/users")
      .then((response) => {
        this.userList = [...response.data].slice(0, 10);
      });
    },
    showForm(user){
      this.displayForm = true
      this.user = user
    }
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  h1 {
    text-align: center;
  }
}
</style>
