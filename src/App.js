import 'babel-polyfill'
import 'core-js'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from 'store/configureStore'
import Layout from 'components/shared/Layout'
import Root from 'components/Root'
import HelloThree from 'components/HelloThree'
import SampleOne from 'components/SampleOne'
import References from 'components/References'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Root}/>
              <Route exact path="/hello-three" component={HelloThree}/>
              <Route exact path="/sample-one" component={SampleOne}/>
              <Route exact path="/references" component={References}/>
              <Route component={Root}/>
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
