import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createPost } from "../actions";

class PostNew extends Component {
  renderField({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error, warning }
  }) {
    const inputDangerClass = `form-control ${
      touched && error ? "is-invalid" : ""
    }`;
    return (
      <div className="form-group">
        <label htmlFor={input.name}>{label}</label>
        <div>
          <input
            {...input}
            type={type}
            placeholder={placeholder}
            className={inputDangerClass}
          />
          <small className="text-danger">{touched ? error : ""}</small>
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/blog");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          type="text"
          component={this.renderField}
          label="Title"
          placeholder="Post Title"
        />
        <Field
          name="categories"
          type="text"
          component={this.renderField}
          label="Categories"
          placeholder="Categories"
        />
        <Field
          name="content"
          type="textarea"
          component={this.renderField}
          label="Post Content"
          placeholder="A beautiful post"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/blog" className="btn btn-danger ml-3">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) errors.title = "Enter a title";

  if (!values.categories) errors.categories = "Enter a category";

  if (!values.content) errors.content = "Enter content";

  return errors;
}

const form = reduxForm({
  form: "PostNewForm",
  validate
});

export default connect(
  null,
  { createPost }
)(form(PostNew));
