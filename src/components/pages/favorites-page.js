import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { selectUser } from '../../store/authorizationSlice';

const FavoritesPage = () => {
  const user = useSelector(selectUser);
  return user ? <h2>Favorites page</h2> : <Redirect to="/signin" />;
};

export default FavoritesPage;
