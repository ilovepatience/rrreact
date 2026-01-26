import type ICommentModel from "../../models/ICommentModel.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type CommentSliceType = {
    comments: ICommentModel[]
}

const loadComments = createAsyncThunk('loadComments' , async (_, thunkAPI) => {
    try {
        const comments = await getAll<ICommentModel[]>('/comments');
        return thunkAPI.fulfillWithValue(comments)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error)

    }
})

const initialCommentSliceState: CommentSliceType = {comments: []};
export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initialCommentSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action:PayloadAction<ICommentModel[]>) => {
            state.comments = action.payload
        })
});

export const commentActions = {
    ...commentSlice.actions,
    loadComments,

}