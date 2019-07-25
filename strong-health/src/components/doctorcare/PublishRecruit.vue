<template>
	<div class="publish-recruit">
		<div class="container">
			<h2>{{title}}</h2>
			<div class="from-container">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="公司名称" prop="compname">
						<el-input  v-model="ruleForm.compname" placeholder="请输入公司名称"></el-input>
					</el-form-item>
					<el-form-item label="职位类别" prop="region">
						<el-select v-model="ruleForm.region" placeholder="请选择职位类别" required>
							<el-option label="医生" value="医生"></el-option>
							<el-option label="护士" value="护士"></el-option>
							<el-option label="药剂师" value="药剂师"></el-option>
							<el-option label="药房" value="药房"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="招聘人数" prop="num" required>
						<el-input v-model="ruleForm.num" placeholder="请输入招聘人数"></el-input>
					</el-form-item>
					<el-form-item label="全职/兼职" prop="pullprat" required>
						<el-select v-model="ruleForm.pullprat" :value="ruleForm.pullprat" @change="pulpra" placeholder="请选择就职类型">
							<el-option label="全职" value="1"></el-option>
							<el-option label="兼职" value="2"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="是否发布">
					    <el-switch v-model="ruleForm.delivery"></el-switch>
					</el-form-item>
					<el-form-item label="职位福利" prop="type" v-if="quan">
						<el-checkbox-group v-model="ruleForm.type">
							<el-checkbox label="1" name="type">五险一金</el-checkbox>
							<el-checkbox label="2" name="type">包吃包住</el-checkbox>
							<el-checkbox label="3" name="type">年底双薪</el-checkbox>
							<el-checkbox label="4" name="type">周末双休</el-checkbox>
							<el-checkbox label="5" name="type">交通补助</el-checkbox>
							<el-checkbox label="6" name="type">饭补</el-checkbox>
							<el-checkbox label="7" name="type">话补</el-checkbox>
							<el-checkbox label="8" name="type">房补</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="时间要求" prop="type1" required v-if="jian">
						<el-checkbox-group v-model="ruleForm.type1" size="medium" id="chekgroud">
							<el-checkbox-button v-for="t in types" :label="t.id" :key="t.id">{{t.day}}</el-checkbox-button>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="经验要求" prop="through" required>
						<el-select v-model="ruleForm.through" placeholder="请选择经验要求" required>
							<el-option :label="e.label" :value="e.dictId" :key="e.dictId" v-for="e in experiencelist"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="学历要求" prop="educat" required>
						<el-select v-model="ruleForm.educat" placeholder="请选择学历要求" required>
							<el-option :label="e.label" :value="e.dictId" :key="e.dictId" v-for="e in educationlist"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="薪资待遇" prop="salary" required>
						<el-select v-model="ruleForm.salary" placeholder="请选择薪资待遇" required>
							<el-option :label="s.label" :value="s.dictId" v-for="s in Salarylist" :key="s.dictId"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="工作区域" prop="area" required>
						<el-cascader :options="options" v-model="ruleForm.area"></el-cascader>
						<el-input v-model="ruleForm.address" placeholder="请输入详细地址" style="width: 65%;"></el-input>
					</el-form-item>
					<el-form-item label="联系人" prop="name">
						<el-input v-model="ruleForm.name" placeholder="请输入联系人姓名"></el-input>
					</el-form-item>
					<el-form-item label="联系电话" prop="phone">
						<el-input v-model="ruleForm.phone" placeholder="请输入联系电话"></el-input>
					</el-form-item>
					
					<el-form-item label="工作内容" prop="desc">
						<el-input type="textarea" v-model="ruleForm.content"></el-input>
					</el-form-item>
					<el-form-item label="职位要求" prop="desc">
						<el-input type="textarea" v-model="ruleForm.ask"></el-input>
					</el-form-item>
					<el-form-item label="工作时间" prop="desc">
						<el-input type="textarea" v-model="ruleForm.time"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">立即保存</el-button>
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
				title:"您正在发布招聘中...",
				types: Types,
				quan:false,
				jian:false,
				positionlist:[],//岗位职责数据展示
				experiencelist:[],//工作经验展示
				educationlist:[],//学历要求
				Salarylist:[], //薪资待遇
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
				getid:this.$route.query.id,
				user:{},
				ruleForm: {
					compname: '',  //公司名称
					region: '',    //职位类别
					num: '',       //招聘人数
					pullprat: '',  //全职、兼职
					delivery:true, //是否发布
					type: [],      //全职福利
					type1: [],     //兼职时间
					through: '',   //工作经验
					salary: '',    //薪资待遇
					area:[],       //工作地点
					address:'',    //详细地址
					name:'',       //联系人
					phone:'',      //联系电话
					content:'',    //工作内容
					ask:'',		   //职位要求
					time:'',		//工作时间
					educat:''       //学历要求
 				},
				rules: {
					compname: [{
						required: true,
						message: '请输入公司名称',
						trigger: 'blur'
					}],
					region: [{
						required: true,
						message: '请选择职位类别',
						trigger: 'change'
					}],
					num: [{
						required: true,
						message: '请选择招聘人数',
						trigger: 'blur'
					}],
					pullprat: [{
						required: true,
						message: '请选择就职类型',
						trigger: 'change'
					}],
					type1: [{
						type: 'array',
						required: true,
						message: '请至少选择一个时间',
						trigger: 'change'
					}],
					through: [{
						required: true,
						message: '请选择一种经验要求',
						trigger: 'change'
					}],
					educat: [{
						required: true,
						message: '请选择学历要求',
						trigger: 'change'
					}],
					salary: [{
						required: true,
						message: '请选择薪资待遇',
						trigger: 'change'
					}],
					area: [{
						required: true,
						message: '请选择工作区域',
						trigger: 'change'
					}],
					address: [{
						required: true,
						message: '请输入详细地址',
						trigger: 'blur'
					}],
					name: [{
						required: true,
						message: '请输入联系人',
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						message: '请输入联系电话',
						trigger: 'blur'
					}],
					des: [{
						required: true,
						message: '请输入内容',
						trigger: 'blur'
					}],
					
				}
			};
		},
		created(){
			this.changdata();//获取id修改数据
			this.user = JSON.parse(localStorage.getItem("user"));
			this.getData();
		},
		methods: {
			changdata(){
				if(this.getid){
				this.title = "您正在编辑招聘信息中...";
				this.$axios.post("/strong_portal_site/recruitInfo/selectRecruitInfoById",{
					recruitId :this.getid
				}).then((res)=>{
					if(res.data.resultCode){
						let data = res.data.resultObj.recruitInfo;
						this.ruleForm.compname = data.companyName; //公司名称
						this.ruleForm.region = data.positionName;    //招聘岗位
						this.ruleForm.num = data.recruitNum;    //招聘人数
						this.ruleForm.pullprat = data.recruitType;//招聘类型全职、兼职
						this.ruleForm.through = data.experience;  //工作经验
						this.ruleForm.salary = data.salary;      //薪资待遇
						this.ruleForm.educat = data.education ;  //学历要求
						//this.ruleForm.area = data.province;    //工作地点 省
						//this.ruleForm.area[1] = data.city;    //工作地点 市
						this.ruleForm.address = data.address;    //工作地点 区
						this.ruleForm.name = data.contactsName;   //联系人
//						this.user.userId = data.crateUser;       //发布人id从系统取
						this.ruleForm.phone = data.phone;        //联系电话
						this.ruleForm.content = data.workContent; //工作内容
						this.ruleForm.ask = data.requirements;    //职位要求
						this.ruleForm.time = data.workTime;       //工作时间
						this.ruleForm.delivery = Boolean(data.status);        //是否发布   
                     	//this.ruleForm.type = data.welfare;			//岗位福利
                        //this.ruleForm.type1 = data.timeRequirements;//兼职时间
	                    this.pulpra();//判断全职兼职显示
					}
					
				})
			}
			},
			//获取id修改发布招聘的信息
			getData(){
				this.$axios.post("/strong_portal_site/dict/dictlist")
				.then((res)=>{
					if(res.data.resultCode == "1"){
						this.experiencelist = res.data.resultObj.experiencelist;  //工作经验
						this.educationlist = res.data.resultObj.educationlist;  //学历要求
						this.Salarylist = res.data.resultObj.Salarylist; //薪资待遇
					}
				})
			},
			submitForm(formName) {
				console.log(this.ruleForm.area)
				this.$refs[formName].validate((valid) => {
					if(valid) {
						this.$axios.post("/strong_portal_site/recruitInfo/saveRecruitInfoList",{
							recruitId :this.getid,
							companyName:this.ruleForm.compname, //公司名称
							positionName:this.ruleForm.region,    //招聘岗位
							recruitNum:this.ruleForm.num,     //招聘人数
							recruitType:this.ruleForm.pullprat,//招聘类型全职、兼职
							experience:this.ruleForm.through,  //工作经验
							salary:this.ruleForm.salary,       //薪资待遇
							province:this.ruleForm.area[0],    //工作地点 省
   							city:this.ruleForm.area[1],    //工作地点 市
   							area:this.ruleForm.area[2], //区
   							address:this.ruleForm.address,    //详细地址
							contactsName:this.ruleForm.name,   //联系人
							crateUser:this.user.userId,        //发布人id从系统取
							phone:this.ruleForm.phone,         //联系电话
							workContent:this.ruleForm.content, //工作内容
							requirements:this.ruleForm.ask,    //职位要求
							workTime:this.ruleForm.time,        //工作时间
							status:Number(this.ruleForm.delivery),        //是否发布   1/0
                            welfare:this.ruleForm.type.join(''),			//岗位福利
                            timeRequirements:this.ruleForm.type1.join(','),//兼职时间
                            education:this.ruleForm.educat            //学历要求
						})
						.then((res)=>{
							if(res.data.resultCode == "1"){
								this.$message({
						          message: res.data.resultMessage,
						          type: 'success'
						       });
							}
						});
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			pulpra() {
				let regin = this.ruleForm.pullprat;
				if(regin == '1') {
					this.quan = true;
					this.jian = false;
				} else if(regin == '2') {
					this.jian = true;
					this.quan = false;
				}
			},
			caaback(){
				history.back(-1);
			}
		}
	}
</script>

<style scoped="">

.el-form-item {
    margin-bottom: 5px;
}

#chekgroud label:nth-child(6),#chekgroud label:nth-child(11) {
	border-left: 1px solid #DCDFE6 !important;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
}

.publish-recruit {
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
    left: 646px;
    width: 120px;
}
</style>