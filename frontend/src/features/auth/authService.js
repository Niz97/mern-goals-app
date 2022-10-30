const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  
  const result = await response.json()

  if (result.data) {
    localStorage.setItem('user', JSON.stringify(result.data))
  }

  return result.data
}

const authService = {
  register
}

export default authService