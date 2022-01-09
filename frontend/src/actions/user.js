import { useNavigate } from "react-router-dom";
import { FETCHING_USER_DATA, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "../constants"
import { apiRequestFetch } from "../utils/apiRequest";

function fetchingCreateUser() {
    return {
        type: FETCHING_USER_DATA
    }
}

export function fetchDataSuccess(data) {
    return {
        type: FETCH_USER_SUCCESS,
        data
    }
}

function fetchingDataError() {
    return {
        type: FETCH_USER_ERROR
    }
}

export const getOrCreateUser = (data, url) => async dispatch => {
    let navigate = useNavigate()
    await dispatch(fetchingCreateUser());
    const options = {
        method: 'POST',
        data,
    }

    apiRequestFetch(
        url,
        options,
        (res) => { 
            dispatch(fetchDataSuccess(res.data))
            navigate('/')
        },
        (res) => dispatch(fetchingDataError())
    )
}