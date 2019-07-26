<template>
	<div class="doctor-msg">
		<div class="container clearfix">
			<div class="exlt">
				<!--<a  class="on"> <span>我的发布</span></a>-->
				<a v-for="(m,index) in meuns" :class="{on:id == index}" @click="tolink(index,m.to)"> <span>{{m.title}}</span></a>
			</div>
			<div id="content">
				<router-view></router-view>
				
			</div>
				
				
		<!--面试邀请模态框弹窗-->
		<div class="modal bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="modede">
			<div class="modal-dialog modal-sm" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="myModalLabel1">面试信息</h4>
					</div>
					<div class="modal-body">
						投递成功
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		data(){
			return {
				flag:false,
				meuns:[
					{id:1,title:'个人资料',to:'personaldata'},
					{id:2,title:'我的发布',to:'myrelease'},
					{id:3,title:'面试邀请',to:'invitationinterview'},
					{id:4,title:'我的申请',to:'myapplication'},
					{id:5,title:'简历列表',to:'reaumelist'},
				],
				meuns2:[
					{id:6,title:'面试邀请',to:'invitationinterview'},
					{id:7,title:'我的申请',to:'myapplication'},
					{id:8,title:'简历列表',to:'reaumelist'},
				],
				id:0,
				user:JSON.parse(localStorage.getItem("user")).userTyp
			}
		},
		created(){
//			console.log(this.meuns.push({id:6,title:'面试邀请',to:'invitationinterview'},
//					{id:7,title:'我的申请',to:'myapplication'}))
			if(this.user == "2"){
				this.meuns.splice(2,3);
			}else if(this.user == "3"){
				this.meuns.splice(1,1);
			}
		},
		methods:{
			tolink(index,link){
				this.id = index;
				this.$router.push({
					name:link
				})
			}
		}
	}
</script>

<style scoped="">
.doctor-msg{
	margin-top: 67px;
}
/*左边*/

.exlt {
	float: left;
	width: 140px;
	overflow: hidden;
	background-color: #fafafa;
	border-left: 1px solid #eee;
	border-bottom: 1px solid #eee;
	min-height: 700px;
}

.exlt a {
	display: block;
	height: 42px;
	line-height: 42px;
	font-weight: bold;
	color: #333;
	padding: 0 15px;
	border: 1px solid transparent;
	border-right-color: #eee;
	border-left-width: 2px;
}

.exlt a:hover {
	background: #EEEEEE;
}

.exlt a span {
	text-align: center;
	display: block;
	height: 42px;
	cursor: pointer;
	border-bottom: 1px solid #eee;
}

.exlt a.on {
	font-weight: bold;
	color: #ff6000;
	background-color: #fff;
	border: 1px solid #eee;
	border-right-color: #fff;
	border-left: 2px solid #ff6000;
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