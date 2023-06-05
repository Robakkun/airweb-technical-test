import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Badge from '@mui/material/Badge';
import CartIcon from '@mui/icons-material/ShoppingCart';
import { blue } from '@mui/material/colors';

import './shopping-cart-icon.styles.css';
import routes from '../../constants/routes';

//Component that use store to display cart icon and the number of items in cart in app's header
const ShoppingCartIcon = () => {
    const cartListState = useSelector((state) => state.cartReducer.cartList);
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (!_.isNil(cartListState)) {
            setCartCount(cartListState.length);
        }
    }, [cartListState])

    const navigateToCart = () => {
        navigate(routes.Cart);
    }

    return (
        <div className='badge'>
            <Badge color="secondary" badgeContent={cartCount} anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}>
                <CartIcon onClick={() => navigateToCart()} style={{ color: blue[500] }} />
            </Badge>
        </div>
    )
}

export default ShoppingCartIcon