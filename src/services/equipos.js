// const API_URL = 'https://raw.githubusercontent.com/victorvzn/bootcamp-frontend-g16/main/semana11/dia02-react-router-invoice-app/public/invoices.json'
const API_URL = 'https://657d0455853beeefdb9a3094.mockapi.io/api/v1/'

export const fetchEquipos = async () => {
  // const url = `${API_URL}`
  const url = `${API_URL}/equipos`

  const response = await fetch(url)

  const data = response.json()

  return data
}

export const getEquipo = async (id) => {
  const url = `${API_URL}/equipos/${id}`

  const response = await fetch(url)

  const data = response.json()

  return data
}

export const createEquipo = async (form) => {
  const url = `${API_URL}/equipos`

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  }

  const response = await fetch(url, options)

  const data = response.json()

  return data
}

export const updateEquipoStatus = async (id, newStatus) => {
  const url = `${API_URL}/equipos/${id}`

  const options = {
    method: 'PUT', // PATCH
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ status: newStatus })
  }

  const response = await fetch(url, options)

  const data = response.json()

  return data
}

export const deleteEquipo = async (id) => {
  const url = `${API_URL}/equipos/${id}`

  const options = {
    method: 'DELETE'
  }

  const response = await fetch(url, options)

  const data = response.json()

  return data
}