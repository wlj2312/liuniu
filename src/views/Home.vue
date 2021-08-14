<template>
	<div class="home">
		<!-- 主图 -->
		<div class="maingraph">
			<img src="../assets/img/img36.png" />
			<div class="content flex_item">
				<div class="content-one">六牛科技</div>
				<div class="content-two">一家有结果的系统服务商</div>
				<div class="content-three"></div>
				<div class="content-four">国内专业互联网解决方案提供商，专注于移动互联网技术开发。 拥有精湛的互联网软件开发技术与专业的服务能力</div>
				<div class="content-five">联系业务顾问</div>
			</div>
		</div>
		<div class="contentBox">
			<!-- 服务类型 -->
			<div class="template backcolor">
				<div class="template-content flex" @click="show">
					<div class="content-row flex-start">
						<div class="content-one">服务类型</div>
						<div class="content-two">丰富的服务类型 完美满足您的产品需求</div>
						<div class="content-three"></div>
						<div class="content-four">APP开发 H5开发 网站定制开发 OA系统开发 ERP系统开发</div>
						<div class="content-four">微信公众号开发 跨平台小程序开发</div>
						<!-- <div class="content-five">了解服务类型</div> -->
						<router-link to="/service" class="content-five">了解服务类型</router-link>
					</div>
					<img class="img21-img" src="../assets/img/img21.png" />
				</div>
			</div>
			<!-- 专业团队 -->
			<div class="template">
				<div class="template-content flex">
					<img class="img23-img" src="../assets/img/img23.png" />
					<div class="content-row flex-start">
						<div class="content-one">专业团队</div>
						<div class="content-two">专业的技术团队 精准实现您的产品目标</div>
						<div class="content-three"></div>
						<div class="content-four">产品经理 UI设计 前端开发工程师 后端开发工程师</div>
						<div class="content-four">测试工程师 客服</div>
						<div class="content-five">了解团队组成</div>
					</div>
				</div>
			</div>
			<!-- 业务流程 -->
			<div class="template backcolor">
				<div class="template-content flex">
					<div class="content-row flex-start">
						<div class="content-one">业务流程</div>
						<div class="content-two">完善的业务流程 高效完成您的服务订单</div>
						<div class="content-three"></div>
						<div class="content-four">业务洽谈 签订合同 需求对接 产出需求文档 确认需求 进度安排</div>
						<div class="content-four">产出设计稿 确认设计稿 开发软件 软件内测 软件测试 结清尾款 产品上线</div>
						<router-link to="/morebusiness" class="content-five">了解更多服务</router-link>
					</div>
					<img class="img23-img" src="../assets/img/img23.png" />
				</div>
			</div>
			<!-- 需求 -->
			<div class="demand">
				<div class="demand-content"><img src="../assets/img/img34.png" /></div>
			</div>
			<!-- 案例 -->
			<div class="case">
				<div class="case-content">
					<div class="one">
						<div class="content-one">优秀案例</div>
						<div class="content-two">真实的商业服务案例</div>
						<div class="content-three"></div>
						<jv-swiper interval="2000" duration="400" indicator="true">
							<!-- //设置自定义属性，这几个（ interval、duration、indicator）属性都需要放子啊标签上哦 -->
							<swiper-item class="case-row" v-for="(item,index) in caselist" :key="index">
								<div class="content-left"><img :src="item.mainimg"/></div>
								<div class="content-right">
									<img :src="item.img">
									<div class="case-one">{{item.title}}</div>
									<div class="case-two">{{item.content}}</div>
									<div class="case-three"><span>2</span><span>w+</span>用户持续使用</div>
									<div class="case-four">{{item.bname}}</div>
								</div>
							</swiper-item>
							<!-- <swiper-item v-for="(item, index) in img" v-bind:key="index"><img :src="item" alt="" /></swiper-item> -->
						</jv-swiper>
						<router-link to="/case" class="content-six">查看更多案例</router-link>
					</div>
				</div>
			</div>
			<!-- 合作 -->
			<div class="cooperation">
				<div class="cooperation-content"><img src="../assets/img/img35.png" /></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Home',
	components: {},
	data() {
		return {
			isplay:true,
			ishow:false,
			img: ['http://m.xuelejia.com/static/images/lunbo2.jpg', 'http://m.xuelejia.com/static/images/new-banner2.png', 'http://m.xuelejia.com/static/images/lunbo3.jpg'],
			caselist:[
				{
					mainimg:require('@/assets/img/banner01.png'),
					img:require('@/assets/img/logo1.png'),
					title:'知汇星城 | 智汇家 小程序开发/公众平台开发',
					content:'知汇星城-国际设计（台州）创意园，汇聚国际设计，创造美好未来， 致力于打造国际设计文化创意孵化星平台！',
					bname:'了解智汇家'
				},
				{
					mainimg:require('@/assets/img/banner02.png'),
					img:require('@/assets/img/logo2.png'),
					title:'满园春线上商城 公众平台开发',
					content:'满园春主营蕴含植物配方的洗护产品：洗发水、护发素、沐浴露、洗手液、手工皂、卸妆水、洗面奶、面膜等产品。公司现拥有30余万…',
					bname:'了解满园春'
				},
				{
					mainimg:require('@/assets/img/banner03.png'),
					img:require('@/assets/img/logo3.png'),
					title:'美天选菜 小程序',
					content:'每天选菜是一款自营生鲜平台及提供配送到家服务的生活服务类程序。',
					bname:'了解美天选菜'
				},
				{
					mainimg:require('@/assets/img/banner04.png'),
					img:require('@/assets/img/logo4.png'),
					title:'龍信商城 小程序开发/APP开发',
					content:'龍信商城是一款非常实用的手机在线购物服务应用软件，龍信商城app集多功能为一体，为用户提供了商品搜索、浏览、收藏、购…',
					bname:'了解龍信商城'
				},
				{
					mainimg:require('@/assets/img/banner05.png'),
					img:require('@/assets/img/logo5.png'),
					title:'仙鲜哒 小程序',
					content:'仙鲜哒是一款专注新鲜菜品零售批发的生鲜平台。',
					bname:'了解美天选菜'
				}
				
			]
		};
	},
	methods:{
		show(){
			this.ishow = !this.ishow;
		}
	}

};
</script>
<style lang="scss">
.home {
	padding-top: 80px;
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
	.content {
		width: 100%;
		position: absolute;
		top: 145px;
		color: #ffffff;
		text-align: center;
		flex-direction: column;
		.content-one {
			font-size: 18px;
			font-weight: 400;
			color: #ffffff;
			line-height: 25px;
			letter-spacing: 2px;
		}
		.content-two {
			margin-top: 10px;
			font-size: 48px;
			font-weight: 500;
			color: #ffffff;
			line-height: 67px;
			letter-spacing: 2px;
			text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
		}
		.content-three {
			margin: 15px 0 25px 0;
			width: 40px;
			height: 6px;
			background: #ff7600;
			border-radius: 4px;
		}
		.content-four {
			width: 490px;
			font-size: 16px;
			font-weight: 400;
			color: #ffffff;
			line-height: 22px;
			letter-spacing: 1px;
			text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
		}
		.content-five {
			margin-top: 45px;
			width: 190px;
			height: 60px;
			background: #ff7600;
			border-radius: 39px;
			font-size: 18px;
			font-weight: 400;
			color: #ffffff;
			line-height: 60px;
		}
	}
}

