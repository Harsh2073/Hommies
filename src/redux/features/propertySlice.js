import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/property`,
  withCredentials: true,
});

// =================== ASYNC THUNKS =================== //

export const fetchAllProperties = createAsyncThunk(
  'property/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('/');
      if (!data.properties) {
        return thunkAPI.rejectWithValue('No properties found');
      }
      return data.properties;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchPropertyById = createAsyncThunk(
  'property/fetchById',
  async (id, thunkAPI) => {
    try {
      const { data } = await API.get(`/${id}`);
      if (!data.property) {
        return thunkAPI.rejectWithValue('Property not found');
      }
      return data.property;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchPropertiesByUser = createAsyncThunk(
  'property/fetchByUser',
  async (userId, thunkAPI) => {
    try {
      const { data } = await API.get(`/user/${userId}`);
      if (!data.properties) {
        return thunkAPI.rejectWithValue('No properties found for this user');
      }
      return data.properties;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const createProperty = createAsyncThunk(
  'property/create',
  async (formData, thunkAPI) => {
    try {
      const { data } = await API.post('/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return data.property;
    } catch (err) {
      // Fix: return a more readable error
      const errorMsg =
        err?.response?.data?.message ||
        JSON.stringify(err?.response?.data) ||
        err.message ||
        'Server error';
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);


export const updateProperty = createAsyncThunk(
  'property/update',
  async ({ id, formData }, thunkAPI) => {
    try {
      const { data } = await API.put(`/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (!data.property) {
        return thunkAPI.rejectWithValue('Property update failed');
      }
      return data.property;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteProperty = createAsyncThunk(
  'property/delete',
  async (id, thunkAPI) => {
    try {
      await API.delete(`/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

// =================== SLICE =================== //

const initialState = {
  properties: [],
  userProperties: [],
  selectedProperty: null,
  loading: false,
  error: null,
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    clearSelectedProperty: (state) => {
      state.selectedProperty = null;
    },
    clearPropertyError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload;
      })
      .addCase(fetchPropertyById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProperty = action.payload;
      })
      .addCase(fetchPropertiesByUser.fulfilled, (state, action) => {
        state.userProperties = action.payload;
      })
      .addCase(createProperty.fulfilled, (state, action) => {
        state.properties.push(action.payload);
        state.userProperties.push(action.payload);
      })
      .addCase(updateProperty.fulfilled, (state, action) => {
        const updated = action.payload;
        const updateList = (list) => {
          const index = list.findIndex((p) => p._id === updated._id);
          if (index !== -1) list[index] = updated;
        };
        updateList(state.properties);
        updateList(state.userProperties);
        if (state.selectedProperty?._id === updated._id) {
          state.selectedProperty = updated;
        }
      })
      .addCase(deleteProperty.fulfilled, (state, action) => {
        const id = action.payload;
        state.properties = state.properties.filter((p) => p._id !== id);
        state.userProperties = state.userProperties.filter((p) => p._id !== id);
        if (state.selectedProperty?._id === id) {
          state.selectedProperty = null;
        }
      })

      // Matchers for loading & error
      .addMatcher(
        (action) => action.type.startsWith('property/') && action.type.endsWith('/pending'),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.startsWith('property/') && action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || action.payload || 'Something went wrong';
        }
      );
  },
});

export const { clearSelectedProperty, clearPropertyError } = propertySlice.actions;
export default propertySlice.reducer;
