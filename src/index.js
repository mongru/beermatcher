import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import App from './App.js';
import DetailsModal from './Components/DetailsModal.jsx';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="details/:id" component={DetailsModal} />
        </Route>
    </Router>,

document.getElementById('root'));

if(module.hot) {
    module.hot.accept()
}

registerServiceWorker();
