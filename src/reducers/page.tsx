const initialState = {
  title: 'Домашняя',
  type: 'index',
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload }
    case 'SET_TYPE':
      // console.log('SET_TYPE', { ...state, type: action.payload });
      return { ...state, type: action.payload }
    default:
      return state
  }
}
