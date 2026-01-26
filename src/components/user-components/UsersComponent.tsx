import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store/store.ts";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.userStoreSlice.users);
    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, [dispatch]);


    return (
        <>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </>
    );
};