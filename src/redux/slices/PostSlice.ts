import type IPostModel from "../../models/IPostModel.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type PostSliceType = {
    posts: IPostModel[]
}

const loadPost = createAsyncThunk('loadPosts', async (_, thunkAPI) => {
    try {
        const posts = await getAll<IPostModel[]>('/posts');
        return thunkAPI.fulfillWithValue(posts);
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})



const initialPostSliceState: PostSliceType = {posts: []}
export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialPostSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPost.fulfilled, (state, action:PayloadAction<IPostModel[]>) => {
            state.posts = action.payload
        })
});
export const postActions = {
    ...postSlice.actions,
    loadPost,
}

