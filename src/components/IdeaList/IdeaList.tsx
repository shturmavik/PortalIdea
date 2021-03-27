import React, {useEffect} from 'react';
import './IdeaList.scss'
import { MockData } from '../../MockData/MockData'
import { Link } from 'react-router-dom'
import Tag from '../Tag/Tag'
import LikeDislike from '../LikeDislike/LikeDislike'
import CommentCount from '../CommentCount/CommentCount'
import { ReactComponent as Arrow } from '../../assets/icons/arrow_short-fat.svg'
import Avatar from '../Avatar/Avatar';

interface TMockData {
  id: number
  name: string
  link: string
  items: {
    id: number
    name: string
    date: string
    status: string
    executor: string
    href: string
    category: string
    author: {
      pic: string
      name: string
      surname: string
    }
    tag: [
      {
        name: string
        href: string
      }
    ]
    estimate: {
      like: number
      dislike: number
    }
    comments: {
      count: number
    }
  }[]
}

const IdeaList = (props) => {
  const { setType } = props

  useEffect(() => {
    setType('index')
  }, [])

  return (
    <>
      {MockData.map((TMockData) => {
        return (
          <div key={TMockData.id} className='mb-8'>
            <h2 className='font-bold text-2xl mb-4'>{TMockData.name}</h2>
            <div className='gap-6 grid grid-cols-3 mb-6'>
              {TMockData.items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className='gap-1 grid idea-list__item pt-2.5 rounded-2xl theme_aqua'
                  >
                    <div className='flex items-center justify-between px-6'>
                      <a
                        href='https://bitrix.rdleas.ru/company/personal/user/4692/'
                        className='flex items-center'
                      >
                        <Avatar width='26' height='26' src={item.author.pic}/>
                        <div className='font-bold pl-2.5 fs-10'>
                          {item.author.name}
                          <br />
                          {item.author.surname}
                        </div>
                      </a>
                      <div className='font-bold fs-10'>{item.date}</div>
                    </div>
                    <div className='gap-4 grid grid-flow-col px-6 leading-3'>
                      <div className='bg-white flex font-bold h-3/4 items-center justify-center rounded-2xl fs-13'>
                        Внедрено
                      </div>
                      <div className='fs-10'>
                        <div>Исполняет:</div>
                        <div className='font-bold'>{item.executor}</div>
                      </div>
                    </div>
                    <Link to={item.href}>
                      <div className='font-bold leading-6 px-7 text-lg h-24 mb-2'>
                        {item.name}
                      </div>
                      <div className='font-bold px-7 text-sm idea-list__item-more relative'>
                        Подробнее
                      </div>
                    </Link>
                    <Tag tags={item.tag} />
                    <div className='bg-blue-500 flex idea-list__item-footer items-center justify-between px-7 rounded-b-2xl'>
                        <CommentCount count={item.comments.count}/>
                        <LikeDislike {...item.estimate}/>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='text-right'>
              <a
                href='#'
                className='inline-flex font-semibold items-center text-xl'
              >
                Смотреть все <Arrow className='ml-1.5' />
              </a>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default IdeaList
