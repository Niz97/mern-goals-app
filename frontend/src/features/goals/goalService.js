import axios from 'axios'
const API_URL = '/api/goals/'


// Create new goal
const createGoal = async(goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

// Get all goals for auth user
const get = async(userData) => {
  const response = await axios.get(API_URL, userData)

  if (response.data) {
    console.log('Retrieved all user goals')
  }

  return response.data
}

const goalService = {
  createGoal,
  get,
}
export default goalService