<template>
  <div id="container1" class="container">
    <h2 class="text-center">Add Product</h2>
    <form v-on:submit.prevent="submitProduct">
      <div id="form-group">
        <label for=""> Name : </label>
        <input
          type="text"
          name="email"
          class="form-control"
          placeholder="Kipas"
          v-model="product.name"
        />
      </div>
      <br />
      <div id="form-group">
        <label for=""> Image Url : </label>
        <input
          type="text"
          name="email"
          class="form-control"
          placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          v-model="product.image_url"
        />
      </div>
      <br />
      <div id="form-group">
        <label for=""> Descriptions : </label>
        <input
          type="text"
          name="password"
          class="form-control"
          placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sed maxime, numquam fugit ad voluptatibus facilis dolorum sequi animi consequatur!"
          v-model="product.descriptions"
        />
      </div>
      <br />
      <div id="form-group">
        <label for=""> price : </label>
        <input
          type="number"
          name="password"
          class="form-control"
          v-model="product.price"
        />
      </div>
      <br />
      <label for=""> Category : </label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="product.CategoryId"
      >
        <option disabled selected>Open this select menu</option>
        <option value="1">fashion</option>
        <option value="2">food</option>
        <option value="3">electronics</option>
      </select>
      <br />
      <button type="submit" class="btn btn-primary">Submit</button>
      <br />
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "addProduct",
  components: {},
  data() {
    return {
      product: {
        name: "",
        image_url: "",
        descriptions: "",
        price: 0,
        CategoryId: 0
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
    ...mapActions(["addProductAction"]),
    submitProduct() {
      console.log(this.product);
      this.addProductAction(this.product)
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

<style scoped>
#container1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
