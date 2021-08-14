<template>
	<div id="app">
		<div v-if="ishow == true">
			<span class="close-video" @click="show"><img src="https://yulianbo.oss-cn-beijing.aliyuncs.com/lnkjwb/images/sign_ico_closed.png" /></span>
			<video autoplay="autoplay" controls>
				<source src="./assets/media/video.mp4" type="video/mp4" />
			</video>
		</div>
		<div class="headerBox" v-else>
			<header class="header flex_item">
				<div class="top flex">
					<div class="logo"><img src="./assets/img/img30.png" /></div>
					<div class="headlist flex">
						<div>
							<router-link class="list-row" to="/">我的首页</router-link>
							<router-link class="list-row" to="/case">优秀案例</router-link>
							<router-link class="list-row" to="/about">关于我们</router-link>
							<router-link class="list-row" to="/certificate">荣誉证书</router-link>
						</div>
						<div class="number flex">
							<img src="./assets/img/img33.png" />
							<div>
								<font id="time">{{numberobj}}</font>
								<span>人刚刚浏览过</span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div class="contentBox">
			<router-view />
			</div>
			<footer class="foot">
				<div class="foot-row flex">
					<div class="row">
						<div class="logo"><img src="./assets/img/img31.png" /></div>
						<div class="content">
							<span>联系我们</span>
							<div>QQ：626813988</div>
							<div>邮箱：626813988@qq.com</div>
							<div>电话：18967672398</div>
							<div>地址：台州市椒江区浙江大学台州研究院三幢</div>
						</div>
					</div>
					<div class="code">
						<span>关注我们</span>
						<img src="./assets/img/img37.png" />
						<div>六牛科技服务号</div>
					</div>
				</div>
				<div class="record">这是网站备案</div>
			</footer>
		</div>
	</div>
</template>
<script>
export default {
	name: 'App',
	data() {
		return {
			ishow: true,
			numberobj: 0 //人数
		};
	},
	onShow: function() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone",
					"SymbianOS", "Windows Phone",
					"iPad", "iPod"];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		if(flag == false){
			window.location.href = 'http://www.liuniu946.com/indexs/'
		}else{
			window.location.href = 'http://www.liuniu946.com/index/'
		}
		 console.log(flag,88)
	},
	 mounted() {
		this.changeIcon()
	},
	methods: {
		
		show() {
			this.ishow = false;
		},
		changeIcon(){
			let obj = this;
			let num = 15649;
			let t = setInterval(() => {
				let a = Math.ceil(Math.random()*10);
				num = num + a;
				// console.log(obj.numberobj,num)
				obj.numberobj = num;
			}, 1000);
		},
	}
	
};
</script>

<style lang="scss">
@import './assets/style/public.css';
#app{
	min-width: 1200px;
}
* {
	margin: 0px;
	padding: 0px;
}
.close-video {
	display: block;
	position: absolute;
	top: 30px;
	right: 30px;
	z-index: 99999;
	img {
		width: 30px;
		height: 30px;
	}
}
video {
	position: fixed;
	right: 0px;
	bottom: 0px;
	min-width: 100%;
	min-height: 100%;
	height: auto;
	width: auto;
}
.contentBox,.headerBox,.top{
	min-width: 1300px;
}
.headerBox{
.header {
	z-index: 400;
	background: #ffffff;
	width: 100%;
	height: 100px;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
	min-width: 1200px;
	position: fixed;
	top: 0;
	.logo {
		width: 200px;
		height: 50px;
		img {
			width: 200px;
			height: 50px;
		}
	}
}
}
.top {
	margin: auto;
}
.headlist {
	width: 50%;
	.list-row {
		padding-bottom: 40px;
		margin-right: 40px;
	}
	.number {
		font{
			color:#FD5945;
		}
		img {
			width: 25px;
			height: 25px;
		}
	}
}
.router-link-exact-active {
	text-decoration: none;
	color: #333333;
	font-weight: bold;
	position: relative;
	&:after {
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
		width: 35px;
		height: 5px;
		border-radius: 3px;
		background-color: #ff6903;
	}
}
a {
	text-decoration: none;
	color: #333333;
}
.foot {
	position: relative;
	bottom: 0px;
	width: 100%;
	padding: 125px 0 35px 0;
	background: #ff7600;
	color: #ffffff;
	// text-align: center;
	font-size: 16px;
	.foot-row {
		width: 1200px;
		margin: auto;
		.row {
			display: flex;
			.logo {
				width: 230px;
				height: 60px;
				margin-right: 120px;
				img {
					width: 230px;
					height: 60px;
				}
			}
			.content {
				span {
					margin-bottom: 40px;
				}
				div {
					margin-bottom: 20px;
				}
			}
		}
		.code {
			text-align: center;
			img {
				width: 110px;
				height: 110px;
				margin: 40px 0 15px 0;
			}
		}
	}
	.record {
		text-align: center;
		margin-top: 45px;
	}
	span {
		font-size: 21px;
		display: block;
	}
}
</style>
