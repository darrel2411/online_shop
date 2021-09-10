<template>
  <nav>
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <label class="logo">
      <i class="fas fa-store-alt"></i>
      MRG Online
    </label>
    <ul>
      <li>
        <router-link v-if="isLoggedIn === true" to="/" href="#"
          >Home</router-link
        >
      </li>
      <li>
        <router-link v-if="isLoggedIn === true" to="/users" href="#"
          >Users</router-link
        >
      </li>
      <li>
        <router-link v-if="isLoggedIn === true" to="/add" href="#"
          >Add Product</router-link
        >
      </li>
      <li>
        <h5 v-if="isLoggedIn">{{ email }}</h5>
      </li>
      <li>
        <router-link to="/login" v-if="isLoggedIn === false" href="#"
          >Log in</router-link
        >
      </li>
      <li>
        <a v-if="isLoggedIn === true" v-on:click.prevent="clickLogout" href="#"
          >Log out</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "Navbar",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState(["isLoggedIn", "email"])
  },
  methods: {
    ...mapActions(["logoutAction"]),
    clickLogout() {
      this.logoutAction();
      Swal.fire("Successfully Logout");
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
