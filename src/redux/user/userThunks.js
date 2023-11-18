import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setToken,
  registerUser,
  loginUser,
  currentUser,
  logOutUser,
  updateUser,
  getUserStats,
} from "../../api/auth";

export const registerUserThunk = createAsyncThunk(
  "user/register",
  async (formData, thunkAPI) => {
    try {
      const data = await registerUser(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "user/login",
  async (formData, thunkAPI) => {
    try {
      const data = await loginUser(formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    try {
    setToken(token);
      const data = await currentUser();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logOutUserThunk = createAsyncThunk(
    "user/logout",
    async (_, thunkAPI) => {
      try {
        const data = await logOutUser();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

  export const updateUserThunk = createAsyncThunk(
    "user/update",
    async (userData, thunkAPI) => {
      try {
        const data = await updateUser(userData);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

  export const getUserStatsThunk = createAsyncThunk(
    "user/getStats",
    async (id, thunkAPI) => {
      try {
        const data = await getUserStats(id);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );