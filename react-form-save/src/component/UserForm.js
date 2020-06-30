import React, { useState } from 'react'
import InputField from './reusableComponent/InputField'
import { Validators } from '../utility/validator';
import DropDown from './reusableComponent/DropDown';
import { useSelector, useDispatch } from 'react-redux'
import {SAVE_CONTINUE_USER} from '../redux/saga/Constant'

function UserForm() {

    const initialFormData = { fname: '', email: '', country: '', comment: '' };
    const [userForm, setUserForm] = useState(initialFormData);
    const stateuser = useSelector(state => state.user.user);
    
    const dispatch = useDispatch();
    
    const handleChange = (val) => {
        setUserForm({
            ...userForm,
            fname: val
        });
    }

    const handleEmailChange = (val) => {
        setUserForm({
            ...userForm,
            email: val
        })
    }

    const handleComment = (val) => {
        setUserForm({
            ...userForm,
            comment: val
        })
    }

    const handleCountry = (val) => {
        setUserForm({
            ...userForm,
            country: val
        })
    }

    const submitUserForm = (e) => {
        e.preventDefault();
        dispatch({ type: SAVE_CONTINUE_USER,payload:userForm });
    }

    return (
        <div className="container">
            <h2>User Form</h2>
            <form onSubmit={submitUserForm} >
                <InputField
                    label="User Name"
                    type="text"
                    value={userForm.fname}
                    placeholder="Enter Name"
                    validators={[
                        { check: Validators.required, message: 'This field is required.' }
                    ]}
                    onChange={handleChange}
                />

                <InputField
                    label="Email"
                    type="email"
                    value={userForm.email}
                    placeholder="Enter Email"
                    validators={[
                        { check: Validators.required, message: 'This field is required.' },
                        { check: Validators.email, message: 'Email is invalid.' }
                    ]}
                    onChange={handleEmailChange}
                />

                <DropDown value={userForm.country}
                    label="Select Country"
                    placeholder="Please Select Country"
                    data={
                        [
                            { value: 'IN', label: 'India' },
                            { value: 'PK', label: 'Pakistan' }
                        ]
                    }
                    onChange={handleCountry}
                    Validators={[{ check: Validators.required, message: 'This field is required.' }]}
                />

                <InputField
                    label="Comment"
                    type="textarea"
                    value={userForm.comment}
                    placeholder="Enter Comment"
                    validators={[
                        { check: Validators.required, message: 'This field is required.' }
                    ]}
                    onChange={handleComment}
                />

                <button type="submit">Save And Continue</button>

            </form>
        </div>
    )
}

export default UserForm
