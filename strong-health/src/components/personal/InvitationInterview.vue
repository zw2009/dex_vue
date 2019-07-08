<template>
	<div class="interview">
		<!--面试邀请-->
		<div class="exrt" id="invitation">
			<h4><span>面试邀请</span></h4>
			<div class="bs-example" data-example-id="hoverable-table">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>序号</th>
							<th>发件人</th>
							<th>主题</th>
							<th>时间</th>
							<th>编辑</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>湖南思众管理有限公司</td>
							<td class="textover conts">xx：您好，我们很高兴的通知您来参加我公司的面试，具体安排如邮件下方，请准时前来！ 面试公司：湖南思众管理有限公司 面试职位：理疗医生 面试时间：2019-03-20 10:00 面试地址：长沙市岳麓区奥克斯缤纷广场 联系人：人事1 联系电话：0731-77886655
							</td>
							<td>2019-03-18 17:06</td>
							<td class="delete2 text-danger">删除</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>湖南思众管理有限公司</td>
							<td class="textover conts">xx：您好，我们很高兴的通知您来参加我公司的面试，具体安排如邮件下方，请准时前来！ 面试公司：湖南思众管理有限公司 面试职位：理疗医生 面试时间：2019-03-20 10:00 面试地址：长沙市岳麓区奥克斯缤纷广场 联系人：人事2 联系电话：0731-77886655
							</td>
							<td>2019-03-18 17:06</td>
							<td class="delete2 text-danger">删除</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>湖南思众管理有限公司</td>
							<td class="textover conts">xx：您好，我们很高兴的通知您来参加我公司的面试，具体安排如邮件下方，请准时前来！ 面试公司：湖南思众管理有限公司 面试职位：理疗医生 面试时间：2019-03-20 10:00 面试地址：长沙市岳麓区奥克斯缤纷广场 联系人：人事3 联系电话：0731-77886655
							</td>
							<td>2019-03-18 17:06</td>
							<td class="delete2 text-danger">删除</td>
						</tr>
					</tbody>
				</table>
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