import { useState } from 'react';
import RatingInfo from './components/RatingInfo';
import QuoteOverview from './components/QuoteOverview';

import './App.css';

function App() {

  const [quoteInfo, setQuoteInfo] = useState({});
  const [page, setPage] = useState('');

  const renderView = () => {
    if (page === 'quote') {
      return <QuoteOverview setPage={setPage} quoteInfo={quoteInfo} setQuoteInfo={setQuoteInfo} />;
    }
    if (page === 'rating') {
      return <RatingInfo setQuoteInfo={setQuoteInfo} setPage={setPage} />;
    }
  };


  return (
    <div className="App">
      <div className="body">
        {!page && (
          <div className="header">
            <h1 className="title">Welcome to the Insurance Quote App</h1>
            <button className="get-started-btn" onClick={() => setPage('rating')}>Get started now! 🚀</button>
          </div>
        )}
        {renderView()}
      </div>
    </div>
  );
}

export default App;
