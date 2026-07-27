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
      const productId = action.payload;
      if (!state.favoriteIds.includes(productId)) {
        state.favoriteIds.push(productId);
      }
    },
    removeFavorite(state, action: PayloadAction<number>) {
      const productId = action.payload;
      state.favoriteIds = state.favoriteIds.filter((id) => id !== productId);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
