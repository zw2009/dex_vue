<template>
	<div class="part-time">
		<div class="container">
			<h2>全职简历创建中...</h2>
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
					<el-form-item label="电话号码" prop="phone" required>
						<el-input v-model="ruleForm.phone" placeholder="请输入电话"></el-input>
					</el-form-item>
					<el-form-item label="出生日期" prop="birth" required>
						<el-date-picker v-model="ruleForm.birth" type="date" placeholder="选择日期">
						</el-date-picker>
					</el-form-item>
					<el-form-item label="工作年限" prop="through" required>
						<el-select v-model="ruleForm.through" placeholder="请选择工作经验" required>
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
					
					
					<el-form-item label="工作区域" prop="area" required>
						<el-cascader :options="options" v-model="ruleForm.area"></el-cascader>
						<el-input v-model="ruleForm.address" placeholder="请输入详细地址" style="width: 71%;"></el-input>
					</el-form-item>

					<el-form-item label="工作经历" prop="desc">
						<el-input type="textarea" v-model="ruleForm.content"></el-input>
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
				quan: false,
				jian: false,
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
			caaback() {
				history.back(-1);
			}
		}
	}
</script>

<style scoped="">
	#chekgroud label:nth-child(8) {
		border-left: 1px solid #DCDFE6 !important;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	
	.part-time {
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
		padding-top: 20px;
		width: 880px;
		margin: 0 auto;
	}
</style>