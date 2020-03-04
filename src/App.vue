
<template>
  <div id="app">
    <headerBase title="Salut à tous"/>
    <img width="25%" src="./assets/logo.png">
    <br>
    <router-link to="/skill">skills</router-link>
    <br>
    <router-link to="/contact">contact</router-link>
    <br>
    <router-link to="/cat">cat</router-link>

    <router-view></router-view>
    <home/>

    <footerBase/>
  </div>
</template>

<script>
import footerBase from "./components/footer/footerBase";
import headerBase from "./components/header/headerBase";

export default {
  computed: {
    username() {
      // Nous verrons ce que représente `params` dans un instant.
      return this.$route.params.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style>
#app {
  font-family: Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
