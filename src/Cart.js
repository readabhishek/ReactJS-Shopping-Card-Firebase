import React from 'react';
import CartItem from "./Cart-Item";

const Cart = (props) => {
    const {products} = props;
    return (
        products.map((item) => {
            return (
                <CartItem
                    product={item} key={item.id}
                    handleQtyIncrease={props.handleQtyIncrease}
                    handleQtyDecrease={props.handleQtyDecrease}
                    handleDeleteProd = {props.handleDeleteProd}
                />
            );
        })
    );
}

export default Cart;