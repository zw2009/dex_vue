<template>
	<div class="interview clearfix">
		<!--面试邀请-->
		<div class="exrt" id="invitation">
			<h4><span>面试邀请</span></h4>
			<div class="bs-example" data-example-id="hoverable-table">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>序号</th>
							<th>发件人</th>
							<th>主题</th>
							<th>时间</th>
							<th>编辑</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(m,i) in mess">
							<th scope="row">{{i+1}}</th>
							<td>{{m.companyName}}</td>
							<td class="textover conts"  @click="getm(m)">{{m.name}}：您好，我们很高兴的通知您来参加我公司的面试，具体安排请点击此处，请准时前来！ 面试公司：{{m.companyName}} 面试职位：{{m.positionName}} 面试时间：{{GetDateStr(m.createTime)}} 面试地址：长沙市岳麓区奥克斯缤纷广场 联系人：{{m.name}} 联系电话：{{m.phone}}
							</td>
							<td>{{GetDateStr(m.createTime)}}</td>
							<td class="delete2 text-danger" @click.stop="deletem(m.id)">删除</td>
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
		<!--弹出层-->
		<div class="provp" v-if="propshow">
			<i class="el-icon-error" @click="close"></i>
			<h4>主题内容</h4>
			<p>{{propss.name}}：您好，您好，我们很高兴的通知您来参加我公司的面试，具体安排如下，请准时前来！ </p>
			<p>面试公司：{{propss.companyName}} </p>
			<p>面试职位：{{propss.positionName}} </p>
			<p>面试时间：{{GetDateStr(propss.createTime)}}</p>
			<p>面试地址：{{propss.city}}{{propss.area}}{{propss.address}} </p>
			<p> 联系人：{{propss.name}} </p>
			<p>联系电话：{{propss.phone}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				propshow:false,
				mess:[],
				currentPage:1,
				pageSize:15,
				total:0,
				userId:JSON.parse(localStorage.getItem("user")).userId,
				propss:{}
			}
		},
		created(){
			this.getData();
		},
		methods:{
			getm(m){//点击获取当前弹窗需要的数据
				this.propshow = true;
				this.propss.companyName = m.companyName;
				this.propss.positionName = m.positionName;
				this.propss.createTime = m.createTime;
				this.propss.city = m.city;
				this.propss.area = m.area;
				this.propss.address = m.address;
				this.propss.name = m.name;
				this.propss.phone = m.phone;
			},
			close(){
				this.propshow = false;
			},
			deletem(id){
				console.log(id+"删除收到邀请信息");
				 this.$confirm('此操作将永久删除该条邀请, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	this.$axios.post("/strong_portal_site/position/deleteApplicant",{
						id:id
					}).then((res)=>{
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
				this.getpage(val)
			},
			getpage(val){
				this.$axios.post("/strong_portal_site/position/selectMyInvitationList",{
					createUser:this.userId,
					pageNo:val,
					pageSize:this.pageSize
				}).then((res)=>{
					if(res.data.resultCode == "1"){
						this.total = res.data.resultObj.totalSize;
						this.mess = res.data.resultObj.myInvitationList;
					}
				})
			},
			getData(){
				this.$axios.post("/strong_portal_site/position/selectMyInvitationList",{
					createUser:this.userId,
					pageNo:this.currentPage,
					pageSize:this.pageSize
				}).then((res)=>{
					if(res.data.resultCode == "1"){
						this.total = res.data.resultObj.totalSize;
						this.mess = res.data.resultObj.myInvitationList;
					}
				})
			}
		}
	}
</script>

<style scoped="">
.block{
	position: absolute;
	bottom:200px;
	left: 40%;
}
/*弹出层*/
.provp{
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translateX(-50%) translateY(-70%);
	z-index: 999;
	width: 400px;
	background: #eee;
	border-top: 5px solid #FF6000;
	padding: 20px;	
	padding-top: 0;
	border-radius: 5px;
}
.provp i{
	position: absolute;
	right: 0;
	top: 2px;
	font-size: 30px;
	cursor: pointer;
}
.provp h4{
	border-bottom: 1px solid #000;
	height: 40px;
	line-height: 40px;
	margin: 0;
	margin-bottom: 20px;
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