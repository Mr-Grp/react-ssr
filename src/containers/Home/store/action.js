import { CHANGE_LIST } from './constant'
import clientAxios from '../../../client/request'
import serverAxios from '../../../server/request'

const changeList = (list) => {
  return {
    type: CHANGE_LIST,
    list
  }
}

export const getHomeList = (server) => {
  const request = server ? serverAxios : clientAxios
  return (dispatch)=> {
    return request.get('/api/news.json?secret=PP87ANTIPIRATE')
      .then((data) => {
        dispatch(changeList(data.data.data))
      })
  }
}