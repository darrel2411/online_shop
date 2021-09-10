<template>
  <div id="container1" class="container">
    <h2 class="text-center">LOGIN</h2>
    <form v-on:submit.prevent="submitLogin">
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
      <button type="submit" class="btn btn-primary">login</button>
      <a href="#" v-on:click.prevent="pageRegister"> Don't have an account? </a>
      <br />
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "login",
  components: {},
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState(["isLoggedIn"]),
    checkLogin() {
      return this.isLoggedIn();
    }
  },
  methods: {
    ...mapActions(["loginAction", "loginGoogle"]),
    submitLogin() {
      this.loginAction(this.user)
        .then(data => {
          this.$router.push("/");
          Swal.fire("success");
        })
        .catch(err => {
          let error = err.response.data.error;
          if (Array.isArray(error)) {
            let allErrors = err.response.data.error.map(el => {
              return el;
            });
            Swal.fire({
              title: "Error!",
              html: allErrors.join("<br>"),
              icon: "error",
              confirmButtonText: "yowes"
            });
          } else {
            Swal.fire(error);
          }
        });
    },
    changePage() {
      this.$router.push("/");
    },

    pageRegister() {
      this.$router.push("/register");
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
