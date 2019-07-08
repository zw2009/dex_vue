<template>
	<div class="resume-list">
		<!--我的简历-->
		<div class="exrt" id="myResume">
			<h4><span>我的简历</span></h4>
			<!--发布第一条-->
			<div class="bs-example" data-example-id="simple-table">
				<table class="table">
					<thead>
						<tr>
							<th>姓名</th>
							<th>职位</th>
							<th>电话</th>
							<th>工作经验</th>
							<th>薪资要求</th>
							<th>全职/兼职</th>
							<th>编辑</th>
						</tr>
					</thead>
					<tbody class="timelook">
						<tr v-for="r in resumes" @click="tolink(r.parful)">
							<th scope="row">{{r.name}}</th>
							<td>{{r.type}}</td>
							<td>{{r.phone}}</td>
							<td>{{r.work}}</td>
							<td>{{r.pay}}</td>
							<th class="full-part">{{r.parful}}</th>
							<th class="text-danger deletem">删除</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			resumes:[
				{id:1,name:'王医生',type:'中医医生',phone:'18821887634',work:'3-5年',pay:'5000-6000元/月',parful:'全职'},
				{id:2,name:'张医生',type:'中医医生',phone:'18821887634',work:'3-5年',pay:'5000-6000元/月',parful:'兼职'},
				{id:3,name:'里医生',type:'中医医生',phone:'18821887634',work:'3-5年',pay:'5000-6000元/月',parful:'全职'},
				{id:4,name:'尼医生',type:'中医医生',phone:'18821887634',work:'3-5年',pay:'5000-6000元/月',parful:'兼职'},
				{id:5,name:'喀医生',type:'中医医生',phone:'18821887634',work:'3-5年',pay:'5000-6000元/月',parful:'全职'},
				{id:6,name:'顿医生',type:'中医医生',phone:'18821887634',work:'3-5年',pay:'5000-6000元/月',parful:'兼职'},
			]
		}
	},
	methods:{
		tolink(parful){
			if(parful == '全职'){
				this.$router.push({
					name:'fulltime'
				})
			}else{
				this.$router.push({
					name:'parttime'
				})
			}
		}
	}
}
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