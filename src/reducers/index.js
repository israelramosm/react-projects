import { combineReducers } from "redux";
import BlogReducer from "../blog/reducers/index";
import BooksRootReducer from "../book-list/reducers/index";

const { posts, form } = BlogReducer;
const { books, activeBook } = BooksRootReducer;
const rootReducer = combineReducers({
  state: (state = {}) => state,
  posts,
  form,
  books,
  activeBook
});

export default rootReducer;
