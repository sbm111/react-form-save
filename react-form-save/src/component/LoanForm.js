import React, { useState } from 'react'
import CheckBox from './reusableComponent/CheckBox';
import InputField from './reusableComponent/InputField';
import { Validators } from '../utility/validator';
import { useSelector, useDispatch } from 'react-redux';
import {SUBMIT_LOAN} from '../redux/saga/Constant'

function LoanForm() {

    const resetLoanForm = {
        loanAmount: '',
        accept: false,
        loanType: ''
    }

    const stateloan = useSelector(state => state.loan.loan);
    const stateuser = useSelector(state => state.user.user);
    const dispatch = useDispatch();
    const [loanForm, setLoanForm] = useState(resetLoanForm);

    const confirmHandler = (accept) => {
        setLoanForm({
            ...loanForm,
            accept
        });
    }

    const rdioHandler = (e) => {
        setLoanForm({
            ...loanForm,
            loanType: e.target.value
        });
    }

    const handleLoanChange = (val) => {
        setLoanForm({
            ...loanForm,
            loanAmount: val
        });
    }

    const loanSubmitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: SUBMIT_LOAN, payload: loanForm,user: stateuser});
    }

    return (
        <div className="container">
            <form onSubmit={loanSubmitHandler}>
                
                <InputField
                    label="Loan Amount"
                    type="text"
                    value={loanForm.loanAmount}
                    placeholder="Enter Loan Amount"
                    validators={[{ check: Validators.required, message: 'This field is required.' }
                        , { check: Validators.number, message: 'Enter valid number.' }]}
                    onChange={handleLoanChange}
                />

                <div className="form-group">
                    <label className="col-sm-2 control-label">Loan Type</label>
                    <div className="col-sm-5">
                        <div className="radio radio-danger">
                            <input type="radio" name="loanType" value="P" onChange={rdioHandler} />
                            <label>Personal</label>
                        </div>
                        <div className="radio radio-danger">
                            <input type="radio" name="loanType" value="O" onChange={rdioHandler} />
                            <label>Other</label>
                        </div>
                    </div>
                </div>

                <CheckBox selected={loanForm.accept} placeholder="I Accept" onChange={confirmHandler} />

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default LoanForm
