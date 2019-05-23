import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import PostsIndex from "./components/post_index";
import PostNew from "./components/post_new";
import PostShow from "./components/post_show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route path="/post/new" component={PostNew} />
          <Route path="/post/:id" component={PostShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
