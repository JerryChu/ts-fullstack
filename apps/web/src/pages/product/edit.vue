<template>
  <div v-if="!!item">
    <span>Name: </span>
    <input type="text" v-model="item.name">
    <br><br>
    <span>Price: </span>
    <input type="price" v-model="item.price">
    <br><br>
    <button @click="onEdit">Confirm</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'product-edit',
  data() {
    return {
      item: null
    }
  },
  mounted() {
    this.onGet();
  },
  methods: {
    async onGet() {
      const { id } = this.$route.params;
      const result = await axios.get(`/api/product/${id}`);
      this.item = result.data.data;
      console.log(result);
    },
    async onEdit() {
      const { id, name, price } = this.item;
      const result = await axios.put(`/api/product/${id}`, { name, price });
      console.log(result);
      this.$router.push('/product/list');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
