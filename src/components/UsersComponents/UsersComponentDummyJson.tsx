import {useEffect, useState} from "react";
import {usersFetchDummyJson} from "../../services/services.tsx";
import {UserComponentDummyJson} from "./UserComponentDummyJson.tsx";
import type IUserModelDummyJson from "../../modules/IUserModelDummyJson.ts";
import {Outlet} from "react-router-dom";

export const UsersComponentDummyJson = () => {
    const [user, setUser] = useState<IUserModelDummyJson[]>([])

    useEffect(() => {
        usersFetchDummyJson().then(value => setUser(value))
    }, [])

    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            {
                user.map((user) => <UserComponentDummyJson key={user.id} user={user}/>)


            }
        </div>

);
};
