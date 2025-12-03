import type {ICharacterModel} from "../../models/ICharacterModel.ts";
import type {ReactNode} from "react";
import './CharacterComponent.css'

type CharacterComponentProps = {
    item: ICharacterModel,
    children: ReactNode,
}
const CharacterComponent = ({item}: CharacterComponentProps) => {
    return (
        <div className="character-component">
            <h3>Name - {item.name} {item.surname}</h3>
            <p>Age - {item.age}</p>
            <p>{item.info}</p>
            <img src={item.photo} alt=""/>
        </div>
    );
};

export default CharacterComponent;