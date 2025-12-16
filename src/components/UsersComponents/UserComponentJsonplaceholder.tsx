import type {FC} from "react";
import type {IUserModel} from "../../modules/IUserModel.ts";


interface PropType {
    user: IUserModel
}

export const UserComponentJsonplaceholder: FC<PropType> = ({user}) => {


    return (
        <>
            <div className="userComponent">
                <p>Id - {user.id}</p>
                <p>Name - {user.name}</p>
                <p>Username - {user.username}</p>
                <p>Email - {user.email}</p>
                <ul>Address:
                    <li>Street - {user.address.street}</li>
                    <li>Suite - {user.address.suite}</li>
                    <li>City - {user.address.city}</li>
                    <li>Zipcode - {user.address.zipcode}</li>
                </ul>
                    <ul>Geo:
                        <li>Lat - {user.address.geo.lat}</li>
                        <li>Lng - {user.address.geo.lng}</li>
                    </ul>
                <p>Phone - {user.phone}</p>
                <p>Website - {user.website}</p>
                <ul>Company:
                    <li>Name - {user.company.name}</li>
                    <li>CatchPhrase - {user.company.catchPhrase}</li>
                    <li>Bs - {user.company.bs}</li>
                </ul>
                <hr/>
            </div>


        </>
    );
};