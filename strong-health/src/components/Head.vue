<template>
	<div class="head-nav">
		<header class="header">
			<nav class="nav">
				<ul class="nav-left" id="navLeft">
					<li class="logo"><a ><img src="@/assets/logo.png"></a></li>
					<li v-for="(v,i) in routs" :class="{cur:changeRed == i}"   @click="change(i)"><router-link  :to="v.to">{{v.title}}</router-link></li>				
				</ul>
				<ul class="nav-right">
					<a href="./home.vue">注册</a>|
					<router-link to="HelloWorld">注册</router-link>
					<li id="inStorng"><a href="http://www.51szyly.com/a/login" target="_blank">进入医疗云</a></li>
				</ul>
			</nav>
		</header>
		
    	
	</div>
</template>

<script>
	export default {
		name:"HeadNav",
		data(){
			return {
				routs:[
					{to:"/HelloWorld",title:"健康资讯"},
					{to:"/11111",title:"医护学习"},
					{to:"/2222",title:"医护人才"}
				],
				changeRed:0
			}
		},
		methods:{
			change(index){
				this.changeRed = index;
			}
		}
	}
</script>

<style>
.cur>a{
    color: #2d82cf;
	border-bottom: 3px solid #2d82cf;
}
*{
	margin: 0;
	padding: 0;
	list-style: none;
}
a{text-decoration: none;}
.header {
	height:42px;
	width: 100%;
	background: rgba(0, 0, 0, .7);
}
.header img{
	width: 100px;
    margin-top: 5px;
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
	margin: 0;
	
}

.header .nav ul {
	display: flex;
}

.header .nav ul li {
	height:42px;
	line-height:42px;
	box-sizing: border-box;
	margin-right: 1px;
}

.header .nav ul.nav-left li a {
	color: #fff;
	height:42px;
	line-height:42px;
	margin: 0 30px 10px;
	padding-bottom: 8px;
	font-size: 16px;
}
.header .nav ul.nav-left li:first-child:hover a {
	border-bottom:none;
}
.header .nav ul.nav-left li:hover a {
	color: #2d82cf;
	border-bottom: 3px solid #2d82cf;
}

.header .nav ul.nav-left li.cur>a {
	color: #2d82cf;
	border-bottom: 3px solid #2d82cf;
}
.header .nav ul.nav-right{
	line-height:42px;
	color: #fff; 
}
.header .nav ul.nav-right a{
	color: #fff;
	padding: 0 20px;
	font-size: 12px;
	
}
.header .nav ul.nav-right a:hover{
	text-decoration: underline;
}
.header .nav ul.nav-right li {
	background: #094986;
	overflow: hidden;
}
.header .nav ul.nav-right li:hover>span{
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
#inStorng{
	color: #fff;
	width: 120px;
	text-align: center;
	cursor: pointer;
}
#inStorng a{
	font-size: 14px;
}
</style>