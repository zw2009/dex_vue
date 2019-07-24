<template>
	<div class="healthtitle">
		<div class="container">
			<article class="health clearfix">
				<section class="health-left">
					<ul>
						<li v-for="v in news">
							<a  @click="toLink(v.to,v.id)">{{v.title}}</a>
						</li>
					</ul>
				</section>
				<section class="health-content">
					<!--最新新闻和banner-->
					<div class="one-wrap clearfix" id="news">
						<!--左边新闻-->
						<div class="pull-left newsleft">
							<ul>
								<li v-for="v in newlists">
									<div @click="todetails(v.articleId)">
										<h3 class="textover">{{v.title}}</h3>
										<p class="textover">{{v.description}}</p>
									</div>
								</li>
							</ul>
						</div>
						<!--右边轮播图-->
						<div class="pull-right news-banner">
							<div class="block" >
								<span class="demonstration" style="width: 580px;display: block;"></span>
								<el-carousel trigger="click" height="300px" >
									<el-carousel-item v-for="v in banners" :key="v.img" style="cursor: pointer;"  @click.native="todetails(v.articleId)">
										<h3 class="textover">{{ v.title }}</h3>
										<img :src="v.imgUrl" alt="" width="100%" height="300" />
									</el-carousel-item>
								</el-carousel>
							</div>
						</div>
					</div>
					<!--疾病诊疗-->
					<div class="one-wrap twonew" id="disease">
						<h3>疾病诊疗 <i></i><router-link :to="{name:'diseaselist'}">更多</router-link></h3>
						<div class="newlist">
							<!--渲染时只允许遍历8条数据显示宽度已定-->
							<ul id="inside_slide" class="" style="width:2254px; left: 100px;" :style="{'left':nleft + 'px','transition':' all 2s'}">
								<li v-for="v in diseaseList">
									<div class="openclass_img">
										<span @click="todetails(v.articleId)"><img :src="v.imgUrl" /></span>
									</div>
									<p class="textover">{{v.title}}</p>
								</li>
							</ul>
							<i id="i-previous" @click="clickLeft()"><img src="../assets/health/left.png"/></i>
							<i id="i-next" @click="clickRight()"><img src="../assets/health/right.png"/></i>
						</div>
					</div>
					<!--生活养生-->
					<div class="one-wrap clearfix" id="life">
						<div class="column_left pull-left">
							<h3>生活养生<i></i><router-link :to="{name:'diseaselist'}">更多</router-link></h3>
							<ul class="column_content_ul">
								<li v-for="v in lifeLists">
									<div class="column_content_info pull-left">
										<div @click="todetails(v.articleId)">
											<h4>{{v.title}}</h4>
											<p class="textover2">{{v.description}}</p>
											<span>{{GetDateStr(v.update_time)}}</span>
										</div>
									</div>
									<div class="column_content_img pull-right">
										<img :src="v.imgUrl" />
									</div>
								</li>
							</ul>
						</div>
						<div class="column_right pull-left">
							<h3>行业新闻<i></i><router-link :to="{name:'diseaselist'}">更多</router-link></h3>
							<ul>
								<li v-for="v in lineNews" @click="todetails(v.articleId)">
									<a class="textover">{{v.title}}</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</article>
		</div>
	</div>
	
</template>

<script>
	
	export default {
		name: 'health',
		data() {
			return {
				news: [{
						id:1,
						title: "新闻资讯",
						to: "healthlist"
					},
					{
						id:2,
						title: "疾病诊疗",
						to: "healthlist"
					},
					{
						id:3,
						title: "生活养生",
						to: "healthlist"
					},
					{
						id:4,
						title: "行业新闻",
						to: "healthlist"
					},
				],
				newlists: [],
				banners:[],
				diseaseList: [],
				lifeLists:[],
				lineNews:[],
				nleft: 0
			}
		},
		created(){
			//新闻资讯
			this.$axios.post("/strong_portal_site/article/selectArtileList")
			.then((res)=>{
//				if(res.data.resultCode == "1"){
					this.newlists = res.data.resultObj.newsList.slice(0,4);//新闻资讯
					this.banners = res.data.resultObj.newsList.slice(5,8);//banner
					this.diseaseList = res.data.resultObj.diseaseList; //疾病诊疗
					this.lifeLists = res.data.resultObj.LifeList; //生活养生
					this.lineNews = res.data.resultObj.industryList;  //行业新闻

		})
		},
		methods: {
			clickLeft() {
				this.nleft += 1112;
				if(this.nleft == 1112) {
					this.nleft = 0;
				}
			},
			clickRight() {
				this.nleft += -1112;
				if(this.nleft == -2224) {
					this.nleft = 0;
				}
			},
			toLink(route,id){
				this.$router.push({
					name:route,
					query:{
						id:id
					}
				})
			}
			
		}
	}
</script>

<style scoped>
.el-carousel__item div{
	cursor: pointer;
}
.healthtitle {
	margin-top:55px;
}
/*轮播*/
.block {
	position: relative;
}
.el-carousel__item h3 {
	position: absolute;
	width: 100%;
	left: 0;
	top: 0;
	color: #fff;
	font-size: 20px;
	height: 50px;
	line-height: 50px;
	text-align: left;
	padding-left: 20px;
	background: #000;
	opacity: 0.5;
	box-sizing: border-box;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
}

