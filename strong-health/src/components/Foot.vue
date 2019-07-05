<template>
	<div class="foot">
		<footer>
			<div class="footer-sy">
				<div class="foot-left">
					<ul>
						<li v-for="v in abous"><router-link :to="v.to">{{v.title}}</router-link></li>
					</ul>
					<address>版权所有：湖南思众云网络科技责任有限公司 	&nbsp;&nbsp;<a target="_blank" href="http://www.beian.miit.gov.cn">湘ICP备18018336号-2</a></address>
				</div>
				<div class="foot-right">
					<!--<img src="img/erweima.png">-->
					<!--<p>思众云公众号 </p>-->
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name:"foot",
		data(){
			return {
				abous:[
					{id:1,title:"关于我们",to:"abouthome"},
					{id:2,title:"问题反馈",to:""},
					{id:3,title:"帮助中心",to:""}
				]
			}
		}
	}
</script>

<style scoped="">
/*footer{
	position: fixed;
	left: 0;
	bottom: 0;
}*/

.foot-left li {
	cursor: pointer;
}

.foot-left li a {
	color: #fff;
	font-size: 14px;
}

footer {
	width: 100%;
	height: 170px;
	background: #2d2e2e;
}

footer .footer-sy {
	width: 1200px;
	margin: 0 auto;
	overflow: hidden;
	padding-top: 30px;
}

footer .footer-sy .foot-left {
	float: left;
	color: #fff;
	padding-top: 30px;
	padding-left: 150px;
}

footer .footer-sy .foot-left address {
	font-style: normal;
	font-size: 12px;
	color: #ccc;
}

footer .footer-sy .foot-left ul {
	padding-bottom: 20px;
	display: flex;
}

footer .footer-sy .foot-left ul li {
	padding-right: 100px;
}

footer .footer-sy .foot-right {
	float: right;
	font-size: 14px;
	color: #fff;
	padding-right: 150px;
}

footer .footer-sy .foot-right img {
	width: 85px;
	height: 85px;
}
address a{
	color: #ccc;
}

</style>