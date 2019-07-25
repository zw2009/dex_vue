<template>
	<div class="doctorcare">
		<!--右边悬浮-->
		<ul class="xianfu">
			<li>
				<router-link :to="{name:'doctormsg'}">个人中心 <i>1</i></router-link>
			</li>
			</li>
		</ul>
		
		<div class="container" >
			<div class="fabu">
				<router-link :to="{name:'publishrecruit'}">发布招聘</router-link>
				<!--<a href="jianzhifabu.html" type="button" class="btn btn-success">发布兼职招聘</a>-->
			</div>
			
			<!--职位切换-->
			<div class="job-change clearfix">
				<router-link :to="{name:'findfulltime'}">找工作</router-link>/
				<router-link :to="{name:'findparttime'}">找兼职</router-link>/
				<router-link to="searchresume" tag="a" target="_blank">搜简历</router-link>
				<p class="timejob">
					<button type="button" class="btn btn-link"><router-link :to="{name:'fulltime'}">全职简历创建</router-link></button>
					<!--<router-link :to="{name:'fulltimelook'}"><span class="glyphicon glyphicon-search" ></span>预览</router-link>--> /
					<button type="button" class="btn btn-link"><router-link :to="{name:'parttime'}">兼职简历创建</router-link></button>
					<!--<router-link :to="{name:'parttimelook'}"><span class="glyphicon glyphicon-search" ></span>预览</router-link> -->
				</p>
			</div>
			<!--职位展示-->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default { 
		name:"doctorcare",
	}
</script>

<style scoped>
thead th,tbody tr th,tbody tr td{
		text-align: center;
	}
.fabu a{
	padding: 6px 15px;
	background: #67c23a;
	color: #fff;
	border-radius: 5px;
}	

.job-change a {
	font-size: 16px;
}

.job-change p {
	float: right;
}

>>>.btn {
	padding:1px 5px !important;
}

nav {
	text-align: center;
}

.fott {
	position: fixed;
	left: 0;
	bottom: 0;
}
/*发布*/

.fabu {
	height: 50px;
	line-height: 30px;
	text-align: right;
	margin-top: 55px;
}

.fabu a {
	width: 100px;
	height: 30px;
	line-height: 30px;
	margin-right: 10px;
}

.xianfu {
	position: fixed;
	right: 10px;
	top: 200px;
	text-align: center;
}

.xianfu li {
	width: 60px;
	height: 40px;
	line-height: 40px;
	color: #fff;
	background: #2d2e2e;
	border-radius: 5px;
	cursor: pointer;
	margin-bottom: 1px;
}

.xianfu li a {
	color: #fff;
	position: relative;
	text-decoration: none;
	display: block;
}

.xianfu li a i {
	position: absolute;
	right: -9px;
	top: -13px;
	background: orange;
	border-radius: 50%;
	display: block;
	height: 15px;
	width: 15px;
	line-height: 15px;
}

.xianfu li:hover {
	background: #ff552e;
}


/*模态框居中*/

#modede {
	top: 40%;
	text-align: center;
}

/*简历投递*/
button.btn.btn-primary {
    width: 80px;
}
>>>tbody tr{
	cursor: pointer;
}
</style>