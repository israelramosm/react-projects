import React, { Component } from "react";
import { connect } from "react-redux";
import * as uuid from "uuid";
import _ from "lodash";

import Chart from "../components/chart";
import GoogleMap from "../components/google_maps";

class WeatherList extends Component {
  renderWeather(cityData) {
    if (!cityData)
      return (
        <tr key={uuid()}>
          <td colSpan={4}>No data</td>
        </tr>
      );

    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), temp =>
      Number(parseFloat(temp - 273.15).toFixed(2))
    );
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="C" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="black" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
