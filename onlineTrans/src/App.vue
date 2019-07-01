<template>
  <div id="app">
  		<h1>在线翻译</h1>
  		<h5 class="text-muted">简单 / 易用 / 便捷</h5>
    <translatefrom v-on:formSubmit="translateText"></translatefrom>
    <transoutput  v-text="transtedText"></transoutput>
  </div>
</template>

<script>
import translatefrom from './components/translatefrom'
import transoutput from '@/components/translateoutput'

export default {
  name: 'App',
  data(){
  	return {
  		transtedText:""
  	}
  },
  components: {
    translatefrom,transoutput
  },
  methods:{
  	translateText(text,language){
  		//alert(language)
  		if(text == ''){
  			return false;
  		}
		this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190628T092106Z.4fc12df85a65371a.ff4a55de6be0eb90b4aec1c777fb403b82268fcd&lang='+language+'&text='+text)
  		.then((response)=>{
//			/console.log(response.body.text[0])
  			this.transtedText = response.body.text[0];
  			//alert(this.transtedText)
  		});
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
