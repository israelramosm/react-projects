import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PostsIndex from "./components/post_index";
import PostNew from "./components/post_new";
import PostShow from "./components/post_show";

const Blog = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/blog/post/new" component={PostNew} />
        <Route path="/blog/post/:id" component={PostShow} />
        <Route path="/blog" component={PostsIndex} />
      </Switch>
    </div>
  </Router>
);

export default Blog;
