<template>
	<div class="resumepart">
		<div class="reslist">
			<!--搜索简历-->
			<div class="search" style="display: flex;margin: 0 10px">
				<input type="text" class="form-control" placeholder="请输入搜索简历" v-model="seach" @keyup="getDate">
				<button class="btn btn-warning" type="submit" style="width: 100px;" >搜索</button>
			</div>
			<ul>
				<li v-for="r in resumes" @click="linktime(r.resumeId)">
					<!--左边-->
					<div class="fl">
						<img ref="img" :src="r.imgUrl"/>
						<dl>
							<dt>{{r.name}}<em>{{r.sex}}</em><em>{{GetDateStr(r.birthday)}}</em><em>{{r.experienceLabel}}</em><em>{{r.educationLabel}}</em></dt>
							<dd>期望职位：<span>{{r.positionLabel}}</span></dd>
							<dd>期望地点：{{r.workRegion}}</dd>
						</dl>
					</div>
					<!--右边-->
					<div class="fr">
						<dl>
							<dt>两周内：</dt>
							<dd>被浏览 <strong> 136 </strong> 次</dd>
							<dd>主动投递 <strong> 0 </strong> 个职位</dd>
						</dl>
					</div>
				</li>
			</ul>
			<div class="block">
			    <span class="demonstration"></span>
			    <el-pagination
			      @current-change="handleCurrentChange"
			      :current-page="currentPage"
			      :page-size="pageSize"
			      layout="total, prev, pager, next, jumper"
			      :total="total">
			    </el-pagination>
			  </div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				resumes:[],
				total:0,
				pageSize:5,
				currentPage:1,
				seach:''
				
			}
		},
		created(){
			this.getDate();//获取所有公开简历
			this.imgchang();//根据职位判断头像
		},
		methods:{
			//跳转简历详情
			linktime(id){
				let rouerData = this.$router.resolve({
					name:'fullpartdetails',
					query:{
						id:id
					}
				});
				window.open(rouerData.href,"_blank");
			},
			handleCurrentChange(val){
				this.changeDate(val);
			},
			imgchang(){
				this.resumes.forEach((v,i)=>{
					switch (v.position){
						case "医生":
							v.imgUrl = "../../../static/img/doctor.png";
							break;
						case "护士":
							v.imgUrl = "../../../static/img/nurse.png";
							break;
						case "药剂师":
							v.imgUrl = "../../../static/img/pharmacy.png";
							break;
						case "药房":
							v.imgUrl = "../../../static/img/pharmacist.png";
							break;
						default:
							break;
					}
				})
			},
			changeDate(val){
				this.$axios.post("/strong_portal_site/personalResume/selectpersonalResumeList",{
					status:"1",
					pageNo:val,
					pageSize:this.pageSize,
					resumelType:"1"
				})
				.then((res)=>{
					if(res.data.resultCode == "1"){
						this.resumes = res.data.resultObj.personalResumeList;
					}
				})
			},
			getDate(){
				console.log(this.seach)
				this.$axios.post("/strong_portal_site/personalResume/selectpersonalResumeList",{
					status:"1",
					pageNo:this.currentPage,
					pageSize:this.pageSize,
					resumelType:"1",
					selectName:this.seach
				})
				.then((res)=>{
					if(res.data.resultCode == "1"){
						this.total = res.data.resultObj.totalSize;
						this.resumes = res.data.resultObj.personalResumeList;
					}
				})
			}
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