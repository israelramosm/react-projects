import axios from "axios";

const API_KEY = "c7c889582e554018334f9ce5cb70341c";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},mx`;
  const request = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: request ? request : []
  };
}
