<template>
	<div class="doctor-video-details">
		<div class="container" id="vievtr" style="padding:70px 0 30px 0;">

			<div class="video-con video-all">
				<h2>{{video.name}}<el-button style="float: right;" plain><a href="javascript:window.history.go(-1);">返回上一页</a></el-button></h2>
				<video id="my-player" class="video video-js vjs-big-play-centered"  autoplay="autoplay" controls poster="" width="1000" height="560">
				<source :src="video.src" >
				</video>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				id:this.$route.query.id,
				video:""
			}
		},
		methods:{
			getVideo(){
				this.$axios.get("../../static/json/video.json")
				.then((res)=>{
					//console.log(res.data.data);
					let data = res.data.data;
					data.forEach((v,i)=>{
						
						if(this.id == v.id){
							this.video = v;
							console.log(v);
						}
					})
				})
			}
		},
		created(){
			this.getVideo();
		}
		
	}
</script>

<style scoped="">
.vjs-poster {
		background-color: #ccc;
	}
	
	h2 {
		margin: 0;
		margin-bottom: 20px;
	}
	#my-player{
		width: 100%;
		height: 614px;
	}
</style>