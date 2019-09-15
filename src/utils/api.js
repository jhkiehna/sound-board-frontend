export const postRequest = (url, body) => {
  return new Promise(resolve => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(body),
    })
      .then(response => resolve(response.json()))
      .catch(error => resolve(error.json()));
  });
};
