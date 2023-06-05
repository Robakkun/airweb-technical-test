import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button, Divider, TextField } from '@mui/material';

import routes from '../../constants/routes';
import { resetCart } from '../../actions/cart';

import './payment.styles.css';

const Payment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const simulationPayment = () => {
        alert('Votre commande a bien été prise en compte !');
        dispatch(resetCart());
        navigate(routes.Catalogue);
    }

    return <div className='payment_container'>
        <div className='payment_email'>
            <div>Email :</div>
            <TextField size='small' sx={{ width: '350px' }} />
        </div>
        <Divider />
        <div className='payment_card'>
            <div>Numéro de carte :</div>
            <TextField size='small' sx={{ width: '350px' }} />
            <div className='payment_card_info'>
                <div className='payment_card_validity'>
                    <div>Date de validité :</div>
                    <TextField size='small' />
                </div>
                <div className='payment_card_code'>
                    <div>CVC :</div>
                    <TextField size='small' sx={{ width: '60px' }} />
                </div>
            </div>
        </div>
        <div className='payment_button'>
            <Button size="small" variant="contained" onClick={() => simulationPayment()}>
                Procéder au paiement
            </Button>
        </div>
    </div>
};

export default Payment;