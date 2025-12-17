import {useEffect, useState} from "react";
import {UserComponentJsonplaceholder} from "./UserComponentJsonplaceholder.tsx";
import type {IUserModelPlaceholder} from "../../modules/IUserModelPlaceholder.ts";
import {usersFetchJsonPlaceholder} from "../../services/services.tsx";

export const UsersComponentJsonplaceholder = () => {
    const [user, setUser] = useState<IUserModelPlaceholder[]>([])

    useEffect(() => {
        usersFetchJsonPlaceholder().then(value => setUser(value))
    }, [])
    
    return (
        <>
            {
                user.map((user, index ) => <UserComponentJsonplaceholder key={index} user={user}/>)
            }
        </>
    );
};