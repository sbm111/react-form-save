import axios from 'axios'
import {SAVE_USER_API} from './Constant'

export const saveUser = (user) => {
    return axios.post(SAVE_USER_API,user);
}