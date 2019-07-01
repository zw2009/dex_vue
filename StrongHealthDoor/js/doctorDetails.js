var heaId = getUrlParam('heaId');
	
			/*获取数据遍历渲染*/
			$.ajax({
				type:"get",
				url:"json/pictext.json",
				async:true,
				dataType:"json",
				success:function(res){
					console.log(res.data)
					var con="";
					$.each(res.data,function(index,item){
					
						if(item.id == heaId){
							con+= '<h1>'+item.title+'</h1>'+
								  '<div class="content-article">'+item.contenta+'</div>';
						}
					})
					$(".qq_conent").append(con);
				},
				error:function(res){
					console.log("连接失败！")
				}
			});
			























