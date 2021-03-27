import React, { Component, useEffect, useState } from 'react'
import { withRouter } from 'react-router'
// import { AR_HOME_BUTTON } from '../../constants/AR_HOME_BUTTON'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as Lamp } from '../../assets/icons/lamp.svg'
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg'

import './Header.scss'
import IdeaAdd from '../IdeaAdd/IdeaAdd'
import Search from '../Search/Search'
import Status from '../Status/Status'
import Avatar from '../Avatar/Avatar'
import { store } from '../../store/configureStore'

const Header = (props) => {
  const { user, page } = props

  const [pageType, setPageType] = useState(page.type)

  useEffect(() => {
    store.subscribe(() => {
      const { user, page } = store.getState()
      setPageType(page.type)
    })
  }, [])

  return (
    <header className='mb-8'>
      <div className='container flex mx-auto'>
        <div className='flex flex-grow'>
          <Logo alt='Главная' className='w-36' />
        </div>
        <figure className='flex mr-10'>
          <Avatar className='mt-11' />
          <div className='px-8 pt-14'>
            <figcaption className='text-sm'>
              <div className='font-bold mb-1'>{user.name}</div>
              <div className='mb-4 text-xs'>Моя страница</div>
              <a
                href='#'
                className='flex font-extrabold hover:underline items-center'
              >
                <Lamp className='mr-2' /> Мои идеи
              </a>
            </figcaption>
          </div>
        </figure>
      </div>
      <section className='grid gap-8 wrapper-main container mx-auto'>
        <div>
          {pageType !== 'detail' && (
            <>
              <div className='font-bold text-4xl mb-6'>
                Участвуй в <span className='text-green-400'>улучшениях</span>{' '}
                «Сбербанк Лизинг»
              </div>
              <div className='leading-relaxed mb-6 text-sm'>
                — У тебя есть простая идея?
                <br />
                — Знаешь как улучшить действующий процесс в компании?
                <br />— Или у тебя есть прорывная идея будущего?
              </div>
              <div className='font-bold text-md leading-snug mb-8'>
                Предлагай её на портале, а также голосуй за идею, которую
                поддерживаешь.
                <br />
                Лучшие идеи будут реализованы!
              </div>
            </>
          )}
          <div className='flex mb-7'>
            <IdeaAdd />
            {pageType !== 'detail' && (
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
                  <div className='text-5xl text-idea-indigo font-montserat mb-2'>
                    3
                  </div>
                  <div className='font-semibold leading-4 text-idea-dark-blue fs-13'>
                    Следи за идеями,
                    <br />
                    принятыми <br />в работу
                  </div>
                </div>
              </div>
            )}
          </div>
          {pageType !== 'detail' && <Search />}
          {pageType !== 'detail' && <Status />}
        </div>
        {pageType !== 'detail' && (
          <div className='items-end flex'>
            <img src='../assets/images/present.png' />
          </div>
        )}
      </section>
    </header>
  )
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default withRouter(Header)
