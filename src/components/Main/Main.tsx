import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, withRouter } from 'react-router'
// import Home from '../Home/Home'
// import Admin from '../Admin/Admin'
// import Genre from '../Genre/Genre'
// import Appointment from '../Appointment/Appointment'

import { setTitle } from '../../actions/PageActions'
import { connect } from 'react-redux'
import IdeaList from '../IdeaList/IdeaList'
import IdeaDetail from '../IdeaDetail/IdeaDetail'
const Main = () => {
  // const { setTitleAction } = this.props
  // this.renderHome = (props) => (
  //   <Home setTitle={setTitleAction} {...props} />
  // )
  // this.renderAppointment = (props) => (
  //   <Appointment setTitle={setTitleAction} {...props} />
  // )

  return (
    <>
      <main>
          {/*<IdeaList />*/}
        <Switch>
          <Route exact path='/' component={IdeaList} />
          <Route path='/:category/:detail' component={IdeaDetail} />
          {/*<Route path='/genre' component={Genre} />*/}
          {/*<Route path='/appointment' component={Appointment} />*/}
        </Switch>
      </main>
    </>
  )
}

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({
  setTitleAction: (title) => dispatch(setTitle(title)),
})

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(null, mapDispatchToProps)(withRouter(Main))
