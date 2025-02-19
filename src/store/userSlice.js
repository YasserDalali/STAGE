import { createSlice } from '@reduxjs/toolkit';

// Initial state for our user
const initialState = {
    user: { username: "Yasser Dalali" },
    loading: false,
    error: null,
    lastUpdated: null
};

// Create the user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Start loading user data
        fetchUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        // Successfully fetched user data
        fetchUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload; // Update user data
            state.lastUpdated = new Date().toISOString();
        },
        // Failed to fetch user data
        fetchUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // Update user data
        updateUser: (state, action) => {
            state.user = { ...state.user, ...action.payload }; // Merge new user data
        }
    },
});

// Export actions
export const {
    fetchUserStart,
    fetchUserSuccess,
    fetchUserFailure,
    updateUser
} = userSlice.actions;

// Export reducer
export default userSlice.reducer; 