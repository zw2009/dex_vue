<template>
	<div class="newslist">
		<div class="newestArticleList main-box-nick" v-for="n in news" @click="todetails(n.articleId)">
			<div class="thinkTankTag clearfix">
				<div class="img pull-left">
					<img :src="n.imgUrl">
				</div>
				<div class="text pull-right">
					<h2>{{n.title}}</h2>
					<div class="box-lables clearfix">
						<div class="typeName pull-left">
							<span class="name">{{n.copyfrom}}</span>
						</div>
						<div class="fr pull-right">
							<div class="time">{{GetDateStr(n.update_time)}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="block phonage">
		    <span class="demonstration"></span>
		    <el-pagination
		      @current-change="handleCurrentChange"
		      :current-page="currentPage"
		      :page-sizes="[10, 20, 30, 40]"
		      :page-size="pageSize"
		      layout="total, prev, pager, next"
		      :total="total">
		    </el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
		  return {
		  	total:1000, //默认数据总条数
			pageSize:10, //每页的数据条数
			currentPage:1, //当前页
			news:[] //返回数据
		  }
		},
		methods:{
			//点击下一页和点击页码时执行
			handleCurrentChange(val){ //当前页currentPage
				this.getnews(val);
			},
			getnews(val){
				this.$axios.post("/strong_portal_site/article/selectArtileByType",{
					dictId :201907020922390000,
					status :1,
					pageNo:val,
					pageSize:this.pageSize
				})
				.then((res)=>{
					if(res.data.resultCode == "1"){
						this.news = res.data.resultObj.articlList;
					}
				})
			}
		},
		created(){
			this.$axios.post("/strong_portal_site/article/selectArtileByType",{
					dictId :201907020922390000,
					status :1,
					pageNo:this.currentPage,
					pageSize:this.pageSize
				})
				.then((res)=>{
					if(res.data.resultCode == "1"){
						this.news = res.data.resultObj.articlList;
						this.total = res.data.resultObj.totalSize;
					}
				})
		}
  	}
</script>

<style scoped="">
	

	.el-pagination{
		width: 100%;
    	text-align: center;
    	margin-top: 40px;
	}
	h2 {
		margin: 0;
	}
	
	.contentWrap {
		width: 740px;
		background: #fff;
		border: 1px solid #e6e6e6;
		margin-left: 14px;
		padding-bottom: 55px;
		position: relative;
	}
	
	.main-box-nick {}
	/*翻页按钮*/
	
	.btn-box-nick {
		position: absolute;
		bottom: 4px;
		left: 22%;
	}
	/*首页尾页*/
	
	button.first-btn,
	button.last-btn {
		background: #fff;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	/*资讯数量 上一条 下一条*/
	
	button.twig {
		cursor: auto;
	}
	
	button.twig,
	button.prev-btn,
	button.next-btn,
	button.go-btn-nick {
		border: none;
		background: #fff;
		outline: none;
	}
	/*数字页码*/
	
	.num-box-nick button {
		border: 1px solid #CBCBCB;
		background: #fff;
		padding: 5px 10px;
		cursor: pointer;
	}
	/*数量输入*/
	
	.btn-box-nick input {
		width: 30px;
	}
	/*按钮禁用*/
	
	button.btnStyle {
		cursor: url(../../assets/health/jingyong.png), auto;
	}
	
	.main-box-nick .thinkTankTag {
		padding: 20px;
		border-bottom: 1px solid #f4f4f4;
	}
	
	.main-box-nick .thinkTankTag .img {
		width: 198px;
		height: 132px;
		overflow: hidden;
	}
	
	.main-box-nick .thinkTankTag .img img {
		width: 198px;
		height: 132px;
	}
	
	.main-box-nick .thinkTankTag .img img:hover {
		transform: scale(1.2);
		transition: all 1s;
		cursor: pointer;
	}
	
	.main-box-nick .thinkTankTag .text {
		width: 480px;
	}
	
	.main-box-nick .thinkTankTag .text h2 {
		height: 110px;
		font-size: 24px;
		line-height: 32px;
		font-weight: 400;
	}
	
	.main-box-nick .thinkTankTag .text h2:hover {
		cursor: pointer;
		color: #1d9dd1;
	}
</style>