import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPeople,
  selectPeople,
  selectStatus,
  selectFilter,
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
  const filter = useSelector(selectFilter);

  const filterPeople = (arr, filter) => {
    let newArr = arr.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return newArr;
  };

  const filteredPeople = filterPeople(people, filter);

  const status = useSelector(selectStatus);

  const personList = filteredPeople.map((person) => (
    <Card key={person.id} person={person} />
  ));

  return (
    <div className="people-list">
      {status === 'loading' ? <Spinner /> : personList}
    </div>
  );
};

export default PeopleList;
