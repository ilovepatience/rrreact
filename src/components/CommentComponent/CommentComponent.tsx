import type {FC} from "react";
import type {ICommentsModel} from "../../models/ICommentsModel.ts";
import './CommentComponent.css'

interface IPropType {
    comment: ICommentsModel
}

const CommentComponent:FC<IPropType> = ({comment}) => {
    return (
        <div className='CommentComponent'>
            <h3>Comment name - {comment.name}</h3>
            <p>Post id - {comment.postId}, Id - {comment.id}</p>
            <p>Email - {comment.email}</p>
            <p>Body - {comment.body}</p>
        </div>
    );
};

export default CommentComponent;