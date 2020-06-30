import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { validateInput } from '../../utility/validator';

const DropDown = ({ value, data, placeholder,label, onChange,Validators }) => {

    const [error, setError] = useState({ error: false });

    const selectHandler = (e) => {
        const value = e.target.value;
        setError(validateInput(Validators, value));
        onChange(value);
    }

    return (
        <div className='form-group'>
            {label && <label className="app-input-field">{label}</label>}
            <select className='form-control' value={value} onChange={selectHandler}>
                <option value="">{placeholder}</option>
                {
                    data.map((item, key) => (
                        <option key={key} value={item.value}>{item.label}</option>
                    ))
                }
            </select>
            {error && <span className="alert-danger">{error.message}</span>}
        </div>
    )
}

DropDown.propTypes = {
    value : PropTypes.string, 
    data : PropTypes.array.isRequired, 
    placeholder : PropTypes.string.isRequired, 
    label : PropTypes.string,
    Validators : PropTypes.array,
    onChange : PropTypes.func.isRequired
}

DropDown.defaultProps = {
    value : '',
    data : [],
    label : '',
    Validators : [],
    placeholder : 'Please Select'
}

export default DropDown
