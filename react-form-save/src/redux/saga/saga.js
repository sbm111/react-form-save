import { takeLatest, put, call } from 'redux-saga/effects'
import {userError,userFetch, userSuccess} from '../user/UserActions'
import {fetchLoan,loanError,addLoanToStore} from '../loan/loanAction'
import {SAVE_CONTINUE_USER,SUBMIT_LOAN,STORE_LOAN} from './Constant'
import * as userapi from '../user/api'
import * as loanapi from '../loan/api'

function* storeUSer(action){
    try {
        yield put(userFetch());
        yield put(userSuccess(action.payload));
        
    } catch (error) {
        yield put(userError(error.message));
    }
}

function* submitLoan(action){
    try {
        yield put(fetchLoan());
        yield put(addLoanToStore(action.payload));
        const user = yield action.user;
        const loanForm = yield action.payload;
        const userresponse = yield call(userapi.saveUser,user);
        console.log(userresponse);
        const loan = yield {...loanForm,loanId :userresponse.data.id }
        const loanresponse = yield call(loanapi.saveLoan,loan);
        yield alert('Your loan is applied successfully.');
        
    } catch (error) {
        yield put(loanError(error.message));
    }
}

export function* rootSaga(){
    yield takeLatest(SAVE_CONTINUE_USER, storeUSer);
    yield takeLatest(SUBMIT_LOAN,submitLoan);
}