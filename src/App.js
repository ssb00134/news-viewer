import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/:category?" component={NewsPage} />;
    </BrowserRouter>
  );
};

export default App;
