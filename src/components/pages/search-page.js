import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '../card';
import './search-page.css';
import { apiService } from '../../services';

const SearchPage = () => {
  const { name } = useParams();

  const [list, setList] = useState([]);

  useEffect(() => {
    apiService.getSearchByName(name).then((list) => setList(list));
  }, [name]);

  const cards = list.map((item) => (
    <Card key={item.id} person={item} />
  ));

  return (
    <div>
      <h2>Результаты поиска</h2>
      <div className="search-list">{cards}</div>
    </div>
  );
};

export default SearchPage;
