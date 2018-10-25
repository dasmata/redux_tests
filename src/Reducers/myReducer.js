import {MY_ACTION_NAME} from "../Actions/names";

const reducerFunctions = {};


reducerFunctions[MY_ACTION_NAME] = function(state, action){
    return Object.assign({}, state, {test: ++state.test});
};


const myReducer = (state = {test: 0}, action)=>{

    if(reducerFunctions[action.type]){
        return reducerFunctions[action.type](state, action);
    }

    return state;
};

export default myReducer;