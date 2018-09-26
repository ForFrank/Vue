import Main from '../components/Main'
import Login from '../components/Login'

export default [
		{
			path: '/',
			component: Login
		},
		{
			path: '/main',
			meta: {
				//meta元素
				 requireAuth: true,
				},
				component: Main,

			}
			]

