import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
    //if we single have  reducer
    // reducer: counterSlice.reducer,
    reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
