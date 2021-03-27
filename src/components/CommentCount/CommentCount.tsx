import React, { FunctionComponent } from 'react'
import './CommentCount.scss'
import { ReactComponent as Message } from '../../assets/icons/message.svg'
import { MockData } from '../../MockData/MockData'

type Props = {
  count: number
}

const CommentCount = ({ count = 3650 }: Props) => {
  return (
    <div className='flex fs-12 font-bold text-white'>
      <Message className='mr-2' /> {count}
    </div>
  )
}

export default CommentCount
