import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter"; // Importing the counter reducer
import authReducer from "./auth"; // Importing the auth reducer

const store = configureStore({
	reducer: { counter: counterReducer, auth: authReducer }, // Configuring the store with the counter and auth reducers
});

export default store; // Exporting the configured store
