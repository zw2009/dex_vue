/*视频专区内容渲染*/
$.ajax({
	type: "get",
	url: "json/video.json",
	async: false,
	success: function(result) {
		videoShow(result);

	},
	error: function(data) {
		console.log("读取失败!")
	}

});
function opensrc(aa){
	console.log(aa)
}

/*渲染视频专区方法*/
function videoShow(result) {
	var resall = result.data.reverse();
	//截取后台数据前6条展示
	var res = resall;
	var con = "";
	$.each(res, function(index, item) {

		con += '<div class="video-all">' +
				'<a target="_blank" href="doctorVideoDetails.html?vid='+item.id+'"><video id="my-player" class="video-js vjs-big-play-centered" controls preload="none"  data-setup="{}" width="350" height="200">' +
				'</video></a>' +
				'<h4>' + item.name + '</h4>' +
				'</div>';
	});
	$("#vievtr").append(con);

	//取到所有的videoDOM
	var videos = document.querySelectorAll("video");
	//遍历每个video
	for(var i = videos.length - 1; i >= 0; i--) {
		//闭包同时执行
		(function(i) {
			var p = i;

			//监听每个video的play事件
			videos[p].addEventListener("play", function() {
				pauseAll(p)
			})
		})(i)
	}

	//排除当前方法
	function pauseAll(index) {
		for(var j = videos.length - 1; j >= 0; j--) {
			if(j != index) {
				videos[j].pause();
			}
		}
	}
	//禁用video标签右键功能
	$("video").on("contextmenu", function() {
		return false;
	});

}