import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

const BooksRootReducer = {
  books: BooksReducer,
  activeBook: ActiveBook
};

export default BooksRootReducer;
