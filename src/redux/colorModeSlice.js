import { createSlice } from "@reduxjs/toolkit";

// Part1: Define Slice (including reducers and actions)
const initialState = { colorScheme: "light" };

const colorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    togglecolorScheme: (state) => {
        const nextColorScheme = state.colorScheme === 'light' ? 'dark' : 'light';
        state.colorScheme = nextColorScheme;
        console.log(state.colorScheme);
    },
  },
});

export const selectcolorScheme = (state) => state.colorMode.colorScheme;
export const { togglecolorScheme } = colorModeSlice.actions;
export default colorModeSlice.reducer;