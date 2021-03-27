import React, { useEffect } from 'react'
import './IdeaDetail.scss'
import { Link } from 'react-router-dom'
import Tag from '../Tag/Tag'
import { ReactComponent as Arrow } from '../../assets/icons/arrow_short-fat.svg'
import CommentCount from '../CommentCount/CommentCount'
import LikeDislike from '../LikeDislike/LikeDislike'
import Avatar from '../Avatar/Avatar'

const IdeaDetail = (props) => {
  const { setType } = props
  useEffect(() => {
    setType('detail')
  }, [])

  return (
    <div className='idea-detail'>
      <Link
        to='/'
        className='ml-1.5 idea-detail-back font-bold text-idea-green items-center flex'
      >
        На главную
      </Link>

      <div>Название раздела</div>

      <div className='gap-1 grid idea-list__item pt-2.5 rounded-2xl theme_aqua'>
        <div className='flex items-center justify-between px-6'>
          <div className='flex items-center'>
            <Avatar width={26} height={26} src='' />
            <div className='font-bold pl-2.5 fs-10'>
              Чацкий Александр
              <br />
              Создано: 14.08.19 12:02
            </div>
          </div>
          {/*<LikeDislike />*/}
        </div>
        <div className='gap-4 grid grid-flow-col px-6 leading-3'>
          <div className='bg-white flex font-bold h-3/4 items-center justify-center rounded-2xl fs-13'>
            Внедрено
          </div>
          <div className='fs-10'>
            <div>Исполняет:</div>
            <div className='font-bold'>Не назначено</div>
          </div>
        </div>
        <div className='font-bold leading-6 px-7 text-lg h-24 mb-2'>
          Таким образом укрепление и развитие структуры позволяет выполнять
          важные задания по разработке новых предложений. Задача организации, в
          особенности же новая модель организационной деятельности обеспечивает
          широкому кругу (специалистов) участие в формировании соответствующий
          условий активизации. С другой стороны новая модель организационной
          деятельности обеспечивает широкому кругу (специалистов) участие в
          формировании систем массового участия.
        </div>
        <div className='-mx-1 flex flex-wrap font-semibold px-7 fs-9'>
          <div className='p-1'>
            <div className='bg-white flex h-7 items-center justify-center px-2.5 rounded-full whitespace-nowrap'>
              CRM 2.0
            </div>
          </div>
          <div className='p-1'>
            <div className='bg-white flex h-7 items-center justify-center px-2.5 rounded-full whitespace-nowrap'>
              оптимизация
            </div>
          </div>
          <div className='p-1'>
            <div className='bg-white flex h-7 items-center justify-center px-2.5 rounded-full whitespace-nowrap'>
              Предварительный расчет
            </div>
          </div>
          <div className='p-1'>
            <div className='bg-white flex h-7 items-center justify-center px-2.5 rounded-full whitespace-nowrap'>
              Рейтинг
            </div>
          </div>
          <div className='p-1'>
            <div className='bg-white flex h-7 items-center justify-center px-2.5 rounded-full whitespace-nowrap'>
              совершенствование
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdeaDetail
