<template>
	<div class="part-time">
		<div class="container">
			<h2>兼职简历编辑中...</h2>
			<div class="from-container">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="简历名称" prop="compname" required>
						<el-input v-model="ruleForm.compname" placeholder="请输入简历名称"></el-input>
					</el-form-item>
					<el-form-item label="应聘职位" prop="region" required>
						<el-input v-model="ruleForm.region" placeholder="请输入应聘职位"></el-input>
						</el-select>
					</el-form-item>
					<el-form-item label="姓名" prop="name" required>
						<el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
					</el-form-item>
					<el-form-item label="性别" prop="sex" required>
						  <el-radio v-model="ruleForm.sex" label="男">男</el-radio>
  						  <el-radio v-model="ruleForm.sex" label="女">女</el-radio>
					</el-form-item>
					<el-form-item label="是否公开">
					    <el-switch v-model="ruleForm.status"></el-switch>
					  </el-form-item>
					<el-form-item label="电话号码" prop="phone" required>
						<el-input v-model="ruleForm.phone" placeholder="请输入电话"></el-input>
					</el-form-item>
					<el-form-item label="出生日期" prop="birth" required>
						<el-date-picker v-model="ruleForm.birth" type="date" placeholder="选择日期">
						</el-date-picker>
					</el-form-item>
					<el-form-item label="空闲时间" prop="type1" required>
						<el-checkbox-group v-model="ruleForm.type1" size="medium" id="chekgroud">
							<el-checkbox-button v-for="t in types" :label="t.id" :key="t.id">{{t.day}}</el-checkbox-button>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="工作经验" prop="through" required>
						<el-select v-model="ruleForm.through" placeholder="请选择工作经验" required>
							<el-option :label="e.label" :value="e.dictId" v-for="e in experiencelist" :key="e.dictId"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="学历" prop="educat" required>
						<el-select v-model="ruleForm.educat" placeholder="请选择您的学历" required>
							<el-option :label="e.label" :value="e.dictId" v-for="e in educationlist" :key="e.dictId"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="求职区域" prop="area">
						<div  style="display: flex;">
							<span v-for="v in ruleForm.area" class="spanadd textover">
							{{v}}  <i class="el-icon-delete" @click="deleadd"></i>
						</span><el-input v-model="ruleForm.address" placeholder="请输入想工作的区域" @change="changeaddress(ruleForm.area)"></el-input>
						</div>
					</el-form-item>
					<el-form-item label="自我介绍" >
						<el-input type="textarea" v-model="ruleForm.content"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">编辑完成</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
						<el-button @click="caaback">返回</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
const Types = [ {id:1,day:'星期一上午'},
					{id:2,day:'星期二上午'},
					{id:3,day:'星期三上午'},
					{id:4,day:'星期四上午'},
					{id:5,day:'星期五上午'},
					{id:6,day:'星期六上午'},
					{id:7,day:'星期日上午'},
					{id:8,day:'星期一下午'},
					{id:9,day:'星期二下午'},
					{id:10,day:'星期三下午'},
					{id:11,day:'星期四下午'},
					{id:12,day:'星期五下午'},
					{id:13,day:'星期六下午'},
					{id:14,day:'星期日下午'}
			];
