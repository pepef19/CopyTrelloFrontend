import React from 'react';
import './inputform.css';

export const InputForm = props => {

    return (
        <div>
            <input className="form-field" {...props}/>
            {props.error && <p className="input-error-message-email">{props.error}</p>}
        </div>
    )
};