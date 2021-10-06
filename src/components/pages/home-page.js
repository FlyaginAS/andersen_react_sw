import React from 'react';
import PeopleList from '../people-list';
import SearchPanel from '../search-panel';

const HomePage = () => {
  return (
    <div>
      <SearchPanel />
      <PeopleList />
    </div>
  );
};

export default HomePage;
