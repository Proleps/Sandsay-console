import './App.css'
import React from 'react'
import ActionPanels from './components/ActionPanels/ActionPanels'
import Auth from './components/Auth/Auth'
import Header from './components/Header/Header'
import History from './components/History/History'
import RequestField from './components/RequestField/RequestField'
import { connect } from 'react-redux'

function App({isAutenticated}) {

  let routes = isAutenticated
    ? (
      <>
        <Header/>
        <History/>
        <RequestField/>
        <ActionPanels/>
      </>
    )
    : <Auth/>

  return (
    <div className="App">
      { routes }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAutenticated: state.auth.isAutenticated
  }
}

export default connect(mapStateToProps, null)(App)
