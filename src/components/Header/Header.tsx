import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import { AR_HOME_BUTTON } from '../../constants/AR_HOME_BUTTON'
import {ReactComponent as Logo} from '../../assets/icons/logo.svg'
import {ReactComponent as Lamp} from '../../assets/icons/lamp.svg'
import './Header.scss'
import IdeaAdd from '../IdeaAdd/IdeaAdd';
import Search from '../Search/Search';
import Status from '../Status/Status';

class Header extends Component {
  render() {
    const { user, page } = this.props
    const path = this.props.location.pathname
    // let title = AR_HOME_BUTTON.find((el) => el.href === path)
    // console.log('props', path)
    return (
      <header className="mb-8">
        <div className='container flex mx-auto'>
          <div className='flex flex-grow'>
            <Logo alt='Главная' className='w-36' />
          </div>
          <figure className='flex mr-10'>
            <img
              src='../../assets/images/avatar.png'
              className='h-16 mt-11 rounded-full w-16'
            />
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
        <section className="grid gap-8 wrapper-main container mx-auto">
          <div>
            <div className='font-bold text-4xl mb-6'>
              Участвуй в <span className='text-green-400'>улучшениях</span> «Сбербанк Лизинг»
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
          <IdeaAdd />
          <Search />
          <Status />
          </div>
          <div className="items-end flex">
            <img src="../assets/images/present.png"/>
          </div>
        </section>
      </header>
    )
  }
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default withRouter(Header)
