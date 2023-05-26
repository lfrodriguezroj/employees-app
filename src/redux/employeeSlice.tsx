import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const counterSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.data = action.payload
    },
  }
})

export const { setEmployees } = counterSlice.actions

export default counterSlice.reducer