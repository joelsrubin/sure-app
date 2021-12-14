import { getQuote } from '../../API/endpoints';
import { useState } from 'react';
import { stateAbbreviationsValidate } from '../../utils';
import Form from './Form';


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
    setSubmitting(true);
    e.preventDefault();

    const res = await getQuote(formData);

    // handle errors from API
    if (res.errors) {
      setErrors(res.errors);
      setSubmitting(false);
    } else {

      // set quote info and navigate to quote overview page
      setSubmitting(false);
      setFormData(initialState);
      setQuoteInfo(res.data);
      setPage('quote');
    }
  };

  // update formData state on input change
  const formHandler = (e) => {
    setErrors({});
    const { name, value } = e.target;
    if (name === 'first_name' || name === 'last_name') {
      setFormData({
        ...formData,
        [name]: value
      });
    } else {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value
        }
      });
    }
  };


  // format error strings for display
  const formatErrors = (text) => {
    return text.replace('_', ' ');
  };

  return (
    <div className="overview">
      <div className="overview-header-container">
        <h1 className="overview-header">Rating Information</h1>
      </div>
      <Form formHandler={formHandler} formData={formData} submitHandler={submitHandler} submitting={submitting} errors={errors} setErrors={setErrors} />
    </div>
  );
};