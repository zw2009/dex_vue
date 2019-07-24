<template>
	<div class="doctor-pro">
		<!--<article class="banner banner1">
			<h2>图文专区列表</h2>
		</article>-->
		<div class="container vievone" id="pictextall">
			<h2>图文专区<a href="javascript:history.go(-1)">返回上一页</a></h2>
			<div class="row pictext" v-for="t in texts" @click="tolink(t.articleId)">
				<h3>{{t.title}}</h3>
				<p class="text-primary branch-name textover3">{{t.description}}</p>
				<div class="col-xs-12 imgflex" v-if="t.imgUrl != ''">
					<a class="thumbnail">
						<img :src="t.imgUrl">
					</a>
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
		      :total="400">
		    </el-pagination>
		  </div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				texts:[],
				total:300,      //总页数
				currentPage:1,  //当前页
				pageSize:5,    //每页数量
			}
		},
		methods:{
			handleCurrentChange(val){
				alert("页面跳转"+val)
			},
			tolink(id){
				let routeData = this.$router.resolve({
			          path: 'doctordestails',
			          query: {
			            id: id
			          }
			       });
			       window.open(routeData.href,"_blank");
			},
			getPicText(){
				//图文专区	
				this.$axios.post("/strong_portal_site/article/selectArtileByType",{
					dictId :201907020931160000,
					status :1
				})
				.then((res)=>{
					this.texts = res.data.resultObj.articlList;
				});
				}
		},
		created(){
			this.getPicText();
		}
		
	}	
</script>

<style scoped="">
.block{
	text-align: center;
	margin-bottom:36px ;
}
.doctor-pro{
	margin-top: 50px;
}
.vievone {
	margin-bottom:30px;
}

.vievone h2 {
	border-bottom: 2px solid #2d82cf;
	padding-bottom: 10px;
	margin: 0;
	margin-top: 20px;
}

.vievone h2 a {
	float: right;
	line-height: 50px;
	font-size: 18px;
}
.banner1{
	height:100px ;
	text-align: center;
	line-height: 100px;
	width: 1140px;
	margin:  0 auto;
	background: url(../../assets/shipin1.jpg) no-repeat center center;
	background-size: 1140px 200px;
}
.banner1 h2{
	line-height: 100px;
	margin: 0;
	font-weight: 900;
	color: #fff;
}
.pictext {
	cursor: pointer;
	padding: 14px 20px;
	border-bottom: 1px solid #ccc;
}
.pictext:last-child{
	border-bottom:none;
}
.pictext h3{
	padding-bottom: 14px;
}
/*图文专区图片弹性布局*/

.imgflex {
	display: flex;
}

.imgflex a {
	margin: 20px;
}

.imgflex a img {
	width: 250px;
	height: 150px;
}

p#imgAll {
    color: black;
    line-height: 30px;
    font-size: 14px;
}
#pictextall a{
	text-decoration: none;
	
}
</style>