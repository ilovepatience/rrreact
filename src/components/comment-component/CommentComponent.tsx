    import type {FC} from "react";
import type ICommentModel from "../../models/ICommentModel.ts";

type PropType = {
    comment: ICommentModel
}

export const CommentComponent: FC<PropType> = ({comment}) => {
    return (
        <div>
            <div>Post (ID) where the comment was made - {comment.postId}</div>
            <div>Comment id - {comment.id}</div>
            <div>Comment name - {comment.name}</div>
            <div>Comment email - {comment.email}</div>
            <div>Comment body - {comment.body}</div>
            <hr/>
        </div>
    );
};