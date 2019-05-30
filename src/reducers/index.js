import { combineReducers } from "redux";
import BlogReducer from "../blog/reducers";

// import BooksReducer from "./reducer_books";
// import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({
  state: (state = {}) => state,
  blog: BlogReducer
  //   books: BooksReducer,
  //   activeBook: ActiveBook
});

export default rootReducer;
