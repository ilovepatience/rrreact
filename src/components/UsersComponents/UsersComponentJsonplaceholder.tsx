import {useEffect, useState} from "react";
import {UserComponentJsonplaceholder} from "./UserComponentJsonplaceholder.tsx";

export const UsersComponentJsonplaceholder = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => setUser(json))
    }, [])
    
    return (
        <>
            {
                user.map((user, index ) => <UserComponentJsonplaceholder key={index} user={user}/>)
            }
        </>
    );
};