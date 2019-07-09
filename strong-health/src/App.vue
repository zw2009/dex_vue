<template>
	<div id="app">
		<headnav></headnav>
		<router-view></router-view>
		<foot v-if="flag"></foot>
		<span class="totop" @click="goTop" ref="span" title="回到顶部"></span>
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
				flag:true,
				isTop:true,
				timer:null
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
		mounted(){
			this.scrollToTop()
		},
		methods:{
			scrollToTop(){
				let clientHeight = document.documentElement.clientHeight;
				let obtn = this.$refs.span;
				window.onscroll = function(){
					let osTop = document.documentElement.scrollTop || document.body.scrollTop;
					if(osTop > 0){
						obtn.style.display = 'block';
					}else{
						obtn.style.display = 'none';
					};
				}
			},
			goTop(){
				this.timer = setInterval(()=>{
					let osTop = document.documentElement.scrollTop || document.body.scrollTop;
					let ispeed = Math.floor(-osTop/5);
					document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
					this.isTop = true;
					if(osTop === 0){
						clearInterval(this.timer)
					}
				},30)
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
	/*返回顶部*/
.totop {
	cursor: pointer;
	width: 48px;
	height: 48px;
	position: fixed;
	bottom: 80px;
	right: 80px;
	background: url(./assets/health/top.png) no-repeat center center;
	border: 1px solid #ccc;
	display: none;
}
</style>