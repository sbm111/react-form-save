import { LOAN_FETCH, LOAN_ERROR, LOAN_SUCCESS } from './Constant'

const loanInitialState = {
    loading: false,
    loan: {},
    error: ''
}

const loanReducer = (state = loanInitialState, action) => {

    switch (action.type) {
        case LOAN_FETCH: return {
            ...state,
            loading: true
        }
        case LOAN_ERROR: return {
            ...state,
            loading: false,
            loan: [],
            error: action.payload
        }
        case LOAN_SUCCESS: return {
            ...state,
            loading: false,
            loan: action.payload,
            error: ''
        }
        default: return state
    }

}

export default loanReducer