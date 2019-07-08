<template>
	<div class="full-time-look">
		<div class="container">
			<h2>全职简历预览...</h2>
			<div class="from-container">
				<el-form  label-width="100px" class="demo-ruleForm">
					<el-form-item label="简历名称" >
						米思科的简历
					</el-form-item>
					<el-form-item label="应聘职位">
						医生
					</el-form-item>
					<el-form-item label="姓名">
						米思科
					</el-form-item>
					<el-form-item label="性别">
						  男
					</el-form-item>
					<el-form-item label="电话号码">
						13975121124
					</el-form-item>
					<el-form-item label="出生日期">
						1995-05-06
					</el-form-item>
					<el-form-item label="工作年限">
						3-5年
					</el-form-item>
					<el-form-item label="薪资要求">
						5000-8000元/月
					</el-form-item>
					<el-form-item label="职位福利" >
						周末双休，五险一金
					</el-form-item>
					<el-form-item label="工作区域">
						湖南省长沙市岳麓区奥克斯缤纷广场
					</el-form-item>
					<el-form-item label="工作经历">
						1.电脑应用熟练，熟练操作word,excel,,Outlook, ERP等各种办公软件;
　　						2.勤奋上进好学，工作细心，条理清晰，踏实肯干，有很强的责任心;
　　						3.性格开朗乐观，善于人际交流和沟通，具备团队合作精神;
　　						4.喜好书法并有一定的书写能力。
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="putData">编辑</el-button>
						<el-button @click="caaback">返回</el-button>
					</el-form-item>
				</el-form>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					compname: '',
					region: '',
					name: '',
					sex:'',
					phone: '',
					birth: '',
					through: '',
					salary: '',
					area: [],
					address: '',
					content: '',
				},
			};
		},
		methods: {
			putData() {
				console.log("修改此条id数据并提交到服务器")
			},
			caaback() {
				history.back(-1);
			}
		},
		created(){
			console.log("获取id数据渲染")
		}
	}
</script>

<style scoped="">
.el-form-item{
	margin-bottom: 0;
}
.full-time-look{
	margin-top: 45px;
	margin-bottom: 20px;
}
#chekgroud label:nth-child(8) {
	border-left: 1px solid #DCDFE6 !important;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
}
.full-time {
	margin-top: 50px;
}
.container h2 {
	background: #ccc;
	margin: 0;
	padding: 15px;
	line-height: 22px;
	border-left: 5px solid #409EFF;
	border-radius: 0 2px 2px 0;
	background-color: #f2f2f2;
}
.from-container {
	width: 600px;
	margin: 0 auto;
}
</style>