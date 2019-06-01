import { combineReducers } from "redux";
import BlogReducer from "../blog/reducers/index";

const { posts, form } = BlogReducer;
const rootReducer = combineReducers({
  state: (state = {}) => state,
  posts,
  form
});

export default rootReducer;
