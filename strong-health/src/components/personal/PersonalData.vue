<template>
	<div class="persdata">
		<!--我的发布-->
		<div class="exrt" id="myRelease">
			<h4><span>个人资料</span></h4>
			<!--发布第一条-->
			<div class="uploadimg">
				<el-upload
				  class="avatar-uploader"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="imageUrl" :src="imageUrl" class="avatar">
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				  <el-button type="warning">重新上传头像</el-button>
				</el-upload>
			</div>
			<div class="upadta">
				<ul>
					<li><span>用户名：</span><input type="text" :value="persons.userName" /></li> 
					<li><span>公司名：</span><input disabled="" type="text" :value="persons.companyname" /><strong class="el-icon-edit">修改</strong></li>
					<li><span>手机号码：</span><input type="phone" :value="persons.loginName" /><strong class="el-icon-edit">修改</strong></li>
					<li><span>邮箱：</span><input type="email"  value="" /><strong class="el-icon-edit">修改</strong></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'persdata',
		data(){
			return{
				 imageUrl: '../../../static/img/doctor.png',
				 persons:{},
				 user:JSON.parse(localStorage.getItem("user"))
			}
		},
		created(){
			this.persons = this.user;
		},
		 methods: {
	      handleAvatarSuccess(res, file) {
	        this.imageUrl = URL.createObjectURL(file.raw);
	 		console.log(file)
	      },
	      beforeAvatarUpload(file) {
	        const isJPG = file.type === 'image/jpeg';
	        const isLt2M = file.size / 1024 / 1024 < 2;
	
	        if (!isJPG) {
	          this.$message.error('上传头像图片只能是 JPG 格式!');
	        }
	        if (!isLt2M) {
	          this.$message.error('上传头像图片大小不能超过 2MB!');
	        }
	        return isJPG && isLt2M;
	      }
	    }
	}
</script>

<style scoped="">
.upadta ul {
	padding-top: 20px;
}
.upadta ul li{
	width: 360px;
	line-height: 36px;
	border-bottom: 1px solid #eee;
} 
.upadta ul li span{
	display: inline-block;
	font-size: 14px;
    color: #666666;
    width: 80px;
    height: 36px;
}
.upadta ul li input{
	outline: none;
    margin-right: 15px;
    padding: 0 14px;
    width: 206px;
    height: 36px;
    line-height: 36px;
    border: 0;
    font-size: 14px;
    background: none;
    color: #333 !important;
}
.upadta ul li strong{
	color: #ff552e;
	height: 36px;
    line-height: 36px;
    cursor: pointer;
}
.uploadimg{

}
.uploadimg button{
}
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
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
.avatar{
    width: 178px;
    height: 178px;
    display: block;
    margin-bottom: 10px;
    margin-left: 45px;
}
>>>input.el-upload__input {
    opacity: 0;
}

</style>