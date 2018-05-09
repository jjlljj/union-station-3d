<template>
  <div id="app">
    <div class="banner">
      <h1>Welcome to Union Station</h1>
    </div>
    <div>
      <Map v-once/>
    </div>
  </div>
</template>

<script>
  import Map from '../Map/Map.vue'

  export default {
    name: 'app',
    components: {
      Map
    }
  }
  
</script>

<!-- CSS libraries -->
<!--<style src="normalize.css/normalize.css"></style>-->

<style>
  body {
    margin: 0;
  }

  #app h1 {
    color: #2c3e50;
    font-weight: 300;
    margin: 0;
  }

  .banner {
    background-color: #f6f6f6;
    padding: 50px 50px;
  }

</style>
