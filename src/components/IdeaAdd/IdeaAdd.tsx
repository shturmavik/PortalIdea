import React from 'react'
import { ReactComponent as Plus } from '../../assets/icons/plus.svg'
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg'
import './IdeaAdd.scss'

const IdeaAdd = () => {
  return (
    <div className='flex mb-7'>
      <button className='bg-idea-dark-blue flex focus:border-blue-300 focus:outline-none focus:ring hover:shadow-none items-center pl-9 pr-12 rounded-idea-30 shadow-idea-dark-blue text-white transition'>
        <Plus />
        <span className='font-medium text-2xl tracking-widest uppercase pl-12'>
          Новая идея
        </span>
      </button>
      <div className='flex-1 gap-4 grid grid-cols-3 mt-n2 pl-8'>
        <div>
          <div className='flex items-center text-5xl text-idea-indigo font-montserat mb-2'>
            1 <Arrow className='ml-5' />
          </div>
          <div className='font-semibold leading-4 text-idea-dark-blue fs-13'>
            Предлагай свои идеи и оценивай идеи других участников
          </div>
        </div>
        <div>
          <div className='flex items-center text-5xl text-idea-indigo font-montserat mb-2'>
            2 <Arrow className='ml-5' />
          </div>
          <div className='font-semibold leading-4 text-idea-dark-blue fs-13'>
            Обсуждай в<br />
            комментариях
          </div>
        </div>
        <div>
          <div className='text-5xl text-idea-indigo font-montserat mb-2'>3</div>
          <div className='font-semibold leading-4 text-idea-dark-blue fs-13'>
            Следи за идеями,
            <br />
            принятыми <br />в работу
          </div>
        </div>
      </div>
    </div>
  )
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default IdeaAdd
