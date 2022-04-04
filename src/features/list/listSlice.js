import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { aPost, aGet } from "../../axios/index";
import mockup from "../../api/mockup";

/* export const createTeam = createAsyncThunk(
    "list/createTeam",
    async (data, thunkAPI) => {
        console.log(data);
        const formData = new FormData();
        formData.append("name", data.Boss);
        formData.append("img", data.img);
        const response = await aPost("/teams");
        return response.data;
    }
);
export const getTeams = createAsyncThunk(
    "list/getTeams",
    async (data, thunkAPI) => {
        console.log(data);
        const formData = new FormData();
        formData.append("name", data.Boss);
        formData.append("img", data.img);
        const response = await aPost("/teams");
        return response.data;
    }
); */

const userSlice = createSlice({
    name: "list",
    initialState: {
        teams: mockup,
    },
    // Thunks
    extraReducers(builder) {
        /*     builder.addCase(login.pending, (state, action) => {
      state.isFetching = true;
      state.error = false;
      state.message = "";
      state.name = "";
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isFetching = false;
      state.logged = action.payload.success;
      state.error = false;
      state.loggedUser = action.payload.user;
      state.message = action.payload.message;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isFetching = false;
      state.error = true;
    }); */
    },
});

export default userSlice.reducer; // Esto en el store
