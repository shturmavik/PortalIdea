import React, {useEffect, useState} from 'react';
import './IdeaList.scss'
import currentAPI from '../../MockData/MockApi'
import { Link } from 'react-router-dom'
import Tag from '../Tag/Tag'
import LikeDislike from '../LikeDislike/LikeDislike'
import CommentCount from '../CommentCount/CommentCount'
import { ReactComponent as Arrow } from '../../assets/icons/arrow_short-fat.svg'
import Avatar from '../Avatar/Avatar';

interface IMockIdeas {
    id: number
    categoryId: number
    name: string
    date: string
    status: string
    executor: string
    href: string
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
}

interface IMockCategories {
    id: number,
    name: string,
    href: string,
    countIdeas: number
}



const getIdeas = () => currentAPI.getIdeas()
const getCategories = () => currentAPI.getCategories()

const IdeaCategory = (props) => {
  const { setType } = props
  const [ideas, setIdeas] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(async () => {
    setType('index')
    const ideas = await getIdeas()
    const categories = await getCategories()
    setIdeas(ideas)
      setCategories(categories)
  }, [])

  return (
    <>
      {categories.map((IMockCategories) => {
          if (!IMockCategories.countIdeas) return
          const hrefCategory = `/${IMockCategories.href}/`
        return (
          <div key={IMockCategories.id} className='mb-8'>
            <h2 className='font-bold text-2xl mb-4'>{IMockCategories.name}</h2>
            <div className='gap-6 grid grid-cols-3 mb-6'>
              {ideas.map(IMockIdeas => {
                  if (IMockCategories.id !== IMockIdeas.categoryId) return
                  const hrefIdea = `/${IMockCategories.href}/${IMockIdeas.href}/`
                return (
                  <div
                    key={IMockIdeas.id}
                    className='gap-1 grid idea-list__item pt-2.5 rounded-2xl theme_aqua'
                  >
                    <div className='flex items-center justify-between px-6'>
                      <a
                        href='https://bitrix.rdleas.ru/company/personal/user/4692/'
                        className='flex items-center'
                      >
                        <Avatar width='26' height='26' src={IMockIdeas.author.pic}/>
                        <div className='font-bold pl-2.5 fs-10'>
                          {IMockIdeas.author.name}
                          <br />
                          {IMockIdeas.author.surname}
                        </div>
                      </a>
                      <div className='font-bold fs-10'>{IMockIdeas.date}</div>
                    </div>
                    <div className='gap-4 grid grid-flow-col px-6 leading-3'>
                      <div className='bg-white flex font-bold h-3/4 items-center justify-center rounded-2xl fs-13'>
                        Внедрено
                      </div>
                      <div className='fs-10'>
                        <div>Исполняет:</div>
                        <div className='font-bold'>{IMockIdeas.executor}</div>
                      </div>
                    </div>
                    <Link to={hrefIdea}>
                      <div className='font-bold leading-6 px-7 text-lg h-24 mb-2'>
                        {IMockIdeas.name}
                      </div>
                      <div className='font-bold px-7 text-sm idea-list__item-more relative'>
                        Подробнее
                      </div>
                    </Link>
                    <Tag tags={IMockIdeas.tag} />
                    <div className='bg-blue-500 flex idea-list__item-footer items-center justify-between px-7 rounded-b-2xl'>
                        <CommentCount count={IMockIdeas.comments.count}/>
                        <LikeDislike {...IMockIdeas.estimate}/>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='text-right'>
              <Link
                to={hrefCategory}
                className='inline-flex font-semibold items-center text-xl'
              >
                Смотреть все <Arrow className='ml-1.5' />
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default IdeaCategory
