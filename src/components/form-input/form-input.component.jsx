import React from "react";

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return ( 
        /*
            Keep label and input together, 
            ...otherProps includes any other props, 
            label optional, apply class shrink if has value
            { otherProps.value.length ? 'shrink' : ''} is for autocomplete in browser
        */
        <div className='group'> 
            <input className='form-input' onChange={ handleChange } { ...otherProps }/>
            {
                label ? 
                    <label className={ `${ otherProps.value.length ? 'shrink' : ''} form-input-label` }>
                        { label }
                    </label>
                : 
                    null
            }
        </div> 
    );
}
 
export default FormInput;
