import {useEffect, useState} from "react";
import type ICommentModelPlaceholder from "../../modules/ICommentModelPlaceholder.ts";
import {commentsFetchJsonPlaceholder} from "../../services/services.tsx";
import {CommentComponentJsonplaceholder} from "./CommentComponentJsonplaceholder.tsx";

export const CommentsComponentJsonplaceholder = () => {
    const [comment, setComment] = useState<ICommentModelPlaceholder[]>([])

    useEffect(() => {
        commentsFetchJsonPlaceholder().then(value => setComment(value))
    }, []);

    return (
        <>
            {comment.map((value, index) => <CommentComponentJsonplaceholder key={index} comment={value}/>)}
        </>
    );
};