import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Home from 'pages/Home'
import About from 'pages/About'

const Routes = ({ ...props }) => {
  // eslint-disable-next-line react/prop-types
  const DefaultRoute = ({ component, ...rest }) => (
    <>
      <Header />
      <main className="main-content">
        <Route {...rest} component={component} />
      </main>
      <Footer />
    </>
  )

  return (
    <Switch {...props}>
      <DefaultRoute path="/" exact component={Home} />
      <DefaultRoute path="/sobre" exact component={About} />
    </Switch>
  )
}

export default Routes
