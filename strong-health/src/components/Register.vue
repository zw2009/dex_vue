<template>
	<div class="register">
		<div class="container mt-sm-5">
			<div class="d-none d-sm-block" style="margin-top: 100px;"></div>
			<div class="mt-5">
				<div class="row">
					<div class="col-sm-8 col-12 m-auto">
						<form >
								<div class="card shadow-lg">
									<div class="card-header bg-info text-light">
										<h5 class="p-0 m-0"><span class="glyphicon glyphicon-user"></span>会员注册</h5>
									</div>
									<div class="card-body">
										<div class="form-group">
											<label>帐号</label>
											<input type="text" class="form-control" ref="phone" placeholder="请输入手机号" @keydown="btnYes"> 
										</div>
										<div class="form-group">
											<label>用户名</label>
											<input type="text" class="form-control" ref="user" placeholder="请输入用户名"> 
										</div>
										<div class="form-group">
											<label>个人/企业</label>
											<select class="form-control individual-enterprise" ref="changCom" @change="changeComy">
												<option value="3">个人账号</option>
												<option value="2">企业账号</option>
											</select>
										</div>
										<div class="form-group individual"  v-show="showCompy">
											<label>企业名称</label>
											<input type="text" class="form-control" ref="compy" placeholder="请输入的企业名称">
										</div>
										<div class="form-group">
											<label>密码</label>
											<input type="password" class="form-control" ref="pwd" placeholder="请输入登录密码">
										</div>
										<div class="form-group">
											<label>确认密码</label>
											<input type="password" ref="repwd" class="form-control" placeholder="请输入登录密码">
										</div>
										<div class="form-group">
											<label>验证码</label>
											<div class="input-group mb-3">
												<input type="text" class="form-control" ref="code" placeholder="请输入验证码">
												<div class="input-group-append">
													<button :disabled="btnBoolen" @click="getCodeValue" ref="btn" class="btn btn-outline-secondary"  type="button">{{btnValue}}</button>
												</div>
											</div>
										</div>
										<input type="submit" class="btn btn-success btn-sm" @click.prevent ="submitRegister" value="提交注册" />
									</div>
									<div class="card-footer text-muted">
										<router-link to="/"><span class="glyphicon glyphicon-home"></span>网站首页</router-link>
										<router-link to="/login"><span class="glyphicon glyphicon-plus"></span>登录帐号</router-link>
										<router-link to="/findpwd"><span class="glyphicon glyphicon-search"></span>找回密码</router-link>
									</div>
								</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"resgister",
		data(){
			return{
				showCompy:false,
				isrefreshpic:false,//判断是否发送验证码
				time:0,//定时器初始值
				btnBoolen:true,//disabled的初始值
				btnValue:"获取短信验证码"
			}
		},
		methods:{
				changeComy(){
					let changCom = this.$refs.changCom.value
					if(changCom == 2){
						this.showCompy = true;
						
					}else{
						this.showCompy = false;
						this.$refs.compy.value = "";
					}
				},
				submitRegister(){ //提交注册
					let phone = this.$refs.phone.value;
					let user = this.$refs.user.value;
					let pwd = this.$refs.pwd.value;
					let repwd = this.$refs.repwd.value;
					let code = this.$refs.code.value; //验证码
					let CompanyName = this.$refs.compy.value;
					let changCom = this.$refs.changCom.value; //判断是个人还是企业：3为个人2为企业
					var myreg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/; //手机号码验证
					if(this.showCompy == true && CompanyName == ""){
						this.$message.error("请输入企业名称");
					}else if(phone == "" || !myreg.test(phone)){
						this.$message.error("请输入正确的手机号码");
					}else if(user == ""){
						this.$message.error("请输入用户名");
					}else if(pwd.length < 6){
						this.$message.error("请输入不少于6位数的密码");
					}else if(pwd != repwd){
						this.$message.error("两次输入密码不一致")
					}else if(code == ""){
						this.$message.error("请输入验证码")
					}else{ 
							this.$axios.post('/strong_portal_site/user/userRegister',{
								loginName:phone,
								userName:user,
								password:pwd,
								companyname:CompanyName,
								userTyp:changCom,
								code:code
							}).then((res)=>{
								if(res.data.resultCode == "1"){
									this.$message({
							          message:res.data.resultMessage,
							          type: 'success'
							        });
							        this.$router.push({path:'/login'});
								}else{
									this.$message.error("信息填写不正确");
								}
							})
							
					
					}
				},
				getCodeValue(){
					//发送手机号码之后倒计时
					this.isrefreshpic = true;
					if(this.isrefreshpic){
						let phone = this.$refs.phone.value;
						//获取手机号码发送给后台
						this.$axios.post("/strong_portal_site/code/createCode",{
							phone:phone
						}).then((res)=>{
							if(res.data.resultCode == "1"){ //13272736646 zhangwei 123456 394620 思众 2
								this.$message({
						          message: res.data.resultMessage,
						          type: 'success'
						        });
						        this.send();//验证码倒计时
							}else{
								this.$message.error(res.data.resultMessage);
							}
							
						})
						
					}
				},
				send(){
					//设置定时器
					this.time = 120;
					let timer = setInterval(()=>{
						this.time--;
						if (this.time < 0) {
							clearInterval(timer);
							this.btnBoolen = false;
							this.btnValue = "获取短信验证码";
						}else{
							this.btnBoolen = true;
							this.btnValue = "还有"+this.time+"s重新获取";
						} 
					},1000);
				},
				btnYes(){//获取验证码的btn启用
					//因为是从零开始所以当输入10位手机号码之后启用btn按钮
					if(this.$refs.phone.value.length >= 10){
						this.btnBoolen = false;
					}else{
						this.btnBoolen = true;
					}
				}
				
			}
	}
</script>

<style scoped="">
* {
	margin: 0;
	padding: 0;
	font-style: normal;
}

.card {
	background: #fff;
	box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175)!important;
	border-radius: 10px;
}

.card h5 {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	height: 50px;
	line-height: 50px;
	margin: 0;
	background: #17a2b8!important;
	color: #fff;
	font-size: 20px;
}

.card h5 span {
	padding-right: 10px;
	padding-left: 20px;
}

.card-body {
	padding: 20px;
}

.card-footer {
	padding: .75rem 1.25rem;
	background-color: rgba(0, 0, 0, .03);
	border-top: 1px solid rgba(0, 0, 0, .125);
}

.col-sm-8 {
	width: 80.666667%;
}

.input-group {
	display: flex;
}

.container {
	width: 500px;
	margin: 0 auto;
	margin-bottom: 100px;
}
#register1{
	background: #337ab7;
	border-color: #337ab7;
}
.form-group{
	margin-bottom: 14px;
}
.btn{
	padding: 5px 10px;
}
</style>