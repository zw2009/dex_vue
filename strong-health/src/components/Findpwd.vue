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
										<input id="username" type="text" name="username" class="form-control" required="" placeholder="请输入手机号" value="">
									</div>
									<div class="form-group">
										<label>新密码</label>
										<input id="pwd" type="password" name="password" class="form-control" required="" placeholder="请输入密码" value="">
									</div>
									<div class="form-group">
										<label>确认密码</label>
										<input id="epwd" type="password" name="password_confirmation" class="form-control" required="" placeholder="请输入密码" value="">
									</div>
									<div class="form-group">
										<label>验证码</label>
										<div class="input-group mb-3">
											<input type="text" class="form-control" id="captcha" name="code" placeholder="请输入验证码" value="">
											<div class="input-group-append">
												<button class="btn btn-outline-secondary" type="button" id="getCode" onclick="send(this)">发送验证码</button>
											</div>
										</div>
									</div>
									<a class="btn btn-secondary btn-sm" id="findpwd">更新密码</a>
								</div>
								<div class="card-footer text-muted">
									<router-link :to="{name:'health'}"><span class="glyphicon glyphicon-home"></span>网站首页</router-link>
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