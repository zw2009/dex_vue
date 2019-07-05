<template>
	<div class="abouthome">
		<article class="banner banner1"></article>
		<div class="container">
			<article class="about1">
				<img src="../../assets/about_img_1.png" />
				<div class="about1-right">
					<div class="about-all">
						<h6>About Us <router-link :to="{name:'about'}">更多>></router-link></h6>
						<div class="about-cen">
							公司简介
						</div>
						<p> 湖南思众健康管理有限公司（以下简称公司）作为一家医疗产业投资管理机构，是中国基层医疗的新生优秀力量，国家政策的践行者；旗下脉先森是孵化于长沙岳麓山、逐步拓展至全国的精品连锁门诊品牌。脉先森连锁门诊依托于公司自主研发的智能诊所管理云系统，高效规范的管理，先进的运营模式，已快速实现小规模、高密度、社区化的市场网络布局 </p>
					</div>
				</div>
			</article>
			<article class="about2 clearfix">
				<div class="about2-right">
					<div class="about-all">
						<h6>solution<router-link :to="{name:'about'}">更多>></router-link></h6>
						<div class="about-cen">
							解决方案
						</div>
						<p>公司以热忱、真诚、认真、奋进的态度对待每一位加盟者以及在经营运作系统中遇到的每一个困难。公司自成立之初便本着追求卓越，引领发展的目标，立志于营造 </p>

					</div>
				</div>
				<img src="../../assets/about_img_2.png" />
			</article>
			<article class="about2 about3 clearfix">
				<img src="../../assets/about_img_3.png" />
				<div class="about2-right about3-right">
					<div class="about-all">
						<h6>Medical Committee<router-link :to="{name:'about'}">更多>></router-link></h6>
						<div class="about-cen">
							医事委员会
						</div>

					</div>
				</div>

			</article>
			<article class="about2 about4 clearfix">

				<div class="about2-right about3-right">
					<div class="about-all">
						<h6>Staff presence<router-link :to="{name:'about'}">更多>></router-link></h6>
						<div class="about-cen">
							员工风采
						</div>
					</div>
				</div>
				<img src="../../assets/about_img_4.png" />
			</article>
			<article class="about2 about3 about5 clearfix">
				<img src="../../assets/about_img_5.png" />
				<div class="about2-right about3-right">
					<div class="about-all">
						<h6>Contact us<router-link :to="{name:'about'}">更多>></router-link></h6>
						<div class="about-cen">
							联系我们
						</div>
						<p>微信公众号搜索：脉先森门诊部 电话 / Tel：0731-82030215</p>
					</div>
				</div>

			</article>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="">
h6 {
	margin: 0;
	height: 50px;
	line-height: 50px;
	font-size: 20px;
	padding-left: 40px;
}

a {
	color: #999;
	float: right;
}

p {
	overflow: hidden;
	text-overflow: ellipsis;
	/*white-space: nowrap;*/
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.about-cen {
	height: 100px;
	border-left: 1px solid #ccc;
	line-height: 190px;
	text-indent: 3em;
	margin: 20px;
	color: #0e9af9;
	font-size: 18px;
}

.about1 {
	background: #f5f6fa;
	border-bottom: 1px solid #ccc;
	padding: 40px 80px;
	position: relative;
	margin-top: 55px;
}

.about1 img {
	position: relative;
	z-index: 2;
	width: 440px;
	height: 330px;
}

.about1 .about1-right {
	position: absolute;
	top: 10px;
	right: 180px;
	width: 600px;
	height: 280px;
	background: #fff;
	z-index: 1;
}

.about1 .about1-right .about-all {
	color: #999;
	padding-top: 40px;
	width: 400px;
	float: right;
	padding-right: 20px;
}

.about1 .about1-right .about-all h6 {
	background: url(../../assets/about_icon_1.png) no-repeat left center;
	background-size: 25px 25px;
}

.about1 .about1-right .about-all a {}

.about1 .about1-right .about-all .about-cen {}


/*公司治理*/

.about2 {
	background: #f5f6fa;
	border-bottom: 1px solid #ccc;
	padding: 40px 120px;
	height: 400px;
}

.about2-right {
	float: left;
	width: 300px;
	height: 200px;
	color: #777;
}

.about2-right h6 {
	background: url(../../assets/about_icon_2.png) no-repeat left center;
	background-size: 25px 25px;
}

.about2 img {
	float: right;
}


/*医事委员会*/

.about3 {
	background: #0195f9;
	height: 240px;
	margin-bottom: 70px;
	position: relative;
}

.about3 img {
	position: absolute;
	left: 120px;
	top: 55px;
}

.about3 .about3-right {
	float: right;
	width: 500px;
}

.about3 .about3-right .about-all {
	color: #fff;
}

.about3 .about3-right .about-all h6 {
	background: url(../../assets/about_icon_3.png) no-repeat left center;
	background-size: 25px 25px;
}

.about3 .about3-right .about-all h6 a {
	color: #fff;
}

.about3 .about3-right .about-all .about-cen {
	color: #fff;
	line-height: 100px;
}


/*员工风采*/

.about4 {
	height: 300px;
	padding-left: 200px;
}

.about4 img {
	float: right;
}

.about4 .about3-right .about-all h6 {
	background: url(../../assets/about_icon_4.png) no-repeat left center;
	background-size: 25px 25px;
}

.about4 .about3-right .about-all .about-cen {
	line-height: 100px;
}


/*联系我们*/

.about5 {
	background: #575961;
	height: 350px;
	padding-right: 20px;
}

.about5 img {
	left: 0;
}

.about5 .about3-right .about-all h6 {
	background: url(../../assets/about_icon_5.png) no-repeat left center;
	background-size: 25px 25px;
}

/*共用health页面样式*/

.health {}

.health .health-left {
	float: left;
	width: 200px;
	background: #fff;
	text-align: center;
}

.health .health-left h3 {
	font-style: italic;
	background: #0370d7;
	line-height: 50px;
	border-radius: 5px;
	color: #fff;
}

.health .health-left ul {
	border: 1px solid #ccc;
	border-radius: 5px;
}

.health .health-left ul li {
	cursor: pointer;
	border-bottom: 1px #ccc solid;
	height: 50px;
	line-height: 50px;
	font-size: 18px;
}

.health .health-left ul li:last-child {
	border: none;
}

.health .health-left ul li.cur {
	background: #ccc;
	color: #0370d7;
}

.health .health-right {
	float: right;
}

.health .health-right ul {}

.health .health-right ul li {
	cursor: pointer;
	border-bottom: 1px solid #ccc;
}

.health .health-right ul li:last-child {
	border: none;
}

.health .health-right ul li img {
	width: 260px;
	height: 140px;
}

.health .health-right ul li p {
	margin: 0;
	line-height: 30px;
}
</style>