.content-row {
	width: 40%;
	color: #ffffff;
	flex-direction: column;
	.content-one {
		font-size: 16px;
		font-weight: 400;
		color: #ff9900;
		line-height: 22px;
	}
	.content-two {
		margin-top: 10px;
		width: 375px;
		font-size: 36px;
		font-weight: 600;
		color: #333333;
		line-height: 46px;
		letter-spacing: 1px;
	}
	.content-three {
		margin: 15px 0;
		width: 40px;
		height: 6px;
		background: #ff7600;
		border-radius: 4px;
	}
	.content-four {
		font-size: 16px;
		font-weight: 400;
		color: #666666;
		line-height: 22px;
		margin-top: 10px;
	}
	.content-five {
		margin-top: 45px;
		width: 190px;
		height: 60px;
		background: #ff7600;
		border-radius: 39px;
		font-size: 18px;
		font-weight: 400;
		color: #ffffff;
		line-height: 60px;
		text-align: center;
	}
	.content-six {
		width: 165px;
		height: 50px;
		border-radius: 24px;
		border: 2px solid rgba(255, 118, 0, 0.3);
		font-size: 16px;
		font-weight: 400;
		color: #666666;
		line-height: 50px;
		text-align: center;
	}
}
.case-row{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	.content-left{
		width: 530px;
		height: 465px;
		img{
			width: 530px;
			height: 465px;
		}
	}
	.content-right{
		margin-left: 55px;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		img{
			width: 200px;
			height: 70px;
		}
		.case-one{
			font-size: 24px;
			font-weight: 500;
			color: #333333;
		}
		.case-two{
			width: 495px;
			margin-top: 15px;
			font-size: 16px;
			font-weight: 400;
			color: #333333;
		}
		.case-three{
			margin-top: 35px;
			font-size: 16px;
			font-weight: 400;
			color: #333333;
			span{
				color: #FF7600;
			}
		}
		.case-four{
			margin-top: 65px;
			width: 155px;
			height: 50px;
			background: #FF7600;
			box-shadow: 0px 2px 4px 0px rgba(255, 118, 0, 0.2);
			border-radius: 33px;
			font-size: 16px;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 50px;
			text-align: center;
		}
	}
}


