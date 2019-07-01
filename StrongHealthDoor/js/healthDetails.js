//新闻栏
var id = getUrlParam('nid');
if(id) {
	$.ajax({
		type: "get",
		url: "json/health/news.json",
		async: true,
		dataType: 'json',
		success: function(res) {
			var data = res.data;
			var con = "";
			$.each(data, function(i, v) {
				if(v.id == id) {
					con += '<h1>' + v.title + '</h1>' +
						'<div class="content-article">' + v.content + '</div>';
				}
			});
			$(".qq_conent").append(con);

		},
		error: function(res) {
			console.log("请求失败！");
		}
	});
}

//生活养生栏
var lid = getUrlParam('lid');
if(lid) {
	$.ajax({
		type: "get",
		url: "json/health/life.json",
		async: true,
		success: function(res) {
			var res = res.data;
			var con = "";
			$.each(res, function(i, v) {
				if(v.id == lid) {
					con += '<h1>' + v.title + '</h1>' +
						'<div class="content-article">' + v.content + '</div>';
				}
			});
			$(".qq_conent").append(con);
		},
		error: function(res) {
			console.log("请求失败！");
		}
	});
}

/*疾病诊疗*/
var did = getUrlParam('did');
if(did) {
	$.ajax({
		type: "get",
		url: "json/health/disease.json",
		async: true,
		success: function(res) {
			var res = res.data;
			var con = "";
			$.each(res, function(i, v) {
				if(v.id == did) {
					con += '<h1>' + v.title + '</h1>' +
						'<div class="content-article">' + v.content + '</div>';
				}
			});
			$(".qq_conent").append(con);
		}
	});
}

/*行业新闻*/
var Nid = getUrlParam('Nid');
if(Nid) {
	$.ajax({
		type: "get",
		url: "json/health/lineNews.json",
		async: true,
		success: function(res) {
			var res = res.data;
			var con = "";
			$.each(res, function(i, v) {
				if(v.id == Nid) {
					con += '<h1>' + v.title + '</h1>' +
						'<div class="content-article">' + v.content + '</div>';
				}
			});
			$(".qq_conent").append(con);
		}
	})
}