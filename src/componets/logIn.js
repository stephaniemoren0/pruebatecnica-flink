import React from 'react'
import Components from './componets_login';
import background from '../vectors/background.png'

const Login = () =>{
    return(
        <div className="row pato">
            <div className="col ">
                <div className=" bloque align-bottom background" >
                    <img  src={background} className="animate__animated animate__fadeIn img-fluid img-fluid featurette-image" /></div>
            </div>
            <div className="col position-absolute animate__animated animate__fadeInDown sesion">
                <Components></Components>
            </div>
        </div>
    )
};

export default Login;