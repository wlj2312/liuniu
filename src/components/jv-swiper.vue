<template>
	<div class="jv-swiper" ref="swileng">
		<slot></slot>

		<div v-if="indicator === 'true'" class="indicator-box">
			<!-- 此段代码为指示器，轮播的小点点 -->
			<div v-for="(i, index) in jv_siwdom" :key="index" :class="jv_siw_index == index ? 'indicator_color' : ''" class="indicator"></div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
export default {
	name: 'JvSwiper',
	porps: {},
	data() {
		return {
			indicator: true,
			jv_siwdom: 0,
			jv_siw_index: 0
		};
	},
	created() {},
	mounted() {
		let jv_interval = 3000, //滑动间隔
			jv_duration = 300, //运动时间
			jv_indicator = true; //指示器，轮播的小点点
		try {
			jv_interval = this.$refs.swileng.attributes.interval.value; //使用过程中设置的属性参数
			jv_duration = this.$refs.swileng.attributes.duration.value;
			jv_indicator = this.$refs.swileng.attributes.indicator.value;
		} catch (error) {}
		this.indicator = jv_indicator; //把用户设置的或者默认的运动直接存储一下
		let siwdom = this.$refs.swileng.childNodes, //获取有用户设置了多少张轮播
			slef = this,
			cont = 0,
			box_left = 0;
		this.jv_siwdom = siwdom.length - 1; //给负责渲染层的变量赋值，让它生产多少张轮播

		let seti = setInterval(() => {
			//执行
			SwiRotste();
		}, jv_interval);

		function SwiRotste() {
			cont += 1; //进来就累加一次
			if (cont == siwdom.length - 1) {
				//如果等于最后一个
				cont = 0;
			}
			slef.jv_siw_index = cont; //把当前的值赋值给jv_siw_index,告诉我们当前滑动到哪一张
			box_left = 100 * cont;
			for (let i = 0, s = siwdom.length - 1; i < s; i++) {
				//给每个div添加不同的translateX值及运动时间
				siwdom[i].style.transform = `translateX(${-box_left}%)`;
				siwdom[i].style.transition = `${jv_duration / 1000}s`;
			}
		}
	}
};
</script>
<style>
.jv-swiper {
	width: 100%;
	height: 466px;
	margin: 60px 0;
	background-color: #FFFFFF;
	display: -webkit-inline-box;
	overflow: hidden;
	position: relative;
}
.indicator-box {
	display: flex;
	position: absolute;
	bottom: 12px;
	right: 6px;
}
.indicator {
	width: 14px;
	height: 8px;
	border-radius: 4px;
	background-color: #b5b5b5;
	margin: 0 3px;
}
.indicator_color {
	width: 28px;
	height: 8px;
	background-color: #ff9900;
}
</style>
