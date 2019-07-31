<template>
	<div class="full-part-details">
		<div class="container">
			<!--顶部详细-->
			<div class="present clearfix">
				<div class="pull-left">
					<img src="../../../static/img/doctor.png"/>
				</div>
				<div class="pull-left">
					<dl>
						<dt><h3>{{presents.name}}</h3></dt>
						<dd><span>{{presents.sex}}</span><span>{{GetDateStr(presents.updateTime)}}</span><span>{{presents.educationLabel}}</span><span>{{presents.experienceLabel}}</span></dd>
						<dd>求职状态：求职中</dd>
						<dd>期望职位：{{presents.position}}</dd>
						<dd>期望地点：{{presents.workRegion}}</dd>
						<dd>期望薪资：{{presents.salary}}</dd>
						<dd>联系方式：{{presents.phone}}</dd>
					</dl>
				</div>
			</div>
			<!--下面内容-->
			<div class="job">
				<h3>工作经验</h3>
				<p>{{presents.workExperience}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				presents:{},
				id:this.$route.query.id
			}
		},
		created(){
			this.getData();
		},
		methods:{
			getData() {
				this.$axios.post("/strong_portal_site/personalResume/selectpersonalResumeById",{
					resumeId:this.id
				})
				.then((res)=>{
					if(res.data.resultCode =="1"){
						this.presents = res.data.resultObj.personalResume[0];
					}
				})
			},
		}
	}
</script>

<style scoped="">
.container{
	margin-top: 45px;
	padding: 40px;
	background: #eee;
    height: 722px;
}
.pull-left{
	padding-left: 40px;
}
.pull-left dl dt{
	padding: 10px 0;
}
.pull-left dl dd{
	padding: 10px 0;
}
.pull-left dl dd span{
	display: inline-block;
	padding: 0 20px;
	border-right: 1px solid #ccc;
}
.pull-left dl dd span:last-child{
	border: none;
}
.job{
	padding-left: 40px;
	margin-top: 40px;
}
.job p{
	padding: 20px 0;
}
</style>