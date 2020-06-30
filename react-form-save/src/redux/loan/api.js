import axios from 'axios'
import {SAVE_LOAN_API} from './Constant'


export const saveLoan = (loan) => {
    return axios.post(SAVE_LOAN_API,loan);
}