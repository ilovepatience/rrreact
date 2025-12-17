import type {IUserModelPlaceholder} from "../modules/IUserModelPlaceholder.ts";
import type IUserModelDummyJson from "../modules/IUserModelDummyJson.ts";
import type IPostModelPlaceholder from "../modules/IPostModelPlaceholder.ts";
import type IPostModelDummyJson from "../modules/IPostModelDummyJson.ts";
import type ICommentModelPlaceholder from "../modules/ICommentModelPlaceholder.ts";
import type ICommentModelDummyJson from "../modules/ICommentModelDummyJson.ts";

const endpointUsersPlaceholder = import.meta.env.VITE_API_BASE_URL_PLACEHOLDER + '/users';
const endpointUsersDummyJson = import.meta.env.VITE_API_BASE_URL_DUMMY + '/users';

const endpointPostsPlaceholder = import.meta.env.VITE_API_BASE_URL_PLACEHOLDER + '/posts';
const endpointPostsDummyJson = import.meta.env.VITE_API_BASE_URL_DUMMY + '/posts';

const endpointCommentsPlaceholder = import.meta.env.VITE_API_BASE_URL_PLACEHOLDER + '/comments';
const endpointCommentsDummyJson = import.meta.env.VITE_API_BASE_URL_DUMMY + '/comments';

const endpointProductsPlaceholder = import.meta.env.VITE_API_BASE_URL_PLACEHOLDER + '/products';
const endpointProductsCommentsDummyJson = import.meta.env.VITE_API_BASE_URL_DUMMY + '/products';



/*---------------USERS---------------*/
const usersFetchJsonPlaceholder = async ():Promise<IUserModelPlaceholder[]> => {
    return await fetch(endpointUsersPlaceholder)
    .then(value => value.json())
}

const usersFetchDummyJson = async ():Promise<IUserModelDummyJson[]> => {
    const result =  await fetch(endpointUsersDummyJson)
        .then(value => value.json())
    return result.users
}

/*---------------POSTS---------------*/
const postsFetchJsonPlaceholder = async ():Promise<IPostModelPlaceholder[]> => {
    return await fetch(endpointPostsPlaceholder)
    .then(value => value.json())
}

const postsFetchDummyJson = async ():Promise<IPostModelDummyJson[]> => {
    const response = await fetch(endpointPostsDummyJson)
    .then(value => value.json())
    return response.posts
}
/*---------------COMMENTS---------------*/
const commentsFetchJsonPlaceholder = async ():Promise<ICommentModelPlaceholder[]> => {
    return await fetch(endpointCommentsPlaceholder)
        .then(value => value.json())
}

const commentsFetchDummyJson = async ():Promise<ICommentModelDummyJson[]> => {
    const response = await fetch(endpointCommentsDummyJson)
        .then(value => value.json())
    return response.comments
}
/*---------------PRODUCTS---------------*/
const productsFetchJsonPlaceholder = async ():Promise<ICommentModelPlaceholder[]> => {
    return await fetch(endpointProductsPlaceholder)
        .then(value => value.json())
}

const productsFetchDummyJson = async ():Promise<ICommentModelDummyJson[]> => {
    const response = await fetch(endpointProductsCommentsDummyJson)
        .then(value => value.json())
    return response.products
}
export {usersFetchJsonPlaceholder , usersFetchDummyJson , postsFetchJsonPlaceholder , postsFetchDummyJson, commentsFetchJsonPlaceholder, commentsFetchDummyJson, productsFetchJsonPlaceholder, productsFetchDummyJson}