import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = ({selected, placeholder, onChange}) => {

    const checkHandler = (e) => {
        const value = e.target.checked;
        onChange(value);
    }

    return (
        <div className="form-group">
            <input type="CheckBox" 
                defaultChecked={selected}
                onChange={checkHandler} />                
             {placeholder && <label >{placeholder}</label>}
        </div>
    )

};

CheckBox.propTypes = {
    selected: PropTypes.bool.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
};


export default CheckBox;