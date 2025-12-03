import {simpsons} from "../../../arrays-2.ts";
import CharacterComponent from "../characterComponent/CharacterComponent.tsx";
import './FamilyComponent.css'


const FamilyComponent = () => {
    return (
        <div className="family-component">
            {
                simpsons.map((value, index) => <CharacterComponent key={index} item={value}>
                    {value.info}
                </CharacterComponent>)
            }

        </div>
    );
};

export default FamilyComponent;