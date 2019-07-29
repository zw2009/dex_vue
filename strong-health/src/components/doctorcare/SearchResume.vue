<template>
	<div class="resume">
		
		<div class="conTop">
			<h4>简历列表</h4>
		</div>
		<div class="seadiv">
			<router-link to="/doctorcare/resumefull">全职简历</router-link>/
			<router-link to="/doctorcare/resumepart">兼职简历</router-link>
		</div>
		<div class="reslist">
			<router-view></router-view>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
		
				
			}
		},
		created(){
			
		},
		methods:{
		
		}
	}
</script>

<style scoped="">
em{
	font-style: normal;
}
.resume{
	width: 1000px;
	margin: 0 auto;
	margin-top: 70px;
	border: 1px solid #edeef0;
	margin-bottom: 50px;
}	
.conTop{
    background: #f7f7f7;
    height: 50px;
}
.conTop h4{
	margin: 0;
	line-height: 50px;
	padding: 0 20px;
}
.reslist{
	
}
.reslist ul li{
	padding: 30px 20px 30px 20px;
    border-bottom: 1px solid #edeef0;
    display: flex;
}
.reslist ul li .fl{
	width: 70%;
	display: flex;
	border-right:1px solid #eee;
}
.reslist ul li .fl img{
	cursor: pointer;
	width: 90px;
	height: 90px;
	margin: 4px 18px 0 0;
	border-radius: 50%;
}
.fl dl dt{
	cursor: pointer;
	font-size: 22px;
	color: #333;
}
.fl dl dt:hover{
	color: #ff552e;
}
.fl dl dt em{
	display: inline-block;
	font-size: 14px;
	width: 100px;
	text-align: center;
	border-right: 1px solid #eee;
}
.fl dl dd{
	color: #999;
	padding-top: 14px;
}
.fr{
	width: 30%;
}
.fr dl{
	padding-left: 40px;
}
.fr dl dd{
	padding-top: 14px;
}
.fr dl dd strong{
	color: #ff552e;
}
.block{
	text-align: center;
}
.seadiv{
	padding: 20px 10px;
}
</style>