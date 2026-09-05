import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "@/store/slices/appSlice";
import favoriteReducer from "@/store/slices/favorite.slice";
import authReducer from "@/store/slices/auth.slice";

const rootReducer = combineReducers({
  app: appReducer,
  favorite: favoriteReducer,
  auth: authReducer,
});

export default rootReducer;