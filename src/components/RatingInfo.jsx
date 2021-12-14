import { getQuote } from '../../endpoints/endpoints';
import { useNavigate } from 'react-router-dom';
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

export default function RatingInfo({ setQuoteInfo }) {
  const [formData, setFormData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await getQuote(formData);
    setFormData(initialState);
    setQuoteInfo(res.data);
    navigate('quoteOverview');
  };

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addressHandler = (e) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [e.target.name]: e.target.value
      }
    });
  };
  const { first_name, last_name, address } = formData;
  const { line_1, line_2, city, region, postal } = address;

  return (
    <form className="rating-info-form" onSubmit={(e) => { submitHandler(e); }}>
      <label htmlFor="first_name">First Name</label>
      <input type="text" name="first_name" value={first_name} required onChange={(e) => changeHandler(e)} />
      <label htmlFor="last_name">Last Name</label>
      <input type="text" name="last_name" value={last_name} required onChange={(e) => changeHandler(e)} />
      <label htmlFor="line_1">Line 1</label>
      <input type="text" name="line_1" value={line_1} required onChange={(e) => addressHandler(e)} />
      <label htmlFor="line_2">Line 2</label>
      <input type="text" placeholder="optional" name="line_2" value={line_2} onChange={(e) => addressHandler(e)} />
      <label htmlFor="city">City</label>
      <input type="text" name="city" required value={city} onChange={(e) => addressHandler(e)} />
      <label htmlFor="region">Region</label>
      <input type="text" name="region" required value={region} onChange={(e) => addressHandler(e)} />
      <label htmlFor="postal">Zip Code</label>
      <input type="text" name="postal" required value={postal} onChange={(e) => addressHandler(e)} />
      <button className="form-submit">Submit!</button>
    </form>
  );
}