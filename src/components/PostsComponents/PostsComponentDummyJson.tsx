import {useEffect, useState} from "react";
import type IPostModelDummyJson from "../../modules/IPostModelDummyJson.ts";
import {postsFetchDummyJson} from "../../services/services.tsx";
import {PostComponentDummyJson} from "./PostComponentDummyJson.tsx";

export const PostsComponentDummyJson = () => {
    const [post, setPost] = useState<IPostModelDummyJson[]>([])

    useEffect(() => {
        postsFetchDummyJson().then(value => setPost(value))
    }, []);
    return (
        <>
            {post.map((value, index) => <PostComponentDummyJson key={index} post={value} /> )}
        </>
    );
};