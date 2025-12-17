import type {FC} from "react";
import type IPostModelPlaceholder from "../../modules/IPostModelPlaceholder.ts";


interface PropType {
    post: IPostModelPlaceholder
}

export const PostComponentJsonplaceholder: FC<PropType> = ({post}) => {
    return (
        <>
            <div>
                <p>User ID - {post.userId}</p>
                <p>Post ID - {post.id}</p>
                <p>Title - {post.title}</p>
                <p>Body - {post.body}</p>
            </div>
            <hr/>
        </>
    );
};