<template>
	<div class="doctor-video-details">
		<div class="container" id="vievtr" style="padding:70px 0 30px 0;">

			<div class="video-con video-all">
				<h2>手术解剖中。。。</h2>
				<video id="my-player" class="video video-js vjs-big-play-centered"  autoplay="autoplay" controls poster="" width="1000" height="560">
				<source src="../../assets/video/cxhy.mp4" >
				</video>
			</div>
		</div>
		
	</div>
</template>

<script>
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