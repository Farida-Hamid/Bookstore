import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/books/books';

const AddBook = () => {
  const bookList = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  return (
    <form onSubmit={submit}>
      <h2>Add a book</h2>
      <input type="text" placeholder="Title" name="title" value={state.title} onChange={read} />
      <input type="text" placeholder="Author" name="author" value={state.author} onChange={read} />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddBook;