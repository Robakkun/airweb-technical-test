import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';

import { Autocomplete, TextField, CircularProgress } from "@mui/material";

import { fetchInitialCategoriesList } from "../../actions/catalogue";
import ProductCard from "../../components/card";
import ProductCardMobile from "../../components/cardMobile";
import useCheckIfMobileDevice from "../../hooks/useCheckIfMobileDevice";

import './catalogue.styles.css';

const Catalogue = () => {
    const productsState = useSelector((state) => state.catalogueReducer.products);
    const dispatch = useDispatch();
    const initalStateLoaded = useRef(false);

    const isMobile = useCheckIfMobileDevice();

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        //If the state is empty and the products has not been loaded, we call the middleware action to retrieve the list
        if (_.isEmpty(productsState) && !initalStateLoaded.current) {
            dispatch(fetchInitialCategoriesList());
            initalStateLoaded.current = true;
        }
        //If the products has been stored in the store we modify the state of the component
        else if (!_.isEmpty(productsState)) {
            setProductsList(productsState);

        }
    }, [productsState])


    //Function that get products label to suggest the labels in the filter component
    const getProductsLabelList = () => {
        const productsLabel = _.map(productsState, product => {
            return product.label;
        })
        return productsLabel;
    }

    //Function that filter the displayed products according to filter component value.
    const handleFilterChange = (event) => {
        const filteredProducts = _.filter(productsState, product => product.label === event.target.innerText);

        if (_.isEmpty(event.target.innerText) && _.isEmpty(filteredProducts)) {
            setProductsList(productsState);
        }
        else {
            setProductsList(filteredProducts);
        }
    }

    //Function that create a list of cards for all products to display
    const getCardList = () => {
        return _.map(productsList, product => {
            return (
                <div key={product.id} data-testid="card" className="card">
                    {!isMobile && <ProductCard product={product} />}
                    {isMobile && <ProductCardMobile product={product} />}
                </div>
            )
        })
    };

    return (
        <>
            {_.isEmpty(productsList) && !initalStateLoaded.current &&
                <div>
                    <CircularProgress />
                </div>
            }
            {_.isEmpty(productsList) && initalStateLoaded.current &&
                <div className="container">
                    There is no product to display
                </div>
            }
            {!_.isEmpty(productsList) &&
                <div className="container">
                    <div data-testid="filter">
                        <Autocomplete
                            disablePortal
                            id="filter"
                            options={getProductsLabelList()}
                            sx={{ width: 400 }}
                            renderInput={(params) => <TextField {...params} label="Label" />}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div>
                        {getCardList()}
                    </div>
                </div>
            }
        </>
    )
}

export default Catalogue;