<template>
  	<div class="translatefrom row">
  		<div class="col-md-12 col-md-offset-3">
  			<form class="trans" v-on:submit="formSbumit" action="">
	    		<input class="form-control" type="text" v-model="textToTranslate"  placeholder="输入您要翻译的内容" />
	    		<select class="form-control" v-model="languageText">
	    			<option value="en">English</option>
	    			<option value="ru">Russian</option>
	    			<option value="ko">korean</option>
	    			<option value="ja">janpenese</option>
	    		</select>
	    		<input class="btn btn-primary" type="submit" value="翻译" />
	    	</form>
  		</div>
    	
    </div>
</template>

<script>
export default {
  name: 'translatefrom',
  data(){
  	return {
  		textToTranslate:""	,
  		languageText:"en"
  	}
  },
  methods:{
  	formSbumit(e){
  		//alert(this.languageText);
  		//事件注册传递至输出页面，默认一个参数
  		this.$emit("formSubmit",this.textToTranslate,this.languageText);
  		e.preventDefault(); //取消默认事件
  	}
  }
  
}
</script>


<style scoped>
.trans{
	background: #eee;
	border:1px solid #eee;
	padding: 20px;
}
.btn{
	width: 40%;
}
select{
	margin: 20px 0;
}
</style>
