import React, { Component } from "react";
import { fetchWeather } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange($event) {
    this.setState({ term: $event.target.value });
  }

  onFormSubmit($event) {
    $event.preventDefault();

    // fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          type="text"
          placeholder="Get a five-day forecast on your favoritie cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispathToProps
)(SearchBar);
