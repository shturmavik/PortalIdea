import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomeButton.scss'
import { AR_HOME_BUTTON } from '../../constants/AR_HOME_BUTTON'

export default class HomeButton extends Component {
  render() {
    return (
      <div className='gap-4 grid main-tiles py-3 sm:grid-cols-3'>
        {AR_HOME_BUTTON.map(({ Icon, href, name }) => (
          <Link key={name} className='main-tile block relative p-10' to={href}>
            <Icon alt={name} className='main-tile__icon' />
            <span className='absolute flex justify-center left-0 main-tile__title w-full'>
              {name}
            </span>
          </Link>
        ))}
      </div>
    )
  }
}
