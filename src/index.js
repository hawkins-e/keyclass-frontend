import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {BrowserRouter as BrowserRouter, Link} from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'))
serviceWorker.unregister();
