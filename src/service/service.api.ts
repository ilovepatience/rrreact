import type {IPostsModel} from "../models/IPostsModel.ts";
import type {ICommentsModel} from "../models/ICommentsModel.ts";

const endpointPostsPlaceholder = import.meta.env.VITE_API_BASE_URL_PLACEHOLDER + '/posts';
const endpointCommentsPlaceholder = import.meta.env.VITE_API_BASE_URL_PLACEHOLDER + '/comments';

const enpointPostsDummy = import.meta.env.VITE_API_BASE_URL_DUMMY + '/posts';

const loadPosts = async ():Promise<IPostsModel[]> => {
    return await fetch(endpointPostsPlaceholder)
    .then((value) => value.json());
}
const loadComments = async ():Promise<ICommentsModel[]> => {
    return await fetch(endpointCommentsPlaceholder)
    .then((value) => value.json());
}

const LoadPostsDummy = async ():Promise<IPostsModel[]> => {
    const responce = await fetch(enpointPostsDummy)
    .then((value) => value.json());
    return responce.posts;
}

export{
    loadPosts,loadComments, LoadPostsDummy,
}