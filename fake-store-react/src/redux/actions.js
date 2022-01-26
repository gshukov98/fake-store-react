import actionTypes from "./action-types";
import axios from "axios";
import constants from "../constants";

export function setListView(value) {
    return {
        type: actionTypes.SET_LIST_VIEW,
        payload: value,
    }
}

export function setProducts(value) {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: value,
    }
}

export function getProducts(path, params) {
    return async (dispatch) => {
        try {
            axios.get(`${constants.baseUrl}${path}` , {
                params: {...params}
            })
            .then(response => {
                dispatch(setProducts(response.data));
            })
        } catch (error){
            console.log(error);
        }
    }
}