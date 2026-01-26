import type {FC} from "react";
import type IPostModel from "../../models/IPostModel.ts";

type PropType = {
    post: IPostModel
}

export const PostComponent: FC<PropType> = ({post}) => {
    return (
        <div>
            <div>User(ID) posted this post - {post.userId}</div>
            <div>Post id - {post.id}</div>
            <div>Post title - {post.title}</div>
            <div>Post body - {post.body}</div>
            <hr/>
        </div>
    );
};