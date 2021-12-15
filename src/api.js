const API = 'https://fed-challenge-api.sure.now.sh/api/v1/quotes';

export async function getQuote(data) {

  const response = await fetch(API, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  if (response.errors) {
    return {
      status: 'error',
      errors: response.errors
    };
  }
  return {
    status: 'success',
    data: response
  };
}

export async function updateQuote(data) {
  const { quoteId } = data;

  const response = await fetch(`${API}/${quoteId}`, {
    method: 'PUT',
    body: JSON.stringify({
      quote: { ...data }
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  if (response.errors) {
    return {
      status: 'error',
      errors: response.errors
    };
  }
  return {
    status: 'success',
    data: response
  };


};