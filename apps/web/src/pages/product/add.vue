<template>
  <div>
    <span>Name: </span>
    <input type="text" v-model="info.name">
    <br><br>
    <span>Price: </span>
    <input type="price" v-model="info.price">
    <br><br>
    <button @click="onAdd">Add</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'product-add',
  data() {
    return {
      roles: [],
      info: {
        name: '',
        price: '0',
      }
    };
  },
  methods: {
    async onAdd() {
      const { name, price } = this.info;
      const result = await axios.post('/api/product', { name, price });
      console.log(result);
      this.$router.push('/list');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
