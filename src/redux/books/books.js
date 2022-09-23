import axios from 'axios';

// Action types
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const READ = 'bookstore/books/READ';

const APIURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1fOnn2C5yMKtspS4K1tx/books';

// Action creators
export const add = (book) => ({
  type: ADD,
  payload: book,
});

export const remove = (index) => ({
  type: REMOVE,
  payload: index,
});

export const read = (books) => ({
  type: READ,
  payload: books,
});

// Reducer
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case READ:
      return [...action.payload];
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.filter((item) => item.item_id !== action.payload)];
    default:
      return state;
  }
};

/* eslint-disable array-callback-return */
export const recieveBooks = () => (dispatch) => {
  axios.get(APIURL).then((response) => {     
    const books = Object.keys(response.data).map((key) => {
      const book = response.data[key][0];
      return {
        item_id: key,
        ...book,
      }
    });
    dispatch(read(books));
  })
};

export const sendBook = (book) => async (dispatch) => {
  await fetch(APIURL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      dispatch(add(book));
    });
};

export const removeBook = (id) => async (dispatch) => {
  await fetch(`${APIURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      dispatch(remove(id));
    });
};

export default booksReducer;
