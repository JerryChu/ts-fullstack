<template>
  <div>
    <button @click="onRegister">Regsiter</button>
    <br><br>
    <button @click="onLogin">Login</button>
  </div>
</template>

<script>
export default {
  name: 'demo-welcome',
  data() {
    return {
      info: {
        name: 'chu',
        password: '11',
      }
    };
  },
  methods: {
    onRegister() {
      this.$router.push('/register');
    },
    onLogin() {
      this.$router.push('/login');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
