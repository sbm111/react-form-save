import {createStore,applyMiddleware} from 'redux'
import userLoanReducer from '../userLoanReducer'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import {rootSaga} from '../saga/saga'

const sagaMiddleware = createSagaMiddleware()
const userLoanStore = createStore(userLoanReducer,applyMiddleware(logger,sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default userLoanStore
