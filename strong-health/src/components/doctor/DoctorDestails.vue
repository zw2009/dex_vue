<template>
	<div class="doctor-details container">
		<article class="banner banner1">
		</article>
		<!--<el-button plain><a href="javascript:window.history.go(-1);">返回上一页</a></el-button>-->
		<div class="qq_conent">
			<h1>{{text.title}}</h1>
			<div class="content-article" v-html="text.content">
				
			</div>
		</div>

		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				text:{},
				id:this.$route.query.id
			}
		},
		methods:{
			getText(){
				this.$axios.post("/strong_portal_site/article/selectArtileById",{
					articleId :this.id,
					status :1
				})
				.then((res)=>{
					var res = res.data.resultObj.articlList;
					this.text = res;
				})
			}
		},
		created(){
			this.getText();
		}
	}
</script>

<style scoped="">
.qq_conent {
	padding-bottom: 50px;
	width: 900px;
	margin: 0 auto;
}

.qq_conent h1 {
	font-size: 38px;
	line-height: 1.5;
	margin-bottom: 25px;
	color: #333;
	margin-top: 8px;
}

>>>.content-article p {
	text-indent: 2em;
	line-height: 2.2;
	margin-bottom: 2em;
	overflow-wrap: break-word;
	word-wrap: break-word;
	font-size: 18px;
}

>>>.content-article p img {
	max-width: 600px;
	margin: 20px auto;
	display: block;
	vertical-align: middle;
}


/*广告位*/
.banner1 {
	width: 1140px;
	height: 130px;
	margin: 55px auto;;
	background:url(../../assets/wenhua1.jpg) no-repeat center center;
	background-size: 1140px 130px;
}
.qq_conent {
	font-size: 20px;
}

.content-article a {
	font-size: 16px;
}
</style>