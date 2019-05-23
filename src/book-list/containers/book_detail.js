import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) return <h3>Select a book to get started</h3>;

    return (
      <div className="col-sm-8">
        <h3>Details for:</h3>
        <h5>Title: "{this.props.book.title}"</h5>
        <h5>Pages: {this.props.book.pages}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
