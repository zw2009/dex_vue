import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import logout from '@/components/logout'
import Face from '@/components/content/face';
import Speak from '@/components/content/speak';
import Video from '@/components/content/video';
import register from '@/components/register';
import Home from '@/components/home';
Vue.use(Router)

export default new Router({
	routes: [
		//登录
		{
			path: '/',
			name: 'login',
			component: login
		},
		//注册
		{
			path: '/register',
			name: register,
			component: register
		},
		//主界面
		{
			path: '/home',
			name: 'home',
			meta: {
				requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
			},
			component: Home,
			children: [{
					path: '/face',
					name: 'face',
					component: Face
				},
				{
					path: '/speak',
					name: 'speak',
					component: Speak
				},
				{
					path: '/video',
					name: 'video',
					component: Video
				}
			]
		},
		//退出
		{
			path: '/logout',
			name: 'logout',
			component: logout
		}

	],

});