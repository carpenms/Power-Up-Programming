<template>
  <div id="app">
    <div id="nav">
        <Home></Home>
    </div>
  </div>
</template>

<script>
  import Home from './views/Home'
  export default {
    name: "app",
    components:{Home}
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
