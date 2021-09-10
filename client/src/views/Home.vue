<template>
  <div class="home">
    <tableProduct />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import tableProduct from "../components/TableProduct.vue";

export default {
  name: "Home",
  components: {
    tableProduct
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
