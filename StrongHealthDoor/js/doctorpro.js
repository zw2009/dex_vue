/*图文专区渲染*/
$.ajax({
	type: "get",
	url: "json/pictext.json",
	success: function(result) {

		picText(result);
	},
	error: function(result) {
		console.log("读取失败！");
	}
});

/*图文渲染方法*/
function picText(result) {
	var result1 = result.data;
	/*取列表的前三个显示*/
	var res = result1;
	var cont1 = "";

	/*遍历第一层*/
	$.each(res, function(index, item) {
		cont1 += "<a target='_blank' href='doctorDetails.html?heaId=" + item.id + "'>" +
			'<div class="row pictext">' +
			'<h3>' + item.title + '</h3>' +
			'<p class="text-primary branch-name" id="imgAll">' + item.content + '</p>' +
			"</a>"
		cont1 += '<div class="col-xs-12 imgflex">'
		/*遍历第二层images*/
		console.log(item.images);
		$.each(item.images, function(index2, item2) {
			//alert(item.id);
			cont1 += '<a target="_blank" href="doctorDetails.html?heaId='+item.id+'" class="thumbnail">' +
					'<img src="' + item2.src + '" alt="...">' +
					'</a>'
		});
		cont1 += '</div>'
		cont1 += '</div>';
	})
	//追加图文列表至子集
	$("#pictextall").append(cont1);

	//跳转详情

}