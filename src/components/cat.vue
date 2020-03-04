<template>
  <div>
    <img
      v-if="loading"
      src="https://cdn.xl.thumbs.canstockphoto.fr/plat-chargement-barre-isolated-illustration-vecteur-progr%C3%A8s-icon-ic%C3%B4ne-design-vecteur-eps_csp69575642.jpg"
      alt
    >
    <img v-else v-bind:src="info" alt="une image d un chat" width="100%">
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
      loading: true
    };
  },
  mounted() {
    axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then(response => (this.info = response.data[0].url))
      .catch(error => console.log(error))
      .finally(
        () => (this.loading = false),
        (this.$store.state.url = this.info)
      );
  } /*,
  computed(){
    catUrl : function(){
      return this.$store.state.url;
      }
      
  }*/
};
</script>
