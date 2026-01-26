import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store/store.ts";
import {commentActions} from "../../redux/slices/CommentSlice.ts";
import {CommentComponent} from "./CommentComponent.tsx";

export const CommentsComponent = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector(state => state.commentStoreSlice.comments);

    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, [dispatch]);

    return (
        <>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment} />)}
        </>
    );
};