import dotenv from 'dotenv';
dotenv.config();

export const { REACT_APP_API_URL } = process.env;

export const get = url => {
  const bodyOpts = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${REACT_APP_API_URL}${url}`, bodyOpts);
};

export const post = (url, body = {}) => {
  const bodyOpts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(`${REACT_APP_API_URL}${url}`, bodyOpts);
};
