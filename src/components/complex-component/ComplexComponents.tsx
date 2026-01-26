import {useAppDispatch, useAppSelector} from "../../redux/store/store.ts";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {postActions} from "../../redux/slices/PostSlice.ts";
import {commentActions} from "../../redux/slices/CommentSlice.ts";
import {ComplexComponent} from "./ComplexComponent.tsx";

export const ComplexComponents = () => {
    const dispatch = useAppDispatch();
    const {commentStoreSlice : {comments}, userStoreSlice:{users}, postStoreSlice:{posts}} = useAppSelector(state => state);

    useEffect(() => {
        if (!users.length){
            dispatch(userActions.loadUsers())
        }
        if (!posts.length){
            dispatch(postActions.loadPost())
        }
        if (!comments.length){
            dispatch(commentActions.loadComments())
        }
    }, []);


    return (
        <>
            <div>{users.map(user => <ComplexComponent key={user.id} user={user}/>)}</div>
            <div>{posts.map(post => <ComplexComponent key={post.id} post={post}/>)}</div>
            <div>{comments.map(comment => <ComplexComponent key={comment.id} comment={comment}/>)}</div>
        </>
    );
};