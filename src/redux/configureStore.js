import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootStore = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(
  rootStore,
  applyMiddleware(thunk),
);

export default store;
