import React from 'react'
import './componentsLabel.css';

const Label = ({text}) => {
    return(
        <div className="contenedorLabel">
            <label>{text}</label>
        </div>
    )
};

export default Label;