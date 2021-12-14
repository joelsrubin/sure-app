export async function getQuote(data) {
  const API = 'https://fed-challenge-api.sure.now.sh/api/v1/quotes';

  const response = await fetch(API, {
    method: 'POST',
    body: JSON.stringify({ ...data }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return {
    status: 'success',
    data: await response.json(),
  };
}