<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import navbar from "./components/Navbar.vue";

// import mutations
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  components: {
    navbar
  },
  computed: {
    ...mapState(["isLoggedIn"])
  },
  methods: {
    ...mapMutations(["checkLoginMutation"])
  },
  created() {
    // this.checkLoginMutation()
    // if(this.isLoggedIn === false){
    //   this.$router.push('/login')
    // }
  }
};
</script>

<style></style>
