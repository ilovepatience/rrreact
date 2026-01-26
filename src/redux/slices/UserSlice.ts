import type IUserModel from "../../models/IUserModel.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type UserSliceType = {
    users: IUserModel[]
};

export const loadUsers = createAsyncThunk(
    'loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await getAll<IUserModel[]>('/users');
            return thunkAPI.fulfillWithValue(users);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialUserSliceState: UserSliceType = {
    users: []
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialUserSliceState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUserModel[]>) => {
            state.users = action.payload;
        })
});

export const userActions = {
    ...userSlice.actions,
    loadUsers
};
