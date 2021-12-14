import { useState, useEffect } from 'react';
import { updateQuote } from '../../API/endpoints';

export default function QuoteOverview({ quoteInfo, setQuoteInfo }) {

  const { quote } = quoteInfo;

  // destructuring quote object
  const { policy_holder, premium, quoteId, rating_address, variable_options, variable_selections } = quote;

  // destructuring variable_options object
  const { asteroid_collision, deductible } = variable_options;

  const [varSelections, setVarSelections] = useState({
    deductible: variable_selections.deductible,
    asteroid_collision: variable_selections.asteroid_collision
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setVarSelections({
      ...varSelections,
      [name]: Number(value)
    });
  };


  const updateQuotes = async () => {
    console.log('fetching...');
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



  return (
    <div className="overview">
      <h1 className="overview-header">Quote Overview Page</h1>
      <div className="overview-container">
        <div className="overview-cell">
          <div>${variable_selections.asteroid_collision}
          </div>
          <h4> Asteroid Collision Selection </h4>
        </div>
        <div className="overview-cell">
          <div>${premium}
          </div>
          <h4> Premium</h4>
        </div>
        <div className="overview-cell">
          <div>${variable_selections.deductible}
          </div>
          <h4> Deductible</h4>
        </div>
      </div>
      <div className="overview-container">
        <div className="overview-cell">
          <select id="asteroid-collision-select" name="asteroid_collision" onChange={(e) => handleChange(e)}>
            {variable_options.asteroid_collision.values.map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
          <label htmlFor="asteroid-collision-select">{variable_options.asteroid_collision.title}</label>
        </div>
        <div className="overview-cell">
          <select id="deductible-select" name="deductible" onChange={(e) => handleChange(e)}>
            {variable_options.deductible.values.map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
          <label htmlFor="deductible-select">{variable_options.deductible.title}</label>
        </div>
      </div>
    </div>
  );
};