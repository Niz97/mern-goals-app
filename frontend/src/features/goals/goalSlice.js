import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import goalService from './goalService'

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all auth user goals

export const get = createAsyncThunk(
  'goals/goalService',
  async (user, thunkAPI) => {
  try {
    return await goalService.get(user)
  } catch (error) {
    const message = 
      (error.response && 
        error.response.data && 
        error.response.data.message) || 
      error.message || 
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => initialState
    } 
  },
)

export const { reset } = goalSlice.actions
export default goalSlice.reducer
