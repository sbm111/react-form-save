import React from 'react'
import UserForm from './UserForm'
import LoanForm from './LoanForm'
import { useSelector } from 'react-redux'

function UserLoan() {
    const userIsSaved = useSelector(state => state.user.isSaved);
    const stateloan = useSelector(state => state.loan.loan);
    const userLoading = useSelector(state => state.user.loading);
    const loanLoading = useSelector(state => state.loan.loading);
    return (
        <div>
            {
                (userLoading || loanLoading) && <div>Loanding.....</div>
            }
            {
                !userIsSaved ? <UserForm /> : <LoanForm />
            }
        </div>
    )
}

export default UserLoan
