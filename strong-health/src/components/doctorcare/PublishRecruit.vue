<template>
	<div class="publish-recruit">
		<div class="container">
			<h2>您正在发布招聘中...</h2>
			<div class="from-container">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="公司名称" prop="compname">
						<el-input v-model="ruleForm.compname" placeholder="请输入公司名称"></el-input>
					</el-form-item>
					<el-form-item label="职位类别" prop="region">
						<el-select v-model="ruleForm.region" placeholder="请选择职位类别" required>
							<el-option label="医生" value="医生"></el-option>
							<el-option label="护士" value="护士"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="招聘人数" prop="num" required>
						<el-input v-model="ruleForm.num" placeholder="请输入招聘人数"></el-input>
					</el-form-item>
					<el-form-item label="全职/兼职" prop="pullprat" required>
						<el-select v-model="ruleForm.pullprat" @change="pulpra" placeholder="请选择就职类型">
							<el-option label="全职" value="全职"></el-option>
							<el-option label="兼职" value="兼职"></el-option>
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
					<el-form-item label="时间要求" prop="type1" required v-if="jian">
						<el-checkbox-group v-model="ruleForm.type1" size="medium" id="chekgroud">
							<el-checkbox-button v-for="t in types" :label="t" :key="t">{{t}}</el-checkbox-button>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="经验要求" prop="through" required>
						<el-select v-model="ruleForm.through" placeholder="请选择经验要求" required>
							<el-option label="无经验" value="无经验"></el-option>
							<el-option label="应届生" value="应届生"></el-option>
							<el-option label="一年以下" value="一年以下"></el-option>
							<el-option label="1-3年" value="1-3年"></el-option>
							<el-option label="3-5年" value="3-5年"></el-option>
							<el-option label="5-10年" value="5-10年"></el-option>
							<el-option label="10年以上" value="10年以上"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="薪资待遇" prop="salary" required>
						<el-select v-model="ruleForm.salary" placeholder="请选择薪资待遇" required>
							<el-option label="1000-2000元" value="1000-2000元"></el-option>
							<el-option label="2000-3000元" value="2000-3000元"></el-option>
							<el-option label="3000-5000元" value="3000-5000元"></el-option>
							<el-option label="5000-8000元" value="5000-8000元"></el-option>
							<el-option label="8000-12000元" value="8000-12000元"></el-option>
							<el-option label="12000以上" value="12000以上"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="工作区域" prop="area" required>
						<el-cascader :options="options" v-model="ruleForm.area"></el-cascader>
						<el-input v-model="ruleForm.address" placeholder="请输入详细地址" style="width: 71%;"></el-input>
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
						<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>
						<el-button @click="caaback">返回</el-button>
					</el-form-item>
				</el-form>
			</div>

		</div>
	</div>
</template>

<script>
	const Types = ['星期一上午', '星期二上午', '星期三上午', '星期四上午', '星期五上午', '星期六上午', '星期日上午',
		'星期一下午', '星期二下午', '星期三下午', '星期四下午', '星期五下午', '星期六下午', '星期日下午',
	];
	export default {
		data() {
			return {
				types: Types,
				quan:false,
				jian:false,
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
					compname: '',
					region: '',
					num: '',
					pullprat: '',
					type: [],
					type1: [],
					through: '',
					salary: '',
					area:[],
					address:'',
					name:'',
					phone:'',
					content:'',
					ask:'',
					time:''
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
					
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log(this.ruleForm);
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
				if(regin == '全职') {
					this.quan = true;
					this.jian = false;
				} else if(regin == '兼职') {
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

<style scoped="">/
.el-form-item {
    margin-bottom: 13px;
}
#chekgroud label:nth-child(8) {
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
	width: 880px;
	margin: 0 auto;
}
</style>