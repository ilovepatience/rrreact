import {useEffect, useState} from "react";
import {loadComments} from "../../service/service.api.ts";
import type {ICommentsModel} from "../../models/ICommentsModel.ts";
import CommentComponent from "../CommentComponent/CommentComponent.tsx";
import './CommentsComponent.css'

const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentsModel[]>([])
    useEffect(() => {
        loadComments().then(value => setComments(value))
    }, [])
    return (
        <div className="CommentsComponent">
            {comments.map((comment: ICommentsModel) => <CommentComponent comment={comment} key={comment.id} />)}
        </div>
    );
};

export default CommentsComponent;