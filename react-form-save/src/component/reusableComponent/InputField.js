import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { validateInput } from '../../utility/validator';

const InputField = ({ label, type, value, placeholder, validators, onChange }) => {

    const [error, setError] = useState({ error: false });

    const handleChange = (e) => {
        const value = e.target.value;
        /* console.log(`Value : ${value}`); */
        setError(validateInput(validators, value));
        onChange(value);
    }

    return (
        <div className="form-group">
            {label && <label className="app-input-field">{label}</label>}

            {type === 'textarea' ?
                <textarea
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
                :
                <input
                    className="form-control"
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                />}

            {/* {JSON.stringify(error)} */}
            {error && <span className="alert-danger">{error.message}</span>}
        </div>
    )
};

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    onChange: PropTypes.func.isRequired
}

InputField.defaultProps = {
    label: '',
    type: 'text',
    value: '',
    placeholder: '',
    validators: []
}

export default InputField
