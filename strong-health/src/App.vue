<template>
  <div id="app">
    	<headnav></headnav>
    	
    	
    	<router-view></router-view>
  </div>
</template>

<script>
import helloworld from '@/components/HelloWorld'	
import headnav from '@/components/Head'	
export default {
  name: 'App',
  components:{
  	helloworld,headnav
  }
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
</style>
