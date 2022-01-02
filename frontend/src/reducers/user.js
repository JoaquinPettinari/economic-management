import { FETCHING_USER_DATA, FETCH_USER_ERROR, FETCH_USER_SUCCESS } from '../constants'

const initialState = {
    data: {},
    fetching: false,
    error: false
}

function userReducer(state = initialState, action){    
    switch (action.type){
        case FETCHING_USER_DATA:
            return{
                ...state,
                loading: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        case FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state
    }
}

export default userReducer;