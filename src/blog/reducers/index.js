import { reducer as formReducer } from "redux-form";

import PostReducer from "./reducer_post";

const BlogReducer = {
  posts: PostReducer,
  form: formReducer
};

export default BlogReducer;
