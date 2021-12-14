import { useState } from 'react';
import RatingInfo from './components/RatingInfo';
import QuoteOverview from './components/QuoteOverview';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [quoteInfo, setQuoteInfo] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <Link to='ratingInfo'> Get a Quote Today!</Link>
      </header>
      <Routes>
        <Route path='ratingInfo' element={<RatingInfo setQuoteInfo={setQuoteInfo} />}
        />
        <Route path='quoteOverview' element={<QuoteOverview quoteInfo={quoteInfo} />}
        />
      </Routes>
    </div>
  );
}

export default App;
