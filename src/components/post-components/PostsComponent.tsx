import {useAppDispatch, useAppSelector} from "../../redux/store/store.ts";
import {useEffect} from "react";
import {postActions} from "../../redux/slices/PostSlice.ts";
import {PostComponent} from "./PostComponent.tsx";

export const    PostsComponent = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postStoreSlice.posts);
    useEffect(() => {
        dispatch(postActions.loadPost())
    }, [dispatch]);



    return (
        <>{posts.map(post => <PostComponent key={post.id} post={post}/>)}</>
    );
};