import * as types from "./actionTypes"
import axios from "axios";

const getProduce = () => (dispatch) => {
    dispatch({type:types.GET_PRODUCE_LOADING});
    axios.get(`https://acemefresh.herokuapp.com/Products`)
    .then((res) => {
        // console.log(res.data);
        dispatch({type:types.GET_PRODUCE_SUCCESS,payload:res.data})
    })
    .catch((err) => {
        console.log(err);
        dispatch({type:types.GET_PRODUCE_ERROR})
    })
}


export {getProduce}