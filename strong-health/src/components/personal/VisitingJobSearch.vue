<template>
	<div class="visiting-job-search">
		<div id="content">
				<!--我的简历-->
				<div class="exrt" id="myResume">
					<h4><span>来访求职者列表</span></h4>
					<!--发布第一条-->
					<div class="bs-example" data-example-id="simple-table">
						<table class="table">
							<thead>
								<tr>
									<th>姓名</th>
									<th>职位</th>
									<th>电话</th>
									<th>工作经验</th>
									<th>薪资要求</th>
									<th>全职/兼职</th>
									<th>是否邀请</th>
									<th>编辑</th>
								</tr>
							</thead>
							<tbody class="timelook">
								<tr v-for="a in applyList">
									<th scope="row">{{a.name}}</th>
									<td>{{a.positionLabel}}</td>
									<td>{{a.phone}}</td>
									<td>{{a.experienceLabel}}</td>
									<td>{{a.salaryLabel}}</td>
									<th class="full-part">{{changnum(a.resumelType)}}</th>
									<th class="send-invitation"><button class="btn btn-primary btn-sm" @click="sendin(a.recruitId,a.resumeId)" :disabled="disab">发送邀请</button></th>
									<th class="text-danger deletem" @click="delectid(a.id)">删除</th>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!--分页-->
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
				id:this.$route.query.id,
				applyList:[],
				currentPage:1,
				pageSize:10,
				total:0,
				userId:JSON.parse(localStorage.getItem("user")).userId,
				disab:false
			}
		},
		created(){
			this.getData();//获取来访求职者信息列表
		},
		methods:{
			
			sendin(tid,eid){//发送邀请	
				
				this.$confirm('是否发送邀请, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	this.$axios.post("/strong_portal_site/position/saveInvitationInfo",{
						crateUser:this.userId,
						recruitId:tid,
						resumeId:eid
					})
					.then((res)=>{
						if(res.data.resultCode == "1"){
							this.$message({
				            type: 'success',
				            message: '发送成功!'
				          });
				          this.disab = true;
						}
						
					})
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消'
		          });          
		        });
				
			},
			delectid(id){//删除当前获取到的id的信息
				this.$confirm('是否永久删除该信息, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	this.$axios.post("/strong_portal_site/position/deleteApplicant",{
		        		id: id
		        	})
		        	.then((res)=>{
		        		this.getData();
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
			changnum(type){
				if(type == "2"){
					return "全职";
				}else if(type == "1"){
					return "兼职";
				}
			},
			getpage(val){
				this.$axios.post("/strong_portal_site/position/selectApplyList",{
					crateUser: this.userid, 
					status: "1",
					pageNo:val,
					pageSize :this.pageSize
				})
				.then((res)=>{
					if(res.data.resultCode == "1"){
						this.total = res.data.resultObj.totalSize;
						this.applyList = res.data.resultObj.recruitList
						console.log(res.data.resultObj.recruitList)
					}
				})
			},
			getData(){
				this.$axios.post('/strong_portal_site/position/selectApplyList',{
					recruitId:this.id,
					pageNo:1,
					pageSize:this.pageSize,
				}).then((res)=>{
					if(res.data.resultCode == "1"){
						this.total = res.data.resultObj.totalSize;
						this.applyList = res.data.resultObj.applyList
						console.log(res.data)
					}
				})
			}
		}
	}
</script>

<style scoped="">
.block{
text-align: center;
margin: 20px 0;
}
.visiting-job-search {
    margin-top: 55px;
    height: 712px;
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
.exrt {
     float: none; 
    width: 880px;
    background-color: #fff;
    margin: 0 auto;
}
.footvjs{
	position: fixed;
	bottom: 0;
	left: 0;
}
.btn{
	padding: 0 6px;
}
	
</style>