import type {FC} from "react";
import type IUserModelDummyJson from "../../modules/IUserModelDummyJson.ts";


interface PropType {
    user: IUserModelDummyJson
}

export const UserComponentDummyJson: FC<PropType> = ({user}) => {

    return (
        <>
            <div>
                <p>ID - {user.id}</p>
                <p>First Name - {user.firstName}</p>
                <p>Last Name - {user.lastName}</p>
                <p>Maiden Name - {user.maidenName}</p>
                <p>Age - {user.age}</p>
                <p>Gender - {user.gender}</p>
                <p>Email - {user.email}</p>
                <p>Phone - {user.phone}</p>
                <p>Username - {user.username}</p>
                <p>Password - {user.password}</p>
                <p>Birth Date - {user.birthDate}</p>
                <img src={user.image} alt="img"/>
                <p>Blood Group - {user.bloodGroup}</p>
                <p>Height - {user.height}</p>
                <p>Weight - {user.weight}</p>
                <p>Eye Color - {user.eyeColor}</p>
                <p>Hair:</p>
                    <ul>
                        <li>Color - {user.hair.color}</li>
                        <li>Type - {user.hair.type}</li>
                    </ul>
                <p>Ip - {user.ip}</p>
                <p>Address:</p>
                    <ul>
                        <li>Address - {user.address.address}</li>
                        <li>City - {user.address.city}</li>
                        <li>State - {user.address.state}</li>
                        <li>StateCode - {user.address.stateCode}</li>
                        <li>PostalCode - {user.address.postalCode}</li>
                        <li>Coordinates
                            <ul>
                                <li>Lat - {user.address.coordinates.lat}</li>
                                <li>Lng - {user.address.coordinates.lng}</li>
                            </ul>
                        </li>
                        <li>Country - {user.address.country}</li>
                    </ul>
                <p>Mac Address - {user.macAddress}</p>
                <p>University - {user.university}</p>
                <p>Bank:</p>
                <ul>
                    <li>Card Expire - {user.bank.cardExpire}</li>
                    <li>Card Number - {user.bank.cardNumber}</li>
                    <li>Card Type - {user.bank.cardType}</li>
                    <li>Currency - {user.bank.currency}</li>
                    <li>IBAN - {user.bank.iban}</li>
                </ul>
                <p>Company:</p>
                <ul>
                    <li>Department - {user.company.department}</li>
                    <li>Name - {user.company.name}</li>
                    <li>Title - {user.company.title}</li>
                    <li>Address:
                        <ul>
                            <li>Address - {user.company.address.address}</li>
                            <li>City - {user.company.address.city}</li>
                            <li>State - {user.company.address.state}</li>
                            <li>StateCode - {user.company.address.stateCode}</li>
                            <li>PostalCode - {user.company.address.postalCode}</li>
                            <li>Coordinates:
                                <ul>
                                    <li>Lat - {user.company.address.coordinates.lat}</li>
                                    <li>Lng - {user.company.address.coordinates.lng}</li>
                                </ul>
                            </li>
                            <li>Country - {user.address.country}</li>
                        </ul>
                    </li>
                </ul>
                <p>Ein - {user.ein}</p>
                <p>Ssn - {user.ssn}</p>
                <p>User agent - {user.userAgent}</p>
                <p>Crypto:</p>
                <ul>
                    <li>Coin - {user.crypto.coin}</li>
                    <li>Wallet - {user.crypto.wallet}</li>
                    <li>Network - {user.crypto.network}</li>
                </ul>
                <hr/>
            </div>
        </>
    );
};