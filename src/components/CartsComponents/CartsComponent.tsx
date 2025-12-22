import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type ICartModel from "../../modules/ICartModel.ts";
import {CartComponent} from "./CartComponent.tsx";

export const CartsComponent = () => {
    const {id} = useParams();
    console.log(id)

    const [carts, setCarts] = useState<ICartModel[]>([])
    useEffect(() => {
        fetch(`https://dummyjson.com/carts/user/`+ id)
            .then(res => res.json())
            .then(value => setCarts(value.carts))
    }, [id]);




    return (
        <>
            {
                carts.map(cart => <CartComponent cart={cart} key={cart.id} />)

            }
        </>
    );
};