import type ICommentModelDummyJson from "../../modules/ICommentModelDummyJson.ts";
import type {FC} from "react";

interface PropType {
    comment: ICommentModelDummyJson
}

export const CommentComponentDummyJson: FC<PropType> = ({comment}) => {
    return (
        <>
            <div>
                <p>Comment id - {comment.id}</p>
                <p>Comment body - {comment.body}</p>
                <p>Post ID - {comment.postId}</p>
                <p>Likes - {comment.likes}</p>
                <p>User:</p>
                <ul>
                    <li>ID - {comment.user.id}</li>
                    <li>Username - {comment.user.username}</li>
                    <li>Full name - {comment.user.fullName}</li>
                </ul>
            </div>
            <hr/>
        </>
    );
};