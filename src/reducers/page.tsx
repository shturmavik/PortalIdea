const initialState = {
  title: 'Домашняя',
}
// eslint-disable-next-line no-unused-vars
export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload }

    default:
      return state
  }
}
