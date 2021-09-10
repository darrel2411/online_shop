<template>
  <div class="container mt-5">
    <table class="table container">
      <thead class="thead-dark">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TableUsers",
  computed: {
    ...mapState(["users"])
  },
  methods: {
    ...mapActions(["fetchUsers"])
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<style></style>
