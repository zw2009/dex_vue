<template>
	<div class="doctor-details">
		<article class="banner banner1">
		</article>
		<div class="qq_conent container">
			<h1>田里一大害草，过去常用来喂猪，如今成“长寿菜”，夏季请别错过</h1>
			<div class="content-article">
				田里一大害草，过去常用来喂猪，如今成“长寿菜”，夏季请别错<br /><br /><br /><br /><br />
				田里一大害草，过去常用来喂猪，如今成“长寿菜”，夏季请别错<br />
				田里一大害草，过去常用来喂猪，如今成“长寿菜”，夏季请别错
				田里一大害草，过去常用来喂猪，如今成“长寿菜”，夏季请别错<br />田里一大害草，过去常用来喂猪，如今成“长寿菜”，夏季请别错<br />
				田里一大害草，过去常用来喂猪，如今成“长寿菜”，夏季请别错<br />
				田里一大害草，过去常用来喂猪，如今成“长寿菜”，夏季请别错<br />
				田里一大害草，过去常用来喂猪，如今成“长寿菜”，夏季请别错
				
			</div>
		</div>

		</div>
	</div>
</template>

<script>
	export default{
		created(){
			console.log(this.$route.query.id);
		}
	}
</script>

<style scoped="">
.qq_conent {
	padding-bottom: 50px;
	width: 900px;
}

.qq_conent h1 {
	font-size: 38px;
	line-height: 1.5;
	margin-bottom: 25px;
	color: #333;
	margin-top: 8px;
}

.content-article p {
	text-indent: 2em;
	line-height: 2.2;
	margin-bottom: 2em;
	overflow-wrap: break-word;
	word-wrap: break-word;
	font-size: 18px;
}

.content-article p img {
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