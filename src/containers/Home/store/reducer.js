import { CHANGE_LIST } from './constant'
const defaultState = {
  name: 'this is redux name',
  newsList: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case CHANGE_LIST:
      return {...state, newsList: action.list}
    default: 
      return state
  }
    
}

export default reducer