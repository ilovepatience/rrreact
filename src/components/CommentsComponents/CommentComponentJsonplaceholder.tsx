import type ICommentModelPlaceholder from "../../modules/ICommentModelPlaceholder.ts";
import type {FC} from "react";

interface PropType {
    comment: ICommentModelPlaceholder;
}


export const CommentComponentJsonplaceholder:FC<PropType> = ({comment}) => {
    return (
        <>
            <div>
                <p>Comment - {comment.postId}</p>
                <p>ID - {comment.id}</p>
                <p>Name - {comment.name}</p>
                <p>Email - {comment.email}</p>
                <p>Body - {comment.body}</p>
                <hr/>
            </div>

        </>
    );
};