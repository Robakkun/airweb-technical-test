import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import './error404.styles.css'

const error404 = () => {
    const navigate = useNavigate();

    const returnToHome = () => {
        navigate('/');
    }

    return <>
        <div data-testid='error404-container' className='error404_container'>
            <div>Error 404 - Page not found</div>
            <Button data-testid='return-homepage-button' variant="outlined" onClick={() => returnToHome()}>Return to homepage</Button>
        </div>
    </>
}

export default error404;