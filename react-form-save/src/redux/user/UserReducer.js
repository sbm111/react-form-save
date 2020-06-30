import { USER_ERROR, USER_FETCH, USER_SUCCESS } from './Constant'

const initialUserState = {
    loading: false,
    user: {},
    error: '',
    isSaved :false
}

const UserReducer = (state = initialUserState, action) => {

    switch (action.type) {
        case USER_FETCH: return {
            ...state,
            loading: true
        }
        case USER_SUCCESS: return {
            ...state,
            loading : false,
            user : action.payload,
            error : '',
            isSaved : true
        }
        case USER_ERROR: return {
            ...state,
            loading : false,
            error : action.payload,
            user : []
        }
        default: return state
    }
}

export default UserReducer