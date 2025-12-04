import {useEffect, useState} from "react";
import type { IPostsModel } from "../../models/IPostsModel";
// import {loadPosts} from "../../service/service.api.ts";
import PostComponent from "../PostComponent/PostComponent.tsx";
import './PostsComponent.css'
import {LoadPostsDummy} from "../../service/service.api.ts";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostsModel[]>([])
    useEffect(() => {
        LoadPostsDummy().then(value => setPosts(value));
    },[])

    return (
        <div className="posts-container">
            {
                posts.map(post => <PostComponent post={post} key={post.id} />)
            }
        </div>
    );
};

export default PostsComponent;