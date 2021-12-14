import { useState, useEffect } from 'react';
import { updateQuote } from '../../API/endpoints';

export default function QuoteOverview({ quoteInfo, setQuoteInfo, setPage }) {

  const { quote } = quoteInfo;

  // destructuring quote object
  const { policy_holder, premium, quoteId, rating_address, variable_options, variable_selections } = quote;

  // destructuring variable_options object
  const { asteroid_collision, deductible } = variable_options;


  // initialize state with the first value in the values array
  const [varSelections, setVarSelections] = useState({
    deductible: deductible.values[0],
    asteroid_collision: asteroid_collision.values[0],
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setVarSelections({
      ...varSelections,
      [name]: Number(value)
    });
  };


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
        <button className="get-started-btn" onClick={() => setPage('rating')}>Back</button>
        <h1 className="overview-header">Quote Overview Page</h1>
      </div>
      <div className="overview-container">
        <div className="overview-cell">
          <div>${variable_selections.asteroid_collision.toLocaleString('us-EN')}
          </div>
          <h4> Asteroid Collision Selection </h4>
        </div>
        <div className="overview-cell">
          <div>${premium.toLocaleString('us-EN')}
          </div>
          <h4> Premium</h4>
        </div>
        <div className="overview-cell">
          <div>${variable_selections.deductible.toLocaleString('us-EN')}
          </div>
          <h4> Deductible</h4>
        </div>
      </div>
      <div className="overview-container">
        {selectData.map((data, i) => (
          <div className="overview-cell">
            <label htmlFor="asteroid-collision-select">{data.title}</label>
            <select id="asteroid-collision-select" name="asteroid_collision" onChange={(e) => handleChange(e)}>
              {data.values.map((value) => (
                <option key={value} value={value}>${value.toLocaleString('en-US')}</option>
              ))}
            </select>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div >
  );
};