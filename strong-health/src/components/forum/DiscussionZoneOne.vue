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
			    style="width: 100%">
			    <el-table-column
	                  type=""
	                  width="55">
	                			  顶
                </el-table-column>
                <el-table-column
	                  prop="title"
	                  label="排序"
	                  sortable
	                  width="600">
                </el-table-column>
                <el-table-column
	                  prop="name"
	                  label="作者"
	                  width="90">
                </el-table-column>
                <el-table-column
	                  prop="time"
	                  label="发表时间"
	                  width="100">
                </el-table-column>
                <el-table-column class="text-center"
	                  prop="answer"
	                  label="回复"
	                  width="50">
                </el-table-column>
                <el-table-column class="text-center"
	                  prop="click"
	                  label="点击"
	                  width="50">
                </el-table-column>
                <el-table-column  class="text-center"
	                  prop="response"
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
			        :page-sizes="[10, 20, 30, 40]"
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
      		pagesize: 10,
      		data:[
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI1！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
      		{title:"【病例征集】优质病例可入选「丁香病例库」，还有机会发SCI2！",name:"张三",time:"2019-06-15",answer:"22",click:"200",response:"李四"},
        	]
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
	margin-top: 62px;
	height: 705px;
}	
.grid-content{
	line-height: 33px;
}
.text-right{
	text-align: right;
}
.text{
}
>>>.el-table th {
    padding: 0px 0;
}
>>>.text-center{
	text-align: center;
}
>>>.el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;
    margin-top: 20px;
    text-align: center;
}
</style>