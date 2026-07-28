import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "@/store/slices/appSlice";
import favoriteReducer from "@/store/slices/favorite.slice";

const rootReducer = combineReducers({
  app: appReducer,
  favorite: favoriteReducer,
});

export default rootReducer;