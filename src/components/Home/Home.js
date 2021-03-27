import React, { Component } from 'react'
import HomeButton from './../HomeButton/HomeButton'

export default class Home extends Component {
  render() {
    return (
      <div className='row'>
        <div className='flex items-center justify-center h-screen'>
          <HomeButton />
        </div>
      </div>
    )
  }
}
