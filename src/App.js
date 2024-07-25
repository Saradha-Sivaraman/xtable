import React, { useState } from 'react';

import Table from './Table';

function App({ articles }) {
  const [sortedArticles, setSortedArticles] = useState(articles);

  const sortBy = action => {
    if (action === 'views') {
      articles.sort((a, b) => b.views - a.views);
    } else if (action === 'date') {
      articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setSortedArticles(() => [...articles]);
  };

  return (
    <div className="App">
     <button
      
          onClick={() => sortBy('date')}
        >
             Sort By Date
        </button>
        <button
       
          onClick={() => sortBy('views')}
        >
         Sort By Views
        </button>
    
      <Table articles={sortedArticles} />
    </div>
  );
}

export default App;
