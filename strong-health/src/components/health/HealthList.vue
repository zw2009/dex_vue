<template>
	<div class="healthlist container">
		<div class="banner3">

		</div>
		<!--<el-button style="margin-bottom: 20px;"><router-link to="/">返回上一页</router-link></el-button>-->
		<div class=" clearfix">
			<!--左边切换-->
			<div class="leftLabel pull-left">
				<ul>
					<li v-for="(v,index) in labels" @click="chang(index),toLink(v.to)" :class="{cur:num == index}">
						<a>{{v.title}}</a>
					</li>
					
				</ul>
			</div>
			<!--中间内容部分-->
			<div class="contentWrap pull-left pagination-nick">
				
				<router-view></router-view>
				
			</div>
			<div class="rightLabel pull-right">
				<!--1-->
				<div class="flashRecom">
					<h2 class="functionTitle clearfix">
						<a href="javascript:void(0)" target="_blank" style="cursor: default;">行业新闻</a>
						<a href="javascript:void(0)" target="_blank" class="pull-right"></a>
					</h2>
					<div class="flashListWrap">
						<ul class="scrollbar scroll">
							<li class="blue" v-for="n in linenews">
								<p>{{n.title}}</p>
								<!--<span>1小时前</span>-->
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
	

<script>

	export default{
		components:{
	
		},
		data(){
			return {
				labels:[
					{id:1,title:"新闻资讯",to:"newslist"},
					{id:2,title:"疾病诊疗",to:"diseaselist"},
					{id:3,title:"生活养生",to:"liftlist"},
				],
				num:0, 
				linenews:[]
			}
		},
		created(){
			this.getlinenew()
		},
		methods:{
			chang(index,id){
				this.num = index;
			},
			toLink(route){
				this.$router.push({
					name:route
				})
			},
			getLink(){
				this.$route.query.id;
				alert(this.$route.query.id);
				
			},
			getlinenew(){
				//行业新闻
				this.$axios.post("/strong_portal_site/article/selectArtileByType",{
					dictId :201907020930290000,
					status :1
				})
				.then((res)=>{
					this.linenews = res.data.resultObj.articlList;
				})
			}
		}
	}
</script>

<style scoped="">
.container{
	margin-top:60px;
}
body {
	background: rgb(244, 244, 244);
}

h2 {
	margin: 0;
}
.scroll::-webkit-scrollbar {
     width: 6px;
    height: 10px;
    background-color: #fff;
}
 .scroll::-webkit-scrollbar-track {
     border-radius: 10px;
    background-color: #fff;
}
 .scroll::-webkit-scrollbar-thumb {
    height: 10px;
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.1);
    background-color: #e2e2e2;
}
a {
	text-decoration: none !important;
}

.container {
	padding: 0;
	margin-bottom: 55px;
	width: 1190px;
}
/*左边切换*/
.leftLabel {
	width: 140px;
	height:326px;
	background: #fff;
	border: 1px solid #e6e6e6;
}

.leftLabel ul {}

.leftLabel ul li {
	cursor: pointer;
	height: 44px;
	line-height:44px;
	text-align: center;
	border-bottom: 1px solid #f4f4f4;
}

.leftLabel ul li a {
	display: inline-block;
	width: 100%;
	height: 100%;
	font-size: 16px;
	color: #333;
}

.leftLabel ul li a:hover {
	background: #1D9ED2;
	color: #fff;
}

.leftLabel ul li.cur a {
	background: #1D9ED2;
	color: #fff;
}
.flashRecom h2.cur a,.flashRecom h2.cur{
	background: #1D9ED2;
	color: #fff;
}

/*中间部分*/

.contentWrap {
	width: 740px;
	background: #fff;
	border: 1px solid #e6e6e6;
	margin-left: 14px;
	padding-bottom:55px ;
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
button.first-btn,button.last-btn {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
}
/*资讯数量 上一条 下一条*/
button.twig{
	cursor: auto;
}
button.twig,button.prev-btn,button.next-btn,button.go-btn-nick {
    border: none;
    background: #fff;
    outline: none;
}
/*数字页码*/
.num-box-nick button{
	border: 1px solid #CBCBCB;
    background: #fff;
    padding: 5px 10px;
    cursor: pointer;
}
/*数量输入*/
.btn-box-nick input{
	width: 30px;
}
/*按钮禁用*/
button.btnStyle{
     cursor:url(../../assets/health/jingyong.png),auto;
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
/*右边*/
.rightLabel{
	width: 280px;
}
.flashRecom{
	    background: #fff;
    height: 550px;
    margin-bottom: 20px;
    border: 1px solid #e6e6e6;
}
.flashRecom h2{
	height: 44px;
	line-height: 44px;
    color: #333;
    font-size: 20px;
    border-bottom: 1px solid #F4F4F4;
    padding: 0 14px;
    position: relative;
}
.flashRecom h2:before {
	content: "";
    position: absolute;
    background: #1D9ED2;
    width: 4px;
    height: 20px;
    border-top-right-radius: 4px;
    top: 50%;
    margin-top: -10px;
    left: 0;
}
.flashRecom h2 a{
	color: #333;
    font-size: 20px;
}
.functionTitle a:last-child {
    font-size: 12px;
    color: #B2B2B2;
    line-height: 42px;
    font-weight: 400;
}
.flashListWrap {
    padding: 20px 8px;
}

.flashListWrap ul {
    height: 475px;
    padding: 0 13px 0 20px;
    overflow: auto;
}
.flashListWrap ul li{
	margin-bottom: 13px;
	list-style: disc;
}
.flashListWrap ul li p{
	    max-height: 36px;
    font-size: 14px;
    color: #333;
    letter-spacing: 0;
    line-height: 18px;
    margin-bottom: 4px;
    white-space: normal;
    text-overflow: ellipsis;
    overflow: hidden;
}
.flashListWrap ul li span{
	font-size: 12px;
    color: #B2B2B2;
}

.box-lables.clearfix {
    color: #000;
    opacity: .6;
}
</style>