<template>
  <nav>
    <li class="nav-item">
      <a class="nav-link" href>{{title}}</a>
    </li>
  </nav>
</template>

<script>
export default {
  name: "headerBase",
  props: {
    title: String
  }
};
</script>

<style>
nav {
  width: 100%;
  background-color: #080808;
  margin: 0;
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 5%;
  transition: all 0.2s ease-in;
}
nav:hover {
  background-color: #052575;
  transition: all 0.3s ease-in;
}
.navbar {
  display: flex;
  width: 100%;
  list-style-type: none;
}
.nav-item {
  width: 20%;
  text-align: center;
}
nav a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.75);
  display: block;
  width: 40%;
  transition: all 0.2s ease-in;
}
nav a:hover {
  text-decoration: none;
  color: #fff;
  display: block;
  width: 40%;
  transition: all 0.2s ease-in;
}
</style>
