import {useEffect, useState} from "react";
import {usersFetchDummyJson} from "../../services/services.tsx";
import {UserComponentDummyJson} from "./UserComponentDummyJson.tsx";
import type IUserModelDummyJson from "../../modules/IUserModelDummyJson.ts";

export const UsersComponentDummyJson = () => {
    const [user, setUser] = useState<IUserModelDummyJson[]>([])

    useEffect(() => {
        usersFetchDummyJson().then(value => setUser(value))
    }, [])

    return (
        <>
            {
                user.map((user, index ) => <UserComponentDummyJson key={index} user={user}/>)
            }
        </>
    );
};