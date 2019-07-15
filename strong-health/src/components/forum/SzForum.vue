<template>
	<div class="szforum container">
		<!--搜索-->
		<el-row>
			<el-col :span="12">
				<div class="grid-content bg-purple">
					<h1>论坛</h1></div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<el-input placeholder="请输入内容" v-model="search">
						<el-button slot="append" icon="el-icon-search">搜索</el-button>
					</el-input>
				</div>
			</el-col>
		</el-row>
		<!--发帖-->
		<el-row class="fatie">
			<el-button type="primary" size="small" round icon="el-icon-edit" @click="show">发帖</el-button>
			<ul class="medical-fatie" v-if="!showfabu">
				<li id="title-msg"><span>选择板块快速发帖</span><span class="el-icon-circle-close" @click="show"></span></li>
				<li v-for="message in messages" @click="tolink(message.link)"><span class="el-icon-edit-outline"></span>{{message.title}}</li>
			</ul>
		</el-row>
		<div class="message">
			<h4>思众云信息版块</h4>
			<table class="table">
				<tbody>
					<tr v-for="massage in messages" @click="tolink(massage.link)">
						<td class="el-icon-news"></td>
						<td>
							<div><strong>{{massage.title}}</strong></div>
							<div><span>{{massage.english}}</span></div>
						</td>
						<td>
							<div>帖数：{{massage.num}}</div>
							<div>最新发帖人：{{massage.user}}</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				search: "",
				showfabu:true,
				messages:[
					{id:1,title:"内科医学专业讨论专区",english:"Medical Discussions Edition",num:"211",user:"14521152125",link:"discussionzoneone"},
					{id:2,title:"中医医学专业讨论专区",english:"Discussion Edition of Traditional Chinese Medicine",num:"221",user:"14522252125",link:"discussionzonetwo"},
					{id:3,title:"医护学习讨论专区",english:"Medical and Nursing Learning Discussion Zone",num:"231",user:"14532252125",link:"discussionzonethree"},
					{id:4,title:"医护人才讨论专区",english:"Medical Talents Discussion Zone",num:"411",user:"14522452125",link:"discussionzonefour"},
				]
			}
		},
		methods:{
				show(){
					if(this.showfabu){
						this.showfabu = false;
					}else{
						this.showfabu = true;
					}
				},
				tolink(link){
					let routerData = this.$router.resolve({
						name:link
					})
					window.open(routerData.href,'_blank');
				}
		}
	}
</script>

<style scoped="">
.szforum {
	margin-top: 80px;
	height:686px;
}

.szforum h1 {
	margin: 0;
}

.fatie {
	text-align: right;
	padding: 20px 0;
	position: relative;
}
.medical-fatie{
	border: 1px solid #ddd;
	width: 240px;
	border-top: none;
	position: absolute;
	right: 0;
	top: 72px;
	background: #fff;
}
#title-msg{
	height: 30px;
	line-height: 30px;
	text-align: right;
	background: #0465C9;
	color: #fff;
}
#title-msg span:first-child{
	float: left;
}
#title-msg span:last-child{
	font-size: 20px;
}
.medical-fatie li{
	border-top: 1px solid #ddd;
	text-align: left;
	height: 40px;
	line-height: 40px;
	cursor: pointer;
}
.medical-fatie li span{
	padding-left: 20px;
	padding-right: 20px;
}
.message h4 {
	margin: 0;
	height: 44px;
	line-height: 44px;
	background: #5C95CF;
	font-size: 20px;
	color: #fff;
	padding-left: 20px;
}
.table{
	
}
.table tbody{
	
}
.table tbody tr{
	border:1px solid #ddd;
	cursor: pointer;
}
.table tbody tr td{
	border: none;
	height: 50px;
	line-height: 50px;
	text-align: center;
}
.table tbody tr td:nth-child(1){
	width:5%;
	font-size: 24px;
	text-align: center;
}
.table tbody tr td:nth-child(2){
	width:75%;
	text-align: left;
}
.table tbody tr td>div{
	height: 25px;
	line-height: 25px;
}
.table tbody tr td:nth-child(3){
	width:20%;
	text-align:left;
}
</style>