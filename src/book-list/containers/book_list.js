import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item"
      >
        {book.title}
      </li>
    ));
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  // Whatever is return it would show up as a props inside of BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  // this tell to the store to update
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
