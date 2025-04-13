import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/user`,
  withCredentials: true,
});

// Register
export const registerUser = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
  try {
    const response = await API.post('/register', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data);
  }
});

// Login
export const loginUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await API.post('/login', credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data);
  }
});

// Logout
export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await API.post('/logout');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data);
  }
});

// Refresh token
export const refreshToken = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const response = await API.post('/refresh-token');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data);
  }
});

// Get logged-in user profile
export const fetchProfile = createAsyncThunk('auth/profile', async (_, thunkAPI) => {
  try {
    const response = await API.get('/me');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data);
  }
});

// Update user profile
export const updateProfile = createAsyncThunk('auth/updateProfile', async (formData, thunkAPI) => {
  try {
    const response = await API.put('/edit-profile', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data);
  }
});
export const fetchAllAgents = createAsyncThunk(
  'agents/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('/get-agents');
      if (!data.agents) {
        toast.error('No agents found');
        return thunkAPI.rejectWithValue('No agents found');
      }
      return data.agents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null, // Load user from localStorage if available
    isAuth: !!localStorage.getItem('access_token'), // Check if access_token exists in localStorage
    loading: false,
    error: null,
  },
  reducers: {
    resetAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuth = true;
        state.error = null;
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('access_token', action.payload.access_token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Registration failed';
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuth = true;
        state.error = null;
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('access_token', action.payload.access_token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Login failed';
      })

      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuth = false;
        state.error = null;
        // Remove user data from localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
      })

      // Profile
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuth = true;
      })

      // Update Profile
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })

      .addCase(fetchAllAgents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllAgents.fulfilled, (state, action) => {
        state.loading = false;
        state.agents = action.payload;
      })
      .addCase(fetchAllAgents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch agents';
      });

  },
});

export const { resetAuthError } = authSlice.actions;
export default authSlice.reducer;
