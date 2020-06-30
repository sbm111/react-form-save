import {combineReducers} from 'redux'
import UserReducer from './user/UserReducer'
import loanReducer from './loan/loanReducer'

const userLoanReducer = combineReducers({
    user : UserReducer,
    loan : loanReducer
})

export default userLoanReducer