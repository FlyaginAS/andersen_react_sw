import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPeople,
  selectPeople,
  selectStatus,
} from '../../store/peopleSlice';
import Card from '../card';
import Spinner from '../spinner';
import './people-list.css';

const PeopleList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);
  const people = useSelector(selectPeople);
  const status = useSelector(selectStatus);

  const personList = people.map((person) => (
    <Card key={person.id} person={person} />
  ));

  return (
    <div className="people-list">
      {status === 'loading' ? <Spinner /> : personList}
    </div>
  );
};

export default PeopleList;
