<template>
	<div class="doctor">
		<div class="container clearfix vievone" id="vievtr">
			<h2>视频专区<router-link :to="{name:'doctorvideo'}">more>></router-link></h2>
			
			
				<div class="video-all" v-for="video in videos" @click="tolinkV(video.id)">
					<video id="my-player" class="video-js vjs-big-play-centered" controls preload="none" data-setup="{}" 					width="350" height="200">
						
					</video>
					<p class="el-icon-caret-right"></p>
					<h4>{{video.name}}</h4>
				</div>
			   <!-- <source src="movie.ogg" type="video/ogg">-->
		</div>
		<div class="container vievone" id="pictextall">
			<h2>图文专区 <router-link :to="{name:'doctorpro'}">more>></router-link></a></h2>
			<div class="row pictext" v-for="t in texts"  @click="tolink(t.articleId)">
				<h3>{{t.title}}</h3>
				<p class="text-primary branch-name" >{{t.description}}</p>
				<div class="col-xs-12 imgflex" v-show="t.imgUrl != ''">
					<a href="#" class="thumbnail">
						<img :src="t.imgUrl">
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				texts:[],
				videos:[]
			}
		},
		methods:{
			tolink(id){
				let routeData = this.$router.resolve({
			          path: 'doctordestails',
			          query: {
			            id: id
			          }
			       });
			       window.open(routeData.href,"_blank");
			},
			tolinkV(id){
				let routeData = this.$router.resolve({
					name:"doctorvideoDetails",
					query:{
						id:id
					}
				});
				window.open(routeData.href,"_blank");
			},
			getVideos(){
				this.$axios.get("../../static/json/video.json")
				.then((res)=>{
					this.videos = res.data.data.reverse().slice(0,6);
				})
			},
			getPicText(){
				//生活养生		
				this.$axios.post("/strong_portal_site/article/selectArtileByType",{
					dictId :201907020929450000,
					status :1
				})
				.then((res)=>{
					this.texts = res.data.resultObj.articlList;
					console.log(this.texts)
				});
				}
		},
		created(){
			this.getVideos();
			this.getPicText();
		}
		
	}
</script>

<style scoped="">
a{
	color: #333;
}
#vievtr h2{
	margin-bottom:20px ;
}
.doctor {
    border-bottom: 1px solid #ccc;
    margin-top: 80px;
}

.doctor .doctor-left {
	display: table-cell;
	text-align: center;
}

.doctor .doctor-left img {
	width: 380px;
}

.doctor .doctor-right {
	float: right;
}

.doctor .doctor-right p {
	padding-top: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
}


/*videoall*/

.vievone {
	margin-bottom:30px;
}

.vievone h2 {
	border-bottom: 2px solid #2d82cf;
	padding-bottom: 10px;
	margin: 0;
}

.vievone h2 a {
	float: right;
	line-height: 50px;
	font-size: 18px;
}

.video-all {
	float: left;
	margin: 20px 14px;
	width: 350px;
	border-radius: 15px;
	position: relative;
}

.video-all video {
	border-top-left-radius: 15px;
	border-top-rIght-radius: 15px;
	width: 350px;
	height: 200px;
}

.video-all h4 {
	background: #ccc;
	font-size: 20px;
	margin: 0;
	height: 50px;
	line-height: 50px;
	text-align: center;
	border-bottom-left-radius: 15px;
	border-bottom-rIght-radius: 15px;
}


/*video的背景颜色*/
.vjs-poster {
	background-color: #eee;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}

.video-js {
	background-color: #fff;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}


/*视频悬停效果展示*/

.vievone .video-all {
	transition: all 1s;
}

.vievone .video-all:hover {
	color: #fff;
	transform: translateY(-10px);
}


/*video点击效果*/

video {
	outline: none;
}


/*视频相关的样式*/

.video-js .vjs-big-play-button {
	font-size: 2.5em;
	line-height: 2.3em;
	height: 2.5em;
	width: 2.5em;
	-webkit-border-radius: 2.5em;
	-moz-border-radius: 2.5em;
	border-radius: 2.5em;
	background-color: #73859f;
	background-color: rgba(115, 133, 159, .5);
	border-width: 0.15em;
}


/* 中间的播放箭头 */

.vjs-big-play-button .vjs-icon-placeholder {
	font-size: 1.63em;
}


/* 加载圆圈 */

.vjs-loading-spinner {
	font-size: 2.5em;
	width: 2em;
	height: 2em;
	border-radius: 1em;
	margin-top: -1em;
	margin-left: -1.5em;
	
}

.video-js.vjs-playing .vjs-tech {
	pointer-events: auto;
}


/*去除右下角的下载功能*/

video::-webkit-media-controls-enclosure {
	overflow: hidden;
}

video::-webkit-media-controls-panel {
	width: calc(100% + 30px);
}

.text-overflow() {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.branch-name {
	display: inline-block;
	max-width: 1170px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	/*.text-overflow();*/
}

.pictext {
	padding: 0px 20px;
	border-bottom: 1px solid #ccc;
	cursor: pointer;
	
}
.pictext:last-child{
	border-bottom:none;
}

/*图文专区图片弹性布局*/

.imgflex {
	display: flex;
}

.imgflex a {
	margin: 20px;
}

.imgflex a img {
	width: 250px;
	height: 150px;
}

p#imgAll {
    color: black;
    line-height: 30px;
    font-size: 14px;
}
#pictextall a{
	text-decoration: none;
	
}

.video-all p{
	cursor: pointer;
    position: absolute;
    left: 0;
    top: -12px;
    width: 350px;
    height: 212px;
    background: url(/static/img/vi.png) no-repeat center center !important;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.el-icon-caret-right:before {
	display: none;
    content: "\E791";
    font-size:70px;
    text-align: center;
    color: #ccc;
    border: 4px solid;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.video-all p:hover:before{
	display: block;
}
.pictext h3{
	padding-top: 20px;
	padding-bottom: 10px;
}
</style>