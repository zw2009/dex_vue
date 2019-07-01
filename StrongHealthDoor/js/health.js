/*功能区*/
$('.carousel').carousel({
	interval: 2000,
})

$("#myCarousel").mousemove(function() {
	$('a.left').stop().show();
	$('a.right').stop().show();
	$(this).find('p').css('text-decoration', 'underline');
})
$("#myCarousel").mouseout(function() {
	$('a.left').stop().hide();
	$('a.right').stop().hide();
	$(this).find('p').css('text-decoration', 'none');
})
var nleft = 0;
$("#i-previous").click(function() {
	nleft += 1112;
	if(nleft == 1112) {
		nleft = 0;
	}
	$('#inside_slide').css({
		'left': nleft + 'px',
		'transition': 'all 1s'
	});
})

$("#i-next").click(function() {
	nleft += -1112;
	if(nleft == -2224) {
		nleft = 0;
	}

	$('#inside_slide').css({
		'left': nleft + 'px',
		'transition': 'all 1s'
	});
})

//顶部菜单跳转传参
$(document).ready(function() {
	$(".health-left ul li").click(function() {
		let index = $(this).index();
		location.href = 'healthLists.html?cur=' + index;
	})
});
//新闻栏
$(document).ready(function() {
	$.ajax({
		type: "get",
		url: "json/health/news.json",
		async: true,
		success: function(res) {
			var resre = res.data.reverse();
			lenew(resre);
			renew(resre);
		},
		error: function(res) {
			console.log("请求失败！");
		}
	});
})

//左边新闻倒叙
function lenew(resre) {
	var reslice = resre.slice(0, 4);
	var con = '';
	$.each(reslice, function(i, v) {
		con += '<li>' +
			'<h3 class="textover"><a href="healthDetails.html?nid=' + v.id + '" target="_blank">' + v.title + '</a></h3>' +
			'<p class="textover">' + v.subtitle + '</p>' +
			'</li>';
	})
	$("#news ul").append(con);
}
//右边新闻顺序
function renew(resre) {
	var reslice = resre.slice(4, 7);
	var li = '';
	var div = '';
	var li1 = '';
	var div1 = '';
	$.each(reslice, function(i, v) {

		if(i == 0) {

			li = '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>';
			div = '<div class="item active">' +
				'<a target="_blank" href="healthDetails.html?nid=' + v.id + '"><img src="' + v.img + '">' +
				'<p>' + v.title + '</p></a>' +
				'</div>';
			//填充轮播图数
			$("#olnum").append(li);

			//填充轮播图
			$("#lunbotu").append(div);
		} else {

			li1 = '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>';
			div1 = '<div class="item">' +
				'<a target="_blank" href="healthDetails.html?nid=' + v.id + '"><img src="' + v.img + '">' +
				'<p>' + v.title + '</p></a>' +
				'</div>';
			//填充轮播图数
			$("#olnum").append(li1);

			//填充轮播图
			$("#lunbotu").append(div1);
		}

	});
}

//生活养生数据填充
$(document).ready(function() {
	$.ajax({
		type: "get",
		url: "json/health/life.json",
		async: true,
		success: function(res) {
			var resrev = res.data.reverse();
			var resli = resrev.slice(0, 3);
			var con = "";

			$.each(resli, function(i, v) {
				con += '<li><a target="_blank" href="healthDetails.html?lid=' + v.id + '">' +
					'<div class="column_content_info pull-left">' +
					'<h4>' + v.title + '</h4>' +
					'<p class="textover2">' + v.subtitle + '</p>' +
					'<span>' + v.time + '</span>' +
					'</div>' +
					'<div class="column_content_img pull-right">' +
					'<img src="' + v.img + '" />' +
					'</div>' +
					'</a></li>';
			});
			$('.column_content_ul').append(con);

		},
		error: function(res) {
			console.log("请求失败！");
		}
	});
});

function opnlife(lid) {
	location.href = "healthDetails.html?lid=" + lid;
}

/*疾病诊疗内容填充*/
$(document).ready(function() {
	$.ajax({
		type: 'get',
		url: 'json/health/disease.json',
		async: 'true',
		success: function(res) {
			var resrev = res.data.reverse();
			var ressli = resrev.slice(0, 8);
			var con = "";
			$.each(ressli, function(i, v) {
				con += '<li><a target="_blank" href="healthDetails.html?did=' + v.id + '">' +
					'<div class="openclass_img">' +
					'<img src="' + v.img + '" />' +
					'</div>' +
					'<p class="textover">' + v.title + '</p>' +
					'</a></li>';
			});
			$("#inside_slide").append(con);
		},
		error: function(res) {
			console.log("请求失败！");
		}
	})
});

/*行业新闻*/
$(document).ready(function() {
	$.ajax({
		type: "get",
		url: "json/health/lineNews.json",
		async: true,
		success: function(res) {
			var resrev = res.data.reverse();
			var ressli = resrev.slice(0, 9);
			var con = "";

			$.each(ressli, function(i, v) {
				con += '<li><a target="_blank" href="healthDetails.html?Nid=' + v.id + '">' + v.title + '</a></li>'
			});
			$(".column_right ul").append(con);
		},
		error: function(res) {
			console.log('error');
			console.log('error');
		}
	});
});