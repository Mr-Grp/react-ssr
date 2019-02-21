import Home from './containers/Home'
import Login from './containers/Login'
import App from './App'
export default [
  {
    path: '/',
    component: App,
    key: 'app',
    routes: [
      {
        path: '/home',
        component: Home,
        exact: true,
        key: 'home',
        loadData: Home.loadData
      },
      {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
      }
    ]
  }
]
