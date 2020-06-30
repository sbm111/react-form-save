import {LOAN_ERROR,LOAN_FETCH,LOAN_SUCCESS} from './Constant'

export const fetchLoan = () => {
    return {
        type : LOAN_FETCH
    }
}

export const loanError = (error) => {
    return {
        type : LOAN_ERROR,
        payload : error
    }
}

export const addLoanToStore = (loan) => {
    return{
        type : LOAN_SUCCESS,
        payload : loan
    }
}