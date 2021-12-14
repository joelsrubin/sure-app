import { useState, useEffect } from 'react';
import { updateQuote } from '../../API/endpoints';
import PriceCard from './PriceCard';
import SelectCard from './SelectCard';

export default function QuoteOverview({ quoteInfo, setQuoteInfo, setPage }) {

  const { quote } = quoteInfo;

  // destructuring quote object
  const { policy_holder, premium, quoteId, rating_address, variable_options, variable_selections } = quote;

  // destructuring variable_options object
  const { asteroid_collision, deductible } = variable_options;


  // initialize state with the first value in the values array
  const [varSelections, setSelections] = useState({
    deductible: deductible.values[0],
    asteroid_collision: asteroid_collision.values[0],
  });

  // update state with the value of the selection
  const handleChange = (e) => {
    const { name, value } = e.target;

    setSelections({
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
      variable_selections: {
        deductible: varSelections.deductible,
        asteroid_collision: varSelections.asteroid_collision
      }
    };
    const res = await updateQuote(data);
    setQuoteInfo(res.data);
    return res;
  };

  useEffect(() => {
    updateQuotes();
  }, [varSelections]);


  const selectData = [variable_options.asteroid_collision, variable_options.deductible];

  return (
    <div className="overview">
      <div className="overview-header-container">
        <h1 className="overview-header">Quote Overview</h1>
      </div>
      <div className="price-card-container">
        <PriceCard data={variable_selections.asteroid_collision} text='Asteroid Collision' />
        <PriceCard data={premium} text="Premium" />
        <PriceCard data={variable_selections.deductible} text="Deductible" />
      </div>
      <div className="select-container">
        {selectData.map((data, i) => (
          <SelectCard key={i} data={data} handleChange={handleChange} />
        ))}
      </div>
    </div >
  );
};