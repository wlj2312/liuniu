<template>
	<div class="home">
		<div class="maingraph"><img src="../assets/img/img32.png" /></div>
		<div class="service">
			<div class="service-content flex">
				<div class="service-row flex" v-for="(item, index) in servicelist" :key="index">
					<img class="left" :src="item.img" />
					<div class="right">
						<div class="right-title">{{ item.title }}</div>
						<div class="right-content threeline">{{ item.content }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'service',
	components: {},
	data() {
		return {
			// 服务类型列表
			servicelist:[
				{
					img:require('@/assets/img/img24.png'),
					title:"App开发",
					content:'App开发，是指专注于手机应用软件开发与服务。App是application的缩写，通常专指手机上的应用软件，或称手机客户端。'
				},
				{
					img:require('@/assets/img/img25.png'),
					title:"网站开发",
					content:"网站开发是制作一些专业性强的网站，比如说动态网页。ASP、PHP、JSP网页。"
				},
				{
					img:require('@/assets/img/img26.png'),
					title:"微信公众平台开发",
					content:"微信公众平台，简称公众号。将企业信息、服务、活动等内容通过微信网页的方式进行表现。"
				},
				{
					img:require('@/assets/img/img27.png'),
					title:"跨平台小程序开发",
					content:"小程序是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或者搜一下即可打开应用。也体现了…"
				},
				
				{
					img:require('@/assets/img/img28.png'),
					title:"OA系统开发",
					content:"办公自动化（OA），英文Office Automation的缩写。它可以通过特定流程或特定环节与日常事务联系在一起，使公文在…"
				},
				{
					img:require('@/assets/img/img29.png'),
					title:"ERP系统开发",
					content:"ERP系统是企业资源计划 (Enterprise Resource Planning) 的简称，是指建立在信息技术基础上，集信息技术与先进管理思想…"
				}
			]
		}
	}
}
</script>

<style lang="scss">
.home{
	background-color: #F9F9F9;
}
// 主图
.maingraph {
	position: relative;
	width: 100%;
	overflow: hidden;
	img {
		width: 100%;
		height: 625px;
	}
}
.service {
	width: 100%;
	padding: 60px 0;
	.service-content {
		width: 1200px;
		margin: auto;
		flex-wrap: wrap;
	}
}
// 服务类型模板
.service-row {
	padding:0 60px;
	height: 200px;
	background-color: #FFFFFF;
	border-radius: 12px;
	margin-bottom: 40px;
	box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.06);
	&:nth-last-child(1){
		margin-bottom: 0px;
	}
	&:nth-last-child(2){
		margin-bottom: 0px;
	}
	.left {
		width: 65px;
		height: 65px;
		margin-right: 40px;
	}
	.right {
		.right-title {
			font-size: 24px;
			font-weight: 500;
			color: #333333;
			line-height: 33px;
			margin-bottom: 15px;
		}
		.right-content {
			width: 350px;
			font-size: 16px;
			font-weight: 400;
			color: #666666;
			line-height: 24px;
		}
	}
}
</style>
