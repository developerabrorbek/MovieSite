import { createSlice } from "@reduxjs/toolkit";

const initialFeaturedState = {
  page: 1,
  pages: 1,
  pagination: false,
};

export const featuredSlice = createSlice({
  name: "featured",
  initialState: initialFeaturedState,
  reducers: {
    activePages: (state, action) => {
      state.pages = action.payload;
      state.pagination = true;
    },
    setPage: (state, action)=>{
        state.page = action.payload;
    }
  },
});

export const {activePages,setPage} = featuredSlice.actions;

export const featuredReducer = featuredSlice.reducer;
