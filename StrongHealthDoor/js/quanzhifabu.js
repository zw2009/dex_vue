$('#back').click(function() {
	history.go(-1);
	return false;
});

/*$(document).on("change",".fullPart",function(){
	alert(111)
})*/
layui.use(['form', 'layedit', 'laydate'], function() {
	
	
	var form = layui.form,
		layer = layui.layer,
		layedit = layui.layedit,
		laydate = layui.laydate;

	//日期
	laydate.render({
		elem: '#date'
	});

	//自定义验证规则
	form.verify({
		title: function(value) {
			if(value.length < 5) {
				return '标题至少得5个字符啊';
			}
		},
		contact: function(value) {
			if(value.length < 4) {
				return '内容请输入至少4个字符';
			}
		},
		pass: [
			/^[\S]{4}$/, '密码必须4位，且不能出现空格'
		]
	});
	//兼职全职切换显示
	form.on('select(fullPart)', function(data){
		  if(data.value == "全职"){
		  	$(".time-request").hide();
		  	$(".job-benefits").show();
		  }else if(data.value == "兼职"){
		  	$(".time-request").show();
		  	$(".job-benefits").hide();
		  }else{
		  	return false;
		  }
	});
	//监听提交
	form.on('submit(savetime)', function(data) {
		//console.log(data)
		
		
		
		layer.alert(JSON.stringify(data.field), {
			title: '最终的提交信息'
		})
		return false;
	});

});