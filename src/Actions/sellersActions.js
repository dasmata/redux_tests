import {MY_ACTION_NAME, GET_SELLERS_SUCCESS} from './names';

export const sellersActions = ()=>{
    return {type: MY_ACTION_NAME};
};
export const getSellersSuccess = (sellersList)=>{
    return {
        type: GET_SELLERS_SUCCESS,
        payload:sellersList
    };
};
