<template>
  <div>
    <li v-for="item in items" :key="item.id">
      <span>id: {{ item.id }}, </span>
      <span>name: {{ item.name }}, </span>
      <span>price: {{ item.price }}, </span>
      <span>user: {{ item.user_id }}, </span>
      <br>
      <button @click="onDetail(item)">Detail</button>
      <button @click="onEdit(item)">Edit</button>
      <button @click="onDelete(item)">Delete</button>
    </li>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'product-list',
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.onGet();
  },
  methods: {
    async onGet() {
      const result = await axios.get('/api/product', {
        params: { page: 0, count: 100 }
      });
      this.items = result.data.data;
      console.log(result);
    },
    async onDelete({ id }) {
      const result = await axios.delete(`/api/product/${id}`);
      console.log(result);
      this.onGet();
    },
    async onDetail({ id }) {
      this.$router.push({ path: `/product/detail/${id}` });      
    },
    async onEdit({ id }) {
      this.$router.push({ path: `/product/edit/${id}` });      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
