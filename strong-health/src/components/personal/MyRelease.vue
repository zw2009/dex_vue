<template>
	<div class="my-release">
		<!--我的发布-->
		<div class="exrt" id="myRelease">
			<h4><span>我的发布</span></h4>
			<!--发布第一条-->
			<div class="tit clearfix my-release" v-for="m in myrels">
				<h5>信息编号：{{m.recruitId}}</h5>
				<!--发布左边-->
				<div class="leftit">
					<img src="img/health/zhanwei.png" />
					<div class="menu">
						<p><strong>{{m.companyName}}</strong></p>
						<p>{{m.positionName}}</p>
						<p>{{GetDateStr(m.updateTime)}}</p>
						<p>{{m.city}}-{{m.address}}</p>
					</div>
				</div>
				<!--发布右边-->
				<div class="rigtit leftit">
					<div class="showpop">
						<p class="text-success">{{changType(m.recruitType)}}</p>
						<p><a style="cursor: pointer;">{{changestatus(m.status)}}</a></p>
						<!--<router-link tag="a" target="_blank" class="text-danger visitor" :to="{name:'visitingjobsearch'}">查看来访求职者</router-link>-->
						<a class="text-danger visitor" href="javascript:void(0)" @click="tojob(m.recruitId)">查看来访求职者</a>
					</div>
					
					<div class="delete">
						<p>
							<a class="revise" href="javascript:void(0)" @click="gopubrec(m.recruitId)">修改</a>
						</p>
						<p>
							<a class="rdelect" href="javascript:void(0)" @click="delectid(m.recruitId)">彻底删除</a>
						</p>
					</div>
				</div>
			</div>
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
				myrels:[],
				currentPage:1,
				pageSize:5,
				total:0,
				userid:JSON.parse(localStorage.getItem("user")).userId //用户id
			}
		},
		methods:{
			tojob(id){//跳转查看来访者求职信息
				let routeData = this.$router.resolve({
					name:"visitingjobsearch",
					query:{
						id:id
					}
				});
			window.open(routeData.href,"_blank");
				
			},
			changType(type){
				if(type == "1"){
					return "全职";
				}else if(type == "2"){
					return "兼职";
				}
			},
			changestatus(status){
				if(status == "1"){
					return "显示中";
				}
				return "未显示";
			},
			gopubrec(id){//跳转到修改页面
				this.$router.push({
					name:"publishrecruit",
					query:{
						id:id
					}
				})
			},
			delectid(id){//删除当前获取到的id的信息
				this.$confirm('是否永久删除该信息, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	this.$axios.post("/strong_portal_site/recruitInfo/deleteRecruitInfoList",{
		        		id: id
		        	})
		        	.then((res)=>{
		        		 this.getpage();
		        		this.$message({
				            type: 'success',
				            message: '删除成功!'
				          });
		        	})
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });          
		        });
			},
			handleCurrentChange(val){
				this.getpage(val);
			},
			getpage(val){
				this.$axios.post("/strong_portal_site/recruitInfo/selectRecruitInfobyUserId",{
					crateUser: this.userid, 
					status: "1",
					pageNo:val,
					pageSize :this.pageSize
				})
				.then((res)=>{
					if(res.data.resultCode == "1"){
						this.total = res.data.resultObj.totalSize;
						this.myrels = res.data.resultObj.recruitList
						console.log(res.data.resultObj.recruitList)
					}
				})
			}
		},
		created(){
			this.$axios.post("/strong_portal_site/recruitInfo/selectRecruitInfobyUserId",{
				crateUser: this.userid, 
				status: "1",
				pageNo:this.currentPage ,
				pageSize :this.pageSize
			})
			.then((res)=>{
				if(res.data.resultCode == "1"){
					this.total = res.data.resultObj.totalSize;
					this.myrels = res.data.resultObj.recruitList;
					console.log(res.data.resultObj.recruitList)
				}
				
			})
		}
	}
</script>

<style scoped="scoped">
.block{
	text-align: center;
	margin: 20px 0;
}
/*右边*/

.exrt {
	float: right;
	width: 880px;
	background-color: #fff;
}

.exrt h4 {
	margin: 0;
	height: 44px;
	line-height: 44px;
	color: #999;
	margin-bottom: 15px;
	border-bottom: 2px solid #efefef;
}

.exrt h4 span {
	color: #333;
	display: inline-block;
	height: 44px;
	line-height: 44px;
	border-bottom: 2px solid #ff6000;
}


/*我的发布内容*/

.tit {
	padding: 0 10px;
	border: 1px solid #f0f0f0;
	margin-bottom: 10px;
}

.tit:hover {
	border-color: #ffc466;
}

.tit h5 {
	margin: 0;
	height: 30px;
	line-height: 30px;
	background: #fafafa;
}

.tit .leftit {
	margin: 20px 0;
	float: left;
	border-right: 1px solid #f0f0f0;
	width: 50%;
	display: flex;
}

.tit .leftit:last-child {
	border-right: none;
}

.tit .leftit .menu {
	padding-left: 20px;
}

.tit .leftit .menu p {
	margin: 0;
	line-height: 22px;
}

.tit .rigtit {
	padding-left: 10px;
}

.tit .rigtit p {
	line-height: 30px;
}

.tit .rigtit .delete {
	padding-left: 200px;
}


/*面试邀请*/

.dw_table {
	position: relative;
	color: #666;
	background-color: #FFF;
}

.dw_table .title {
	height: 30px;
	line-height: 30px;
	background-color: #fafafa;
	border-top: 1px solid #eee;
}

.dw_table .el {
	height: 40px;
	line-height: 40px;
	font-size: 14px;
	overflow: hidden;
	padding: 0 5px;
	border-top: 1px solid #eee;
}

.el .t9 {
	height: 30px;
	line-height: 30px;
	font-size: 12px;
	color: #999;
	text-align: center;
}

.el span {
	display: inline-block;
	text-align: center;
}

.el .t9 {
	width: 300px;
}

.el .t10 {
	width: 400px;
}

.el .t11 {
	width: 160px;
}

.table>tbody>tr {
	border-bottom: 1px solid #ccc;
}

.table>tbody>tr>td {
	border-top: none;
	padding: 8px 0 2px 0;
}

.conts {
	width: 500px;
	cursor: pointer;
}

.leftit img {
	width: 100px;
	height: 100px;
}

.modal-sm {
	width: 500px;
	font-size: 16px !important;
}

.modal {
	top: 30%;
}

.apply {
	color: #000;
	cursor: default;
}

a.apply:hover {
	color: #000;
}
table th,table td{
	text-align: center;
}
tbody tr{
	cursor: pointer;
}
#modede2 .modal-dialog.modal-sm{
	width: 800px;
	font-size: 13px !important;
}
.delete .reach{
	cursor: pointer;
}
</style>