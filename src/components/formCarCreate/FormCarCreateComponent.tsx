import {useForm} from "react-hook-form";
import type ICarModel from "../../module/carsModel/ICarModel.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validation/carValidator.ts";
import {addCar} from "../../services/api.services.ts";
export const FormCarCreate = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICarModel>(
        {
            mode: 'all',
            resolver: joiResolver(carValidator)
        }
    );

    const createHandler = (data: ICarModel) => {
        addCar(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(createHandler)}>
                <div>
                    <input type="text" {...register("brand")} placeholder="Car brand" />
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number" {...register("price")} placeholder="Car price" />
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number" {...register("year")} placeholder="Car year" />
                    <div>{errors.year?.message}</div>
                </div>
                <button>Save Car</button>
            </form>
        </>
    );
};