import React from "react";
import {connect} from "react-redux";
import {sellersActions, getSellersSuccess} from "../Actions/sellersActions";
import sellersService from "../Services/SellersService";


const mapActionsToProps = (dispatch)=>{
    return {
        buttonPress: ()=>{
            dispatch(sellersActions());
            sellersService.getSellers().then((sellers)=>{
                dispatch(getSellersSuccess(sellers));
            }).catch((err)=>{
//                dispatch(sellersGetErrorAction(err));
            }).then(()=>{
                //finally
            })
        }
    };
};

const mapStateToProps = (state)=>{
    return {
        myState: state.myReducer,
        sellers: state.sellers
    };
};

export default connect(mapStateToProps, mapActionsToProps)((props)=>{
    return (<div>
        <button onClick={()=>{
            props.buttonPress();
        }}>Go Home {props.myState.test}</button>
        {props.sellers.list.length > 0 && <ul>
            {(()=>{return props.sellers.list.map((seller)=>{
                return (<li key={seller.id}>
                    <p>{seller.id}</p>
                    <div>{seller.name}</div>
                </li>);
            })})()}
        </ul>}
        {props.sellers.list.length === 0 && <div>No sellers found</div>}

    </div>)
});