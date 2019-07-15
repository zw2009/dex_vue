<template>
	<div class="doctorvideo">
		<article class="banner banner1">
			<h2>视频专区列表</h2>
		</article>
		
		<div class="container clearfix vievone" id="vievtr">
			<h2>视频专区<a href="javascript:history.go(-1)">返回上一页</a></h2>
			<!--<router-link :to="{name:'doctorvideoDetails'}" > -->
				<div class="video-all" v-for="v in videos" @click="tolinkV(v.id)">
					<video id="my-player" class="video-js vjs-big-play-centered" controls preload="none" data-setup="{}" width="350" height="200">
					</video>
					<p class="el-icon-caret-right"></p>
					<h4>{{v.name}}</h4>
				</div>
			<!--</router-link>-->
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				videos:[]
			}
		},
		methods:{
			gitVideo(){
				this.$axios.get("../../../static/json/video.json").then((res)=>{
					this.videos = res.data.data.reverse()
				})
			},
			tolinkV(id){
				this.$router.push({
					name:'doctorvideoDetails',
					query:{
						id:id
					}
				});
			}
		},
		created(){
			this.gitVideo();
		}
	}
</script>

<style scoped="">
	.banner h2 {
		text-align: center;
		line-height: 100px;
		color: #fff;
		text-align: center;
	}
	#vievtr h2{
		margin-bottom:20px ;
	}
	a {
		color: #333;
	}
	/*videoall*/
	
	.banner1 {
		height: 100px;
		text-align: center;
		line-height: 100px;
		width: 1140px;
		margin: 60px auto 20px auto;
		background: url(../../assets/shipin1.jpg) no-repeat center center;
		background-size: 1140px 200px;
	}
	
	.vievone {
		margin-bottom: 55px;
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
	}
	
	.pictext:last-child {
		border-bottom: none;
	}
	
	.video-all p {
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
		font-size: 70px;
		text-align: center;
		color: #ccc;
		border: 4px solid;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	
	.video-all p:hover:before {
		display: block;
	}
</style>