/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import progress from './img/progress.png';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="book font2">
      <div className="info">
        <text className="category font1">{category}</text>
        <h2 className="title">{title}</h2>
        <h3 className="author">{author}</h3>
        <div>
          <button className="delete" type="button">Comment</button>
          <text className="line">|</text>
          <button className="delete" type="button" onClick={deleteBook} value={id}> Remove</button>
          <text className="line gray">|</text>
          <button className="delete" type="button"> Edit</button>
        </div>
      </div>
      <div>
        <img src={progress} alt="progress" width="50 px" />
        <div className="precent">50%</div>
        <p className="gray">Completed</p>
      </div>
      <div className="separator" />
      <div>
        <p className="gray">CURRENT CHAPTER</p>
        <p>Chapter: 3</p>
        <button id="add" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
