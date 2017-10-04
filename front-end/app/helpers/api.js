const API_URL = 'localhost:3000/api';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const fetcher = (url, options) =>
  fetch(url, options).then(res => {
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const error = new Error(res.statusText);
    error.response = res;
    throw error;
  }).then(res =>
    // (204: No Content) will not have a body
    (res.status === 204) ? res : res.json()
  );


export function get(endpoint, _options = {}) {
  const url = `${API_URL}/${endpoint}`;
  const options = {
    method: 'GET',
    headers: headers,
    _options,
  };
  return fetcher(url, options);
}

export function put(endpoint, body, _options = {}) {
  const url = `${API_URL}/${endpoint}`;
  const options = {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(body),
    ..._options,
  };
  return fetcher(url, options);
}

export function post(endpoint, body, _options = {}) {
  const url = `${API_URL}/${endpoint}`;
  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
    ..._options,
  };
  return fetcher(url, options);
}

export function remove(endpoint, body = {}, _options = {}) {
  const url = `${API_URL}/${endpoint}`;
  const options = {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify(body),
    ..._options,
  };
  return fetcher(url, options);
}
