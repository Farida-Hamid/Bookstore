import React from 'react';
import { useDispatch } from 'react-redux';
import { check } from '../redux/categories/categories';

const Categories = ({ categories }) => {
  const dispatch = useDispatch();

  const showStatus = () => {
    dispatch(check());
  };
  return (
    <>
      <button type="button" onClick={() => showStatus()}>Check status</button>
      <br />
      {categories}
    </>
  );
};

export default Categories;
