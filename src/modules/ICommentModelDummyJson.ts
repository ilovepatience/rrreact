export default interface ICommentModelDummyJson {
   id: number;
   body: string;
   postId: number;
   likes: number;
   user: User;
}

export interface User {
   id: number;
   username: string;
   fullName: string;
}