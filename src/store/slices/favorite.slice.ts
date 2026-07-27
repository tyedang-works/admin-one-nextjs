import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteState {
  favoriteIds: number[];
}

const initialState: FavoriteState = {
  favoriteIds: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<number>) {
      state.favoriteIds.push(action.payload);
    }
  }
})

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;