<template>
	<div class="find-part">
		<div class="search" style="display: flex;">
				<input type="text" class="form-control" placeholder="请输入搜索职位" v-model="seach" @keyup="seachfulls">
				<button class="btn btn-warning" type="submit" id="seach" style="width: 100px;" @click="seachfulls">搜索</button>
			</div>
		<div class="bs-example" data-example-id="hoverable-table">
				 <el-table
				   :data="fulls.slice((currentPage-1)*pageSize, currentPage*pageSize)"
				   stripe
				    style="width: 100%">
		                <el-table-column
		                  prop="positionLabel"
		                  label="职位名"
		                  width="180">
		                </el-table-column>
		                 <el-table-column
		                  prop="companyName"
		                  label="公司名"
		                  width="width">
		                </el-table-column>
		                 <el-table-column
		                  prop="area"
		                  :formatter="cityarea"
		                  label="工作地点"
		                  width="180">
		                </el-table-column>
		                 <el-table-column
		                  prop="salaryLabel"
		                  label="薪资"
		                  width="180">
		                </el-table-column>
		                <el-table-column
		                  prop="updateTime"
		                  :formatter="getLocalTimes"
		                  label="发布时间"
		                  width="180">
		                </el-table-column>
		                <el-table-column
		                  prop=""
		                  label="查看"
		                  width="70">
		                  <template slot-scope="scope">
		                  	<el-button type="primary" size="mini" @click.stop="timedestails(scope.row)">详情</el-button>
					      </template>
		                </el-table-column>
		                <el-table-column v-if="application"
		                  prop=""
		                  label="职位申请"
		                  width="180">
		                   <template slot-scope="scope">
		                  	<el-button type="primary" size="mini" @click.stop="changprop(scope.row)">投递简历</el-button>
					      </template>
	                	</el-table-column>
				</el-table>
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
				  <!--弹出层-->
				<div class="provp" v-if="provp">
					<i class="el-icon-error" @click="prophide"></i>
					<ul style="font-weight:bold ;">
						<li>姓名</li>
						<li>电话</li>
						<li>工作年限</li>
						<li>职位</li>
						<li>是否投递</li>
					</ul>
					<ul v-for="r in reslist">
						<li>{{r.name}}</li>
						<li>{{r.phone}}</li>
						<li>{{r.experienceLabel}}</li>
						<li>{{r.positionLabel}}</li>
						<li><el-button type="primary" plain size="small"  @click="comapp(r.resumeId)">确认投递</el-button></li>
					</ul>
				</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'find-part',
		data(){
			return{
				reslist:[],
				recruitId:'',//点击投递简历获取到的招聘信息的id
				provp:false,
				total:0,//默认数据总条数
				pageSize:10,//每页的数据条数
				currentPage:1,//默认开始页
				fulls:[],
				seach:"",
				width:"300",
				application:false,
				user:JSON.parse(localStorage.getItem("user")).userTyp,
				userId:JSON.parse(localStorage.getItem("user")).userId
			}
		},
		methods:{
			timedestails(row){//获取此条id的详情
				let routeData = this.$router.resolve({
					name:'timedetails',
					query:{
						id:row.recruitId
					}
				});
				window.open(routeData.href,"blank");
				
			},
			cityarea(row){//城市和区域显示
				return row.city+"-"+row.area;
			},
			comapp(id){
				this.$axios.post("/strong_portal_site/position/saveApplyInfo",{
					createUser:this.userId,  //用户id
					recruitId:this.recruitId, //当前招聘信息id
					resumeId:id    //当前简历id
				})
				.then((res)=>{
					if(res.data.resultCode = "1"){
						this.$message({
				          message: res.data.resultMessage,
				          type: 'success'
				       });
					}
				})
			},
			prophide(){
				this.provp = false;
			},
			getreslist(){//获取兼职简历列表信息
				this.$axios.post("/strong_portal_site/personalResume/selectpersonalResumeById",{
					resumeId:'',
					createUser:this.userId,
					resumelType:'1'
				})
				.then((res)=>{
					if(res.data.resultCode == "1"){
						this.reslist = res.data.resultObj.personalResume;
					}
				})
			},
			changprop(row){ //切换显示prop简历列表
				this.provp = !this.provp;
				this.recruitId = row.recruitId;
			},
			getLocalTimes(row) { 
				let date = new Date(row.updateTime);
				let year = date.getFullYear();
				let month = date.getMonth()+1;
				let day = date.getDate();
				month = month < 10 ? "0"+month:month;
				day = day < 10 ? "0"+day:day;
				date = year+'-'+month+'-'+day;
				//console.log(date); // 2018-10-09
				return date;
			},
			handleCurrentChange(val){
				this.getUser(val);
			},
			getUser(val){
				this.$axios.post('/strong_portal_site/recruitInfo/recruitInfoList',{
					recruitType : 2,
					status : 1,
					pageNo:val ,
					pageSize : this.pageSize
				})
				.then((res)=>{
					this.fulls = res.data.resultObj.recruitList;
				})
			},
			seachfulls(){
				this.$axios.post('/strong_portal_site/recruitInfo/recruitInfoList',{
					recruitType : 2,  //兼职简历的类型
					status : 1, //状态
					pageNo:this.currentPage ,
					pageSize : this.pageSize,
					selectName:this.seach
				})
				.then((res)=>{
					if(res.data.resultCode == "1"){
						this.total = res.data.resultObj.totalSize;
						this.fulls = res.data.resultObj.recruitList;
					}
				})
			}
		},
		created(){
			if(this.user == "2"){
				this.application = false;
				this.width = "300";
			}else if(this.user == "3"){
				this.application = true;
				this.width = "238";
			}
			this.seachfulls();
			this.getreslist();//获取兼职简历信息列表
		}
	}
</script>

<style scoped="">
/*弹出层*/
.provp{
	position: fixed;
	left: 50%;
	top: 50%;
	background: #eee;
	width: 500px;
	height:280px;
	border-radius: 5px;
	margin-top: -140px;
	margin-left: -250px;
	z-index: 999;
	overflow: auto;
	padding: 10px;
}
.provp i{
	font-size: 30px;
	position: absolute;
	right: 0px;
	top: 0px;
	cursor: pointer;
}
.provp ul{
	border-bottom: 1px solid #ccc;
	height: 40px;
	line-height: 40px;
	display: flex;
	
}
.provp ul li{
	text-align: center;
	width: 20%;
}
.find-part {
    height:624px;
}
>>>.el-table td, .el-table th{
	padding: 8px 0;
}
>>>.el-pagination {
    white-space: nowrap;
    padding: 22px 5px;
    color: #303133;
    font-weight: 700;
    text-align: center;
}
.foot{
	position: fixed;
	bottom: 0;
	left: 0;
}
</style>