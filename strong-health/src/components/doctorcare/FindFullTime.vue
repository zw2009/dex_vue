<template>
	<div class="find-full">
		<div class="bs-example" data-example-id="hoverable-table">
				 <el-table
				   :data="fulls"
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
		                  width="238">
		                </el-table-column>
		                 <el-table-column
		                  prop="address"
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
		                  label="职位申请"
		                  width="180">
		                   <el-button type="primary" size="mini">投递简历</el-button>
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
		</div>
	</div>
</template>

<script>
	export default{
		name:'find-full',
		data(){
			return{
				total:0,//默认数据总条数
				pageSize:10,//每页的数据条数
				currentPage:1,//默认开始页
				fulls:[]
			}
		},
		methods:{
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
					recruitType : 1,
					status : 1,
					pageNo:val ,
					pageSize : this.pageSize
				})
				.then((res)=>{
					this.fulls = res.data.resultObj.recruitList;
				})
			}
		},
		created(){
			this.$axios.post('/strong_portal_site/recruitInfo/recruitInfoList',{
					recruitType : 1,  //全职简历的类型
					status : 1, //状态
					pageNo:this.currentPage ,
					pageSize : this.pageSize
				})
				.then((res)=>{
					console.log(res)
					if(res.data.resultCode == "1"){
						this.total = res.data.resultObj.totalSize;
						this.fulls = res.data.resultObj.recruitList;
						console.log(this.fulls)
					}
				})
		}
	}
</script>

<style scoped="">
.find-full {
    height: 556px;
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