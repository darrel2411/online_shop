<template>
  <div class="home">
    <tableUsers />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import tableUsers from "../components/TableUsers.vue";

export default {
  name: "User",
  components: {
    tableUsers
  },
  methods: {
    setEmail() {
      return localStorage.getItem("email");
    }
  },
  created() {
    if (localStorage.access_token) {
      this.$store.commit("setLoginMutation", true);
      this.$store.commit("setEmailMutaion", this.setEmail());
    } else {
      this.$store.commit("setLoginMutation", false);
    }
  }
};
</script>
