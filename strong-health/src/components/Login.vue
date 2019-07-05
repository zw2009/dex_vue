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
								<form onclick="return false">
									<input type="hidden" name="_token" value="">
									<div class="form-group">
										<label>帐号</label>
										<input id="sname" type="phone" name="phone" class="form-control" required="phone" placeholder="请输入手机号码">
									</div>
									<div class="form-group">
										<label>密码</label>
										<input id="spwd" type="password" name="password" class="form-control" required="" placeholder="请输入您的登录密码">
									</div>
									<div class="form-group">
										<label>个人/企业</label>
										<select class="form-control individual-enterprise">
											<option value="0">个人账号</option>
											<option value="1">企业账号</option>
										</select>
									</div>
									<button class="btn btn-success btn-sm" id="login">登&nbsp;&nbsp;录</button>
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
}
.btn{
	padding: 5px 15px;
}
.form-group{
	margin-bottom:14px;	
}
</style>