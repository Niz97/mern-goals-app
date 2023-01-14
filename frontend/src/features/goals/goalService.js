import axios from 'axios'
const API_URL = '/api/goals/'

// Get all goals for auth user
const get = async(userData) => {
  const response = await axios.get(API_URL, userData)

  if (response.data) {
    console.log('Retrieved all user goals')
  }

  return response.data
}

const goalService = {
  get,
}
export default goalService