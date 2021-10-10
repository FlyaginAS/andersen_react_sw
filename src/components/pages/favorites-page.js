import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import {
  selectFavorites,
  selectUser,
} from '../../store/authorizationSlice';
import Card from '../card';
import { apiService } from '../../services';

const FavoritesPage = () => {
  const { getPerson } = apiService;
  const arrayOfId = useSelector(selectFavorites);
  //короче то, как я реализовал интерфейс карточки до этого
  // вынуждает теперь делать так, как ниже

  //необходимо получить массив персонов
  const [personArr, setPersonArr] = useState([]);

  useEffect(() => {
    const promisesArr = arrayOfId.map((id) => getPerson(id));
    Promise.all(promisesArr).then((persons) => setPersonArr(persons));
  }, [arrayOfId, getPerson]);

  const cards = personArr.map((person) => (
    <Card key={person.id} person={person} />
  ));

  const user = useSelector(selectUser);
  return user ? (
    <div>
      <h2>Favorites page</h2>
      {cards}
    </div>
  ) : (
    <Redirect to="/signin" />
  );
};

export default FavoritesPage;
