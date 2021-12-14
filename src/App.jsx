import { useState } from 'react';
import RatingInfo from './components/RatingInfo';
import QuoteOverview from './components/QuoteOverview';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
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
      {!page && (
        <div className="header">
          <h1>Welcome to the Insurance Quote App</h1>
          <button className="get-started-btn" onClick={() => setPage('rating')}>Get started now! 🚀</button>
        </div>
      )}
      {renderView()}
    </div>
  );
}

export default App;
