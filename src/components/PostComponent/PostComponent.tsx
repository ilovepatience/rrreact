import type {FC} from "react";
import type {IPostsModel} from "../../models/IPostsModel.ts";
import './PostComponent.css'

interface TypeProp {
    post: IPostsModel
}

const PostComponent:FC<TypeProp> = ({post}) => {
    return (
        <div className='post-container'>
            <h3>Post id - {post.id}</h3>
            <h5>User id - {post.userId}</h5>
            <p><b>Title of post</b> - {post.title}</p>
            <p><b>Body of post</b> - {post.body}</p>
        </div>
    );
};

export default PostComponent;