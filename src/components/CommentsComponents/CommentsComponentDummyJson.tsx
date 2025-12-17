import {useEffect, useState} from "react";
import {commentsFetchDummyJson} from "../../services/services.tsx";
import {CommentComponentDummyJson} from "./CommentComponentDummyJson.tsx";
import type ICommentModelDummyJson from "../../modules/ICommentModelDummyJson.ts";

export const CommentsComponentDummyJson = () => {
    const [comment, setComment] = useState<ICommentModelDummyJson[]>([])

    useEffect(() => {
        commentsFetchDummyJson().then(value => setComment(value))
    }, []);

    return (
        <>
            {comment.map((comment, index) => <CommentComponentDummyJson key={index} comment={comment} />)}
        </>
    );
};