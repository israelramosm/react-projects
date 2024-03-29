import React, { Component } from "react";
import { connect } from "react-redux";
import * as _ from "lodash";
import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id} className="list-group-item">
          <Link to={`/blog/post/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-rigth">
          <Link to="/blog/post/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
