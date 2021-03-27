import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, withRouter } from 'react-router'

import { setType, setTitle } from '../../actions/PageActions'
import { connect } from 'react-redux'
import IdeaList from '../IdeaList/IdeaList'
import IdeaDetail from '../IdeaDetail/IdeaDetail'
const Main = (props) => {

  const { setTypeAction, setTitleAction } = props

  const renderIndex = (props: string) => (
    <IdeaList setType={setTypeAction} {...props} type='index' />
  )

  const renderDetail = (props: string) => (
    <IdeaDetail setType={setTypeAction} {...props} type='detail' />
  )

  return (
    <>
      <main>
        <Switch>
          <Route exact path='/' render={renderIndex} />
          <Route path='/:category/:detail' render={renderDetail} />
        </Switch>
      </main>
    </>
  )
}

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => ({
  setTitleAction: (title: string) => dispatch(setTitle(title)),
  setTypeAction: (type: string) => dispatch(setType(type)),
})

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(null, mapDispatchToProps)(withRouter(Main))
