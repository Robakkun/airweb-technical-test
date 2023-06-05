import React from "react";

import './cart-line.styles.css'

const CartLine = ({ label, price }) => {

    return (
        <div className="cart_line">
            <div className="cart_line_label">{label}</div>
            <div className="cart_line_price">{`${price} €`}</div>
        </div>
    )
}

export default CartLine;