<template>
	<div class="full-time">
		
		<div class="container">
			<h2>全职简历编辑中...</h2>
			<div class="from-container">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" enctype="multipart/form-data">
					<el-form-item label="简历名称" prop="compname" required>
						<el-input v-model="ruleForm.compname" placeholder="请输入简历名称"></el-input>
					</el-form-item>
					<el-form-item label="上传图片" prop="compname" required>
						<div class="input-img">
							点击上传头像
							<input type="file" name="imgurl" id="imgurl" ref="imgurl" @change="getFile" value="" />
							<img :src="photoUrl"/>
						</div>
					</el-form-item>
					
					
					<el-form-item label="职位类别" prop="region">
						<el-select v-model="ruleForm.region" placeholder="请选择职位类别" required>
							<el-option :label="p.label" :value="p.dictId" v-for="p in positionlist" :key="p.dictId"></el-option>
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
					<el-form-item label="薪资要求" prop="salary" required>
						<el-select v-model="ruleForm.salary" placeholder="请选择薪资要求" required>
							<el-option :label="s.label" :value="s.dictId" v-for="s in Salarylist" :key="s.dictId"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="职位福利" prop="type" v-if="quan">
						<el-checkbox-group v-model="ruleForm.type">
							<el-checkbox label="五险一金" name="type"></el-checkbox>
							<el-checkbox label="包吃包住" name="type"></el-checkbox>
							<el-checkbox label="年底双薪" name="type"></el-checkbox>
							<el-checkbox label="周末双休" name="type"></el-checkbox>
							<el-checkbox label="交通补助" name="type"></el-checkbox>
							<el-checkbox label="饭补" name="type"></el-checkbox>
							<el-checkbox label="话补" name="type"></el-checkbox>
							<el-checkbox label="房补" name="type"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="求职区域" prop="area">
						<div  style="display: flex;">
							<span v-for="v in ruleForm.area" class="spanadd textover">
							{{v}}  <i class="el-icon-delete" @click="deleadd"></i>
						</span><el-input v-model="ruleForm.address" placeholder="请输入想工作的区域" @change="changeaddress(ruleForm.area)"></el-input>
						</div>
					</el-form-item>
					<el-form-item label="工作经历" prop="desc">
						<el-input type="textarea" v-model="ruleForm.content"></el-input>
					</el-form-item>
					<el-form-item label="自我介绍">
						<el-input type="textarea" v-model="ruleForm.introduce"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">编辑完成</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
						<el-button @click="caaback">返回</el-button>
					</el-form-item>
				</el-form>
			</div>

		</div>
		
		
		<!--<form method="post" action="/strong_portal_site/personalResume/savepersonalResume" @submit.prevent="comfirmAction" id="fileForm" enctype="multipart/form-data">
			<input type="file" @change="getFile" name="uploadFile">
			<input type="submit" value="提交">
		</form>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				Api:"http://192.168.0.209:8082/strong_portal_site/resumePhoto/",
				imageUrl: '', //上传图片路径
				loginName:JSON.parse(localStorage.getItem("user")).loginName,
				quan: false,
				jian: false,
				experiencelist:[],//工作经验
				educationlist:[],//学历
				Salarylist:[],  //薪资
				positionlist:[],//岗位数据展示
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
					region: '',  //职位类别
					name: '',    //姓名
					sex:'',       //性别
					phone: '',     //电话
					birth: '',     //出生年月
					through: '',   //工作经验
					salary: '',		//薪资要求
					area: [],       //工作区域
					address: '',    //工作地点输入
					content: '',    //工作经历
					introduce:'',	//自我介绍
					status:true,		//是否公开
					educat:''     //学历
				},
				rules: {
					compname: [{
						required: true,
						message: '请输入简历名称',
						trigger: 'blur'
					}],
					name: [{
						required: true,
						message: '请输入名字',
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
					through: [{
						required: true,
						message: '请选择工作经验',
						trigger: 'change'
					}],
					salary: [{
						required: true,
						message: '请选择薪资待遇',
						trigger: 'change'
					}],
					educat: [{
						required: true,
						message: '请选择您的学历',
						trigger: 'change'
					}],
//					area: [{
//						required: true,
//						message: '请选择工作区域',
//						trigger: 'change'
//					}],
//					address: [{
//						required: true,
//						message: '请输入详细地址',
//						trigger: 'blur'
//					}],
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
				},
				id:this.$route.query.id,
				imgUrl: {},
				photoUrl:''
			};
		},
		created(){
			this.getData();//获取下拉列表数据
			this.getDataid();//获取需要编辑的id数据
			
		},
		methods: {
			getFile(e){
		        console.log("e",e)
		        this.imgUrl=e.target.files[0];
		    },
			//获得所需编辑的id数据
			getDataid() {
				if(this.id){
					this.$axios.post("/strong_portal_site/personalResume/selectpersonalResumeById",{
						resumeId:this.id
					})
					.then((res)=>{
						if(res.data.resultCode =="1"){
						let data = res.data.resultObj.personalResume[0];
						this.ruleForm.compname = data.resumeName;
						this.ruleForm.region = data.position;
						this.ruleForm.name = data.name;
						this.ruleForm.sex = data.sex;
						this.ruleForm.phone = data.phone;
						this.ruleForm.birth = data.birthday;
						this.ruleForm.through = data.experience;
						this.ruleForm.address = data.workRegion;
						this.ruleForm.content = data.workExperience;
						this.ruleForm.introduce = data.introduce;
						this.ruleForm.salary = data.salary;
						this.ruleForm.educat = data.education;
						this.ruleForm.status = Boolean(data.status);
						this.photoUrl = data.photoUrl;
						console.log(res)
						}
					})
				}
			},
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
						this.Salarylist = res.data.resultObj.Salarylist; //薪资待遇
						this.positionlist = res.data.resultObj.positionlist; //职位
					}
				})
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
					let formData = new FormData();
					formData.append("resumeId","");
					formData.append("imgUrl",this.imgUrl);
					formData.append("createUser",this.userid);
					formData.append("resumeName",this.ruleForm.compname);
					formData.append("position",this.ruleForm.region);
					formData.append("name",this.ruleForm.name);
					formData.append("sex",this.ruleForm.sex);
					formData.append("phone",this.ruleForm.phone);
					formData.append("birthday",this.ruleForm.birth);
					formData.append("freeTime","");
					formData.append("experience",this.ruleForm.through);
					formData.append("salary",this.ruleForm.salary);
					formData.append("workRegion",this.ruleForm.area.join("、"));
					formData.append("workExperience",this.ruleForm.content);
					formData.append("introduce",this.ruleForm.introduce);
					formData.append("resumelType","2");
					formData.append("status",Number(this.ruleForm.status));
					formData.append("education",this.ruleForm.educat);
				
				const instance = this.$axios.create({
		          withCredentials: true
		         }) 
				// 添加请求头
		        instance.post('/strong_portal_site/personalResume/savepersonalResume', formData)
		          .then(res => {
		          if(res.data.resultCode == "1"){
						this.$message({
				          message: res.data.resultMessage,
				          type: 'success'
				        });
				        this.$refs[formName].resetFields();
				        console.log(res)
					}
		          })
		        console.log('formData.get(\'imgUrl\')=',formData.get('imgUrl'),this.userid)
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
.input-img{
	text-align: center;
	width: 50%;
	background: #fff;
	position: relative;
	border: 1px solid #ccc;
	border-radius: 5px;
}
.input-img input{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	opacity: 0;
}
.input-img img{
	position: absolute;
	right: -150px;
	top: 0;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border:1px solid #ccc;
}
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
	padding-top: 0px;
}
.el-form-item {
    margin-bottom: 6px;
}
#chekgroud label:nth-child(8) {
	border-left: 1px solid #DCDFE6 !important;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
}
.full-time {
	margin-top: 42px;
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
	position: relative;
	padding-top: 9px;
	width: 740px;
	margin: 0 auto;
}
>>>.el-form-item__error {
    color: #F56C6C;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 10px;
    left: 659px;
    width: 90px;
}
	/*图片上传*/
.uploadimg{
	position: absolute;
	top: 20px;
	left:-120px;
}
>>>.el-upload{
	width:100px;
	height: 140px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height:100px;
    border: 1px solid #ccc;
    line-height: 100px;
    text-align: center;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .avatar {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    display: block;
  }
>>>input.el-upload__input {
    opacity: 0;
}

</style>