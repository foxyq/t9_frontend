const baseUrl = process.env.REACT_APP_BASE_URL;

export const postInput = numbers =>
  fetch(`${baseUrl}/numbers`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ numbers }),
  }).then(res => res.json());

export default { postInput };
