<template>
	<div class="my-release">
		<!--我的发布-->
				<div class="exrt" id="myRelease">
					<h4><span>我的发布</span></h4>
					<!--发布第一条-->
					<div class="tit clearfix my-release">
						<h5>信息编号：1895354565654554</h5>
						<!--发布左边-->
						<div class="leftit">
							<img src="img/health/zhanwei.png" />
							<div class="menu">
								<p><strong>湖南思众医疗管理有限公司</strong></p>
								<p>中医医生</p>
								<p>2019-05-26 14:25</p>
								<p>长沙-岳麓</p>
							</div>
						</div>
						<!--发布右边-->
						<div class="rigtit leftit">
							<div class="showpop">
								<p class="text-success">全职</p>
								<router-link tag="a" target="_blank" class="text-danger visitor" :to="{name:'visitingjobsearch'}">查看来访求职者</router-link>
							</div>
							<div class="delete">
								<p>
									<a class="revise" href="javascript:void(0)">修改</a>
								</p>
								<p>
									<a class="rdelect" href="javascript:void(0)">彻底删除</a>
								</p>
							</div>
						</div>
					</div>
					<!--发布第一条-->
					<div class="tit clearfix my-release">
						<h5>信息编号：1895354565654554</h5>
						<!--发布左边-->
						<div class="leftit">
							<img src="img/health/zhanwei.png" />
							<div class="menu">
								<p><strong>湖南思众医疗管理有限公司</strong></p>
								<p>中医医生</p>
								<p>2019-05-26 14:25</p>
								<p>长沙-岳麓</p>
							</div>
						</div>
						<!--发布右边-->
						<div class="rigtit leftit">
							<div class="showpop">
								<p class="text-success">兼职</p>
								<router-link tag="a" target="_blank" class="text-danger visitor" :to="{name:'visitingjobsearch'}">查看来访求职者</router-link>
							</div>
							<div class="delete">
								<p>
									<a class="revise" href="javascript:void(0)">修改</a>
								</p>
								<p>
									<a class="rdelect" href="javascript:void(0)">彻底删除</a>
								</p>
							</div>
						</div>
					</div>
				</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
/*右边*/

.exrt {
	float: right;
	width: 880px;
	background-color: #fff;
}

.exrt h4 {
	margin: 0;
	height: 44px;
	line-height: 44px;
	color: #999;
	margin-bottom: 15px;
	border-bottom: 2px solid #efefef;
}

.exrt h4 span {
	color: #333;
	display: inline-block;
	height: 44px;
	line-height: 44px;
	border-bottom: 2px solid #ff6000;
}


/*我的发布内容*/

.tit {
	padding: 0 10px;
	border: 1px solid #f0f0f0;
	margin-bottom: 10px;
}

.tit:hover {
	border-color: #ffc466;
}

.tit h5 {
	margin: 0;
	height: 30px;
	line-height: 30px;
	background: #fafafa;
}

.tit .leftit {
	margin: 20px 0;
	float: left;
	border-right: 1px solid #f0f0f0;
	width: 50%;
	display: flex;
}

.tit .leftit:last-child {
	border-right: none;
}

.tit .leftit .menu {
	padding-left: 20px;
}

.tit .leftit .menu p {
	margin: 0;
	line-height: 22px;
}

.tit .rigtit {
	padding-left: 10px;
}

.tit .rigtit p {
	line-height: 30px;
}

.tit .rigtit .delete {
	padding-left: 200px;
}


/*面试邀请*/

.dw_table {
	position: relative;
	color: #666;
	background-color: #FFF;
}

.dw_table .title {
	height: 30px;
	line-height: 30px;
	background-color: #fafafa;
	border-top: 1px solid #eee;
}

.dw_table .el {
	height: 40px;
	line-height: 40px;
	font-size: 14px;
	overflow: hidden;
	padding: 0 5px;
	border-top: 1px solid #eee;
}

.el .t9 {
	height: 30px;
	line-height: 30px;
	font-size: 12px;
	color: #999;
	text-align: center;
}

.el span {
	display: inline-block;
	text-align: center;
}

.el .t9 {
	width: 300px;
}

.el .t10 {
	width: 400px;
}

.el .t11 {
	width: 160px;
}

.table>tbody>tr {
	border-bottom: 1px solid #ccc;
}

.table>tbody>tr>td {
	border-top: none;
	padding: 8px 0 2px 0;
}

.conts {
	width: 500px;
	cursor: pointer;
}

.leftit img {
	width: 100px;
	height: 100px;
}

.modal-sm {
	width: 500px;
	font-size: 16px !important;
}

.modal {
	top: 30%;
}

.apply {
	color: #000;
	cursor: default;
}

a.apply:hover {
	color: #000;
}
table th,table td{
	text-align: center;
}
tbody tr{
	cursor: pointer;
}
#modede2 .modal-dialog.modal-sm{
	width: 800px;
	font-size: 13px !important;
}
.delete .reach{
	cursor: pointer;
}
</style>