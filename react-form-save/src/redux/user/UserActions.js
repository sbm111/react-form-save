import {USER_ERROR,USER_SUCCESS,USER_FETCH} from './Constant'

export const userFetch = () => {
    return {
        type : USER_FETCH
    }
}

export const userSuccess = (user) => {
    return {
        type : USER_SUCCESS,
        payload : user
    }
}

export const userError = (error) => {
    return {
        type : USER_ERROR,
        payload : error
    }
}