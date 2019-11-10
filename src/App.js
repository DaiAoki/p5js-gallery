import 'babel-polyfill'
import 'core-js'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from 'store/configureStore'
import Layout from 'components/shared/Layout'
import Root from 'components/Root'
import { media } from 'utils/media'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Root}/>
              <Route component={Root}/>
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
