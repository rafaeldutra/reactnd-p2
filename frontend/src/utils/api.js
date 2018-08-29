const url = "http://localhost:3001"

const headers = {
    'Authorization': '123456'
  }

export const getAllCategories = () =>
  fetch(`${url}/categories`, { headers })
  .then(res => res.json())
  .then(data => data.categories)
