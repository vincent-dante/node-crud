<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form @submit.prevent="">

          <label for="txtName">Name</label>
          <input type="text" name="" id="txtName" class="form-control" v-model="userData.name">

          <br>

          <label for="txtEmail">Email</label>
          <input type="email" name="" id="txtEmail" class="form-control" v-model="userData.email">

          <br>

          <label for="txtAddress">Address</label>
          <input type="text" name="" id="txtAddress" class="form-control" v-model="userData.address.city">

          <br>

          <label for="txtPhone">Phone</label>
          <input type="text" name="" id="txtPhone" class="form-control" v-model="userData.phone">

          <br>

          <button class="btn btn-primary">Submit</button> &nbsp;&nbsp;
          <button class="btn btn-dark">Close</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      userData: {
        name: null,
        email: null,
        address: { city: null },
        phone: null,
      }
    }
  },
  watch: { 
    user: function(newVal, oldVal) { // watch it
      this.userData = (oldVal === undefined) ? oldVal : newVal
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 500px;
  text-align: left;
  border: 1px solid #eaeaea;
  background: #f4f4f4;
  padding: 20px;
  font-size: 14px;
}
</style>