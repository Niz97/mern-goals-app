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
const getGoals = async(token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.get(API_URL, config)

  if (response.data) {
    console.log('Retrieved all user goals')
  }

  return response.data
}

// Delete user goal
// Get all goals for auth user
const deleteGoal = async(id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.delete(`${API_URL}${id}`, config)

  if (response.data) {
    console.log('Retrieved all user goals')
  }

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
}
export default goalService