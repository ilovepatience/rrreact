import type {FC} from "react";
import type ICartModel from "../../modules/ICartModel.ts";

interface Props {
    cart: ICartModel;
}


export const CartComponent:FC<Props> = ({cart}) => {
    return (
        <>
        <div>

            <p>Cart id - {cart.id}</p>
            <p>Total - {cart.total}</p>
            <p>Cart of user - {cart.userId}</p>
            <p>Total products{cart.totalProducts}</p>
            <p>Total quantity{cart.totalQuantity}</p>
            <hr/>
        </div>
        </>
    );
};