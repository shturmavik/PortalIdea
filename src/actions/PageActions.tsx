export function setTitle(title) {
  // console.log('title', title)
  return {
    type: 'SET_TITLE',
    payload: title,
  }
}
