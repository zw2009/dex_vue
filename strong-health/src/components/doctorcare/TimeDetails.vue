<template>
	<div class="time-details">
		<div class="container">
			<div class="updata">
				<span>更新时间：{{GetDateStr(finds.updateTime)}}</span><span>浏览次数：0次</span><span>申请人数：0人</span>
			</div>
			<h2 class="jobsalxy clearfix">
				<span class="pull-left">{{finds.positionLabel}}医生</span>
				<span class="pull-right">{{finds.salaryLabel}}6-8k</span>
			</h2>
			<div class="compyname">
				<h4>{{finds.companyName}}</h4>
			</div>	
			<div class="welfare">
				<span>五险一金{{finds.welfare}}</span>
				<span>周末双休{{finds.welfare}}</span>
			</div>
			<div class="experience">
				<span>招聘人数:{{finds.recruitNum}}人</span><span>学历{{finds.experienceLabel}}</span><span>经验{{finds.educationLabel}}</span>
				<p>工作地址：{{finds.province}}-{{finds.city}}-{{finds.area}}-{{finds.address}}</p>
			</div>
			<div class="button">
				<button>申请职位</button>
			</div>
			<div class="description">
				<h4>岗位职责</h4>
				<dl>
					<dt>【职位要求】</dt>
					<dd>{{finds.requirements}}</dd>
				</dl>
				<dl>
					<dt>【工作内容】</dt>
					<dd>{{finds.workContent}}</dd>
				</dl>
				<dl>
					<dt>【工作时间】</dt>
					<dd>{{finds.workTime}}</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				finds:{},
				id:this.$route.query.id
			}
		},
		created(){
			this.getData();
		},
		methods:{
			getData(){
				console.log(this.id)
				this.$axios.post("/strong_portal_site/recruitInfo/selectRecruitInfoById",{
					recruitId:this.id
				}).then((res)=>{
					if(res.data.resultCode =="1"){
						this.finds = res.data.resultObj.recruitInfo;
						console.log(res.data.resultObj.recruitInfo)
					}
					
				})
			}
		}
	}
</script>

<style scoped="">
.container{
	width: 900px;
	margin-top: 45px;
	background: #eee;
	padding: 40px; 
	height: 722px;
}
.updata span{
	padding-right: 100px;
}
.jobsalxy{
	padding: 20px 0;
}
.jobsalxy span:last-child{
	color: #ff552e;
	font-size: 40px;
}
.welfare{
	border-bottom: 1px solid #ccc;
	padding-bottom: 20px;
}
.welfare span{
	display: inline-block;
    max-width: 124px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: #f6fcff;
    padding: 0 10px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #497e9d;
    letter-spacing: 0;
    margin: 0 10px 12px 0;
}
.experience{
	padding-top: 20px;
}
.experience span:first-child{
	padding-left: 0;
}
.experience span{
	padding: 0 20px;
	border-right:1px solid #ccc ;
}
.experience p{
	line-height: 40px;
}
.button button{
	color: #fff;
    background: #ff552e;
    width: 140px;
    margin-right: 10px;
    height: 50px;
    line-height: 50px;
    padding: 0;
    vertical-align: middle;
    font-size: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
}
.description{
	padding-top: 20px;
	border-top:1px solid #ccc;
}
.description h4{
	padding-bottom: 10px;
}
dl dd{
	padding-left:10px ;
}
</style>