.health .health-left ul {
	display: flex;
	font-size: 30px;
	color: #ccc;
	border-bottom: 1px solid #ccc;
	line-height: 50px;
	justify-content: center;
	
}

.health .health-left ul li {
	padding: 0 50px;
	height: 50px;
	line-height: 50px;
	cursor: pointer;
	position: relative;
}

.health .health-left ul li:last-child {
	border: none;
}

.health .health-left ul li a {
	color: #000;
	font-size: 18px;
}

.health .health-left ul li:after {
	content: "/";
	position: absolute;
	right: 0;
	top: 5px;
}

.health .health-left ul li.cur a {
	color: #0370d7;
}

.health .health-left ul li:hover a {
	color: #0370d7;
	font-size: 20px;
	transition: all 1s;
}
/*内容板块*/

.health-content {}

.one-wrap {
	padding-top: 50px;
}

.one-wrap .newsleft {}

.one-wrap .newsleft ul {
	width: 530px;
}

.one-wrap .newsleft ul li {
	cursor: pointer;
	margin-bottom: 18px;
}

.one-wrap .newsleft ul li h3 {
	font-size: 24px;
	line-height: 35px;
	margin-bottom: 3px;
}

.one-wrap .newsleft ul h3 a {
	color: #4c4a47;
	font-size: 24px;
}

.one-wrap .newsleft ul li p {
	font-size: 16px;
	color: #999;
}

.one-wrap .newsright {}
/*新闻*/

.twonew {
	height: 360px;
}

.column_right h3,
.twonew h3,
.column_left h3 {
	background: url(../assets/health/content_title_bg.png) no-repeat 0;
	padding-left: 20px;
}

.column_right h3 i,
.column_left h3 i,
.twonew h3 i {
	margin-left: 40px;
	display: inline-block;
	width: 880px;
	background: url(../assets/health/content_title_line.jpg) repeat-x;
	height: 20px;
}

.column_right h3 a,
.column_left h3 a,
.twonew h3 a {
	display: inline-block;
	width: 80px;
	height: 28px;
	font-size: 16px;
	margin-left: 12px;
	border: 1px solid #1bbc9b;
	border-radius: 28px;
	line-height: 28px;
	color: #1bbc9b;
	text-align: center;
}

.twonew .newlist {
	position: relative;
	height: 260px;
	width: 1138px;
	overflow: hidden;
}

.twonew .newlist i {
	position: absolute;
	top: 100px;
}

.twonew .newlist i#i-previous {
	left: -0px;
	cursor: pointer;
}

.twonew .newlist i#i-next {
	right: 0px;
	cursor: pointer;
}

.twonew .newlist i img {
	width: 19px;
}

.twonew .newlist ul {
	position: absolute;
	padding-left: 30px;
	top: 10px;
}

.twonew .newlist ul li {
	cursor: pointer;
	padding-top: 20px;
	float: left;
	width: 248px;
	height: 235px;
	margin-right: 30px;
	text-align: center;
}

.twonew .newlist ul li .openclass_img {
	width: 240px;
	height: 180px;
	border: 1px solid #ccc;
	box-shadow: 1px 1px 4px #ccc;
	overflow: hidden;
}

.twonew .newlist ul li img {
	width: 240px;
	height: 180px;
	margin: 0 auto;
	display: block;
}

.twonew .newlist ul li p {
	width: 240px;
	height: 46px;
	font-size: 15px;
	font-weight: bold;
	line-height: 60px;
	text-align: center;
	color: #545454;
}

.twonew .newlist ul li img:hover {
	transform: scale(1.2);
	transition: all 1s ease-in-out;
}
/*生活养生*/

.column_left {
	width: 550px;
}

.column_left h3 {}

.column_left h3 i {
	width: 300px;
}

ul.column_content_ul {
	padding: 0 10px;
}

ul.column_content_ul li {
	cursor: pointer;
	overflow: hidden;
	padding: 20px 0 10px 0;
	border-bottom: 1px dashed #e5e5e5;
}

ul.column_content_ul li:last-child {
	border: none;
}

ul.column_content_ul li .column_content_info {
	width: 370px;
	text-align: left;
}

ul.column_content_ul li .column_content_info h4 {
	font-size: 20px;
	color: #252525;
	width: 370px;
	word-break: keep-all;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

ul.column_content_ul li .column_content_info p {
	color: #888;
	font-size: 14px;
	line-height: 24px;
	height: 50px;
	overflow: hidden;
	
}

ul.column_content_ul li .column_content_info span {
	color: #888;
	line-height: 20px;
	font-size: 14px;
}

ul.column_content_ul li .column_content_img {
	width: 150px;
	overflow: hidden;
	border: 1px solid #ccc;
	height: 110px;
}

ul.column_content_ul li .column_content_img img {
	width: 150px;
	height: 110px;
}

ul.column_content_ul li .column_content_img img:hover {
	transform: scale(1.2);
	transition: all 1s;
}
/*行业新闻*/

.column_right {
	width: 550px;
	margin-left: 40px;
}

.column_right ul {
	padding-left: 30px;
	padding-top: 20px;
	color: #4cb590;
}

.column_right h3 {}

.column_right h3 i {
	width: 300px;
}

.column_right h3 a {}

.column_right ul li {
	list-style: disc;
	line-height: 50px;
	font-size: 16px;
	text-align: left;
}

.column_right ul li a {
	color: #788082;
	font-size: 16px;
	cursor: pointer;
}

#life {
	margin-bottom: 50px;
}
</style>