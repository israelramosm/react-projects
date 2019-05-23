export function selectBook(book) {
  // selectedBook is an ActionCreator, It needs to return an Actio,
  // an object with type property
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
