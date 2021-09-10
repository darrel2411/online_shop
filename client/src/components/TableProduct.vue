<template>
  <div class="container mt-5">
    <table class="table container">
      <thead class="thead-dark">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Descriptions</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ product.name }}</td>
          <td>
            <img
              :src="product.image_url"
              alt="product.jpeg"
              style="width:100px ; height:100px"
            />
          </td>
          <td>{{ product.descriptions }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.Category.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TableProduct",
  computed: {
    ...mapState(["products", "users"])
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchUsers"])

    // detail(food){
    //     // console.log(food, 74387248)
    //     const id = food.id

    //     this.detailFood(id)
    //     this.getQRcode(id)
    //     this.$router.push({ name: 'Detail', params: { id } })
    // }
  },
  created() {
    this.fetchProducts();
    this.fetchUsers();
  }
};
</script>

<style></style>
