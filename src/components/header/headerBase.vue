<template>
  <ul>
    <li>
      <a class="active" href="#home">Home</a>
    </li>
    <li>
      <router-link to="/skill">Skills</router-link>
    </li>
    <li>
      <router-link to="/cat">Cat</router-link>
    </li>
    <li style="float:right">
      <router-link to="/contact">About</router-link>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
  border-right: 1px solid #bbb;
}

li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>
