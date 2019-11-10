import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/css/reset.css'
import 'assets/css/base.css'
import 'assets/css/index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
