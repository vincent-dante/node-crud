<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <table class="table table-condensed table-hover table-sm table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id" @click="showForm(user)">
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.address.street }}</td>
              <td>{{ user.phone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['users'],
  methods: {
    showForm(user){
      this.$parent.showForm(user);
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  th, td {
    text-align: left;
    font-size: 14px;
  }
}
</style>