const url = "http://localhost:3001"

const headers = {
  Accept: 'application/json',
  Authorization: 'whatever-you-want',
  }

export const getCategories = () =>
  fetch(`${url}/categories`, { headers })
  .then(res => res.json())
  .then(data => data.categories)
