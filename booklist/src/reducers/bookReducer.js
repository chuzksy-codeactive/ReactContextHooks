const uuidv1 = require('uuid/v1');

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [{
        title: action.book.title,
        author: action.book.author,
        id: uuidv1() 
      }, ...state];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
}