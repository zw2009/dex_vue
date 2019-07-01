//点击选项公司时出现填写公司信息
 var val  = $(".individual-enterprise option:selected").text()

$(".individual-enterprise").change(function(){
	var ieo = $(".individual-enterprise option:selected").text()
	if (ieo == "个人账号") {
		$(".individual").hide();
		$("#register").text("个人注册");
	} else{
		$(".individual").show();
		$("#register").text("企业注册");
	}
})

//接收验证码
var code = '';
//发送验证码点击事件
var time = 5;
$("#getCode").click(function(){
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	var phone = $("#username").val();
	if(!myreg.test(phone)){
		alert("请输入正确的手机号码");
		return false;
	}
		$(this).prop('disabled', true);
		$(this).text(time + 's后重新发送');
		$(this).removeClass('btn-outline-secondary');
		
	var timer = setInterval(function() {
		time--;	
		$("#getCode").text(time + 's后重新发送');
		if(time == 0) {
			time = 5
			clearInterval(timer);
			$("#getCode").addClass('btn-outline-secondary');
			$("#getCode").prop('disabled', false);
			$("#getCode").text('重新发送验证码');
			code = '';
		}
	}, 1000);
	
	//向后台发送处理数据  
    $.ajax({  
        type: "POST", //用POST方式传输  
        dataType: "text", //数据格式:JSON  
        url: '', //目标地址  
        data: {
        	phone:phone,
        	code:code
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { 
        	
        },
        success: function (msg){
        	
        }
    });
})


//注册
$("#register").click(function() {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	var userName = $("#username").val();
	var uName = $("#uname").val();
	var pwd = $("#pwd").val();
	var rpwd = $("#epwd").val();
	var codephone = $("#captcha").val();
	if(userName == null || userName.trim() == "") {
		alert("账号不能为空!");
	}else if(!myreg.test(userName)){
		alert("请输入正确的手机号码!");
	} else if(uName == null || uName.trim() == "") {
		alert("昵称不能为空!");
	} else if(pwd == null || pwd.trim() == "") {
		alert("密码不能为空!");
	} else if(pwd != rpwd) {
		alert("两次密码不一致!");
	} else if(codephone == null || codephone.trim() == ""){
		alert("请输入验证码");
	} else {
		$.ajax({
			type: "post",
			url: registerUrl,
			async: true,
			data:{
				userName:userName,
				uName:uName,
				pwd:hex_md5(pwd),
				codephone:codephone
			},
			dataType: "json",
			success: function(res, status, xhr) {
				if(res.status == "0") {
					window.alert({
						title: "提示",
						content: "注册成功",
						buttons: ["确定", "取消"],
						callback: function(id, data, dataType, err) {
							if(data == "0") {
								window.location.href = "login.html";
							}
						}
					})
				} else {
					alert(res.message);
				}
			},
			error: function(xhr, type) {
				alert("ajax error!")
			}
		});
	}
})

