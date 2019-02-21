import { CHANGE_LIST } from './constant'

const changeList = (list) => {
  return {
    type: CHANGE_LIST,
    list
  }
}

export const getHomeList = (server) => {
  return (dispatch, getState, axios)=> {
    return axios.get('/api/news.json?secret=PP87ANTIPIRATE')
      .then((data) => {
        dispatch(changeList(data.data.data))
      })
  }
}