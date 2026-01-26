import type {FC} from "react";
import type IUserModel from "../../models/IUserModel.ts";
import type IPostModel from "../../models/IPostModel.ts";
import type ICommentModel from "../../models/ICommentModel.ts";

interface MyProps {
    user?: IUserModel,
    post?: IPostModel,
    comment?: ICommentModel,

}

export const ComplexComponent: FC<MyProps> = ({user, post, comment}) => {
    return (
        <div>
            {user && (
                <>
                    <div>Users -</div>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <hr/>
                </>
            )}

            {post && (
                <>
                    <div>Posts -</div>
                    <div>{post.id}</div>
                    <div>{post.title}</div>
                    <hr/>
                </>
            )}

            {comment && (
                <>
                    <div>Comments -</div>
                    <div>{comment.id}</div>
                    <div>{comment.name}</div>
                </>
            )}
        </div>
    );
};
