<template>
	<div id="app">
		<headnav></headnav>
		<router-view></router-view>
		<foot v-if="flag"></foot>
	</div>
</template>

<script>
	import health from '@/components/Health'
	import headnav from '@/components/Head'
	import foot from '@/components/Foot'
	
	export default {
		name: 'App',
		components: {
			health,
			headnav,
			foot
		},
		data(){
			return {
				flag:true
			}
		},
		watch: {
			'$route' (to, from) {
				if(to.name == 'register' || to.name == 'login' || to.name == "findpwd") {
					this.flag = false;
				} else {
					this.flag = true;
				}
			}
		},
	}
</script>

<style>
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
	a:hover {
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