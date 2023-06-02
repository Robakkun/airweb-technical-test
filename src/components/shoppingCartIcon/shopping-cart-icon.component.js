import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import CartIcon from '@mui/icons-material/ShoppingCart';
import { blue } from '@mui/material/colors';

import './shopping-cart-icon.styles.css';

const ShoppingCartIcon = () => {
    const cartListState = useSelector((state) => state.cartReducer.cartList);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        if (!_.isNil(cartListState)) {
            setCartCount(cartListState.length);
        }
    }, [cartListState])

    return (
        <div className='badge'>
            <Badge color="secondary" badgeContent={cartCount} anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}>
                <CartIcon style={{ color: blue[500] }} />
            </Badge>
        </div>
    )
}

export default ShoppingCartIcon