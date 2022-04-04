import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { aPost, aGet } from "../../axios";

export const createTeam = createAsyncThunk(
    "team/createTeam",
    async (data, thunkAPI) => {
        console.log(data);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("img", data.img);
        formData.append("description", data.description);
        const response = await aPost("/teams", formData);
        console.log(`que devuelve response:`, response);
        return response.data;
    }
);
export const getTeams = createAsyncThunk(
    "team/getTeams",
    async (data, thunkAPI) => {
        const response = await aGet("/teams");
        /*   .then((res) => setTeams(res.data))
            .catch((error) => console.log(error)); */
        return response.data;
    }
);

const userSlice = createSlice({
    name: "team",
    initialState: {
        teams: [],
        spinner: true,
        error: false,
    },
    // Thunks
    extraReducers(builder) {
        builder.addCase(getTeams.pending, (state, action) => {
            state.spinner = true;
            state.teams = [];
        });

        builder.addCase(getTeams.fulfilled, (state, action) => {
            state.spinner = false;
            state.teams = action.payload;
        });
        builder.addCase(getTeams.rejected, (state, action) => {
            state.error = true;
        });
        builder.addCase(createTeam.pending, (state, action) => {
            state.spinner = true;
        });

        builder.addCase(createTeam.fulfilled, (state, action) => {
            console.log(`que hay en state:`, state);
            state.spinner = false;
            state.teams = [...state.teams];
        });
        builder.addCase(createTeam.rejected, (state, action) => {
            state.error = true;
        });
    },
});

export default userSlice.reducer; // Esto en el store
