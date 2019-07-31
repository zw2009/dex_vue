<template>
	<div class="userFeedback">
		<top-nav title='反馈' link='/user' :hasclick='true'></top-nav>
		<ul class="solid_li">
			<li>
				<i class="angle-sign"></i>
				<span>类型</span>
				<select v-model='issue'>
                    <option v-for="(item,index) in issues" :value='index' :key='index'>{{item}}</option>
                </select>
				<em></em>
			</li>
    	</ul>
    	<ul class="solid_li">
			<li>
				<i class="angle-sign"></i>
				<span>问题描述（10～200字) </span>
			</li>
    		<yd-cell-item>
	            <yd-textarea slot="right" placeholder="" maxlength="200" v-model="problem"></yd-textarea>
	        </yd-cell-item>
    	</ul>
    	<ul class="solid_li last_ul">
                <li>
                    <i class="angle-sign"></i>
                    <span>提供相关的截图或照片 （必填）</span>
                </li>
                <div class="border">
                    <div v-show="!showImage">
                        <img class="add" src="../../../static/img/mall_addss_.png"/>
                        <span>点此选择上传文件、限制5.0MB以内。仅支持：jpg、ipeg、png、gif、bmp、psd、tif。</span>
                        <input name="file" type="file" accept = "image/*" @change="upload($event)" ref="theinput"/>
                    </div>
                    <img :src="Image" v-show="showImage" class="img" @click="resetImg">
                </div>
        </ul>
        <div class="Input-box">
            <button class="button" @click='submit'>提交</button>
        </div>
	</div>
</template>

<script>
	import tabbar from '@/components/TabBar'
	export default {
        created(){
            this.getfeedback()
        },
		data() {
			return {
				show: false,
                columns: 1,
                pickData:{},
                Image:'',
                showImage:false,
                issues: [],
                issue:0,
                problem:'',
                DATA:''
			}
		},
		methods:{
            getfeedback(){
                this.$api.feedback({}, res =>{
                    this.issues = res.data.problemtype
                })
            },
			submit(){
                if(!this.problem){
                    this.$dialog.toast({mes:'问题描述不能为空'})
                    return false;
                }
                if(this.Image){
                   this.$api.uploadFile(this.DATA,this.problem,this.issue, res =>{
                      if(res.status){
                        this.$dialog.toast({mes:res.msg,callback:()=>{
                          this.$router.push('/user')
                        }})
                      }else{
                        this.$dialog.toast({mes:res.msg})
                      }
                  })
                  }else{
                    this.$dialog.toast({mes:'请选择图片'})
                  }
			},
            fileAdd(file) {      // 把选中的file处理成base64,可供img引用
                  //判断是否为图片文件
                  if (file.type.indexOf('image') == -1) {
                    // 给file自定义属性src并赋值
                    file.src = 'wenjian.png';
                  } else {
                    let reader = new FileReader();
                    let _this=this;
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                      _this.Image = this.result;
                    }
                  }
            },
			upload (e) {
	            let file = e.target.files[0]   //选中的目标图片
                this.fileAdd(file)
                this.showImage = true;

                this.DATA = new FormData()
                this.DATA.append('file', file, file.name)


    	  	},
            resetImg(){
                this.$refs.theinput.click()
            }
		}
	}
</script>
<style type="text/css">
	.area_btn{
	color: #FF9934!important;
}
.larea_finish{
	color: #FF9934!important;
}
</style>
<style lang="less" scoped>

	.yd-cell-right{
		padding-right: 0px!important;
	}
	.yd-textarea{
		border: 1px solid #DBDCDB;
		margin-left: 8px;
			height: 110px;
			padding-top: 5px;
			padding-left: 10px;
			padding-right: 5px!important;
			line-height: 20px;
			width: 100%;
			margin-bottom: 10px!important;
	}
	.userFeedback{
		ul {
			padding-top: 5px;
			background: #FFF;
			padding-left: 20px;
			padding-right: 5px;
			border-bottom: 10px solid #FAFAFA;
			li {
				padding-left: 20px;
				line-height: 50px;
				height: 50px;
				position: relative;
				overflow: hidden;
				padding-right: 20px;
				em {
					display: block;
					width: 10px;
					height: 10px;
					border-left: 1px solid #C7C7CB;
					border-bottom: 1px solid #C7C7CB;
					position: absolute;
					top: 50%;
					right: 15px;
					transform: translate(0, -50%) rotate(225deg);
				}
				img {
					display: block;
					z-index: 99;
					position: absolute;
					top: 50%;
					left: 0px;
					transform: translateY(-50%);
					width: 10px;
					height: 10px;
				}
				span {
					font-size: 14px;
					color: #494949;
					display: block;
					float: left;
				}
				.input_li {
					text-align: right;
					display: block;
					line-height: 50px;
				}
				.flot-right {
					font-size: 12px;
					padding-right: 15px;
					display: block;
					float: right!important;
				}
		}
		.border{
			width: 92%;
			margin-left: 18px;
			height: 95px;
			margin-right: 10px;
			border: 1px dashed #C3C9CF ;
			margin-bottom: 20px;
			overflow: hidden;
			position: relative;
			.add{
				float: left;
				width: 27px;
				height: 27px;
				margin-top: 28px;
				margin-left: 23px;
				margin-right: 8px;
			}
            .img{
                width: 80px;
                height: 80px;
                margin: 10px;
            }
			span{
				margin-top: 24px;
				float: left;
				display: block;
				width: 70%;
			}
			input{
				width: 300px;
				height: 90px;
				right: 0;
				top: 0;
				background: red;
				position: absolute;
				opacity: 0;
				 display: block;
			}
		}
	}
	.last_ul{
		border-bottom: none;
	}
	.Input-box {
			padding: 50px 40px;
			button {
				border-radius: 6px;
				width: 100%;
				height: 45px;
				border: 0;
				font-size: 18px;
				color: #FFFFFF;
				background-image: linear-gradient(-90deg, #FF9934 2%, #FDC830 98%);
			}
		}
        select{
            width: 100px;
            height: 40px;
            display: block;
            float: right;
            margin: 5px 0;
            padding: 0 0 0 30px;
            border: none;
        }
	}
</style>
