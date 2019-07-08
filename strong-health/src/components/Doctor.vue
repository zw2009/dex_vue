<template>
	<div class="doctor">
		<div class="container clearfix vievone" id="vievtr">
			<h2>视频专区<router-link :to="{name:'doctorvideo'}">more>></router-link></h2>
			
			<router-link tag="a" target="_blank" :to="{name:'doctorvideoDetails'}">
				<div class="video-all">
					<video id="my-player" class="video-js vjs-big-play-centered" controls preload="none" data-setup="{}" width="350" height="200">
					</video>
					<p class="el-icon-caret-right"></p>
						<h4>11111111</h4>
				</div>
			</router-link>
			<router-link tag="a" target="_blank" :to="{name:'doctorvideoDetails'}">
				<div class="video-all">
					<video id="my-player" class="video-js vjs-big-play-centered" controls preload="none" data-setup="{}" width="350" height="200">
					</video>
					<p class="el-icon-caret-right"></p>
						<h4>11111111</h4>
				</div>
			</router-link>
			<router-link tag="a" target="_blank" :to="{name:'doctorvideoDetails'}">
				<div class="video-all">
					<video id="my-player" class="video-js vjs-big-play-centered" controls preload="none" data-setup="{}" width="350" height="200">
					</video>
					<p class="el-icon-caret-right"></p>
						<h4>11111111</h4>
				</div>
			</router-link>
			<!--<video width="320" height="240" controls>
			   
			    <source src="movie.ogg" type="video/ogg">
			    您的浏览器不支持 video 标签。
			</video>-->
		</div>
		<div class="container vievone" id="pictextall">
			<h2>图文专区 <router-link :to="{name:'doctorpro'}">more>></router-link></a></h2>
			<div class="row pictext" v-for="t in texts"  @click="tolink(t.id)">
				<h3>{{t.title}}</h3>
				<p class="text-primary branch-name">{{t.content}}</p>
				<div class="col-xs-12 imgflex">
					<a href="#" class="thumbnail">
						<img :src="t.src" alt="...">
					</a>
					<a href="#" class="thumbnail">
						<img :src="t.src" alt="...">
					</a>
					<a href="#" class="thumbnail">
						<img :src="t.src" alt="...">
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import foot from '@/components/Foot'
	
	export default {
		data(){
			return{
				texts:[
				{id:1,title:'常见慢性气道疾病中大环内脂类抗菌药物怎么用?指南告诉你',content:'自从日本上世纪 80 年代发现大环内酯类用于治疗弥漫性泛细支气管炎取得良好的效果后，大环内酯类不依赖其抗菌作用的抗炎及免疫抑制效应就有了越来越多的研究，这对于常见的慢性呼吸系统疾病如慢性阻塞性疾病及支气管扩张等有重要或潜在的价值。 1. 大环内酯类抗菌药物 [1] 包括哪些？ 大环内酯类按化学结构，常见的大环内酯类抗生素有： (1)12 元环大环内酯类，如酒霉素等； (2)14 元环大环内酯类，包括红霉素、罗红霉素、克拉霉素、地红霉素等； (3)15 元环大环内酯类，以半合成的阿奇霉素为代表药物； (4)16 元环大环内酯类，包括螺旋霉素、乙酰螺旋霉素、麦迪霉素、交沙霉素、吉他霉素等。 其中的 14 元环、15 元环大环内酯类具有抗菌外作用。 2. 大环内酯类的抗菌外作用机制 [1] 主要包括以下五个方面： （1）抗炎效应：大环内酯类可抑制炎性细胞及其细胞因子和炎性介质，从而发挥抗炎作用； （2）调节气道分泌：气道黏液高分泌是多种慢性气道疾病的重要特征，可导致气流受限、纤毛黏液转运功能降低及反复的呼吸道感染；体内外试验均证实大环内酯类可以抑制黏液高分泌； （3）免疫调节相关抗微生物效应：大环内酯类即使在 MIC 以下仍能干扰细菌蛋白合成，且对大环内酯类耐药的铜绿假单胞菌也同样具有此活性',src:'http://u1.huatu.com/zhangxin/20150827/4.jpg'},
				{id:2,title:'常见慢性气道疾病中大环内脂类抗菌药物怎么用?指南告诉你',content:'自从日本上世纪 80 年代发现大环内酯类用于治疗弥漫性泛细支气管炎取得良好的效果后，大环内酯类不依赖其抗菌作用的抗炎及免疫抑制效应就有了越来越多的研究，这对于常见的慢性呼吸系统疾病如慢性阻塞性疾病及支气管扩张等有重要或潜在的价值。 1. 大环内酯类抗菌药物 [1] 包括哪些？ 大环内酯类按化学结构，常见的大环内酯类抗生素有： (1)12 元环大环内酯类，如酒霉素等； (2)14 元环大环内酯类，包括红霉素、罗红霉素、克拉霉素、地红霉素等； (3)15 元环大环内酯类，以半合成的阿奇霉素为代表药物； (4)16 元环大环内酯类，包括螺旋霉素、乙酰螺旋霉素、麦迪霉素、交沙霉素、吉他霉素等。 其中的 14 元环、15 元环大环内酯类具有抗菌外作用。 2. 大环内酯类的抗菌外作用机制 [1] 主要包括以下五个方面： （1）抗炎效应：大环内酯类可抑制炎性细胞及其细胞因子和炎性介质，从而发挥抗炎作用； （2）调节气道分泌：气道黏液高分泌是多种慢性气道疾病的重要特征，可导致气流受限、纤毛黏液转运功能降低及反复的呼吸道感染；体内外试验均证实大环内酯类可以抑制黏液高分泌； （3）免疫调节相关抗微生物效应：大环内酯类即使在 MIC 以下仍能干扰细菌蛋白合成，且对大环内酯类耐药的铜绿假单胞菌也同样具有此活性',src:'http://u1.huatu.com/zhangxin/20150827/4.jpg'},
				]
			}
		},
		methods:{
			tolink(id){
				let routeData =  this.$router.resolve({
			          path: 'doctordestails',
			          query: {
			            id: id
			          }
			       });
			   	window.open(routeData.href,'_blank');
			}
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