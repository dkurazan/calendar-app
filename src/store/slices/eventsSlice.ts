import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Event } from '../../utils/types';

const initialState: Event[] = [];

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.push(action.payload);
    }
  },
});

export const { addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
