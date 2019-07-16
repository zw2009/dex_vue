<template>
	<div class="discussin-zone-one container">
		<el-row class="neike">
		  <el-col :span="4">
		  	<div class="grid-content bg-purple">
			  	<h2 class="text">内科医学</h2>
			  	<router-link to="/szforum">返回上一页</router-link>
		  	</div>
		  </el-col>
		  <el-col :span="12"><div class="grid-content bg-purple-light">今日：68 | 主题：303945</div></el-col>
		  <el-col :span="8" class="text-right"><div class="grid-content bg-purple"><el-button type="primary">发帖</el-button></div></el-col>
		</el-row>
		<!--内容部分-->
		<el-tabs type="border-card">
			<!--切换栏-->
		  <el-tab-pane>
		    <span slot="label">所有文章</span>
		    <!--所有文章的分发-->
		    <el-table
			   :data="data.slice((currentPage-1)*pagesize, currentPage*pagesize)"
			   stripe
			    border
			    style="width: 100%">
			    <el-table-column
	                  type=""
	                  width="55">
	                			  顶
                </el-table-column>
                <el-table-column
	                  prop="name"
	                  label="排序"
	                  sortable
	                  width="600">
                </el-table-column>
                <el-table-column
	                  prop="name"
	                  label="作者"
	                  width="190">
                </el-table-column>
                <el-table-column class="text-center"
	                  prop="name"
	                  label="回复/点击"
	                  width="100">
                </el-table-column>
                <el-table-column  class="text-center"
	                  prop="name"
	                  label="最后回复"
	                  width="160">
                </el-table-column>
			</el-table>
			<!--分页代码-->
			<el-pagination
			        @size-change="handleSizeChange"
			        @current-change="handleCurrentChange"
			        :current-page.sync="currentPage"
			        :page-size="5"
			        layout="sizes, prev, pager, next"
			        :page-sizes="[2, 5, 10, 20]"
			        :total="data.length">
			</el-pagination>
		  </el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
 export default {
        data() {
          return {
           	currentPage: 1,
      		pagesize: 5,
      		data:[{name:"11111"},
      		{name:"111211"},
      		{name:"111311"},
      		{name:"111411"},
      		{name:"11511"},
      		{name:"117111"},
      		{name:"111611"},
      		{name:"111811"},
      		{name:"111111"},
      		{name:"111911"},
      		{name:"111211"},
      		{name:"111311"},
      		{name:"111411"},
      		{name:"111511"},
      		{name:"111611"},
      		{name:"111711"}]
        }
    },
    methods: {
    handleSizeChange: function (size) {
      this.pagesize = size
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
    }
  },
        
 }
</script>

<style scoped>
.neike{
	padding-bottom: 30px;
}
.discussin-zone-one{
	margin-top: 70px;
}	
.grid-content{
	line-height: 33px;
}
.text-right{
	text-align: right;
}
.text{
	padding-bottom: 20px;
}
>>>.el-table th {
    padding: 0px 0;
}
>>>.text-center{
	text-align: center;
}
</style>