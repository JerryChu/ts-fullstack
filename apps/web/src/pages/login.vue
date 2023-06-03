<template>
  <div>
    <span>Name:</span>
    <input type="text" v-model="info.name">
    <br><br>
    <span>Password:</span>
    <input type="password" v-model="info.password">
    <br><br>
    <button @click="onLogin">Login</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'demo-login',
  props: {
    msg: String
  },
  data() {
    return {
      info: {
        name: 'chu',
        password: '11',
      }
    };
  },
  methods: {
    async onLogin() {
      const { name, password } = this.info;
      const result = await axios.post('/api/auth/login', { name, password });
      console.log(result);
      this.$store.dispatch('user/login', result.data.data);
      this.$router.replace('/home');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
