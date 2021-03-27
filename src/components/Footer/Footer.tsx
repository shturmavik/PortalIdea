import React from 'react'
import './Footer.scss'

const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear()
  return (
    <>
      <footer className='bg-idea-gray h-56'>
        <div className='container mx-auto pt-12'>
          <p className='text-lg'>
            © 2000-{CURRENT_YEAR} АО «Сбербанк Лизинг». Корпоративный портал.
            Idea
          </p>
        </div>
      </footer>
    </>
  )
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default Footer
