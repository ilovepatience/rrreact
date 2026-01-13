import {useEffect, useState} from "react";
import type ICarModel from "../../module/carsModel/ICarModel.ts";
import {getCars} from "../../services/api.services.ts";
import {CarComponent} from "../car/CarComponent.tsx";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICarModel[]>([])
    useEffect(() => {
        getCars().then((cars) => {
            setCars(cars);
        });
    }, []);



    return (
        <>
            {cars.map((car) => (
                <div key={car.id}>
                    <CarComponent cars={car} />
                </div>
            ))}
        </>
    );
};