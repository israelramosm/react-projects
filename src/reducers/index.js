import { combineReducers } from "redux";
import BlogReducer from "../blog/reducers/index";
import BooksRootReducer from "../book-list/reducers/index";
import WeatherRootReducer from "../weather/reducers/index";

const { posts, form } = BlogReducer;
const { books, activeBook } = BooksRootReducer;
const { weather } = WeatherRootReducer;

const rootReducer = combineReducers({
  state: (state = {}) => state,
  posts,
  form,
  books,
  activeBook,
  weather
});

export default rootReducer;
