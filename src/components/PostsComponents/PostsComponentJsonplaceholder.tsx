import {useEffect, useState} from "react";
import type IPostModelPlaceholder from "../../modules/IPostModelPlaceholder.ts";
import {postsFetchJsonPlaceholder} from "../../services/services.tsx";
import {PostComponentJsonplaceholder} from "./PostComponentJsonplaceholder.tsx";

export const PostsComponentJsonplaceholder = () => {
    const [post, setPost] = useState<IPostModelPlaceholder[]>([])

    useEffect(() => {
        postsFetchJsonPlaceholder().then(value => setPost(value))
    }, []);

    return (
        <>
            {post.map((value, index) => <PostComponentJsonplaceholder key={index} post={value} />)}
        </>
    );
};