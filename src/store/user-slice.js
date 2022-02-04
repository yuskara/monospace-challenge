import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = {
//   id: null,
//   name: null,
//   email: null,
//   phone: null,
//   active: false,
//   type: null,
// };

const baseUrl = "https://yussuf.users.challenge.dev.monospacelabs.com";
const initialState = { users: [], isLoading: false, isError: false };

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(`${baseUrl}/users`);
  return response.data;
});

export const toggleUserStatus = createAsyncThunk(
  "user/toggleUser",
  async ({ id, value }) => {
    const response = await axios.put(`${baseUrl}/users/${id}`, {
      active: value.toString(),
    });

    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    }),
      builder.addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
      builder.addCase(toggleUserStatus.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        state.users = state.users.map((user) => {
          if (user.id === updatedUser.id) {
            return updatedUser;
          }
          return user;
        });
      });
  },
});

export const { reducer } = userSlice;
