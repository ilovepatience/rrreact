import axios from "axios";
import type ICarModel from "../module/carsModel/ICarModel.ts";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {"Content-Type": "application/json"},
});

export const getCars = async ():Promise<ICarModel[]> => {
    const axiosResponse = await axiosInstance.get<ICarModel[]>("/cars");
    const cars = axiosResponse.data;
    return cars;
}

export const addCar = async (car: ICarModel) => {
    await axiosInstance.post("/cars", car);
}