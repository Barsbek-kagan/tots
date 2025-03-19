import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    token: null,
    status: 'idle',
    error: null,
};

export const login = createAsyncThunk('auth/login', async (credentials) => {
    const response = await axios.post('/api/login', credentials);
    return response.data.token;
});

export const register = createAsyncThunk('auth/register', async (credentials) => {
    const response = await axios.post('/api/register', credentials);
    return response.data.token;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to login';
            })
            .addCase(register.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to register';
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;