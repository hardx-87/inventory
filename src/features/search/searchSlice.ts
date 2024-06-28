import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface SearchState {
  term: string;
}

const initialState: SearchState = {
  term: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;
