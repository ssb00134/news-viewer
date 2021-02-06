import axios from 'axios';
import React, { useState, useCallback } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect}></Categories>
      <NewsList category={category} />
    </>
  );
};

export default App;
