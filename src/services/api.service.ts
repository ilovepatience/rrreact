// import type IUserModel from "../models/IUserModel.ts";
// import type IPostModel from "../models/IPostModel.ts";
// import type ICommentModel from "../models/ICommentModel.ts";

const baseURL = "https://jsonplaceholder.typicode.com";

// export const userService = {
//     getAllUSers: async (): Promise<IUserModel[]> => {
//         const users = await fetch({baseURL} + '/users')
//             .then(res => res.json())
//         console.log(users)
//         return users
//
//     }
// };
// export const postService = {
//     getAllPosts: async (): Promise<IPostModel[]> => {
//         const posts = await fetch({baseURL} + '/posts')
//         .then(res => res.json())
//         console.log(posts)
//         return posts
//     }
// };
// export const commentService = {
//     getAllComments: async (): Promise<ICommentModel[]> => {
//         const comments = await fetch({baseURL} + '/comments')
//         .then(res => res.json())
//         console.log(comments)
//         return comments
//     }
// };

export const getAll = async <T> (endpoint:string) => {
    const response = await fetch(`${baseURL}${endpoint}`).then((res:Response) => res.json());
    return response as T;
}