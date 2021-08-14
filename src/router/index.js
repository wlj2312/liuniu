import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/case',
		name: 'case',
		component: () => import( /* webpackChunkName: "about" */ '../views/Case.vue')
	},
	{
		path: '/certificate',
		name: 'certificate',
		component: () => import( /* webpackChunkName: "about" */ '../views/Certificate.vue')
	},
	{
		path: '/morebusiness',
		name: 'morebusiness',
		component: () => import( /* webpackChunkName: "about" */ '../views/Morebusiness.vue')
	},
	{
		path: '/service',
		name: 'service',
		component: () => import( /* webpackChunkName: "about" */ '../views/Service.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
