import { FETCHING_USER_DATA, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "../constants"
import { apiRequestPromise } from "../utils/apiRequest";

function fetchingCreateUser(){
    return {
        type: FETCHING_USER_DATA
    }
}

export function fetchDataSuccess(data){    
    return {
        type: FETCH_USER_SUCCESS,
        data
    }
}

function fetchingDataError(){
    return {
        type: FETCH_USER_ERROR
    }
}

export const createUser = (data) => async dispatch => {
    await dispatch(fetchingCreateUser());
    const options = {
        method: 'POST',
        data,
    }
    console.log(options)
    try{
        const response = await apiRequestPromise('registration', options)
        console.log(response)
        dispatch(fetchDataSuccess(response.data))
        window.location="/"
    }
    catch(error){
        dispatch(fetchingDataError())
    }
}