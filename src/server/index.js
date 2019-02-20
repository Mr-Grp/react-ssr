import express from 'express'
import { render } from './util'
import { getStore } from '../store'
import { matchRoutes } from "react-router-config";
import routes from "../Router";
import proxy from 'express-http-proxy'
import { matchPath } from "react-router-dom";
const app = express()

app.use(express.static('public'))

app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    return '/ssr/api' + req.url
  }
}));

app.get('*', (req, res) => {

  const store = getStore()
  //要在这里拿到异步数据，并填充到 store 中
  //需要根据用户的请求地址、路由做判断
  //根据路由把对应组件的异步数据填充到 store 中去

  // const matchRoutes = []
  // routes.some(route => {
  //   const match = matchPath(req.path, route)
  //   if (match) {
  //     matchRoutes.push(route)
  //   }
  // })
  // //匹配到的路由，包括多级路由
  // console.log(matchRoutes)
  const promises = []
  const matchedRoutes = matchRoutes(routes, req.path)
  //匹配到的路由，包括多级路由
  matchedRoutes.forEach(item => {
    if(item.route.loadData)
    promises.push(item.route.loadData(store))
  })

  Promise.all(promises).then(() => {
    res.send(render(store, routes, req))
  })
  
})


const server = app.listen(3000)