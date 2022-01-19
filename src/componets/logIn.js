import React from 'react'
import Components from './componets_login';
import background from '../vectors/background.png'

const Login = () =>{
    return(
        <div className="row ">
            <div className="col container-fluid ">
                <img  src={background} className="background align-bottom" />
            </div>
            <div className="col position-absolute animate__animated animate__fadeInDown">
                <Components></Components>
                
            </div>
        </div>
    )
};

export default Login;