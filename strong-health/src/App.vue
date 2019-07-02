<template>
	<div id="app">
		<headnav></headnav>
		<router-view></router-view>
	</div>
</template>

<script>
	import health from '@/components/Health'
	import headnav from '@/components/Head'

	export default {
		name: 'App',
		components: {
			health,
			headnav
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
	
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	ul,
	h3 {
		margin: 0;
		padding: 0;
	}
	
	a {
		text-decoration: none;
		font-size: 13px;
	}
	
	.textover {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	
	.textover2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	
	.textover3 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
	
	.clearfix {
		overflow: hidden;
	}
	
	.pull-left {
		float: left;
	}
	
	.pull-right {
		float: right;
	}
	
	.container {
		width: 1170px;
		margin: 0 auto;
	}
</style>