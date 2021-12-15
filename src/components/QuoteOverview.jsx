import { useState, useEffect } from 'react';
import { updateQuote } from '../api';
import PriceCard from './PriceCard';
import SelectCard from './SelectCard';

export default function QuoteOverview({ quoteInfo, setQuoteInfo, setPage }) {

  const { quote } = quoteInfo;

  const { policy_holder, premium, quoteId, rating_address, variable_options, variable_selections } = quote;

  const { asteroid_collision, deductible } = variable_options;


  // initialize state with the first value in the values array
  const [varSelections, setVarSelections] = useState({
    deductible: deductible.values[0],
    asteroid_collision: asteroid_collision.values[0],
  });

  // update state with the value of the selection
  const handleChange = (e) => {
    const { name, value } = e.target;

    setVarSelections({
      ...varSelections,
      [name]: Number(value)
    });
  };


  // update insurance quote on the backend and update quoteInfo state
  const updateQuotes = async () => {

    const data = {
      quoteId,
      rating_address,
      policy_holder,
      variable_selections: varSelections
    };
    const res = await updateQuote(data);
    setQuoteInfo(res.data);

  };

  useEffect(() => {
    updateQuotes();
  }, [varSelections]);



  return (
    <div className="overview">
      <div className="overview-header-container">
        <h1 className="overview-header" >Quote Overview</h1>
      </div>
      <div className="price-card-container">
        <PriceCard data={variable_selections.asteroid_collision} text='Asteroid Collision' />
        <PriceCard data={premium} text="Premium" />
        <PriceCard data={variable_selections.deductible} text="Deductible" />
      </div>
      <div className="select-container">
        <SelectCard data={variable_options.asteroid_collision} handleChange={handleChange} />
        <SelectCard data={variable_options.deductible} handleChange={handleChange} />
      </div>
    </div >
  );
};