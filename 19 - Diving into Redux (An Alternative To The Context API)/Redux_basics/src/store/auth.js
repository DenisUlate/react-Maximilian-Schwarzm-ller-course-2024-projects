import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the authentication state
const authSlice = createSlice({
    name: "auth", // Name of the slice
    initialState: { isAuthenticated: false }, // Initial state of the authentication
    reducers: {
        login(state) { // Reducer function for login action
            state.isAuthenticated = true; // Set isAuthenticated to true
        },
        logout(state) { // Reducer function for logout action
            state.isAuthenticated = false; // Set isAuthenticated to false
        },
    },
});

// Export the action creators
export const authActions = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
