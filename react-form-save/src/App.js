import React from 'react';
import './App.css';
import UserLoan from './component/UserLoan';
import { Provider } from 'react-redux'
import userLoanStore from './redux/store/UserLoanStore'

function App() {
  return (
    <Provider store={userLoanStore}>
      <div className="App">
        <UserLoan />
      </div>
    </Provider>
  );
}

export default App;
