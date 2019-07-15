<template>
	<div class="find-full">
		<div class="bs-example" data-example-id="hoverable-table">
				 <el-table
				   :data="fulls.slice((currentPage-1)*pageSize, currentPage*pageSize)"
				   stripe
				    style="width: 100%">
		                <el-table-column
		                  prop="job"
		                  label="职位名"
		                  width="180">
		                </el-table-column>
		                 <el-table-column
		                  prop="firm"
		                  label="公司名"
		                  width="238">
		                </el-table-column>
		                 <el-table-column
		                  prop="address"
		                  label="工作地点"
		                  width="180">
		                </el-table-column>
		                 <el-table-column
		                  prop="pay"
		                  label="薪资"
		                  width="180">
		                </el-table-column>
		                <el-table-column
		                  prop="time"
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
				<el-col :span="24" class="toolbar pageBar">
				    <el-pagination
				    
				    @current-change="handleCurrentChange"
				    :current-page="currentPage"
				    :page-sizes="[10, 20, 30, 40]"
				    :page-size="pageSize"
				    layout=" prev, pager, next, total"
				    :total="total">
				    </el-pagination>
				</el-col>
		</div>
	</div>
</template>

<script>
	export default{
		name:'find-full',
		data(){
			return{
				total:1000,//默认数据总条数
				pageSize:10,//每页的数据条数
				currentPage:1,//默认开始页
				fulls:[]
			}
		},
		methods:{
			getUser:function(){
				this.$axios.get('../../static/json/fulls.json')
				.then((res)=>{
					return res.data.data;
				})
				.then((res)=>{
					this.fulls = res;
					this.total = res.length;
					
					console.log(this.fulls)
				})
			},
			handleCurrentChange(currentPage){
				this.currentPage = currentPage;
			}
		},
		created(){
			this.getUser();
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
    padding: 12px 5px;
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