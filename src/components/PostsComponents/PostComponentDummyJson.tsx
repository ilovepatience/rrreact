import type {FC} from "react";
import type IPostModelDummyJson from "../../modules/IPostModelDummyJson.ts";

interface PropType {
    post: IPostModelDummyJson;
}

export const PostComponentDummyJson:FC<PropType> = ({post}) => {
    return (
        <>
            <div>
                <p>id - {post.id}</p>
                <p>Title - {post.title}</p>
                <p>Text - {post.body}</p>
                <p>Tags - {post.tags}</p>
                <p>Reactions:</p>
                <ul>
                    <li>Likes - {post.reactions.likes}</li>
                    <li>Dislikes - {post.reactions.dislikes}</li>
                </ul>
                <p>Views - {post.views}</p>
                <p>User ID - {post.userId}</p>
                <hr/>
            </div>
        </>
    );
};