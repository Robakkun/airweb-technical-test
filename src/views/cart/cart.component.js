import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import _ from 'lodash';

import { Button, Divider } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CartIcon from '@mui/icons-material/ShoppingCart';
import { blue } from '@mui/material/colors';

import CartLine from "../../components/cartLine/cart-line.component";

import './cart.styles.css';
import routes from "../../constants/routes";

const Cart = () => {
    const cartState = useSelector((state) => state.cartReducer.cartList);
    const [productsInCartList, setProductsInCartList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!_.isEmpty(cartState)) {
            setProductsInCartList(cartState);
        }
    }, [cartState])

    //Function that create a list of lines for each products in cart to display them in the view
    const getCartList = () => {
        let uniqueKey = 0;
        return _.map(productsInCartList, product => {
            uniqueKey += 1;
            return (
                <div key={uniqueKey}>
                    <CartLine label={product.label} price={product.price} />
                </div>
            )
        })
    }

    const getTotal = () => {
        let totalPrice = 0;
        _.forEach(productsInCartList, product => {
            totalPrice += product.price;
        })

        return (
            <>
                <div className="cart_price">
                    <CartLine label="Total" price={totalPrice} />
                </div>
            </>
        )
    }

    const returnToCatalogue = () => {
        navigate(routes.Catalogue);
    }

    const navigateToPayment = () => {
        navigate(routes.Payment);
    }

    return (
        <div className="cart_container">
            <div className="cart_title">
                <ArrowBackIcon onClick={() => returnToCatalogue()} />
                <CartIcon style={{ color: blue[500] }} />
                Votre panier
            </div>
            <Divider />
            {_.isEmpty(productsInCartList) &&
                <div>
                    Il n'y a aucun produit dans votre panier
                </div>
            }
            {!_.isEmpty(productsInCartList) &&
                <>
                    <div>{getCartList()}</div>
                    <div>{getTotal()}</div>
                    <div className="cart_button">
                        <Button size="small" variant="contained" onClick={() => navigateToPayment()}>
                            Accéder au paiement
                        </Button>
                    </div>
                </>
            }
        </div>
    );
}

export default Cart;