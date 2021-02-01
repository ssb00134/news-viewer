import axios from 'axios';
import React, { useState } from 'react';
import NewsList from './components/NewsList';

const App = () => {
  const [data, setData] = useState(null);
  const onclick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=bebb841b605142308c685bb028b2f784',
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return <NewsList />;
};

export default App;