export default {
	data() {
		return {
			
			types: Types,
			quan: false,
			jian: false,
			experiencelist:[],//工作经验
			educationlist:[],//学历
			userid:JSON.parse(localStorage.getItem("user")).userId,
			options: [{
				value: '湖南省',
				label: '湖南省',
				children: [{
					value: '长沙市',
					label: '长沙市',
					children: [{
						value: '芙蓉区',
						label: '芙蓉区'
					}, {
						value: '天心区',
						label: '天心区'
					}, {
						value: '岳麓区',
						label: '岳麓区'
					}, {
						value: '开福区',
						label: '开福区'
					}, {
						value: '雨花区',
						label: '雨花区'
					}, {
						value: '长沙县',
						label: '长沙县'
					}, {
						value: '宁乡县',
						label: '宁乡县'
					}, {
						value: '浏阳市',
						label: '浏阳市'
					}]
				}]
			}],
			ruleForm: {
				compname: '',  //简历名称 
				region: '',		//职位类别
				name: '',		//姓名
				sex:'',   		 //性别
				phone: '',		 //电话
				birth: '',		//出生年月
				type1:[],      //空闲时间
				through: '',	//工作经验
				educat: '', 	//最高学历
				area: [],		//工作区域数组
				address:'',     //工作地点输入
				content: '',	//自我介绍
				status:true,	//是否公开
			},
			rules: {
				compname: [{
					required: true,
					message: '请输入简历名称',
					trigger: 'blur'
				}],
				region: [{
					required: true,
					message: '请选择职位类别',
					trigger: 'blur'
				}],
				pullprat: [{
					required: true,
					message: '请选择就职类型',
					trigger: 'change'
				}],
				sex: [{
					required: true,
					message: '请选择您的性别',
					trigger: 'change'
				}],
				type1: [{
					required: true,
					message: '请选择您的空闲时间',
					trigger: 'change'
				}],
				through: [{
					required: true,
					message: '请选择工作经验',
					trigger: 'change'
				}],
				salary: [{
					required: true,
					message: '请选择您的学历',
					trigger: 'change'
				}],
//				area: [{
//					required: true,
//					message: '请选择您求职的区域',
//					trigger: 'change'
//				}],
				name: [{
					required: true,
					message: '请输入姓名',
					trigger: 'blur'
				}],
				phone: [{
					required: true,
					message: '请输入电话',
					trigger: 'blur'
				}],
				birth: [{
					required: true,
					message: '请选择出生日期',
					trigger: 'blur'
				}],
			}
		};
	},
	created(){
		this.getData();//获取下拉列表数据
	},
	methods: {
		deleadd(e){//添加多个工作区域时删除功能
			this.ruleForm.area.splice(e,1);
		},
		changeaddress(){  //添加多个区域功能
			if(this.ruleForm.address !=''){
				this.ruleForm.area.push(this.ruleForm.address)
			}
		},
		//获取下拉的信息
		getData(){
			this.$axios.post("/strong_portal_site/dict/dictlist")
			.then((res)=>{
				if(res.data.resultCode == "1"){
					this.experiencelist = res.data.resultObj.experiencelist;  //工作经验
					this.educationlist = res.data.resultObj.educationlist;  //学历要求
				}
			})
		},
		submitForm(formName) {
			
			this.$refs[formName].validate((valid) => {
					if(valid) {
						//提交数据到后台
						this.$axios.post("/strong_portal_site/personalResume/savepersonalResume",{
							createUser:this.userid,    			//用户id
							resumeName:this.ruleForm.compname,	//简历名称
							positionName:this.ruleForm.region,	//应聘岗位
							name:this.ruleForm.name,			//姓名
							sex:this.ruleForm.sex,				//性别
							phone:this.ruleForm.phone,			//电话
							birthday:this.ruleForm.birth,		//出生年月
							freeTime:this.ruleForm.type1.join('，'),		//空闲时间
							experience:this.ruleForm.through,	//工作经验
							Salary:"",							//薪资待遇
							workRegion:this.ruleForm.area.join("、"),//工作区域
							workExperience:"",	    			//工作经历
							introduce:	this.ruleForm.content,	//自我介绍
							resumelType:"1"	,							//简历类型（1兼职，2全职）
							status:	Number(this.ruleForm.status),		//是否公开（1公开 0不公开）
							education:this.ruleForm.educat 				//学历要求
						})
						.then((res)=>{
							if(res.data.resultCode == "1"){
								this.$message({
						          message: res.data.resultMessage,
						          type: 'success'
						        });
						        this.$refs[formName].resetFields();
							}
						})
					} else {
						this.$message({
				          message: '保存失败，数据错误',
				          type: 'warning'
				        });
						return false;
					}
				});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
		pulpra() {
			let regin = this.ruleForm.pullprat;
			if(regin == '全职') {
				this.quan = true;
				this.jian = false;
			} else if(regin == '兼职') {
				this.jian = true;
				this.quan = false;
			}
		},
		caaback() {
			history.back(-1);
		}
	}
}
</script>

<style scoped="">
.spanadd{
	background: #eee;
	margin: 2px;
	border-radius: 5px;
	position: relative;
	padding-right:15px;
	width: 70px;
}
.spanadd i{
	position: absolute;
	right:0;
	top: 30%;
	color: red;
}
.el-form-item__error{
	padding-top: 0 !important;
}
.el-form-item {
    margin-bottom: 15px;
}
#chekgroud label:nth-child(8) {
	border-left: 1px solid #DCDFE6 !important;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
}

.part-time {
	margin-top:42px;
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
	padding-top:9px;
	width: 880px;
	margin: 0 auto;
}
</style>