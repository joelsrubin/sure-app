import { stateAbbreviations } from '../../utils';

export default function Form({ formData, formHandler, submitHandler, submitting, errors }) {
  const { first_name, last_name, address } = formData;
  const { line_1, line_2, city, region, postal } = address;



  return (

    <div className="form-container">
      <form onSubmit={(e) => { submitHandler(e); }}>
        <div className="rating-info-form">
          <div className="form-cell">
            <label htmlFor="first_name">First Name</label>
            <input type="text" required name="first_name" value={first_name} onChange={(e) => formHandler(e)} />
          </div>
          <div className="form-cell">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" value={last_name} required onChange={(e) => formHandler(e)} />
          </div>
          <div className="form-cell">
            <label htmlFor="line_1">Line 1</label>
            <input type="text" name="line_1" value={line_1} required onChange={(e) => formHandler(e)} />
          </div>
          <div className="form-cell">
            <label htmlFor="line_2">Line 2</label>
            <input type="text" placeholder="optional" name="line_2" value={line_2} onChange={(e) => formHandler(e)} />
          </div>
          <div className="form-cell">
            <label htmlFor="city">City</label>
            <input type="text" name="city" required value={city} onChange={(e) => formHandler(e)} />
          </div>
          <div className="form-cell">
            <label htmlFor="region">Region</label>
            <input className={errors.region && 'error-input'} type="text" name="region" value={region} required maxLength="2" onChange={(e) => formHandler(e)} placeholder="Provide State Abbrev" />
            {errors.region && <span className="error-span">Invalid Zip Code!</span>}
          </div>
          <div className="form-cell">
            <label htmlFor="postal">Zip Code</label>
            <input type="number" name="postal" required value={postal} minLength="5" maxLength="5" onChange={(e) => formHandler(e)} />

          </div>
        </div>

        <button className="form-submit">{submitting ? 'Submitting...' : 'Submit!'}</button>

      </form>
    </div>
  );
}