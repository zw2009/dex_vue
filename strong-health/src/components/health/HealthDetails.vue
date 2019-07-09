<template>
	<div class="healthdetails">
		<div class="banner3"></div>
			<div class="qq_conent container">
				<h1>{{blog.title}}</h1>
				<div class="content-article" v-html="blog.content">
					
				</div>
			</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				nid:this.$route.query.nid,
				did:this.$route.query.did,
				lid:this.$route.query.lid,
				lnid:this.$route.query.lnid,
				blog:{}
			}
		},
		created(){
			this.$axios.get('../../static/json/health/news.json')
			.then((res)=>{
				var res = res.data.data;
				res.forEach((v,i)=>{
					if(this.nid == v.id){
						this.blog = v ;
						//console.log(this.blog)
					}
				})
			});
			this.$axios.get('../../static/json/health/disease.json')
			.then((res)=>{
				var res = res.data.data;
				res.forEach((v,i)=>{
					if(this.did == v.id){
						this.blog = v ;
						//console.log(this.blog)
					}
				})
			});
			this.$axios.get('../../static/json/health/life.json')
			.then((res)=>{
				var res = res.data.data;
				res.forEach((v,i)=>{
					if(this.lid == v.id){
						this.blog = v ;
						//console.log(this.blog)
					}
				})
			});
			this.$axios.get('../../static/json/health/lineNews.json')
			.then((res)=>{
				var res = res.data.data;
				res.forEach((v,i)=>{
					if(this.lnid == v.id){
						this.blog = v ;
						//console.log(this.blog)
					}
				})
			});
			
		},
		updated(){
			
		}
	}
</script>

<style scoped="">
>>>.content-article p{
	text-indent: 2em;
	position: relative;
}
>>>.content-article p img{
	width: 600px;
	height: 500px;
	display: block;
	margin: 0 auto !important;
}
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

.banner1{
	width: 1200px;
	height: 130px;
	margin: 20px auto;
	background:url(../../assets//wenhua1.jpg) no-repeat center center;
	background-size: 1200px 130px;
}
.banner3 {
	width: 1140px;
	height: 130px;
	margin: 55px auto;;
	background:url(../../assets//wenhua1.jpg) no-repeat center center;
	background-size: 1140px 130px;
}
.qq_conent {
	font-size: 20px;
}

.content-article a {
	font-size: 16px;
}
</style>