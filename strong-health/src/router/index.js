import Vue from 'vue'
import Router from 'vue-router'
//注册登录找回密码
import register from '@/components/Register'
import login from '@/components/Login'
import findpwd from '@/components/Findpwd'
//健康资讯
import health from '@/components/Health'
import healthlist from '@/components/health/HealthList'
import healthdetails from '@/components/health/HealthDetails'
//健康资讯二级路由
	import newslist from '@/components/health/NewsList'
	import diseaselist from '@/components/health/DiseaseList'
	import liftlist from '@/components/health/LiftList'
//医护学习
import doctor from '@/components/Doctor'
import doctorvideo from '@/components/doctor/DoctorVideo'
import doctorvideoDetails from '@/components/doctor/DoctorVideoDetails'
import doctorpro from '@/components/doctor/Doctorpro'
import doctordestails from '@/components/doctor/DoctorDestails'
//医护人才
import doctorcare from '@/components/DoctorCare'
import publishrecruit from '@/components/doctorcare/PublishRecruit'
import fulltime from '@/components/doctorcare/FullTime'
import parttime from '@/components/doctorcare/PartTime'
import fulltimelook from '@/components/doctorcare/FullTimeLook'
import parttimelook from '@/components/doctorcare/PartTimeLook'
	//医护人才二级路由
	import findfulltime from '@/components/doctorcare/FindFullTime'
	import findparttime from '@/components/doctorcare/FindPartTime'
//个人中心
import doctormsg from '@/components/personal/DoctorMsg'
import myrelease from '@/components/personal/MyRelease'
import invitationinterview from '@/components/personal/InvitationInterview'
import myapplication from '@/components/personal/MyApplication'
import reaumelist from '@/components/personal/ResumeList'  
import visitingjobsearch from '@/components/personal/VisitingJobSearch'  //来访求职者列表页visitingJobSearch
//关于我们
import about from '@/components/about/About'
import abouthome from '@/components/about/AboutHome'



Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',  //首页新闻资讯
			component: health,
			name:"health",
			meta:{
				title:"思众云医疗网"
			}
		},
		{
			path: '/healthlist',  //新闻资讯列表页
			component: healthlist,
			name:"healthlist",
			redirect:"/healthlist/newslist",
			children:[                        //健康资讯的二级路由
				{path:'/healthlist/newslist/',component:newslist,name:"newslist"},
				{path:'/healthlist/diseaselist',component:diseaselist,name:"diseaselist"},
				{path:'/healthlist/liftlist',component:liftlist,name:"liftlist"}
			],
			meta:{
				title:"资讯列表"
			}
		},   		{
			path: '/healthdetails',   //资讯详情
			component: healthdetails,
			name:"healthdetails",
			meta:{
				title:"资讯详情"
			}
		},
		{
			path: '/register',
			component: register,
			name:"register",
			meta:{
				title:"注册"
			}
		},
		{
			path: '/login',
			component: login,
			name:"login",
			meta:{ 
				title:"登陆"
			}
		},
		{
			path: '/findpwd',
			component: findpwd,
			name:"findpwd",
			meta:{ 
				title:"找回密码"
			}
		},
		{
			path: '/doctor',
			component: doctor,
			name:"doctor",
			meta:{ 
				title:"医护学习"
			}
		},
		{
			path: '/doctorvideo',
			component: doctorvideo,
			name:"doctorvideo",
			meta:{ 
				title:"视频列表"
			}
		},
		{
			path: '/doctorvideoDetails',
			component: doctorvideoDetails,
			name:"doctorvideoDetails",
			meta:{ 
				title:"视频详情"
			}
		},
		{
			path: '/doctorpro',
			component: doctorpro,
			name:"doctorpro",
			meta:{ 
				title:"图文列表"
			}
		},
		{
			path:'/doctordestails',
			component:doctordestails,
			name:'doctordestails',
			meta:{
				title:'图文详情'
			}
		},
		{
			path: '/doctorcare',
			component: doctorcare,
			name:"doctorcare",
			meta:{ 
				title:"医护人才"
			},
			redirect:"/findfulltime",
			children:[
				{
				path:'/findfulltime',
				component:findfulltime,
				name:'findfulltime',
				meta:{
					title:'医护人才'
				}
			},
			{
				path:'/findparttime',
				component:findparttime,
				name:'findparttime',
				meta:{
					title:'医护人才'
				}
			}
			]
		},
		{
			path: '/doctormsg',
			component: doctormsg,
			name:"doctormsg",
			meta:{ 
				title:"个人中心"
			},
			redirect:'/doctormsg/myrelease',
			children:[
				{path:'/doctormsg/myrelease',component:myrelease,name:'myrelease'},
				{path:'/doctormsg/invitationinterview',component:invitationinterview,name:'invitationinterview'},
				{path:'/doctormsg/myapplication',component:myapplication,name:'myapplication'},
				{path:'/doctormsg/reaumelist',component:reaumelist,name:'reaumelist'}
			]
		},
		{
			path:'/visitingjobsearch',
			component:visitingjobsearch,
			name:'visitingjobsearch',
			meta:{
				title:'求职者列表'
			}
		},
		{
			path: '/publishrecruit',
			component: publishrecruit,
			name:"publishrecruit",
			meta:{ 
				title:"发布招聘"
			}
		},
		{
			path: '/fulltime',
			component: fulltime,
			name:"fulltime",
			meta:{ 
				title:"全职简历"
			}
		},
		{
			path: '/fulltimelook',
			component: fulltimelook,
			name:"fulltimelook",
			meta:{ 
				title:"全职简历预览"
			}
		},
		{
			path: '/parttime',
			component: parttime,
			name:"parttime",
			meta:{ 
				title:"兼职简历"
			}
		},
		{
			path: '/parttimelook',
			component: parttimelook,
			name:"parttimelook",
			meta:{ 
				title:"兼职简历预览"
			}
		},
		{
			path: 'about',  //关于我们详细
			component: about,
			name:"about",
			meta:{ 
				title:"关于我们"
			} 
		},
		{
			path: '/abouthome',  //关于我们
			component: abouthome,
			name:"abouthome",
			meta:{ 
				title:"关于我们"
			}
		},
		{
			path: '*',
			redirect:"/"
		}
	]
})