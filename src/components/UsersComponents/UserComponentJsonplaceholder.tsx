import type {FC} from "react";
import type {IUserModelPlaceholder} from "../../modules/IUserModelPlaceholder.ts";


interface PropType {
    user: IUserModelPlaceholder
}

export const UserComponentJsonplaceholder: FC<PropType> = ({user}) => {


    return (
        <>
            <div className="userComponent">
                <p>Id - {user.id}</p>
                <p>Name - {user.name}</p>
                <p>Username - {user.username}</p>
                <p>Email - {user.email}</p>
                <p>Address:</p>
                <ul>
                    <li>Street - {user.address.street}</li>
                    <li>Suite - {user.address.suite}</li>
                    <li>City - {user.address.city}</li>
                    <li>Zipcode - {user.address.zipcode}</li>
                </ul>
                <p>Geo:</p>
                    <ul>
                        <li>Lat - {user.address.geo.lat}</li>
                        <li>Lng - {user.address.geo.lng}</li>
                    </ul>
                <p>Phone - {user.phone}</p>
                <p>Website - {user.website}</p>
                <p>Company:</p>
                <ul>
                    <li>Name - {user.company.name}</li>
                    <li>CatchPhrase - {user.company.catchPhrase}</li>
                    <li>Bs - {user.company.bs}</li>
                </ul>
                <hr/>
            </div>

        </>
    );
};