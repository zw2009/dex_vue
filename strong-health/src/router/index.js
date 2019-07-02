import Vue from 'vue'
import Router from 'vue-router'
import health from '@/components/Health'
import register from '@/components/Register'
import login from '@/components/Login'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'health',
			component: health,
			meta:{
				title:"健康资讯"
			}
		},
		{
			path: '/register',
			name: 'register',
			component: register,
			meta:{
				title:"注册"
			}
		},
		{
			path: '/login',
			name: 'login',
			component: login,
			meta:{ 
				title:"登陆"
			}
		}
	]
})