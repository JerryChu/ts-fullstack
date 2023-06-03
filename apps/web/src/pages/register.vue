<template>
  <div>
    <span>Name: </span>
    <input type="text" v-model="info.name">
    <br><br>
    <span>Password: </span>
    <input type="password" v-model="info.password">
    <br><br>
    <span>Role: </span>
    <select v-model="info.roleId">
      <option v-for="{ id, name } in roles" :value="id" :key="id">{{ name }}</option>
    </select>
    <br><br>
    <button @click="onRegister">Regsiter</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'demo-register',
  props: {
    msg: String
  },
  data() {
    return {
      roles: [],
      info: {
        name: 'chu',
        password: '11',
        roleId: '2',
      }
    };
  },
  async mounted() {
    const result = await axios.get('/api/role/all');
    console.log(result);
    this.roles = result.data.data;
  },
  methods: {
    async onRegister() {
      const { name, password, roleId } = this.info;
      const result = await axios.post('/api/auth/register', { name, password, role_id: roleId });
      console.log(result);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
