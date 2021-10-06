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
  const people = useSelector(selectPeople);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  console.log(people);
  const personList = people.map((person) => <Card person={person} />);

  console.log(people);

  return (
    <div className="people-list">
      {status === 'loading' ? <Spinner /> : personList}
    </div>
  );
};

export default PeopleList;
