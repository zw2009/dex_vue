<template>
	<div class="findpwd">
		<div class="container">
			<div class="d-none d-sm-block" style="margin-top: 200px;"></div>
			<div class="row">
				<div class="col-md-8 col-12 m-auto">
					<form action="" method="post" >
						<input type="hidden" name="_token" value="ef7lli0iqY01sTDJ7sNj9crphSGXBIsRco2NlIJ8"> <input type="hidden" name="site_id" value="1">
						<div class="mt-5">
							<div class="card shadow-lg">
								<div class="card-header bg-red text-light">
									<h5 class="p-0 m-0"><span class="glyphicon glyphicon-search"></span>找回密码</h5>
								</div>
								<div class="card-body">
									<div class="form-group">
										<label>帐号</label>
										<input type="text" class="form-control" ref="phone" placeholder="请输入手机号" @keydown="changeBtn">
									</div>
									<div class="form-group">
										<label>新密码</label>
										<input type="password" class="form-control" ref="pwd" placeholder="请输入密码">
									</div>
									<div class="form-group">
										<label>确认密码</label>
										<input type="password" class="form-control" ref="repwd" placeholder="请输入密码">
									</div>
									<div class="form-group">
										<label>验证码</label>
										<div class="input-group mb-3">
											<input type="text" class="form-control" ref="code" placeholder="请输入验证码" >
											<div class="input-group-append">
												<button class="btn btn-outline-secondary" type="button" @click="getCode" :disabled="btnBoolen">{{btnValue}}</button>
											</div>
										</div>
									</div>
									<!--<a class="btn btn-secondary btn-sm" id="findpwd">更新密码</a>-->
									<input type="submit" class="btn btn-secondary btn-sm" value="更新密码" @click.prevent="findpwd"/>
								</div>
								<div class="card-footer text-muted">
									<router-link :to="{name:'health'}" ><span class="glyphicon glyphicon-home"></span>网站首页</router-link>
									<router-link :to="{name:'login'}"><span class="glyphicon glyphicon-plus"></span>登录帐号</router-link>
									<router-link :to="{name:'register'}"><span class="glyphicon glyphicon-plus"></span>用户注册</router-link>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
	
<script>
	export default{
		data(){
			return{
				time:0,
				isrefreshpic:false,
				btnBoolen:true,
				btnValue:'获取短信验证码'
			}
		},
		methods:{
			findpwd(){
				let phone = this.$refs.phone.value;
				let pwd = this.$refs.pwd.value;
				let repwd = this.$refs.repwd.value;
				var myreg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/; //手机号码验证
				if (phone == "" || !myreg.test(phone)){
					alert("请输入正确的手机号码");
				}else if(pwd == ""){
					alert("请输入密码");
				}else if(pwd != repwd){
					alert("两次输入密码不一致");
				}else{
					let isCodeOk = this.getCodeValue();
					this.$router.push({path:'/login'});
					/*if(isCodeOk){
						//提交信息到后台
						this.$axios.post("127.0.0.1:8080/findpwd",{
							phone:phone,
							passwad:pwd
						}).then((res)=>{
							if(res.data.status == "0"){
								alert("密码修改成功");
								this.$router.push({path:'/login'});
							}
						})
					}*/
				}
				
				
				
			},
			changeBtn(){
				var myreg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/; //手机号码验证
				let phone = this.$refs.phone.value; 
				if(myreg.test(phone) || phone.length >= 10){
					this.btnBoolen = false;
				}else{
					this.btnBoolen = true;
				}
			},
			getCode(){
				this.isrefreshpic = true;
				if(this.isrefreshpic){
					let sj = Math.ceil(Math.random(10+1)*1000000);
					window.localStorage.setItem("code",sj);
					console.log(sj);
					this.time = 10;
					var timer = setInterval(()=>{
						this.time -- ;
						if(this.time < 0){
							clearInterval(timer);
							this.btnBoolen = false;
							this.btnValue = "获取验证码";
						}else{
							this.btnBoolen = true;
							this.btnValue = "还有"+this.time+"s后重新获取";
						}
					},1000);
				}
				
			},
			getCodeValue(){
				let code = this.$refs.code.value;
				let codes = window.localStorage.getItem("code");
				console.log(code,codes);
				if(code == ""){
					alert("请输入短信验证码");
				}else if (code == codes){
					console.log("验证码输入正确");
					return true;
				}else{
					alert("验证码不正确");
					return false;
				}
			}
		}
	}
</script>

<style scoped="">
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
	background-color: #f4645f !important;
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

.col-md-8 {
	width: 80.666667% !important;
}

.input-group {
	display: flex;
}

.container {
	width: 500px;
}
/*点击*/
#findpwd{
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
    background:#ccc;
    }
</style>