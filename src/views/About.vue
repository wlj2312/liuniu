<template>
	<div class="container">
		<div class="content">
			<div class="title">关于我们</div>
			<div class="tpl">六牛科技秉承“提高客户价值、成就公司价值、实现个人价值”的核心价值观，致力于成为客户长期、稳定、可信赖的</br> 合作伙伴，成为世界级IT服务企业。</div>
			<div class="info">
				<div class="tip">浙江六牛科技有限公司（以下简称：六牛科技），创立于2014年，位于浙江大学台州研究院，是国内专业互联网解决方案提供商，专注于移动互联网技术开发。</div>
				<img class="img" src="../assets/img/img01.png" />
				<div class="tip">提供高端APP定制开发、微信营销系统、实用型小工具软件、高品质网站设计和各行业解决方案等服务。同时，六牛科技提供软件咨询服务，大大降低企业试错成本。 
				六牛科技以“务实、高效、创新”为宗旨，立身于高新技术领域，汇聚行内从业精英的基础上，有效的结合国内外先进管理理念和思想，建成了一支高素质、高水平的技术队伍和管理团队。
				目前公司拥有20余名国内顶尖研发工程师，来自于国内知名互联网企业，在APP开发、平台运营和项目管理方面有丰富的成功案例、行业经验和项目经验。
				公司部门设置UI设计中心、技术开发中心、测试中心、客户服务中心、人力资源中心等部门。</div>
				<img class="img" src="../assets/img/img02.png" />
				<div  class="tip">公司与百度、阿里巴巴、腾讯、华为、小米、中国铁塔等行业巨人有着全面深入的战略合作，深耕金融、电信、互联网、交通、能源等重点行业，持续开拓全球市场，
				为客户提供全链条、高质量、高效率、具有综合优势和行业特色的技术服务。2015年至今已为2000余家传统企业成功转型，客户覆盖浙江、北京、上海、江西、长沙、江苏、福建等地区，
				在行业中树立起一个专注技术、崇尚管理的良好形象。 六牛科技秉承“提高客户价值、成就公司价值、实现个人价值”的核心价值观，成为客户长期、稳定、可信赖的合作伙伴，为成为世界级IT服务企业而奋斗。</div>
				<img class="img" src="../assets/img/img03.png" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Home'
};
</script>
<style scoped lang="scss">
.container {
	background-color: #f9f9f9;
	width: 100%;
	padding-top: 100px;
}
.content {
	width: 1200px;
	margin: auto;
}
.title {
	margin-top: 80px;
	font-size: 46px;
	font-weight: 500;
	color: #333333;
}
.tpl {
	padding: 15px 0px 80px 0px;
	font-size: 16px;
	border-bottom: 1px solid #ededed;
	line-height: 26px;
}
.info{
	padding-bottom: 80px;
}
.img{
	width: 100%;
	height: auto;
}
.tip{
	padding: 25px 0;
	font-size: 16px;
	color: #222222;
}
</style>
