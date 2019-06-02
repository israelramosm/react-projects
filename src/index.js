import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import App from "./components/app";
import Blog from "./blog/index";
import BookList from "./book-list/index";
import ReactBasics from "./react-basics/index";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/book-list" component={BookList} />
          <Route path="/react-basics" component={ReactBasics} />
          {/* <Route path="/weather" component={Weather} /> */}
          <Route exac path="/" component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
