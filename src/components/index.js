
import JvSwiper from '../components/jv-swiper.vue'
import SwiperItem from '../components/swiper-item.vue'
const components={
	install(Vue){
		Vue.component('jv-swiper',JvSwiper);
		Vue.component('swiper-item',SwiperItem);
  }
}
//判断
if(typeof window !=='undefined' && window.Vue){
	install(window.Vue);
}
 
export default components;