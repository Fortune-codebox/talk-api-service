<template>
  <div id="app">
      
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style>

 body {
    background: #e9e9e9!important;
  }

#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  
}

</style>