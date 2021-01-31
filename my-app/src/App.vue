<template>
  <h1>Simple Node JS / Vue CRUD</h1>
  <br>
  <br>
  <EmployeeTable :users="userList"></EmployeeTable>
</template>

<script>
import axios from 'axios'
import EmployeeTable from './components/EmployeeTable'

export default {
  name: 'App',
  components: {
    EmployeeTable: EmployeeTable
  },
  data() {
    return {
      userList: [],
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

    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
