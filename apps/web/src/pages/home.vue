<template>
  <div>
    <span>Name: </span>
    <span>{{ info.name }}</span>
    <br><br>
    <span>Code: </span>
    <span>{{ info.code }}</span>
    <br><br>
    <button @click="onLogout">Logout</button>
    <br><br>
    <button @click="onGet">Get</button>
    <br><br>
    <button @click="onAdd">Add product</button>
    <br><br>
    <button @click="onView">View Product</button>
  </div>
</template>

<script>
import axios from 'axios';
import { ResponseCode } from 'shared-model';

export default {
  name: 'demo-home',
  props: {
    msg: String
  },
  data() {
    return {
      info: {
        name: '',
        code: '',
      }
    };
  },
  async mounted() { 
    await this.onGet();
    if (!this.info) {
      this.$router.replace('/login');
    }
  },
  methods: {
    async onLogout() {
      const result = await axios.post('/api/auth/logout');
      console.log(result.status);
      if (result.status === ResponseCode.OK) { console.log(ResponseCode); }
      console.log(result);
      this.$store.dispatch('user/logout');
      this.$router.replace('/');
    },
    async onGet() {
      const result = await axios.get('/api/auth/user').catch(err => console.log(err));
      console.log(result);
      this.info = result?.data?.data;
    },
    onAdd() {
      this.$router.push('/product/add');
    },
    onView() {
      this.$router.push('/product/list');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
