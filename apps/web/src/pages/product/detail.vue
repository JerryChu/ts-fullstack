<template>
  <div>
    <p>id: {{ item.id }}</p>
    <p>name: {{ item.name }}</p>
    <p>price: {{ item.price }}</p>
    <p>user: {{ item.user_id }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'product-detail',
  data() {
    return {
      item: [],
    }
  },
  mounted() {
    this.onGet();
  },
  methods: {
    async onGet() {
      console.log(this.$route);
      const { id } = this.$route.params;
      const result = await axios.get(`/api/product/${id}`);
      this.item = result.data.data;
      console.log(result);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
