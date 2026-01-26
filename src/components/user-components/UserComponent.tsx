import type {FC} from "react";
import type IUserModel from "../../models/IUserModel.ts";
type PropType = {
    user: IUserModel;
}
export const UserComponent:FC<PropType> = ({user}) => {
    return (

        <div>
            <div>User id - {user.id}</div>
            <div>User name - {user.name}</div>
            <div>User username - {user.username}</div>
            <div>User email - {user.email}</div>
            <hr/>
        </div>
    );
};