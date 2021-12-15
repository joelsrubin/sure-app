import { postcodeValidator } from 'postcode-validator';


export default function Form({ formData, formHandler, submitHandler, submitting, errors, validateState, validatePostal }) {
  const { first_name, last_name, address } = formData;
  const { line_1, line_2, city, region, postal } = address;


  return (

    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div className="rating-info-form">
          <div className="form-cell">
            <label htmlFor="first_name">First Name</label>
            <input type="text" required name="first_name" value={first_name} onChange={formHandler} />
          </div>
          <div className="form-cell">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" value={last_name} required onChange={formHandler} />
          </div>
          <div className="form-cell">
            <label htmlFor="line_1">Address (Line 1)</label>
            <input type="text" name="line_1" value={line_1} required onChange={formHandler} />
          </div>
          <div className="form-cell">
            <label htmlFor="line_2">Address (Line 2)</label>
            <input type="text" placeholder="optional" name="line_2" value={line_2} onChange={formHandler} />
          </div>
          <div className="form-cell">
            <label htmlFor="city">City</label>
            <input type="text" name="city" required value={city} onChange={formHandler} />
          </div>
          <div className="form-cell">
            <label htmlFor="region">State</label>
            <input className={errors.region && 'error-input'} type="text" name="region" value={region} maxLength="2" onChange={formHandler} placeholder="state abbreviation" onBlur={(e) => validateState(e.target.value)} />
            <span className="error-region" style={!errors.region ? { visibility: 'hidden' } : { visibility: 'visible' }}>Invalid State Abbreviation!</span>
          </div>

          <div className="form-cell">
            <label htmlFor="postal">Zip Code</label>
            <input className={errors.postal && 'error-zip-input'} type="number" name="postal" required value={postal} minLength="5" maxLength="5" onChange={formHandler} onBlur={(e) => validatePostal(e.target.value)} />
            <span className="error-postal" style={!errors.postal ? { visibility: 'hidden' } : { visibility: 'visible' }}>Invalid Zip Code!</span>
          </div>
        </div>
        <button className="form-submit">{submitting ? 'Submitting...' : 'Submit!'}</button>
      </form >
    </div >
  );
}