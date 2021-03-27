import React from 'react'
import { ReactComponent as Plus } from '../../assets/icons/plus.svg'
import './IdeaAdd.scss'

const IdeaAdd = () => {
  return (
      <button className='h-24 bg-idea-dark-blue flex focus:border-blue-300 focus:outline-none focus:ring hover:shadow-none items-center pl-9 pr-12 rounded-idea-30 shadow-idea-dark-blue text-white transition'>
        <Plus />
        <span className='font-medium text-2xl tracking-widest uppercase pl-12'>
          Новая идея
        </span>
      </button>
  )
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default IdeaAdd
