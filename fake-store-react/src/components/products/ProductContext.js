import React, { useContext, useState } from "react";
import axios from 'axios';
import constants from '../../constants';

const ProductContext = React.createContext();

export function useProduct() {
    return useContext(ProductContext);
}
export function ProductProvider(props) {

    const [selectedSortBy, setSelectedSortBy] = useState("asc");

    const [selectedCategory, setSelectedCategory] = useState("electronics");
    
    const [checkedState, setCheckedState] = useState(
        new Array(4).fill(false)
    );

    const [listView, setListView] = useState(true);


    const [products, setProducts] = useState([]);

    const fetchProducts = (path, params) => {
        axios.get(`${constants.baseUrl}${path}` , {
            params: {...params}
        })
        .then(response => {
            setProducts(response.data);
        })
    }

    return (
        <ProductContext.Provider value={{
                selectedSortBy, 
                setSelectedSortBy,
                selectedCategory, 
                setSelectedCategory,
                checkedState,
                setCheckedState,
                products,
                setProducts,
                fetchProducts,
                listView,
                setListView,
            }}>
            {props.children}
        </ProductContext.Provider>
    )
}