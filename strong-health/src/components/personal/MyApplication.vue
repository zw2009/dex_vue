<template>
	<div class="application">
		<!--我的申请-->
		<div class="exrt" id="myApply">
			<h4><span>我的申请</span></h4>
			<!--发布第一条-->
			<div class="tit clearfix">
				<!--发布左边-->
				<div class="leftit">
					<div class="menu">
						<p><strong>内科医生</strong></p>
						<p>湖南思众健康管理有限公司</p>
						<p>申请于2019-05-26</p>
						<p>长沙-岳麓</p>
					</div>
				</div>
				<!--发布右边-->
				<div class="rigtit leftit">
					<div class="showpop">
						<p class="text-danger"><strong>5000-8000/月</strong></p>
						<a class="apply" href="javascript:;">近两月申请：<strong class="text-danger">20</strong>人</a>
					</div>
					<div class="delete">
						<strong class="text-danger reach" style="line-height: 80px;">刪除</strong>
					</div>
				</div>
			</div>
			<!--发布第一条-->
			<div class="tit clearfix">
				<!--发布左边-->
				<div class="leftit">
					<div class="menu">
						<p><strong>内科医生</strong></p>
						<p>湖南思众健康管理有限公司</p>
						<p>申请于2019-05-26</p>
						<p>长沙-岳麓</p>
					</div>
				</div>
				<!--发布右边-->
				<div class="rigtit leftit">
					<div class="showpop">
						<p class="text-danger"><strong>5000-8000/月</strong></p>
						<a class="apply" href="javascript:;">近两月申请：<strong class="text-danger">20</strong>人</a>
					</div>
					<div class="delete">
						<strong class="text-danger reach" style="line-height: 80px;">刪除</strong>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="">
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