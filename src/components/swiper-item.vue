<template>
	<div class="swiper-item"><slot></slot></div>
</template>

<script>
export default {
	name: 'swiper-item',
	porps: {}
};
</script>
<style>
.swiper-item {
	width: 100%;
	height: 100%;
	z-index: 9999;
}
.swiper-item img {
	width: 100%;
	height: auto;
}
</style>
