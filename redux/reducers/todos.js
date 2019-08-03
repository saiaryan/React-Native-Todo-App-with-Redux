
const todos = (state=[],action) => {
 switch(action.type) {
    case 'ADD_TODO': 
      state.push(action.text)
      return state
    case 'DELETE_TODO': 
      state.splice(action.key, 1)
      return state
    // below return also works
    // return [...state.slice(0, action.key), ...state.slice(action.key + 1)]
    default :
    return state
 }
}

export default todos