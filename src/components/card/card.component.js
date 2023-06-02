import * as React from 'react';
import { useDispatch } from 'react-redux';


import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Avatar, Button, Card, CardContent, Tooltip, Typography } from '@mui/material';


import { addProductToCart } from '../../actions/cart';

import './card.styles.css';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch((addProductToCart(product)));
    }

    return (
        <div className='card'>
            <Card data-testid='card'>
                <div className='content'>
                    <div className='avatar'>
                        <Avatar alt={product.label} src={product.thumbnail_url} sx={{
                            width: '60px', height: '60px'
                        }} />
                    </div>
                    <CardContent>
                        <Typography data-testid='title' gutterBottom variant="h6" component="div">
                            <strong>{product.label}</strong>
                        </Typography>
                        <Tooltip
                            title={
                                <>
                                    <Typography color="inherit">{product.category.label}</Typography>
                                    <div>{product.category.description}</div>
                                </>
                            }
                            placement="bottom"
                        >
                            <Typography data-testid='category' gutterBottom variant="body1">
                                {product.category.label}
                            </Typography>
                        </Tooltip>
                        <Typography data-testid='description' gutterBottom variant="body2">
                            {product.description}
                        </Typography>
                        <div className='cart-line'>
                            <div className='price'>
                                <Typography data-testid='price' variant="body1">
                                    {`${product.price} €`}
                                </Typography>
                            </div>
                            <Button data-testid='add-to-cart-button' key="addToCart" startIcon={<AddShoppingCartIcon />} onClick={handleAddToCart}>
                                Ajouter au panier
                            </Button>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

export default ProductCard;