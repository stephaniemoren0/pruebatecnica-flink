import React from 'react'
import './componentsInput.css';

const Input = ({ attribute, handleChange, param}) => {
    return(
        <div className="contenedoInput">
            <input 
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={(e) => handleChange( e.target.name , e.target.value) }
            className='regular-style'
            />
        </div>
    )
};

export default Input;