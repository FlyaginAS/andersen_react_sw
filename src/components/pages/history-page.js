import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {
  selectHistory,
  selectUser,
} from '../../store/authorizationSlice';
import Button from '../button';
import './history-page.css';

const HistoryPage = () => {
  const user = useSelector(selectUser);
  const history = useSelector(selectHistory);

  const elements = history.reduceRight((acc, his) => {
    const element = (
      <Link
        key={nanoid()}
        className="history-page__link"
        to={`/search=${his}`}
      >
        <Button
          className="history-page__button"
          label={`/search=${his}`}
        />
      </Link>
    );

    return acc.concat(element);
  }, []);

  return user ? (
    history.length === 0 ? (
      <div className="history-page">
        Истории еще нет. Попробуйте поискать
      </div>
    ) : (
      <div className="history-page">{elements}</div>
    )
  ) : (
    <Redirect to="/signin" />
  );
};

export default HistoryPage;