// 背景色
.backcolor {
	background-color: #f9f9f9;
}
// 模板样式
.template {
	width: 100%;
	.template-content {
		margin: auto;
		padding: 140px 0;
	}
	.img21-img {
		width: 530px;
		height: 290px;
	}
	.img23-img {
		width: 500px;
		height: 435px;
	}
}
.demand {
	width: 100%;
	.demand-content {
		margin: 0 auto;
		padding: 75px 0;
		img {
			width: 90%;
			height: 490px;
		}
	}
}
.template-content,.demand-content,.case-content,.cooperation-content{
	width: 1200px;
}
.case {
	width: 100%;
	height: 950px;
	background: url(../assets/img/img38.png);
	background-repeat: no-repeat;
	background-size: 100% 950px;
	.case-content {
		margin: 0 auto;
		.one {
			margin: auto;
			display: flex;
			align-items: center;
			flex-direction: column;
			padding: 85px 0;
			color: #ffffff;
			flex-direction: column;
			.content-one {
				font-size: 16px;
				font-weight: 400;
				color: #ff9900;
				line-height: 22px;
			}
			.content-two {
				margin-top: 10px;
				width: 375px;
				font-size: 36px;
				font-weight: 600;
				color: #333333;
				line-height: 46px;
				letter-spacing: 1px;
			}
			.content-three {
				margin: 15px 0;
				width: 40px;
				height: 6px;
				background: #ff7600;
				border-radius: 4px;
			}
			.content-four {
				font-size: 16px;
				font-weight: 400;
				color: #666666;
				line-height: 22px;
				margin-top: 10px;
			}
			.content-five {
				margin-top: 45px;
				width: 190px;
				height: 60px;
				background: #ff7600;
				border-radius: 39px;
				font-size: 18px;
				font-weight: 400;
				color: #ffffff;
				line-height: 60px;
				text-align: center;
			}
			.content-six {
				width: 165px;
				height: 50px;
				border-radius: 24px;
				border: 2px solid rgba(255, 118, 0, 0.3);
				font-size: 16px;
				font-weight: 400;
				color: #666666;
				line-height: 50px;
				text-align: center;
			}
		}
	}
}
.cooperation {
	width: 100%;
	.cooperation-content {
		margin: 0 auto;
		padding: 75px 0;
		img {
			width: 90%;
			height: 490px;
		}
	}
}
</style>
