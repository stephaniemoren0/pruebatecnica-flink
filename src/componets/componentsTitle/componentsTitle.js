import React from 'react'
import './componentsTitle.css';

const Title = ({text}) => {
    return(
        <div className="contenedor">
            <label >{text}</label>
        </div>
    )
};

export default Title;