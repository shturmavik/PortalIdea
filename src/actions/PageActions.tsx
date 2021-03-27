function setType(type: string = 'index') {
  // console.log('title', title)
  return {
    type: 'SET_TYPE',
    payload: type,
  }
}
function setTitle(title: string = 'Домашняя') {
  // console.log('title', title)
  return {
    type: 'SET_TITLE',
    payload: title,
  }
}

export { setType, setTitle }
