<template>
	<div class="newslist">
		<div class="newestArticleList main-box-nick">
			<div class="thinkTankTag clearfix">
				<div class="img pull-left">
					<img src="https://imgcache.iyiou.com/Cover/2017-11-01/hangye-yiliaoqixie.jpg">
				</div>
				<div class="text pull-right">
					<h2>“内外承压”的维力医疗新设公司，欲增加国内医疗器械市场份额</h2>
					<div class="box-lables clearfix">
						<div class="typeName pull-left">
							<span class="name">胡敏</span>
						</div>
						<div class="fr pull-right">
							<div class="time">2019-05-27</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="newestArticleList main-box-nick">
			<div class="thinkTankTag clearfix">
				<div class="img pull-left">
					<img src="https://imgcache.iyiou.com/Cover/2017-11-01/hangye-yiliaoqixie.jpg">
				</div>
				<div class="text pull-right">
					<h2>“内外承压”的维力医疗新设公司，欲增加国内医疗器械市场份额</h2>
					<div class="box-lables clearfix">
						<div class="typeName pull-left">
							<span class="name">胡敏</span>
						</div>
						<div class="fr pull-right">
							<div class="time">2019-05-27</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="block phonage">
		    <span class="demonstration"></span>
		    <el-pagination @size-change="handleSizeChange"@current-change="handleCurrentChange"
		      :current-page="currentPage4"
		      :page-sizes="[10, 20, 30, 40]"
		      :page-size="100"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="400">
		    </el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
      	total:'0',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>

<style scoped="">
	.el-pagination{
		width: 100%;
    	text-align: center;
    	margin-top: 40px;
	}
	h2 {
		margin: 0;
	}
	
	.contentWrap {
		width: 740px;
		background: #fff;
		border: 1px solid #e6e6e6;
		margin-left: 14px;
		padding-bottom: 55px;
		position: relative;
	}
	
	.main-box-nick {}
	/*翻页按钮*/
	
	.btn-box-nick {
		position: absolute;
		bottom: 4px;
		left: 22%;
	}
	/*首页尾页*/
	
	button.first-btn,
	button.last-btn {
		background: #fff;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	/*资讯数量 上一条 下一条*/
	
	button.twig {
		cursor: auto;
	}
	
	button.twig,
	button.prev-btn,
	button.next-btn,
	button.go-btn-nick {
		border: none;
		background: #fff;
		outline: none;
	}
	/*数字页码*/
	
	.num-box-nick button {
		border: 1px solid #CBCBCB;
		background: #fff;
		padding: 5px 10px;
		cursor: pointer;
	}
	/*数量输入*/
	
	.btn-box-nick input {
		width: 30px;
	}
	/*按钮禁用*/
	
	button.btnStyle {
		cursor: url(../../assets/health/jingyong.png), auto;
	}
	
	.main-box-nick .thinkTankTag {
		padding: 20px;
		border-bottom: 1px solid #f4f4f4;
	}
	
	.main-box-nick .thinkTankTag .img {
		width: 198px;
		height: 132px;
		overflow: hidden;
	}
	
	.main-box-nick .thinkTankTag .img img {
		width: 198px;
		height: 132px;
	}
	
	.main-box-nick .thinkTankTag .img img:hover {
		transform: scale(1.2);
		transition: all 1s;
		cursor: pointer;
	}
	
	.main-box-nick .thinkTankTag .text {
		width: 480px;
	}
	
	.main-box-nick .thinkTankTag .text h2 {
		height: 110px;
		font-size: 24px;
		line-height: 32px;
		font-weight: 400;
	}
	
	.main-box-nick .thinkTankTag .text h2:hover {
		cursor: pointer;
		color: #1d9dd1;
	}
</style>