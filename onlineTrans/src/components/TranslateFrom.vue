<template>
  	<div class="translatefrom">
  		<h1>在线翻译</h1>
  		<h5>简单 / 易用 / 便捷</h5>
    	<form v-on:submit="formSbumit" action="">
    		<input type="text" v-model="textToTranslate"  placeholder="输入您要翻译的内容" />
    		<select name="">
    			<option value="en">English</option>
    		</select>
    		<input type="submit" value="翻译" />
    	</form>
    </div>
</template>

<script>
export default {
  name: 'translatefrom',
  data(){
  	return {
  		textToTranslate:""	
  	}
  },
  methods:{
  	formSbumit(e){
  		//alert(this.textToTranslate);
  		//事件注册传递至输出页面，默认一个参数
  		this.$emit("formSubmit",this.textToTranslate);
  		e.preventDefault(); //取消默认事件
  	}
  }
  
}
</script>


<style scoped>

</style>
