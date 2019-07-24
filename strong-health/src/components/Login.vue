<template>
	<div class="login">
		<div class="container mt-sm-5">
			<div class="d-none d-sm-block" style="margin-top: 200px;">
			</div>
			<div class="mt-5">
				<div class="row">
					<div class="col-sm-8 m-auto col-12">
						<div class="card shadow-lg bg-light">
							<div class="card-header bg-info text-light">
								<h5 class="m-0"><span class="glyphicon glyphicon-user"></span>用户登录</h5>
							</div>
							<div class="card-body">
								<form>
									<div class="form-group">
										<label>帐号</label>
										<input type="phone" class="form-control" ref="phone"  placeholder="请输入手机号码">
									</div>
									<div class="form-group">
										<label>密码</label>
										<input type="password" class="form-control" ref="pwd" placeholder="请输入您的登录密码">
									</div> 
									<input type="submit" class="btn btn-success btn-sm" value="登录" @click.prevent="login" />
								</form>
							</div>
							<div class="card-footer text-muted">
								<router-link to="/"><span class="glyphicon glyphicon-home"></span> 网站首页</router-link>
								<router-link to="/register"><span class="glyphicon glyphicon-plus"></span> 注册帐号</router-link>
								<router-link to="/findpwd"><span class="glyphicon glyphicon-search"></span>找回密码</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script> 

	export default{
		data(){
			return {
			}
		},
		methods:{
			login(){
				let phone = this.$refs.phone.value;
				let pwd = this.$refs.pwd.value;
				var myreg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/; //手机号码验证
				if(phone == '' || !myreg.test(phone)){
					this.$message.error("请输入正确的手机号码");
				}else if(pwd == ""){
					this.$message.error("请输入密码");
				}else{
					this.$axios.post("/strong_portal_site/user/userLogin",{
						loginName:phone,
						password:pwd
					}).then((res)=>{
						console.log(res)
						if(res.data.resultCode == "1"){
							this.$message({
					          message: '登陆成功',
					          type: 'success'
        					});
        				//保存用户类型企业用户还是个人用户
        				let obj = {type:1};
        				localStorage.setItem("type",JSON.stringify(obj));
        				
        				//把当前用户登录的返回信息放到sesstionStorage
        				sessionStorage.setItem("LoginUser",JSON.stringify(res.data.resultObj.token));
        				//把用户当前的信息放到vuex里面 
        				this.$store.commit('initUser',res.data.resultObj.token) 
						this.$router.push({
							path:'/'
						});
						}else{
							this.$message.error({
					          message: '账号不正确或密码错误',
        					});
						}
					})
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

form {
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

.container {
	width: 500px !important;
	margin: 0 auto;
	margin-bottom: 272px;
}
.btn{
	padding: 5px 15px;
}
.form-group{
	margin-bottom:14px;	
}
</style>