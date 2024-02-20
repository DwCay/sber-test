import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    lengths: {
      break: {
        value: 5,
        label: 'Break',
      },
      session: {
        value: 25,
        label: 'Session',
      }
    },
    currentTimer: {
      label: 'Session',
      time: 1500,
      started: false
    }
  }

export const clockSlice = createSlice({
    name: 'clock',
    initialState,
    reducers: {
      changeLength: (state, action) => {
        const key = action.payload.label.toLowerCase()
        if (!state.currentTimer.started) {
          if (action.payload.type === 'increment' && state.lengths[key].value < 60) 
            state.lengths[key].value++
          if (action.payload.type === 'decrement' && state.lengths[key].value > 1)
            state.lengths[key].value--
          if (state.currentTimer.label === action.payload.label) 
            state.currentTimer.time = state.lengths[key].value * 60
        }
      },
      toNextTimer: (state) => {
        state.currentTimer = {
          ...state.currentTimer, 
          label: state.currentTimer.label === 'Session' ? 'Break' : 'Session', 
          time: state.currentTimer.label === 'Session' ? state.lengths.break.value * 60 : state.lengths.session.value * 60
        }
      },
      startTimer: (state, action) => {
        state.currentTimer.started = action.payload
      },
      setTimer: (state, payload) => {
        state.currentTimer.time = payload.payload;
      },
      refresh: (state) => {
        state.lengths = initialState.lengths;
        state.currentTimer = initialState.currentTimer
      }
    }
})
export const { changeLength, setTimer, startTimer, refresh, toNextTimer } = clockSlice.actions

export default clockSlice.reducer