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
			<!--搜索职位-->
			<div class="search" style="display: flex;">
				<input type="text" class="form-control" placeholder="请输入搜索内容" id="sea">
				<button class="btn btn-warning" type="submit" id="seach" style="width: 100px;">搜索</button>
			</div>
			<!--职位切换-->
			<div class="job-change clearfix">
				<router-link :to="{name:'findfulltime'}">找工作</router-link>/
				<router-link :to="{name:'findparttime'}">找兼职</router-link>
				<p class="timejob">
					<button type="button" class="btn btn-link"><router-link :to="{name:'fulltime'}">全职简历</router-link></button>
					<router-link :to="{name:'fulltimelook'}"><span class="glyphicon glyphicon-search" ></span>预览</router-link> /
					<button type="button" class="btn btn-link"><router-link :to="{name:'parttime'}">兼职简历</router-link></button>
					<router-link :to="{name:'parttimelook'}"><span class="glyphicon glyphicon-search" ></span>预览</router-link> 
				</p>
			</div>

			<!--外包层切换-->
			<div>
				<!--职位展示-->
				<router-view></router-view>
				
				<!--职位展示2-->
				
			</div>
		</div>

		<!--模态框弹窗-->
		<div class="modal bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="modede">
			<div class="modal-dialog modal-sm" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel">提示</h4>
					</div>
					<div class="modal-body">
						投递成功
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import foot from '@/components/Foot'
	
	export default { 
		name:"doctorcare",
		components:{
			foot
		}
	}
</script>

<style>
thead th,tbody tr th,tbody tr td{
		text-align: center;
	}
.fabu a{
	padding: 6px 15px;
	background: #67c23a;
	color: #fff;
	border-radius: 5px;
}	
.job-change {
	padding: 30px 0 20px 0;
}

.job-change a {
	font-size: 16px;
}

.job-change p {
	float: right;
}

.btn {
	padding: 1px 5px;
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
</style>