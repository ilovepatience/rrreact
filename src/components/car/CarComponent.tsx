import type {FC} from "react";
import type ICarModel from "../../module/carsModel/ICarModel.ts";

interface IProps {
    cars: ICarModel
}

export const CarComponent:FC<IProps> = ({cars}) => {


    return (
        <>

            <div>Car id - {cars.id}</div>
            <div>Car brand - {cars.brand}</div>
            <div>Car year - {cars.year}</div>
            <div>Car price - {cars.price}</div>
            <hr/>

        </>
    );
};