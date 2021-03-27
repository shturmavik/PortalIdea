import React, { FunctionComponent } from 'react'
import './LikeDislike.scss'
import { ReactComponent as Like } from '../../assets/icons/like.svg'
import { ReactComponent as Dislike } from '../../assets/icons/dislike.svg'
import { MockData } from '../../MockData/MockData'

type Props = {
  like: number,
  dislike: number
}

const LikeDislike = ({ like = 0, dislike = 0 }: Props) => {
  return (
    <div className='grid grid-flow-col w-3/5'>
      <div className='flex font-bold fs-12 items-center'>
        <button className='active:bg-yellow-300 focus:outline-none focus:ring bg-white rounded-full h-7 w-7 flex items-center justify-center shadow-idea-like-dislike mr-2'>
          <Like />
        </button>
        {like}
      </div>
      <div className='flex font-bold fs-12 items-center'>
        <button className='active:bg-yellow-300 focus:outline-none focus:ring bg-white rounded-full h-7 w-7 flex items-center justify-center shadow-idea-like-dislike mr-2'>
          <Dislike />
        </button>
        {dislike}
      </div>
    </div>
  )
}

export default LikeDislike
