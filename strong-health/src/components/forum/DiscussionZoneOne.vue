<template>
	<div class="discussin-zone-one container">
		<h1>讨论专区一</h1>
		   <el-table
		   :data="data.slice((currentPage-1)*pagesize, currentPage*pagesize)"
		   stripe
		    border
		    style="width: 100%">
		    <el-table-column
                  type="selection"
                  width="55">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="APP名称"
                  sortable
                  width="180">
                </el-table-column>
		    
		</el-table>
			分页代码
			<el-pagination
			        @size-change="handleSizeChange"
			        @current-change="handleCurrentChange"
			        :current-page.sync="currentPage"
			        :page-size="5"
			        layout="sizes, prev, pager, next"
			        :page-sizes="[2, 5, 10, 20]"
			        :total="data.length">
			</el-pagination>
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
.discussin-zone-one{
	margin-top: 70px;
}	
</style>