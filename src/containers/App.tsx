import React, {useEffect} from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './App.scss'
import Header from './../components/Header/Header'
import Main from './../components/Main/Main'
import Aside from './../components/Aside/Aside'
import Footer from './../components/Footer/Footer'
import IdeaAdd from '../components/IdeaAdd/IdeaAdd';
import Search from '../components/Search/Search';
import Status from '../components/Status/Status';

// eslint-disable-next-line react/prop-types
const App = (props) => {
  // const { user, page } = this.props
  const [user, setUser] = React.useState('')
  const [page, setPage] = React.useState('')
  // eslint-disable-next-line react/prop-types
  useEffect(() => {
    setUser(props.user)
    setPage(props.page)
  }, [])
  // @ts-ignore

  return (
    <>
      <div className='wrapper'>
        <Header user={user} page={page} />
        <div className='grid gap-8 wrapper-main container mx-auto'>
          <Main />
          <Aside />
        </div>
        <div className='h-0 mt-20' />
        <Footer />
      </div>
    </>
  )
}

// приклеиваем данные из store
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (store) => {
  return {
    user: store.user,
    page: store.page,
  }
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps)(App)
