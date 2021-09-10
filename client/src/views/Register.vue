<template>
  <div id="container1" class="container">
    <h2 class="text-center">Register</h2>
    <form v-on:submit.prevent="submitRegister">
      <div id="form-group">
        <label for=""> Email : </label>
        <input
          type="text"
          name="email"
          class="form-control"
          placeholder="johndoe@mail.com"
          v-model="user.email"
        />
      </div>
      <br />
      <div id="form-group">
        <label for=""> Password : </label>
        <input
          type="password"
          name="password"
          class="form-control"
          placeholder="*********"
          v-model="user.password"
        />
      </div>
      <br />
      <button type="submit" class="btn btn-primary">register</button>
      <a href="#" v-on:click.prevent="pageLogin"> use existing account ? </a>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import Swal from "sweetalert2";

export default {
  name: "Register",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    // ...mapState(["register"])
  },
  methods: {
    ...mapActions(["registerAction"]),
    submitRegister() {
      this.registerAction(this.user)
        .then(data => {
          this.$router.push("/login");
          Swal.fire("success");
        })
        .catch(err => {
          let allErrors = err.response.data.error.map(el => {
            return el;
          });
          Swal.fire({
            title: "Error!",
            html: allErrors.join("<br>"),
            icon: "error",
            confirmButtonText: "yowes"
          });
        });
      this.user.email = "";
      this.user.password = "";
      this.user.phoneNumber = "";
      this.user.address = "";

      //   if (this.register) {
      //     this.$router.push("/login");
      //   }
    },
    pageLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
#container1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
