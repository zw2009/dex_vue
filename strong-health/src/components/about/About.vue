<template>
	<div class="about">
		<div class="container">
			<article class="health clearfix about">
				<section class="health-left">
					<h3>关于我们</h3>
					<ul>
						<li class="cur">公司简介</li>
						<li>解决方案</li>
						<li>医事委员会</li>
						<li>员工风采</li>
						<li>联系我们</li>
					</ul>
				</section>
				<section class="health-right about-right">
					<ul id="about1">
						<li>
							<p>湖南思众健康管理有限公司（以下简称公司）作为一家医疗产业投资管理机构，是中国基层医疗的新生优秀力量，国家政策的践行者；旗下脉先森是孵化于长沙岳麓山、逐步拓展至全国的精品连锁门诊品牌。脉先森连锁门诊依托于公司自主研发的智能诊所管理云系统，高效规范的管理，先进的运营模式，已快速实现小规模、高密度、社区化的市场网络布局。</p>
							<p> 公司以医疗产业投资与管理、连锁诊所经营管理为产业主体，包括医疗机构的托管、收购、投资、控股、兼并；规划三年内建成一个全国拥有百家直营旗舰店、万家联盟诊所的大型医疗服务集团。</p>
						</li>
					</ul>
					<ul id="about2" style="display: none;">
						<li>
							<p>解决方案一</p>
							<p>解决方案详情~</p>
						</li>
					</ul>
					<ul id="about3" style="display: none;">
						<li>
							<p>医事委员会，凌驾于脉先森医疗机构之上，隶属于思众健康管理有限公司.医事委员会全面管理和决策与医疗质量、安全、效率相关的事务，包括：监督和协调各学科专业小组和相关行政部门的工作、审议及颁布医疗质量及安全相关的制度并监督执行</p>
							<p>医事委员会成员：</p>
							<p>主席：肖志杰(教授、主任医师)</p>
							<p>秘书长：罗勇奇（博士、副主任医师 ）</p>
						</li>
					</ul>
					<ul id="about4" style="display: none;">
						<li>
							<img src="img/yuangong.jpg" />
						</li>
					</ul>
					<ul id="about5" style="display: none;">
						<li>
							<dl>
								<dt>投资融资</dt>
								<dd>电话 / Tel: 0731-85491288</dd>
								<dd>手机 / Mobile:18773145788、 18942513051 </dd>
								<dd>邮箱 / Email:</dd>
							</dl>
							<dl>
								<dt>招商加盟</dt>
								<dd>电话 / Tel: 0731-82030215</dd>
								<dd>手机 / Mobile:18942513051、 18973101268 </dd>
								<dd>邮箱 / Email:</dd>
							</dl>
							<dl>
								<dt>商务合作</dt>
								<dd>电话 / Tel: 0731-82030215</dd>
								<dd>手机 / Mobile: </dd>
								<dd>邮箱 / Email:</dd>
							</dl>
							<dl>
								<dt>人力资源</dt>
								<dd>电话 / Tel: 0731-82030215</dd>
								<dd>手机 / Mobile: </dd>
								<dd>邮箱 / Email:</dd>
							</dl>
						</li>
					</ul>
				</section>
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

/*.about1 .about1-right .about-all h6 {
	background: url(../../../assets/about_icon_1.png) no-repeat left center;
	background-size: 25px 25px;
}*/

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

/*.about2-right h6 {
	background: url(../../assets/about_icon_2.png) no-repeat left center;
	background-size: 25px 25px;
}*/

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

/*.about3 .about3-right .about-all h6 {
	background: url(../../assets/about_icon_3.png) no-repeat left center;
	background-size: 25px 25px;
}*/

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

/*.about4 .about3-right .about-all h6 {
	background: url(../../assets/about_icon_4.png) no-repeat left center;
	background-size: 25px 25px;
}*/

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

/*.about5 .about3-right .about-all h6 {
	background: url(../../assets/about_icon_5.png) no-repeat left center;
	background-size: 25px 25px;
}*/

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
	margin-bottom: 10px;
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
	.about-right {
	width: 850px;
}

.about {
	padding-bottom: 175px;
	margin-top:50px ;
}

.about-right ul li {
	padding-top: 20px;
}

.about-right ul li p {
	text-indent: 2em;
}

.about-right ul li img {
	float: right;
	width: 800px !important;
	height: 500px !important;
}
</style>