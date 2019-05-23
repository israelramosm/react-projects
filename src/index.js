import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
// import reducers from './reducers';
const reducers;
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <div>
                <Switch>
                    <Route path="/post/new" component={PostNew} />
                    <Route path="/post/:id" component={PostShow} />
                    <Route path="/" component={App} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
