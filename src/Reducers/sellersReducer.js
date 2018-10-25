import {GET_SELLERS_SUCCESS} from "../Actions/names";

const reducer = (state = {list: []}, action)=>{
    if(action.type === GET_SELLERS_SUCCESS){
        return Object.assign({}, state, {list: action.payload});
    }
    return state;
};
export default reducer;