<template>
	<div class="full-time-look">
		<div class="container">
			<h2>全职简历预览...</h2>
			<div class="from-container">
				<el-form  label-width="100px" class="demo-ruleForm">
					<el-form-item label="简历名称" >
						{{ruleForm.resumeName}}
					</el-form-item>
					<el-form-item label="应聘职位">
						{{ruleForm.position}}
					</el-form-item>
					<el-form-item label="姓名">
						{{ruleForm.name}}
					</el-form-item>
					<el-form-item label="性别">
						{{ruleForm.sex}}
					</el-form-item>
					<el-form-item label="电话号码">
						{{ruleForm.phone}}
					</el-form-item>
					<el-form-item label="出生日期">
						{{ruleForm.birthday}}
					</el-form-item>
					<el-form-item label="工作年限">
						{{ruleForm.experienceLabel}}
					</el-form-item>
					<el-form-item label="薪资要求">
						{{ruleForm.salary}}
					</el-form-item>
					<el-form-item label="工作区域">
						{{ruleForm.workRegion}}
					</el-form-item>
					<el-form-item label="工作经历">
						{{ruleForm.workExperience}}
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="getId(ruleForm.resumeId)">编辑</el-button>
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
				id:this.$route.query.id,
				ruleForm: {},
			};
		},
		methods: {
			getData() {
				this.$axios.post("/strong_portal_site/personalResume/selectpersonalResumeById",{
					resumeId:this.id
				})
				.then((res)=>{
					if(res.data.resultCode =="1"){
						this.ruleForm = res.data.resultObj.personalResume[0];
					}
				})
			},
			getId(id){
				this.$router.push({
					name:"fulltime",
					query:{
						id:id
					}
				})
			},
			caaback() {
				history.back(-1);
			}
		},
		created(){
			this.getData();
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
	    margin-bottom: 160px;
}
</style>