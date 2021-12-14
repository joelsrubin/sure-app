import { getQuote } from '../../API/endpoints';
import { useState } from 'react';

const initialState = {
  first_name: '',
  last_name: '',
  address: {
    line_1: '',
    line_2: '',
    city: '',
    region: '',
    postal: '',
  }
};

export default function RatingInfo({ setQuoteInfo, setPage }) {
  const [formData, setFormData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const { first_name, last_name, address } = formData;
  const { line_1, line_2, city, region, postal } = address;

  // submit formData and navigate to quote overview page
  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await getQuote(formData);
    if (res.errors) {
      setErrors(res.errors);
      setSubmitting(false);
    } else {
      setSubmitting(false);
      setFormData(initialState);
      setQuoteInfo(res.data);
      setPage('quote');
    }
  };

  // update formData state name lines on input change
  const nameHandler = (e) => {
    const { name, value } = e.target;
    setErrors({});
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // update formData state address lines on input change
  const addressHandler = (e) => {
    const { name, value } = e.target;
    setErrors({});
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value
      }
    });
  };

  // format error messages for display
  const formatErrors = (text) => {
    return text.replace('_', ' ');
  };



  return (

    <>
      <h1 className="overview-header">Rating Info Page</h1>
      <div className="errors">
        {Object.entries(errors).map(([key, value], i) => {
          return (
            <p key={i}>{formatErrors(value)}: {formatErrors(key)}</p>
          );
        })}
      </div>
      <form onSubmit={(e) => { submitHandler(e); }}>
        <div className="rating-info-form">
          <div className="form-cell">
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" value={first_name} onChange={(e) => nameHandler(e)} />
          </div>
          <div className="form-cell">
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" value={last_name} required onChange={(e) => nameHandler(e)} />
          </div>
          <div className="form-cell">
            <label htmlFor="line_1">Line 1</label>
            <input type="text" name="line_1" value={line_1} required onChange={(e) => addressHandler(e)} />
          </div>
          <div className="form-cell">
            <label htmlFor="line_2">Line 2</label>
            <input type="text" placeholder="optional" name="line_2" value={line_2} onChange={(e) => addressHandler(e)} />
          </div>
          <div className="form-cell">
            <label htmlFor="city">City</label>
            <input type="text" name="city" required value={city} onChange={(e) => addressHandler(e)} />
          </div>
          <div className="form-cell">
            <label htmlFor="region">Region</label>
            <input type="text" name="region" required value={region} maxLength="2" onChange={(e) => addressHandler(e)} placeholder="Provide a US State Abbreviation" />
          </div>
          <div className="form-cell">
            <label htmlFor="postal">Zip Code</label>
            <input type="number" name="postal" required value={postal} minLength="5" maxLength="5" onChange={(e) => addressHandler(e)} />
          </div>
        </div>
        <button className="form-submit">{submitting ? 'Submitting...' : 'Submit!'}</button>
      </form>

    </>
  );
};