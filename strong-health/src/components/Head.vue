<template>
	<div class="head-nav" v-if="flag">
		<header class="header">
			<nav class="nav">
				<ul class="nav-left" id="navLeft">
					<li class="logo">
						<router-link to="/"><img src="@/assets/logo.png"></router-link>
					</li>
					<li :data="routs" v-for="(v,i) in routs" @click="routeChange(v.to)">
						<a>{{v.title}}</a>
					</li>
				</ul>
				<ul class="nav-right">
					<router-link to="/register" v-if="!loginfalg">{{register}}</router-link>
					<router-link to="/login" v-if="!loginfalg">{{login}}</router-link>
					<router-link v-if="loginfalg" :to="{name:'doctormsg'}">欢迎您登录思众云</router-link>
					<a v-if="loginfalg" @click="leave">退出</a>
					<li id="inStorng">
						<a href="http://www.51szyly.com/a/login" target="_blank">进入医疗云</a>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<script>
	export default {
		name: "HeadNav",
		data() {
			return {
				routs: [{
						to: "health",
						title: "健康资讯"
					},
					{
						to: "doctor",
						title: "医护学习"
					},
					{
						to: "doctorcare",
						title: "医护人才"
					}
					,
					{
						to: "szforum",
						title: "论坛"
					}
				],
				register:"注册",
				login:"登录",
				changeRed: 0,
				flag: true,
				loginfalg:false
			}
		},
		watch: {
			'$route' (to, from) {
				if(from.name == 'login'){
					this.getuser();
				}
				if(to.name == 'register' || to.name == 'login' || to.name == "findpwd") {
					this.flag = false;
				} else {
					this.flag = true;
				}
			}
			
		},
		methods: {
			leave(){
				sessionStorage.removeItem("LoginUser");
				this.$router.push('/login');
				this.loginfalg = false
			},
			change(index) {
				this.changeRed = index;
			},
			routeChange(route) {
				this.$router.push({
					name: route
				})
			},
			getuser(){
				if(sessionStorage.getItem("LoginUser")){
					this.loginfalg = true
				}
			}
		},
		created(){
			this.getuser();
		},
		destroyed(){
			alert(1)
		}
	}
</script>

<style scoped>
	.header {
		height: 42px;
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		background: rgba(0, 0, 0, .7);
	}
	
	.header img {
		width: 100px;
	}
	
	.header .nav {
		width: 1200px;
		margin:0 auto;
		overflow: hidden;
	}
	
	.header .nav .nav-left {
		float: left;
		margin: 0;
	}
	
	.header .nav .nav-right {
		float: right;
	}
	
	.header .nav ul {
		display: flex;
	}
	
	.header .nav ul li {
		height: 42px;
		line-height: 42px;
		box-sizing: border-box;
		margin-right: 1px;
		cursor: pointer;
	}
	
	.header .nav ul.nav-left li a {
		color: #fff;
		height: 42px;
		line-height: 42px;
		margin: 0 30px 10px;
		padding-bottom: 8px;
		font-size: 16px;
	}
	
	.header .nav ul.nav-left li:first-child:hover a {
		border-bottom: none;
	}
	
	.header .nav ul.nav-left li:hover a {
		color: #2d82cf;
		border-bottom: 3px solid #2d82cf;
	}
	
	.header .nav ul.nav-left li.cur>a {
		color: #2d82cf;
		border-bottom: 3px solid #2d82cf;
	}
	
	.header .nav ul.nav-right {
		line-height: 42px;
		color: #fff;
	}
	
	.header .nav ul.nav-right a {
		color: #fff;
		padding: 0 20px;
		font-size: 12px;
		cursor: pointer;
	}
	.header .nav ul.nav-right>a:first-child{
		position: relative;
	}
	.header .nav ul.nav-right>a:first-child:after{
		position: absolute;
		top: 50%;
		right: 0;
		content: "";
		border-right: 1px solid #fff;
		height: 16px;
		margin-top: -8px;
	}
	.header .nav ul.nav-right a:hover {
		text-decoration: underline;
	}
	
	.header .nav ul.nav-right li {
		position: relative;
		background: #094986;
		overflow: hidden;
	}
	
	.header .nav ul.nav-right li span {
		background: rgba(0, 100, 255, 0.5);
		width: 100px;
		height: 42px;
		position: absolute;
		left: -100px;
		top: -55px;
		transition: all 0.5s;
	}
	
	.header .nav ul.nav-right li:hover>span {
		top: 0;
		left: 0;
	}
	
	.header .nav ul.nav-right li.cur {
		background: #0370d7;
	}
	
	.header .nav ul.nav-right li a {
		color: #fff;
		display: block;
		text-align: center;
	}
	/*进入医疗云*/
	
	#inStorng {
		color: #fff;
		width: 100px;
		text-align: center;
		cursor: pointer;
	}
</style>