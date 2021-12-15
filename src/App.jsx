import { useState } from 'react';
import RatingInfo from './components/RatingInfo';
import QuoteOverview from './components/QuoteOverview';
import Landing from './components/Landing';

import './App.css';

function App() {

  const [quoteInfo, setQuoteInfo] = useState({});
  const [page, setPage] = useState('landing');

  const renderView = () => {
    switch (page) {
      case 'quote':
        return <QuoteOverview setPage={setPage} quoteInfo={quoteInfo} setQuoteInfo={setQuoteInfo} />;
      case 'rating':
        return <RatingInfo setQuoteInfo={setQuoteInfo} setPage={setPage} />;
      case 'landing':
      default:
        return <Landing setPage={setPage} />;
    }
  };

  return (
    <div className="App">
      <div className="body">
        {renderView()}
      </div>
    </div>
  );
};

export default App;
