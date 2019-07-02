<template>
	<div class="register">
		<div class="container mt-sm-5">
			<div class="d-none d-sm-block" style="margin-top: 100px;"></div>
			<div class="mt-5">
				<div class="row">
					<div class="col-sm-8 col-12 m-auto">
						<form action="" method="post">
							<input type="hidden" name="_token" value=""> <input type="hidden" name="site_id" value="1">
							<div class="">
								<div class="card shadow-lg">
									<div class="card-header bg-info text-light">
										<h5 class="p-0 m-0"><span class="glyphicon glyphicon-user"></span>会员注册</h5>
									</div>
									<div class="card-body">
										<div class="form-group">
											<label>帐号</label>
											<input type="text" id="username" name="username" class="form-control" required="" placeholder="请输入手机号" value="">
										</div>
										<div class="form-group">
											<label>个人/企业</label>
											<select class="form-control individual-enterprise">
												<option value="0">个人账号</option>
												<option value="1">企业账号</option>
											</select>
										</div>
										<div class="form-group individual" style="display: none;">
											<label>企业名称</label>
											<input type="text" id="uname" name="name" class="form-control" required="" placeholder="请输入的企业名称" value="">
										</div>
										<div class="form-group">
											<label>密码</label>
											<input type="password" id="pwd" name="password" class="form-control" required="" placeholder="请输入不小于5位的登录密码" value="">
										</div>
										<div class="form-group">
											<label>确认密码</label>
											<input type="password" id="epwd" name="password_confirmation" class="form-control" required="" placeholder="请输入不小于5位的登录密码" value="">
										</div>
										<div class="form-group">
											<label>验证码</label>
											<div class="input-group mb-3">
												<input type="text" id="captcha" class="form-control" name="code" placeholder="请输入验证码" value="">
												<div class="input-group-append">
													<button class="btn btn-outline-secondary" type="button" id="getCode">发送验证码</button>
												</div>
											</div>
										</div>
										<a class="btn btn-success btn-sm" id="register">个人注册</a>
									</div>
									<div class="card-footer text-muted">
										<a href="index.html" class="mr-2"><span class="glyphicon glyphicon-home"></span>网站首页 </a>
										<a href="login.html" class="mr-2"><span class="glyphicon glyphicon-plus"></span>登录帐号</a>
										<a href="findpwd.html" class="mr-2"><span class="glyphicon glyphicon-search"></span>找回密码</a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<router-link to="/">返回主页</router-link>
	</div>
</template>

<script>
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
}
#register1{
	background: #337ab7;
	border-color: #337ab7;
}

</style>