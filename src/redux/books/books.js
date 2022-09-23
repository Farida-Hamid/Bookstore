import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// // Action types
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
    case `${ADD}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);
    case `${READ}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};
/* eslint-disable array-callback-return */
export const recieveBooks = createAsyncThunk(READ,
  async () => {
    const res = await axios.get(APIURL);
    const books = Object.keys(res.data).map((id) => ({
      item_id: id,
      ...res.data[id][0],
    }));
    return books;
  });

export const sendBook = createAsyncThunk(ADD,
  async (book) => {
    await axios.post(APIURL, book);
    return book;
  });

export const removeBook = createAsyncThunk(REMOVE,
  async (id) => {
    await axios.delete(`${APIURL}/${id}`);
    return id;
  });

export default booksReducer;
